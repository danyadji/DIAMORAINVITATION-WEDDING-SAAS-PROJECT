import React from 'react';

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:block">
        <div className="p-6 font-bold text-[#BC914D]">Sidebar User</div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6">
          <span className="font-medium">User Dashboard</span>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
