import React, { FC, InputHTMLAttributes } from 'react';

type InputProps = {
  label?: string;
  error?: string[];
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`rounded-lg border px-4 py-2 text-sm transition-all outline-none focus:ring-2 focus:ring-slate-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
