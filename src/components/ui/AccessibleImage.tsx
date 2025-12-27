'use client';

import Image, { ImageProps } from 'next/image';

interface AccessibleImageProps extends Omit<ImageProps, 'alt'> {
  /**
   * Alternative text for the image. Required for accessibility.
   * - For decorative images, pass an empty string ""
   * - For informative images, provide descriptive text
   */
  alt: string;
  
  /**
   * Whether the image is decorative (purely visual, no informational content)
   * If true, the image will be hidden from screen readers
   */
  isDecorative?: boolean;
  
  /**
   * Optional caption to display below the image
   */
  caption?: string;
  
  /**
   * Whether to wrap the image in a figure element with optional figcaption
   */
  withFigure?: boolean;
}

/**
 * Accessible image component that enforces proper alt text and ARIA attributes.
 * 
 * Usage:
 * - For informative images: <AccessibleImage src="..." alt="Description of the image" />
 * - For decorative images: <AccessibleImage src="..." alt="" isDecorative />
 * - With caption: <AccessibleImage src="..." alt="..." caption="Photo credit: ..." withFigure />
 */
export function AccessibleImage({
  alt,
  isDecorative = false,
  caption,
  withFigure = false,
  className = '',
  ...props
}: AccessibleImageProps) {
  // Validate alt text
  if (!isDecorative && !alt) {
    console.warn('AccessibleImage: Non-decorative images must have alt text');
  }
  
  const imageElement = (
    <Image
      {...props}
      alt={isDecorative ? '' : alt}
      className={className}
      aria-hidden={isDecorative ? 'true' : undefined}
      // Ensure images don't have focus unless wrapped in link
      tabIndex={-1}
    />
  );
  
  if (withFigure) {
    return (
      <figure className="relative">
        {imageElement}
        {caption && (
          <figcaption className="mt-2 text-sm text-[#64748B] text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }
  
  return imageElement;
}

/**
 * Image placeholder component for CMS-managed images
 * Displays an accessible placeholder with proper ARIA attributes
 */
interface ImagePlaceholderProps {
  /** Description of what the image will contain */
  description: string;
  /** Width of the placeholder */
  width?: number | string;
  /** Height of the placeholder */
  height?: number | string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show the description visually */
  showDescription?: boolean;
}

export function ImagePlaceholder({
  description,
  width = '100%',
  height = 200,
  className = '',
  showDescription = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center bg-[#F1F5F9] rounded-lg ${className}`}
      style={{ width, height: typeof height === 'number' ? `${height}px` : height }}
      role="img"
      aria-label={`Image placeholder: ${description}`}
    >
      {/* Decorative icon */}
      <svg 
        className="w-12 h-12 text-[#94A3B8]" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
      
      {showDescription && (
        <span className="absolute bottom-2 left-2 right-2 text-xs text-[#64748B] text-center bg-white/80 rounded px-2 py-1">
          {description}
        </span>
      )}
      
      {/* Screen reader text */}
      <span className="sr-only">
        {description} - This image will be managed via the content management system
      </span>
    </div>
  );
}

