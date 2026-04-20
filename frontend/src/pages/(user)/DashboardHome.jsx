import React from 'react';
import UserLayout from '../../layouts/UserLayout';
import UserDashboardFeature from '../../features/user-dashboard';

export default function DashboardHome() {
  return (
    <UserLayout>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Selamat Datang, User!</h1>
        <UserDashboardFeature />
      </div>
    </UserLayout>
  );
}
