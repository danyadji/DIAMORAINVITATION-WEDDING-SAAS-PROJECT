import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import AuthFeature from '../../features/auth';

export default function LoginPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-24 px-6 max-w-md">
        <AuthFeature />
        {/* Placeholder Login Form Form */}
        <h2 className="mt-8 text-center font-bold">Halaman Login</h2>
      </div>
    </MainLayout>
  );
}
