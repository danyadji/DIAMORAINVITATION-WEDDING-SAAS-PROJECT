import React from 'react';

export default function Tabs({ value, onValueChange, children }) {
  return (
    <div className="flex gap-2 border-b border-surface-200">
      {children}
    </div>
  );
}
