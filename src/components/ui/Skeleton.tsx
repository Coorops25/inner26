import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'rectangular',
  width,
  height 
}) => {
  const baseStyles = 'animate-pulse';
  
  const variantStyles = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-sm',
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{
        width: width || '100%',
        height: height || '1rem',
        backgroundColor: 'rgba(160, 160, 131, 0.2)',
      }}
    />
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="space-y-4">
    <Skeleton height={200} />
    <Skeleton height={24} width="60%" />
    <Skeleton height={16} />
    <Skeleton height={16} width="80%" />
  </div>
);

export const ImageSkeleton: React.FC = () => (
  <Skeleton variant="rectangular" className="w-full aspect-video" />
);

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        height={16} 
        width={i === lines - 1 ? '60%' : '100%'} 
      />
    ))}
  </div>
);

export default Skeleton;
