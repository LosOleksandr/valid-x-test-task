'use server';

import { prisma } from '@/lib/prisma';
import { createSession } from '@/lib/session';
import { compare, hash } from 'bcrypt';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const SignupFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }).trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().min(8, { message: 'Be at least 8 characters long' }).trim(),
});

const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().min(1, { message: 'Password is required' }).trim(),
});

export type SignupFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const signup = async (state: SignupFormState, formData: FormData) => {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await hash(password, 10);

  const user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    return {
      message: 'User already exists',
    };
  }

  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  if (!createdUser) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }

  await createSession(createdUser.id, createdUser.role);

  redirect('/');
};

export const login = async (state: LoginFormState, formData: FormData) => {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return {
      message: 'Invalid credentials',
    };
  }

  const passwordValid = await compare(password, user.password);

  console.log(password, user.password);

  if (!passwordValid) {
    return {
      message: 'Invalid credentials',
    };
  }

  await createSession(user.id, user.role);

  redirect('/');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const logout = async (_state: unknown, _formData: FormData) => {
  (await cookies()).delete('session');
};
