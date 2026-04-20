import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import LandingPage from '../../features/landing-page'; // Existing landing page module

export default function HomePage() {
  return (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );
}
