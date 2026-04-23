import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks';
import { PageTitleProvider } from './contexts/PageTitleContext';

// Pages
import HomePage from './pages/(marketing)/HomePage';
import PricingPage from './pages/(marketing)/PricingPage';
import ThemesPage from './pages/(marketing)/ThemesPage';
import PortfolioPage from './pages/(marketing)/PortfolioPage';
import FaqPage from './pages/(marketing)/FaqPage';
import LoginPage from './pages/(auth)/LoginPage';
import RegisterPage from './pages/(auth)/RegisterPage';
import DashboardHome from './pages/(user)/DashboardHome';
import AdminOverview from './pages/(admin)/AdminOverview';
import ThemePreview from './pages/ThemePreview';
// Fallback existing template viewing
import JawaKlasikTemplate from './features/invitations/templates/jawa-klasik/jawa-klasik/JawaKlasikTemplate';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PageTitleProvider>
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

            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* User Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardHome />} />

            {/* Admin Dashboard Routes */}
            <Route path="/admin" element={<AdminOverview />} />

            {/* Theme Routes */}
            <Route path="/tema/:themeSlug" element={<ThemePreview />} />
            {/* Legacy theme route testing */}
            <Route path="/demo/jawa-klasik" element={<JawaKlasikTemplate />} />
          </Routes>
        </PageTitleProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
