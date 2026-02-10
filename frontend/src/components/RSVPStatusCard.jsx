import React from 'react';
import { Card, CardContent } from './Card';
import { Badge } from './Badge';

export function RSVPStatusCard({ label, count, status, icon: Icon, className = '' }) {
  const statusColors = {
    yes: 'text-success',
    no: 'text-error',
    maybe: 'text-warning',
    noanswer: 'text-info',
  };

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg bg-surface-100 flex items-center justify-center ${statusColors[status]}`}>
            {Icon && <Icon size={24} />}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-surface-600">{label}</p>
            <p className="text-3xl font-bold text-surface-900">{count}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
