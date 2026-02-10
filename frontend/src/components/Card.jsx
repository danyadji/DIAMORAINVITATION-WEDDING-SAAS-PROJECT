import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-soft border border-surface-100 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`px-4 sm:px-6 py-3 sm:py-4 border-b border-surface-100 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`px-4 sm:px-6 py-3 sm:py-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`px-4 sm:px-6 py-3 sm:py-4 border-t border-surface-100 bg-surface-50 flex gap-2 sm:gap-3 justify-end flex-wrap ${className}`}>
      {children}
    </div>
  );
}
