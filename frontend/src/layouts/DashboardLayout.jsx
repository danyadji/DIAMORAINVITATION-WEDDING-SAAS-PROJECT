import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../contexts/PageTitleContext';
import Sidebar from '../features/user-dashboard/components/Sidebar';
// import { useAuth } from '../hooks'; // TEMP: Commented for testing UI

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { title } = usePageTitle();
  // TEMP: Comment useAuth untuk testing UI
  // const { user, logout } = useAuth();
  const user = { name: 'User' }; // TEMP: Dummy user
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Logout logic commented for testing
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-surface-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-surface-100">
          <div className="flex items-center justify-between px-3 lg:px-8 py-3 lg:py-4">
            {/* Mobile Menu & Title */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg text-surface-600 hover:bg-surface-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="font-semibold text-surface-900 text-lg">{title}</h2>
            </div>

            {/* Search (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-md">
              <div className="relative w-full">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Cari..."
                  className="w-full pl-10 pr-4 py-2 bg-surface-50 border-0 rounded-lg text-sm focus:ring-2 focus:ring-primary-500/20 focus:bg-white"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Notifications */}
              <button className="p-2 rounded-lg text-surface-600 hover:bg-surface-100 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-3 sm:p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
