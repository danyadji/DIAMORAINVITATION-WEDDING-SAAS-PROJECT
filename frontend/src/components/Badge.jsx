import React from 'react';

export function Badge({ children, variant = 'info', className = '' }) {
  const variants = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-amber-100 text-amber-800',
    info: 'bg-blue-100 text-blue-800',
    default: 'bg-surface-100 text-surface-700',
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
