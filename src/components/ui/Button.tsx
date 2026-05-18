import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = [
    'inline-flex min-h-11 items-center justify-center rounded-sm border font-heading',
    'transition-all duration-300 ease-out touch-manipulation',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-is focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ].join(' ');
  
  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants: Record<ButtonVariant, string> = {
    primary: 'border-slate-is bg-slate-is text-sand-dune hover:bg-deep-teal hover:border-slate-is active:scale-[0.98]',
    secondary: 'border-accent bg-accent text-ink hover:bg-sand-light hover:border-slate-is active:scale-[0.98]',
    outline: 'border-slate-is bg-transparent text-slate-is hover:bg-slate-is hover:text-sand-dune active:scale-[0.98]',
    ghost: 'border-transparent bg-transparent text-ink hover:bg-sand-light hover:text-slate-is active:scale-[0.98]',
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : leftIcon ? (
        <span className="mr-2">{leftIcon}</span>
      ) : null}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
