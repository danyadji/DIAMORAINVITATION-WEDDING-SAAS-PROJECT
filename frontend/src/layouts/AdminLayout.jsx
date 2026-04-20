import React from 'react';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <aside className="w-64 bg-slate-900 text-white hidden md:block">
        <div className="p-6 font-bold">Admin Sidebar</div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow-sm flex items-center px-6">
          <span className="font-medium">Admin Dashboard</span>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
