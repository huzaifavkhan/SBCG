
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import App from './App.tsx'
import './index.css'

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </HelmetProvider>
);
