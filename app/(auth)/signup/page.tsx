import { SignupForm } from '@/components/signup-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup to TechThreads',
};

const Signup = () => {
  return (
    <div className="w-full">
      <SignupForm />
    </div>
  );
};

export default Signup;
