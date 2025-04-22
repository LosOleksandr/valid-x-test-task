'use client';

import { login } from '@/app/actions/auth';
import Link from 'next/link';
import { useActionState } from 'react';
import Button from '../shared/button';
import Input from '../shared/input';

const LoginForm = () => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form
      action={action}
      className="m-auto flex max-w-2xl flex-col gap-4 rounded-xl border-2 px-6 py-12 pt-8 shadow-2xl"
    >
      <h1 className="text-center text-3xl font-bold">Login to TechThreads</h1>
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
      <Button type="submit" isLoading={pending} className="mt-4 max-w-max self-center">
        Login
      </Button>
      <Link href={'/signup'} className="max-w-max self-center text-sm underline">
        Do not have an account? Create one
      </Link>
    </form>
  );
};

export default LoginForm;
