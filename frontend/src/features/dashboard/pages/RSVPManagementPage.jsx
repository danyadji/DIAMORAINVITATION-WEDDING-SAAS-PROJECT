import React, { useState, useMemo, useEffect } from 'react';
import { 
  Card, CardHeader, CardContent, CardFooter,
  Badge, Button, Tabs
} from '../../../components';
import { usePageTitle } from '../../../contexts/PageTitleContext';

const RSVP_RESPONSES = [
  { id: 1, guestName: 'Budi Janto', phone: '0812-3456-7890', status: 'yes', numberOfPeople: 2, rsvpDate: '2024-06-15 10:30', notes: 'Membawa istri' },
  { id: 2, guestName: 'Ani Putri', phone: '0813-2345-6789', status: 'yes', numberOfPeople: 1, rsvpDate: '2024-06-14 14:15', notes: '-' },
  { id: 3, guestName: 'Riri Setya', phone: '0814-1234-5678', status: 'no', numberOfPeople: 0, rsvpDate: '2024-06-13 09:00', notes: 'Ada urusan mendadak' },
  { id: 4, guestName: 'Ahmad Dahlan', phone: '0815-9876-5432', status: 'noanswer', numberOfPeople: null, rsvpDate: null, notes: 'Belum Jawab' },
  { id: 5, guestName: 'Sindi Pradika', phone: '0816-5678-1234', status: 'yes', numberOfPeople: 3, rsvpDate: '2024-06-12 16:45', notes: 'Ada alergi makanan' },
];

const getRSVPStats = () => {
  const yes = RSVP_RESPONSES.filter(r => r.status === 'yes').length;
  const no = RSVP_RESPONSES.filter(r => r.status === 'no').length;
  const noanswer = RSVP_RESPONSES.filter(r => r.status === 'noanswer').length;
  const total = RSVP_RESPONSES.length;
  return { yes, no, noanswer, total };
};

export default function RSVPManagementPage() {
  const { setTitle } = usePageTitle();
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [showActionMenu, setShowActionMenu] = useState(null);
  const RSVP_DATA = getRSVPStats();

  useEffect(() => {
    setTitle('Kelola RSVP');
  }, [setTitle]);

  const statusMap = {
    yes: { label: 'Akan Hadir', variant: 'success' },
    no: { label: 'Tidak Hadir', variant: 'error' },
    noanswer: { label: 'Belum Jawab', variant: 'info' },
  };

  // Filter data berdasarkan tab dan search term
  const filteredData = useMemo(() => {
    let data = activeTab === 'all' ? RSVP_RESPONSES : RSVP_RESPONSES.filter(r => r.status === activeTab);
    if (searchTerm.trim()) {
      data = data.filter(r => 
        r.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.phone.includes(searchTerm)
      );
    }
    return data;
  }, [activeTab, searchTerm]);

  // Sort data
  const sortedData = useMemo(() => {
    const data = [...filteredData];
    switch (sortBy) {
      case 'latest':
        return data.sort((a, b) => {
          if (!a.rsvpDate) return 1;
          if (!b.rsvpDate) return -1;
          return new Date(b.rsvpDate) - new Date(a.rsvpDate);
        });
      case 'oldest':
        return data.sort((a, b) => {
          if (!a.rsvpDate) return 1;
          if (!b.rsvpDate) return -1;
          return new Date(a.rsvpDate) - new Date(b.rsvpDate);
        });
      case 'name':
        return data.sort((a, b) => a.guestName.localeCompare(b.guestName));
      default:
        return data;
    }
  }, [filteredData, sortBy]);

  // Export functions


  const handleExportCSV = () => {
    const headers = ['No', 'Nama', 'Telepon', 'Status', 'Jumlah Orang', 'Tgl RSVP', 'Keterangan'];
    const rows = sortedData.map((guest, idx) => [
      idx + 1,
      guest.guestName,
      guest.phone,
      statusMap[guest.status].label,
      guest.numberOfPeople || '-',
      guest.rsvpDate || '-',
      guest.notes,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
    element.setAttribute('download', `rsvp-responses-${new Date().toISOString().split('T')[0]}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleViewDetail = (guest) => {
    setSelectedGuest(guest);
    setShowDetailModal(true);
  };

  const handleDeleteGuest = (guestId) => {
    console.log('Delete guest:', guestId);
    alert('Tamu berhasil dihapus');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="hidden md:block">
        <h1 className="text-3xl font-bold text-surface-900">Kelola RSVP</h1>
        <p className="text-surface-600 mt-2">
          Total {RSVP_DATA.total} respons dari {RSVP_DATA.total} tamu
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <Card>
          <CardContent className="pt-4 pb-4 px-3">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-success/10 flex items-center justify-center">
                  <i className="fas fa-check text-sm text-success"></i>
                </div>
                <p className="text-xs font-medium text-surface-600">Akan Hadir</p>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-surface-900">{RSVP_DATA.yes}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4 px-3">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-error/10 flex items-center justify-center">
                  <i className="fas fa-times text-sm text-error"></i>
                </div>
                <p className="text-xs font-medium text-surface-600">Tidak Hadir</p>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-surface-900">{RSVP_DATA.no}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4 px-3">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-info/10 flex items-center justify-center">
                  <i className="fas fa-question text-sm text-info"></i>
                </div>
                <p className="text-xs font-medium text-surface-600">Belum Jawab</p>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-surface-900">{RSVP_DATA.noanswer}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card>
        <CardHeader>
          <h3 className="text-base sm:text-lg font-semibold">Distribusi RSVP</h3>
        </CardHeader>
        <CardContent>
          <div className="bg-surface-50 rounded-lg p-8 sm:p-12 flex items-center justify-center">
            <p className="text-sm sm:text-base text-surface-500"><i className="fas fa-chart-bar mr-2"></i>Chart akan ditampilkan di sini</p>
          </div>
        </CardContent>
      </Card>

      {/* Filter Tabs */}
      <Card>
        <CardHeader className="overflow-x-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <button
              onClick={() => setActiveTab('all')}
              className={`text-xs sm:text-sm font-medium px-2 sm:px-4 py-2 rounded transition whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-surface-600 hover:text-surface-900'
              }`}
            >
              Semua ({RSVP_DATA.total})
            </button>
            <button
              onClick={() => setActiveTab('yes')}
              className={`text-xs sm:text-sm font-medium px-2 sm:px-4 py-2 rounded transition whitespace-nowrap ${
                activeTab === 'yes'
                  ? 'bg-success/10 text-success'
                  : 'text-surface-600 hover:text-surface-900'
              }`}
            >
              Hadir ({RSVP_DATA.yes})
            </button>
            <button
              onClick={() => setActiveTab('no')}
              className={`text-xs sm:text-sm font-medium px-2 sm:px-4 py-2 rounded transition whitespace-nowrap ${
                activeTab === 'no'
                  ? 'bg-error/10 text-error'
                  : 'text-surface-600 hover:text-surface-900'
              }`}
            >
              Tidak Hadir ({RSVP_DATA.no})
            </button>
            <button
              onClick={() => setActiveTab('noanswer')}
              className={`text-xs sm:text-sm font-medium px-2 sm:px-4 py-2 rounded transition whitespace-nowrap ${
                activeTab === 'noanswer'
                  ? 'bg-info/10 text-info'
                  : 'text-surface-600 hover:text-surface-900'
              }`}
            >
              Belum Jawab ({RSVP_DATA.noanswer})
            </button>
          </Tabs>
        </CardHeader>

        {/* Response List */}
        <CardContent>
          <div className="space-y-4 mb-4">
            <div className="hidden md:flex flex-col sm:flex-row gap-2 sm:gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input text-xs sm:text-sm"
              >
                <option value="latest">Terbaru</option>
                <option value="oldest">Tertua</option>
                <option value="name">Nama (A-Z)</option>
              </select>
              
              <div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleExportCSV}
                  className="text-xs sm:text-sm"
                >
                  <i className="fas fa-download mr-2"></i>Export CSV
                </Button>
              </div>
            </div>

            {/* Mobile Search & Filter */}
            <div className="md:hidden space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Cari tamu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input w-full text-xs"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input flex-1 text-xs"
                >
                  <option value="latest">Terbaru</option>
                  <option value="oldest">Terlamaa</option>
                  <option value="name">Nama (A-Z)</option>
                  <option value="name">Nama (Z-A)</option>
                </select>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleExportCSV}
                  className="text-xs"
                  title="Export data to CSV"
                >
                  <i className="fas fa-download"></i>
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-surface-200">
                  <th className="text-left py-3 px-3 font-semibold text-surface-900">No</th>
                  <th className="text-left py-3 px-3 font-semibold text-surface-900">Nama</th>
                  <th className="text-left py-3 px-3 font-semibold text-surface-900">Telepon</th>
                  <th className="text-left py-3 px-3 font-semibold text-surface-900">Tgl RSVP</th>
                  <th className="text-left py-3 px-3 font-semibold text-surface-900">Status</th>
                  <th className="text-left py-3 px-3 font-semibold text-surface-900">Jml</th>
                  <th className="text-left py-3 px-3 font-semibold text-surface-900">Keterangan</th>
                  <th className="text-center py-3 px-3 font-semibold text-surface-900">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((response, idx) => (
                  <tr key={response.id} className="border-b border-surface-100 hover:bg-surface-50">
                    <td className="py-3 px-3 text-surface-700">{idx + 1}</td>
                    <td className="py-3 px-3 font-medium text-surface-900">{response.guestName}</td>
                    <td className="py-3 px-3 text-surface-700">{response.phone}</td>
                    <td className="py-3 px-3 text-surface-700">
                      {response.rsvpDate ? new Date(response.rsvpDate).toLocaleDateString('id-ID') : '-'}
                    </td>
                    <td className="py-3 px-3">
                      <Badge variant={statusMap[response.status].variant}>
                        {statusMap[response.status].label}
                      </Badge>
                    </td>
                    <td className="py-3 px-3 text-surface-700">
                      {response.numberOfPeople || '-'}
                    </td>
                    <td className="py-3 px-3 text-surface-600 text-xs max-w-xs truncate">
                      {response.notes}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <Button 
                        variant="danger" 
                        size="sm"
                        onClick={() => handleDeleteGuest(response.id)}
                        className="text-xs"
                        title="Hapus tamu"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-2">
            {sortedData.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-surface-600 text-sm">Tidak ada tamu yang cocok</p>
              </div>
            ) : (
              sortedData.map((response) => (
                <div key={response.id} className="bg-surface-50 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-surface-900 text-sm truncate">{response.guestName}</p>
                    <p className="text-xs text-surface-600 truncate">No. HP: {response.phone}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <Badge variant={statusMap[response.status].variant} className="text-xs whitespace-nowrap">
                      {statusMap[response.status].label}
                    </Badge>
                    <div className="relative">
                      <button
                        onClick={() => setShowActionMenu(showActionMenu === response.id ? null : response.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-error/20 hover:bg-error/30 transition"
                        title="Menu aksi"
                      >
                        <i className="fas fa-ellipsis-v text-error text-xs"></i>
                      </button>
                      {showActionMenu === response.id && (
                        <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg z-10 overflow-hidden border border-surface-200">
                          <button
                            onClick={() => {
                              handleViewDetail(response);
                              setShowActionMenu(null);
                            }}
                            className="w-full text-left px-3 py-2 text-xs text-surface-700 hover:bg-surface-50 flex items-center gap-2"
                          >
                            <i className="fas fa-eye text-primary"></i>Detail
                          </button>
                          <button
                            onClick={() => {
                              handleDeleteGuest(response.id);
                              setShowActionMenu(null);
                            }}
                            className="w-full text-left px-3 py-2 text-xs text-error hover:bg-surface-50 flex items-center gap-2 border-t border-surface-100"
                          >
                            <i className="fas fa-trash"></i>Hapus
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button variant="secondary" className="w-full sm:w-auto hidden md:inline-flex">
            <i className="fas fa-download mr-2"></i>Download Laporan RSVP
          </Button>
        </CardFooter>
      </Card>

      {/* Detail Modal */}
      {showDetailModal && selectedGuest && (
        <div className="fixed inset-0 bg-surface-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold">Detail Tamu</h3>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="text-surface-400 hover:text-surface-600"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <p className="text-xs font-medium text-surface-600">Nama</p>
                <p className="text-surface-900 font-medium">{selectedGuest.guestName}</p>
              </div>

              <div>
                <p className="text-xs font-medium text-surface-600">Telepon</p>
                <a href={`https://wa.me/${selectedGuest.phone.replace('-', '')}`} className="text-primary-600 hover:underline">
                  {selectedGuest.phone}
                </a>
              </div>

              <div>
                <p className="text-xs font-medium text-surface-600">Status RSVP</p>
                <Badge variant={statusMap[selectedGuest.status].variant} className="inline-block">
                  {statusMap[selectedGuest.status].label}
                </Badge>
              </div>

              <div>
                <p className="text-xs font-medium text-surface-600">Jumlah Orang</p>
                <p className="text-surface-900 font-medium">{selectedGuest.numberOfPeople || 'Belum ditentukan'}</p>
              </div>

              <div>
                <p className="text-xs font-medium text-surface-600">Tanggal RSVP</p>
                <p className="text-surface-900">
                  {selectedGuest.rsvpDate 
                    ? new Date(selectedGuest.rsvpDate).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })
                    : '-'
                  }
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-surface-600">Keterangan</p>
                <p className="text-surface-700">{selectedGuest.notes}</p>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                variant="primary"
                onClick={() => setShowDetailModal(false)}
                className="w-full"
              >
                Tutup
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
