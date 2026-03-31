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
  const baseStyles = 'inline-flex items-center justify-center font-heading transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return { background: '#4D6A6D', color: '#EAE0CC' };
      case 'secondary':
        return { background: '#C9ADA1', color: '#1A1A18' };
      case 'outline':
        return { background: 'transparent', color: '#4D6A6D', border: '1px solid #4D6A6D' };
      case 'ghost':
        return { background: 'transparent', color: '#252520' };
      default:
        return { background: '#4D6A6D', color: '#EAE0CC' };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${className}`}
      style={variantStyles}
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
