import { useEffect } from 'react';
import { usePageTitle } from '../../../contexts/PageTitleContext';

export default function PlaceholderPage({ title }) {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    if (title) {
      setTitle(title);
    }
  }, [title, setTitle]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-surface-900">{title}</h1>
        <p className="text-surface-500">Halaman ini masih dalam pengembangan</p>
      </div>

      <div className="card p-12 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-surface-700 mb-2">Segera Hadir</h2>
        <p className="text-surface-500">
          Fitur ini sedang dalam pengembangan dan akan segera tersedia.
        </p>
      </div>
    </div>
  );
}
