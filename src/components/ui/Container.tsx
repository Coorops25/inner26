import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  size = 'lg',
  className = '' 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-none',
  };

  return (
    <div className={`is-shell ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
