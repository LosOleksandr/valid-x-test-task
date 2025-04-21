'use client';

import { signup } from '@/app/actions/auth';
import Link from 'next/link';
import { useActionState } from 'react';
import Button from './shared/button';
import Input from './shared/input';

export function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form
      action={action}
      className="m-auto flex max-w-2xl flex-col gap-4 rounded-xl border-2 px-6 py-12 pt-8 shadow-2xl"
    >
      <h1 className="text-center text-3xl font-bold">Signup to TechThreads</h1>
      <Input
        label="Name"
        name="name"
        id="name"
        placeholder="Enter your name"
        type="text"
        error={state?.errors?.name}
      />
      <Input
        label="Email"
        name="email"
        id="email"
        placeholder="Enter your email"
        type="email"
        error={state?.errors?.email}
      />
      <Input
        label="Password"
        name="password"
        id="password"
        placeholder="Enter your password"
        type="password"
        error={state?.errors?.password}
      />
      {state?.message && <small className="text-center text-red-500">{state.message}</small>}
      <Button type="submit" isLoading={pending} className="max-w-max self-center">
        Sign Up
      </Button>
      <Link href={'/login'} className="max-w-max self-center text-sm underline">
        Already have an account? Login
      </Link>
    </form>
  );
}
