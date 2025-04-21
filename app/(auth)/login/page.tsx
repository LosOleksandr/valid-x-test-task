import LoginForm from '@/components/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login to TechThreads',
};

const Login = () => {
  return (
    <div className="w-full">
      <LoginForm />
    </div>
  );
};

export default Login;
