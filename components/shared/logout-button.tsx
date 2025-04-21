'use client';

import { logout } from '@/app/actions/auth';
import { LogOut } from 'lucide-react';
import React, { useActionState } from 'react';
import Button from './button';

const LogoutButton = () => {
  const [, action] = useActionState(logout, undefined);

  return (
    <form action={action} className="ml-auto max-w-max">
      <Button type="submit" variant="outline" className="hover:text-red-500">
        <LogOut className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default LogoutButton;
