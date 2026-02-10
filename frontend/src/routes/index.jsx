import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '../layouts';
import { 
  LoginPage, 
  MagicLoginPage, 
  DashboardHome, 
  GuestListPage,
  EditInvitationPage,
  SendInvitationPage,
  RSVPManagementPage,
  PlaceholderPage 
} from '../pages';
import { ProtectedRoute, PublicRoute } from './guards';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } 
      />
      <Route path="/auth/magic-login" element={<MagicLoginPage />} />

      {/* Protected Dashboard Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <DashboardHome />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-invitation"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <EditInvitationPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/guests"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <GuestListPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/send-invitation"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <SendInvitationPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/rsvp"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <RSVPManagementPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/comments"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <PlaceholderPage title="Ucapan & Komentar" />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/guestbook"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <PlaceholderPage title="Buku Tamu" />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/scan"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <PlaceholderPage title="Scan Buku Tamu" />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/help"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <PlaceholderPage title="Bantuan" />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
