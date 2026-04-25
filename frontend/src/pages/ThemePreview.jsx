// 1. Import komponen temanya
import JawaKlasikTemplate from '../features/invitations/templates/jawa-klasik/JawaKlasikTemplate';

export default function ThemePreview() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* 2. Panggil komponennya di sini */}
      <JawaKlasikTemplate />
    </div>
  );
}
