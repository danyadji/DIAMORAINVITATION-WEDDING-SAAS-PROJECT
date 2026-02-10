import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Input, Alert } from '../components';
import { authService } from '../services';
import { useAuth, useAsync } from '../hooks';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [linkSent, setLinkSent] = useState(false);
  const { execute, loading, error } = useAsync(authService.requestMagicLink);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await execute(email);
      setLinkSent(true);
    } catch (err) {
      // Error handled by useAsync
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-4">
            <span className="text-white font-bold text-2xl">U</span>
          </div>
          <h1 className="text-2xl font-bold text-surface-900">Undangan Digital</h1>
          <p className="text-surface-500 mt-2">Masuk ke dashboard Anda</p>
        </div>

        <div className="card p-8">
          {linkSent ? (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-surface-900 mb-2">Cek Email Anda</h2>
              <p className="text-surface-600 mb-6">
                Kami telah mengirim link login ke <strong>{email}</strong>. Klik link tersebut untuk masuk.
              </p>
              <button
                onClick={() => setLinkSent(false)}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Gunakan email lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <Alert type="error" message={error} />}
              
              <Input
                label="Email"
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button type="submit" className="w-full" loading={loading}>
                Kirim Link Login
              </Button>

              <p className="text-center text-sm text-surface-500">
                Kami akan mengirim link login ke email Anda. Tidak perlu password.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
