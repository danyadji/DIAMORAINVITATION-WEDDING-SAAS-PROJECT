import React, { useState, useEffect } from 'react';
import { usePageTitle } from '../../../contexts/PageTitleContext';
import { 
  Card, CardHeader, CardContent, CardFooter,
  Button, Input, Select, Stepper, Badge
} from '../../../components';

const STEPS = ['Info Dasar', 'Detail Acara', 'Tema'];
const THEMES = [
  { id: 1, name: 'Klasik', color: 'from-amber-100 to-orange-100' },
  { id: 2, name: 'Modern', color: 'from-blue-100 to-purple-100' },
  { id: 3, name: 'Minimalis', color: 'from-gray-100 to-slate-100' },
];

export default function EditInvitationPage() {
  const { setTitle } = usePageTitle();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    groomName: '',
    brideName: '',
    eventDate: '',
    eventTime: '',
    location: '',
    message: '',
    music: 'none',
    theme: 1,
  });

  useEffect(() => {
    setTitle('Edit Undangan');
  }, [setTitle]);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    console.log('Saving invitation:', formData);
    alert('Undangan berhasil disimpan!');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {/* Form Section */}
      <div className="lg:col-span-2 space-y-5 sm:space-y-6">
        {/* Stepper */}
        <Stepper steps={STEPS} currentStep={currentStep} />

        {/* Form Card */}
        <Card>
          <CardHeader>
            <h2 className="text-xl sm:text-2xl font-bold">
              Langkah {currentStep + 1}: {STEPS[currentStep]}
            </h2>
          </CardHeader>

          <CardContent className="space-y-6">
            {currentStep === 0 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-surface-900 mb-2">
                    Nama Mempelai Pria
                  </label>
                  <Input
                    placeholder="Masukkan nama lengkap"
                    value={formData.groomName}
                    onChange={(e) => handleChange('groomName', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-900 mb-2">
                    Nama Mempelai Wanita
                  </label>
                  <Input
                    placeholder="Masukkan nama lengkap"
                    value={formData.brideName}
                    onChange={(e) => handleChange('brideName', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-900 mb-2">
                    Tanggal Acara
                  </label>
                  <Input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleChange('eventDate', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-900 mb-2">
                    Waktu Acara
                  </label>
                  <Input
                    type="time"
                    value={formData.eventTime}
                    onChange={(e) => handleChange('eventTime', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-900 mb-2">
                    Lokasi Acara
                  </label>
                  <Input
                    placeholder="Alamat lengkap venue"
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                  />
                </div>
              </>
            )}

            {currentStep === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-surface-900 mb-2">
                    Pesan Sambutan
                  </label>
                  <textarea
                    placeholder="Tulis pesan untuk tamu Anda..."
                    className="input min-h-32"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-900 mb-2">
                    Musik Latar
                  </label>
                  <Select>
                    <option value="none">Tidak ada musik</option>
                    <option value="classic">Musik Klasik</option>
                    <option value="modern">Musik Modern</option>
                    <option value="traditional">Musik Tradisional</option>
                  </Select>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-surface-900 mb-4">
                    Pilih Tema Undangan
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {THEMES.map((theme) => (
                      <div
                        key={theme.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                          formData.theme === theme.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-surface-200 hover:border-primary-300'
                        }`}
                        onClick={() => handleChange('theme', theme.id)}
                      >
                        <div
                          className={`w-full h-24 rounded bg-gradient-to-r ${theme.color} mb-3`}
                        />
                        <p className="text-sm font-medium text-center">{theme.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>

          <CardFooter>
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              ← Kembali
            </Button>
            {currentStep === STEPS.length - 1 ? (
              <Button variant="primary" onClick={handleSave}>
                Simpan Undangan
              </Button>
            ) : (
              <Button variant="primary" onClick={handleNext}>
                Lanjut →
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>

      {/* Preview Section (Sticky) */}
      <div className="hidden lg:block">
        <div className="sticky top-32">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Preview Undangan</h3>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-b from-surface-50 to-surface-100 rounded-lg p-6 h-96 flex flex-col items-center justify-center">
                <p className="text-sm text-surface-500 mb-4">Preview Live</p>
                <h4 className="text-lg font-bold text-surface-900 mb-2">
                  {formData.groomName || 'Nama Pria'} & {formData.brideName || 'Nama Wanita'}
                </h4>
                <p className="text-sm text-surface-600">{formData.eventDate || 'TBD'}</p>
                <p className="text-xs text-surface-500 mt-2">{formData.location || 'Lokasi'}</p>
                <div className="mt-4 w-full border-t border-surface-200 pt-4">
                  <Badge variant="info">Preview akan muncul di sini</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
