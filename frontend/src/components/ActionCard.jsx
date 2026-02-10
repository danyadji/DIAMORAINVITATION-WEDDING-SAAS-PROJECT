import React from 'react';
import { Card, CardContent } from './Card';
import { Button } from './Button';

export function ActionCard({ title, description, icon, href, onClick, className = '' }) {
  const icons = {
    edit: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    users: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    send: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <Card className={className}>
      <CardContent className="p-4 sm:p-6">
        <div className="text-primary-500 mb-3 sm:mb-4">
          {icons[icon]}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-surface-900 mb-1 sm:mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-surface-600 mb-3 sm:mb-4">{description}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleClick}
          className="w-full"
        >
          Mulai →
        </Button>
      </CardContent>
    </Card>
  );
}
