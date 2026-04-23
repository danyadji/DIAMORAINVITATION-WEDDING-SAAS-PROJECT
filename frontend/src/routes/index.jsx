import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  LoginPage, 
  RegisterPage,
  MagicLoginPage
} from '../pages';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardHome from '../pages/user/DashboardHome';
import GuestListPage from '../pages/user/GuestListPage';
import EditInvitationPage from '../pages/user/EditInvitationPage';
import SendInvitationPage from '../pages/user/SendInvitationPage';
import RSVPManagementPage from '../pages/user/RSVPManagementPage';
import PlaceholderPage from '../pages/user/PlaceholderPage';
import { ProtectedRoute, PublicRoute } from './guards';
import { JawaKlasikTemplate } from '../features/invitations';
import HomePage from '../pages/marketing/HomePage';
import PricingPage from '../pages/marketing/PricingPage';
import ThemesPage from '../pages/marketing/ThemesPage';
import PortfolioPage from '../pages/marketing/PortfolioPage';
import FaqPage from '../pages/marketing/FaqPage';
import AdminOverview from '../pages/admin/AdminOverview';
import ThemePreview from '../pages/ThemePreview';


export default function AppRoutes() {
  return (
    <Routes>
      {/* Marketing Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/themes" element={<ThemesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/portfolio/motion-3d" element={<PortfolioPage category="motion-3d" />} />
      <Route path="/portfolio/custom-ilustrasi" element={<PortfolioPage category="custom-ilustrasi" />} />
      <Route path="/portfolio/undangan-web" element={<PortfolioPage category="undangan-web" />} />
      <Route path="/faq" element={<FaqPage />} />

      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } 
      />
      <Route 
        path="/register" 
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } 
      />
      <Route path="/auth/magic-login" element={<MagicLoginPage />} />

      {/* Public Invitation Template */}
      <Route path="/invitation/:slug" element={<JawaKlasikTemplate />} />

      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard"
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

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminOverview />
          </ProtectedRoute>
        }
      />

      {/* Theme Routes */}
      <Route path="/tema/:themeSlug" element={<ThemePreview />} />
      <Route path="/demo/jawa-klasik" element={<JawaKlasikTemplate />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
