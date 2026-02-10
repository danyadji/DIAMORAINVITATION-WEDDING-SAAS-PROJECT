import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks';
import { PageTitleProvider } from './contexts/PageTitleContext';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PageTitleProvider>
          <AppRoutes />
        </PageTitleProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
