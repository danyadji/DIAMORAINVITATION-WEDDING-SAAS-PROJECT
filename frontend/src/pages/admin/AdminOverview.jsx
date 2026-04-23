import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import AdminDashboardFeature from '../../features/admin-dashboard';

export default function AdminOverview() {
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Admin Overview</h1>
        <AdminDashboardFeature />
      </div>
    </AdminLayout>
  );
}
