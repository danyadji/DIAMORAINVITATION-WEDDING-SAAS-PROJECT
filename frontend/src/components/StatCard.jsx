import React from 'react';
import { Card, CardContent } from './Card';

export function StatCard({ label, value, change = null, icon = null, className = '' }) {
  const isPositive = change && parseInt(change) >= 0;

  return (
    <Card className={className}>
      <CardContent className="p-3 sm:p-4 lg:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-surface-600 mb-1">{label}</p>
            <p className="text-2xl sm:text-3xl font-bold text-surface-900">{value}</p>
            {change && (
              <p className={`text-xs font-medium mt-1 sm:mt-2 ${isPositive ? 'text-success' : 'text-error'}`}>
                {isPositive ? '+' : ''}{change}
              </p>
            )}
          </div>
          {icon && (
            <div className="text-primary-500 flex-shrink-0">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
