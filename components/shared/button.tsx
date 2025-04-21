import React, { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  const variants = {
    primary: 'bg-slate-600 px-10 py-3 text-white hover:bg-slate-600/80',
    secondary: 'bg-gray-600 px-10 py-3 text-white hover:bg-gray-700',
    outline: 'border border-gray-400 p-2 text-gray-800 hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
