import React, { useState, useEffect } from 'react';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { 
  Card, CardHeader, CardContent, CardFooter,
  Button, Badge, Alert
} from '../../components';

const CAPTION_PRESETS = [
  {
    id: 'formal_icon',
    name: '✨ Caption Penulisan Formal Dengan Icon',
    text: 'Dengan segala hormat dan kerendahan hati, kami mengundang Anda untuk merayakan hari istimewa kami.\n\nUntuk info selengkapnya dari acara, silahkan kunjungi link berikut ini:\n\n{{link_undangan}}'
  },
  {
    id: 'custom',
    name: '✏️ Custom Text By User',
    text: ''
  },
  {
    id: 'simple',
    name: 'Caption Simple',
    text: 'Halo {{nama_tamu}},\n\nKami dengan senang hati mengundang Anda ke pernikahan kami. Klik link di bawah untuk detail lengkapnya:\n\n{{link_undangan}}'
  },
  {
    id: 'islami',
    name: 'Caption Penulisan Islami',
    text: 'Assalamualaikum warahmatullahi wabarakatuh,\n\nDengan kebahagiaan, kami mengundang Anda untuk merayakan pernikahan kami. Silahkan kunjungi link ini untuk detail lebih lengkap:\n\n{{link_undangan}}'
  },
  {
    id: 'dari_orangtua',
    name: 'Caption dari Orang Tua Mempelai',
    text: 'Dengan doa dan harapan, kami mengundang Anda merayakan pernikahan {{nama_mempelai}}. Untuk info selengkapnya, klik link berikut:\n\n{{link_undangan}}'
  },
  {
    id: 'teman_sahabat1',
    name: 'Caption Penulisan Untuk Teman atau Sahabat',
    text: 'Heyy! Kami undang lo untuk datang ke pernikahan kami! Cek detail di sini:\n\n{{link_undangan}}'
  },
  {
    id: 'teman_sahabat2',
    name: 'Caption Penulisan Untuk Teman atau Sahabat 2',
    text: 'Yuk datang ke pernikahan kami! Lihat undangannya di sini ya:\n\n{{link_undangan}}'
  },
  {
    id: 'orang_penting',
    name: 'Caption Penulisan Untuk Orang Penting',
    text: 'Dengan hormat kami mengundang Anda untuk menghadiri acara pernikahan kami. Detail selengkapnya dapat dilihat di:\n\n{{link_undangan}}'
  }
];

export default function SendInvitationPage() {
  const { setTitle } = usePageTitle();
  const [copied, setCopied] = useState(false);
  const [selectedCaption, setSelectedCaption] = useState('formal_icon');
  const [editCaption, setEditCaption] = useState(CAPTION_PRESETS[0].text);
  const [saved, setSaved] = useState(false);
  
  const invitationLink = 'https://undangan.app/budi-ani-2026';
  const guestCount = 150;
  const sentCount = 105;
  const unsentCount = guestCount - sentCount;

  useEffect(() => {
    setTitle('Kirim Undangan');
  }, [setTitle]);

  const copyLink = () => {
    navigator.clipboard.writeText(invitationLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCaptionChange = (captionId) => {
    const selected = CAPTION_PRESETS.find(c => c.id === captionId);
    setSelectedCaption(captionId);
    setEditCaption(selected.text);
    setSaved(false);
  };

  const handleSaveCaption = () => {
    console.log('Caption saved:', editCaption);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleResetCaption = () => {
    const selected = CAPTION_PRESETS.find(c => c.id === selectedCaption);
    setEditCaption(selected.text);
  };

  const getPreviewText = () => {
    return editCaption
      .replace('{{nama_tamu}}', 'Budi Santoso')
      .replace('{{nama_mempelai}}', 'Anjas & Intan')
      .replace('{{link_undangan}}', invitationLink);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl px-3 sm:px-4 lg:px-0 space-y-5 sm:space-y-6 lg:space-y-8">
      {/* Preparation Checklist */}
      <Card>
        <CardHeader>
          <h2 className="text-xl sm:text-2xl font-bold">Persiapan Pengiriman Undangan</h2>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-surface-100">
            <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-white text-sm flex-shrink-0">
              ✓
            </div>
            <span className="text-sm sm:text-base text-surface-900">Edit Undangan Selesai</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-surface-100">
            <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-white text-sm flex-shrink-0">
              ✓
            </div>
            <span className="text-sm sm:text-base text-surface-900">Input Data Tamu ({guestCount} tamu)</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-white text-sm flex-shrink-0">
              ✓
            </div>
            <span className="text-sm sm:text-base text-surface-900">Siap untuk dikirim</span>
          </div>
        </CardContent>
      </Card>

      {/* Invitation Link */}
      <Card>
        <CardHeader>
          <h3 className="text-lg sm:text-xl font-bold">Link Undangan Digital</h3>
          <p className="text-xs sm:text-sm text-surface-600 mt-2">
            Bagikan link ini ke media sosial atau tamu dapat mengaksesnya langsung
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 bg-surface-50 p-2 sm:p-4 rounded-lg border border-surface-200">
            <code className="text-xs sm:text-sm font-mono text-surface-700 flex-1 break-all p-2 sm:p-0">
              {invitationLink}
            </code>
            <Button
              variant="outline"
              size="sm"
              onClick={copyLink}
              className="whitespace-nowrap w-full sm:w-auto"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Caption Selection & Customization */}
      <Card>
        <CardHeader>
          <h3 className="text-lg sm:text-xl font-bold">Pilih Caption Pesan WhatsApp</h3>
          <p className="text-xs sm:text-sm text-surface-600 mt-2">
            Pilih template atau buat caption custom sesuai keinginan Anda
          </p>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-5">
          {/* Caption Dropdown */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-surface-700">
              Pilih Template Caption
            </label>
            <select
              value={selectedCaption}
              onChange={(e) => handleCaptionChange(e.target.value)}
              className="input w-full"
            >
              {CAPTION_PRESETS.map(caption => (
                <option key={caption.id} value={caption.id}>
                  {caption.name}
                </option>
              ))}
            </select>
          </div>

          {/* Editing Tips */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-medium text-primary-900 mb-2">💡 Tips Penulisan:</p>
            <ul className="text-xs sm:text-sm text-primary-800 space-y-1">
              <li>• Gunakan <code className="bg-white px-1.5 py-0.5 rounded">{'{{link_undangan}}'}</code> untuk link</li>
              <li>• Gunakan <code className="bg-white px-1.5 py-0.5 rounded">{'{{nama_tamu}}'}</code> untuk nama tamu</li>
              <li>• Gunakan <code className="bg-white px-1.5 py-0.5 rounded">{'{{nama_mempelai}}'}</code> untuk nama mempelai</li>
              <li>• Gunakan <code className="bg-white px-1.5 py-0.5 rounded">{'*Bold*'}</code> untuk tebal, <code className="bg-white px-1.5 py-0.5 rounded">{'_Italic_'}</code> untuk miring</li>
            </ul>
          </div>

          {/* Caption Textarea */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-surface-700">
              Edit Caption
            </label>
            <textarea
              value={editCaption}
              onChange={(e) => setEditCaption(e.target.value)}
              rows="6"
              placeholder="Tulis caption Anda di sini..."
              className="input w-full resize-none text-xs sm:text-sm"
            />
          </div>

          {/* Preview Section */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-medium text-surface-900 mb-2">📱 Preview WhatsApp:</p>
            <p className="text-xs sm:text-sm text-surface-700 whitespace-pre-wrap leading-relaxed">
              {getPreviewText()}
            </p>
          </div>
        </CardContent>

        {/* Save & Reset Buttons */}
        <CardFooter className="flex-col sm:flex-row gap-2 sm:gap-3">
          <Button
            variant="primary"
            onClick={handleSaveCaption}
            className="w-full sm:w-auto"
          >
            {saved ? '✓ Tersimpan' : '💾 Simpan Caption'}
          </Button>
          <Button
            variant="outline"
            onClick={handleResetCaption}
            className="w-full sm:w-auto"
          >
            🔄 Reset ke Default
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="text-lg sm:text-xl font-bold">Pratinjau Pesan WhatsApp</h3>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 border-l-4 border-green-500 rounded p-3 sm:p-4 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm font-medium text-surface-900">Preview Pesan:</p>
            <p className="text-xs sm:text-sm text-surface-700 whitespace-pre-wrap leading-relaxed">
              {getPreviewText()}
            </p>
            <p className="text-xs text-surface-500 italic">
              * Pesan akan dikirim via WhatsApp ke nomor tamu yang terdaftar
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Send Options */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold">Pengiriman Undangan</h3>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant="info">
            <div className="font-medium">ℹ️ Informasi Penting</div>
            <div className="text-sm mt-1">
              Pastikan nomor WhatsApp tamu sudah benar sebelum mengirim undangan
            </div>
          </Alert>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-50 rounded-lg p-4 border border-surface-200">
              <p className="text-xs font-medium text-surface-600 mb-1">Belum Dikirim</p>
              <p className="text-2xl font-bold text-warning">{unsentCount}</p>
              <p className="text-xs text-surface-500 mt-1">tamu</p>
            </div>
            <div className="bg-surface-50 rounded-lg p-4 border border-surface-200">
              <p className="text-xs font-medium text-surface-600 mb-1">Sudah Dikirim</p>
              <p className="text-2xl font-bold text-success">{sentCount}</p>
              <p className="text-xs text-surface-500 mt-1">tamu</p>
            </div>
          </div>

          <div className="w-full bg-surface-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-success h-full transition-all duration-300"
              style={{ width: `${(sentCount / guestCount) * 100}%` }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="lg">
            Kirim ke {unsentCount} Tamu
          </Button>
          <Button variant="outline">Kirim ke Kategori Tertentu</Button>
        </CardFooter>
      </Card>
      </div>
    </div>
  );
}
