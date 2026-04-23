import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { 
  Card, CardHeader, CardContent, CardFooter,
  Badge, StatCard, ActionCard, Button
} from '../../components';

export default function DashboardHome() {
  const { user } = useAuth();
  const { setTitle } = usePageTitle();
  const navigate = useNavigate();
  const [invitationStatus, setInvitationStatus] = useState('draft');

  useEffect(() => {
    setTitle('Dashboard');
  }, [setTitle]);

  return (
    <div className="space-y-5 sm:space-y-6 lg:space-y-8">
      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-primary-50 to-accent-50 border-none">
        <CardHeader>
          <h1 className="text-2xl sm:text-3xl font-bold text-surface-900">
            Selamat Datang, {user?.name || 'User'}! 👋
          </h1>
          <p className="text-sm sm:text-base text-surface-600 mt-2">
            Kelola undangan digital pernikahan Anda dengan mudah dan intuitif.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Badge variant={invitationStatus === 'published' ? 'success' : 'warning'}>  
              {invitationStatus === 'draft' ? 'Draft - Belum Dipublikasi' : 'Published'}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/edit-invitation')}>
            Edit Undangan
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => alert('Preview feature coming soon')}>
            Lihat Preview
          </Button>
        </CardFooter>
      </Card>

      {/* Action Cards Section */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-surface-900 mb-3 sm:mb-4">Langkah Selanjutnya</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <ActionCard
            title="Edit Undangan"
            description="Atur teks, tanggal, dan lokasi acara Anda"
            icon="edit"
            onClick={() => navigate('/edit-invitation')}
          />
          <ActionCard
            title="Input Data Tamu"
            description="Tambahkan daftar tamu yang akan diundang"
            icon="users"
            onClick={() => navigate('/guests')}
          />
          <ActionCard
            title="Kirim Undangan"
            description="Bagikan undangan ke tamu via WhatsApp"
            icon="send"
            onClick={() => navigate('/send-invitation')}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-surface-900 mb-3 sm:mb-4">Statistik Undangan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          <StatCard label="Total Tamu" value="150" />
          <StatCard label="RSVP Yes" value="92" change="+5" />
          <StatCard label="RSVP No" value="28" change="-2" />
          <StatCard label="Sudah Hadir" value="78" change="+12" />
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-surface-900">Aktivitas Terbaru</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-surface-100">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <span className="text-success">✓</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-surface-900">2 tamu baru ditambahkan</p>
                <p className="text-xs text-surface-500">Hari ini, 14:30</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4 border-b border-surface-100">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                <span className="text-primary-600">💬</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-surface-900">5 ucapan masuk</p>
                <p className="text-xs text-surface-500">Kemarin, 10:15</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center">
                <span className="text-accent-600">✉️</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-surface-900">Undangan terkirim ke 92 tamu</p>
                <p className="text-xs text-surface-500">3 hari lalu</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
