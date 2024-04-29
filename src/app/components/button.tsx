'use client';

import React from 'react';

interface ReusableBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-highlight';
  children: React.ReactNode;
}

const Button: React.FC<ReusableBtnProps> = ({ className = '', ...props }) => {
  const { variant = 'primary', size = 'md', disabled } = props;
  const baseClasses = `${
    !disabled
      ? variant === 'primary'
        ? `bg-brand-300 hover:bg-brand-800`
        : `bg-brand-dark-200  hover:bg-brand-dark-300`
      : `bg-brand-dark-600`
  } 
  border-brand-dark-300

  hover:border-brand-500
  transition-colors ${
    size === 'md'
      ? 'font-bold text-xl h-16 px-8 w-60'
      : 'text-sm text-white h-8 px-4 w-26'
  } rounded-md ${
    variant === 'outline' || variant === 'outline-highlight' ? 'border-2' : ''
  } focus:outline-none focus:shadow-outline cursor-pointer relative  overflow-hidden  group flex justify-center items-center`;

  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      <span
        className="TTFirsFont font-normal flex flex-row justify-center items-center
         group-hover:translate-x-32 transition-transform duration-300 ease-in-out
         text-brand-dark-500
      "
      >
        {props.children}
      </span>
      <span
        className="TTFirsFont text-brand-500 font-normal flex flex-row justify-center items-center
          translate-x-[-150%]
         group-hover:translate-x-0 transition-transform duration-300 ease-in-out
         absolute
      "
      >
        {props.children}
      </span>
    </button>
  );
};

export default Button;
