import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PageLoader, Alert } from '../../components';
import { authService } from '../../services';
import { useAuth } from '../../hooks';

export default function MagicLoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setError('Token tidak valid');
      return;
    }

    verifyToken(token);
  }, [searchParams]);

  const verifyToken = async (token) => {
    try {
      const response = await authService.verifyMagicLink(token);
      login(response.token, response.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Link sudah kadaluarsa atau tidak valid');
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-50 p-4">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-surface-900 mb-2">Login Gagal</h2>
          <p className="text-surface-600 mb-6">{error}</p>
          <a href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
            Kembali ke halaman login
          </a>
        </div>
      </div>
    );
  }

  return <PageLoader />;
}
