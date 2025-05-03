// src/components/ui/Button.jsx
import React from 'react';

const variants = {
  primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  outline: 'bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  success: 'bg-green-600 hover:bg-green-700 text-white',
};

const sizes = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-4',
  lg: 'py-3 px-6 text-lg',
};

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        rounded-lg font-medium transition duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
        flex items-center justify-center
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;