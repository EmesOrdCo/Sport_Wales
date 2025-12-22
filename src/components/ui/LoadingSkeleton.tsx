'use client';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  lines = 1,
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]';
  
  const variantClasses = {
    text: 'rounded-md h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  };

  const style: React.CSSProperties = {
    width: width ?? '100%',
    height: height ?? (variant === 'text' ? '1rem' : variant === 'circular' ? width : '1rem'),
  };

  if (lines > 1 && variant === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{
              ...style,
              width: i === lines - 1 ? '75%' : '100%', // Last line is shorter
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-md ${className}`}>
      {/* Image placeholder */}
      <Skeleton variant="rectangular" height={200} />
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category and date */}
        <div className="flex items-center gap-3">
          <Skeleton variant="text" width={80} height={24} />
          <Skeleton variant="text" width={100} height={16} />
        </div>
        
        {/* Title */}
        <Skeleton variant="text" lines={2} height={24} />
        
        {/* Excerpt */}
        <Skeleton variant="text" lines={2} />
        
        {/* CTA */}
        <Skeleton variant="text" width={100} height={16} />
      </div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-200 to-gray-300 py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            <Skeleton variant="text" width={200} height={24} />
            <Skeleton variant="text" width="100%" height={48} />
            <Skeleton variant="text" width="80%" height={48} />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container max-w-3xl py-12">
        <div className="space-y-6">
          <Skeleton variant="text" lines={3} height={20} />
          <Skeleton variant="text" width={200} height={32} />
          <Skeleton variant="text" lines={4} height={18} />
          <Skeleton variant="text" width={180} height={32} />
          <Skeleton variant="text" lines={3} height={18} />
        </div>
      </div>
    </div>
  );
}

export function NewsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl space-y-6">
          <Skeleton variant="text" width={200} height={32} className="opacity-30" />
          <Skeleton variant="text" width="100%" height={64} className="opacity-30" />
          <Skeleton variant="text" width="80%" height={64} className="opacity-30" />
          <Skeleton variant="text" width="60%" height={24} className="opacity-30" />
          <div className="flex gap-4 pt-4">
            <Skeleton variant="rectangular" width={160} height={48} className="rounded-full opacity-30" />
            <Skeleton variant="rectangular" width={120} height={48} className="rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FundingCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 md:p-8">
      <div className="space-y-4">
        <Skeleton variant="circular" width={48} height={48} className="opacity-30" />
        <Skeleton variant="text" width="70%" height={28} className="opacity-30" />
        <Skeleton variant="text" lines={2} className="opacity-20" />
        <div className="flex justify-between items-center pt-4">
          <Skeleton variant="text" width={120} height={32} className="opacity-30" />
          <Skeleton variant="text" width={100} height={20} className="opacity-20" />
        </div>
      </div>
    </div>
  );
}

