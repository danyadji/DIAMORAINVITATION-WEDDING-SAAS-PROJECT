import React from 'react';
import BlankLayout from '../layouts/BlankLayout';

export default function ThemePreview() {
  return (
    <BlankLayout>
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">
        <h1 className="text-3xl font-bold">Theme Preview Rendering...</h1>
        {/* Placeholder for dynamic theme components */}
      </div>
    </BlankLayout>
  );
}
