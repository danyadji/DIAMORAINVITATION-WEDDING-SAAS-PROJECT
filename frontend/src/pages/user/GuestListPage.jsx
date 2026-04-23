import { useState, useEffect, useCallback } from 'react';
import { usePageTitle } from '../../contexts/PageTitleContext';
import { Button, Table, Modal, Input, Select, Alert } from '../../components';
import { guestService } from '../../services';
import { useAsync } from '../../hooks';

const GUEST_CATEGORIES = [
  { value: 'keluarga', label: 'Keluarga' },
  { value: 'teman', label: 'Teman' },
  { value: 'rekan_kerja', label: 'Rekan Kerja' },
  { value: 'tetangga', label: 'Tetangga' },
  { value: 'lainnya', label: 'Lainnya' },
];

const initialFormData = {
  name: '',
  category: '',
  phone: '',
  max_attendance: 2,
};

export default function GuestListPage() {
  const { setTitle } = usePageTitle();
  const [guests, setGuests] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setTitle('Data Calon Tamu');
  }, [setTitle]);

  const { loading: loadingList, execute: fetchGuests } = useAsync(guestService.getAll);
  const { loading: saving, execute: saveGuest } = useAsync(
    editingGuest ? (data) => guestService.update(editingGuest.id, data) : guestService.create
  );
  const { loading: deleting, execute: deleteGuest } = useAsync(guestService.delete);

  const loadGuests = useCallback(async () => {
    try {
      const data = await fetchGuests();
      setGuests(data.data || data || []);
    } catch (err) {
      console.error('Failed to load guests:', err);
    }
  }, [fetchGuests]);

  useEffect(() => {
    loadGuests();
  }, []);

  const openModal = (guest = null) => {
    if (guest) {
      setEditingGuest(guest);
      setFormData({
        name: guest.name,
        category: guest.category || '',
        phone: guest.phone || '',
        max_attendance: guest.max_attendance || 2,
      });
    } else {
      setEditingGuest(null);
      setFormData(initialFormData);
    }
    setFormErrors({});
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingGuest(null);
    setFormData(initialFormData);
    setFormErrors({});
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Nama tamu wajib diisi';
    }
    if (formData.max_attendance < 1) {
      errors.max_attendance = 'Minimal 1 orang';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await saveGuest(formData);
      setSuccessMessage(editingGuest ? 'Tamu berhasil diperbarui' : 'Tamu berhasil ditambahkan');
      closeModal();
      loadGuests();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      if (err.response?.data?.errors) {
        setFormErrors(err.response.data.errors);
      }
    }
  };

  const handleDelete = async (guest) => {
    if (!window.confirm(`Hapus tamu "${guest.name}"?`)) return;
    try {
      await deleteGuest(guest.id);
      setSuccessMessage('Tamu berhasil dihapus');
      loadGuests();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Failed to delete guest:', err);
    }
  };

  const columns = [
    { key: 'name', label: 'Nama' },
    { 
      key: 'category', 
      label: 'Kategori',
      render: (val) => {
        const cat = GUEST_CATEGORIES.find(c => c.value === val);
        return cat ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {cat.label}
          </span>
        ) : '-';
      }
    },
    { key: 'phone', label: 'Telepon', render: (val) => val || '-' },
    { key: 'max_attendance', label: 'Maks. Hadir', render: (val) => `${val} orang` },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-surface-900">Data Calon Tamu</h1>
          <p className="text-surface-500">Kelola daftar tamu undangan Anda</p>
        </div>
        <Button onClick={() => openModal()}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Tamu
        </Button>
      </div>

      {/* Success Message */}
      {successMessage && (
        <Alert type="success" message={successMessage} onClose={() => setSuccessMessage('')} />
      )}

      {/* Guest Table */}
      <div className="card">
        {loadingList ? (
          <div className="p-12 text-center">
            <div className="spinner text-primary-500 mx-auto"></div>
            <p className="mt-4 text-surface-500">Memuat data...</p>
          </div>
        ) : (
          <Table
            columns={columns}
            data={guests}
            emptyMessage="Belum ada tamu. Klik 'Tambah Tamu' untuk menambahkan."
            actions={(guest) => (
              <>
                <button
                  onClick={() => openModal(guest)}
                  className="p-2 rounded-lg text-surface-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  title="Edit"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(guest)}
                  disabled={deleting}
                  className="p-2 rounded-lg text-surface-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                  title="Hapus"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </>
            )}
          />
        )}
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={editingGuest ? 'Edit Tamu' : 'Tambah Tamu'}
        footer={
          <>
            <Button variant="secondary" onClick={closeModal}>
              Batal
            </Button>
            <Button onClick={handleSubmit} loading={saving}>
              {editingGuest ? 'Simpan Perubahan' : 'Tambah Tamu'}
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nama Tamu"
            placeholder="Masukkan nama tamu"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={formErrors.name}
            required
          />

          <Select
            label="Kategori"
            options={GUEST_CATEGORIES}
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            error={formErrors.category}
          />

          <Input
            label="Nomor Telepon"
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={formErrors.phone}
          />

          <Input
            label="Maksimal Kehadiran"
            type="number"
            min="1"
            max="10"
            value={formData.max_attendance}
            onChange={(e) => setFormData({ ...formData, max_attendance: parseInt(e.target.value) || 1 })}
            error={formErrors.max_attendance}
          />
        </form>
      </Modal>
    </div>
  );
}
