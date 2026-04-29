
import React, { lazy, Suspense, useEffect } from 'react';
import Header from './src/components/layout/Header';
import Footer from './src/components/layout/Footer';
import { CartProvider } from './src/context/CartContext';
import { ToastProvider } from './src/context/ToastContext';
import { NavigationProvider, useNavigation } from './src/context/NavigationContext';
import BookingModal from './src/components/modals/BookingModal';
import CheckoutModal from './src/components/modals/CheckoutModal';
import ToastContainer from './src/components/ui/ToastContainer';
import SplashCursor from './src/components/effects/SplashCursor';
import ErrorBoundary from './src/components/ui/ErrorBoundary';

const pageCanonicalUrls: Record<string, string> = {
  home: 'https://innerspirit.co/',
  nosotros: 'https://innerspirit.co/nosotros',
  clases: 'https://innerspirit.co/clases',
  eventos: 'https://innerspirit.co/eventos',
  consultorio: 'https://innerspirit.co/consultorio',
  tienda: 'https://innerspirit.co/tienda',
  blog: 'https://innerspirit.co/blog',
  contacto: 'https://innerspirit.co/contacto',
};

const HomePage = lazy(() => import('./src/pages/HomePage'));
const AboutPage = lazy(() => import('./src/pages/AboutPage'));
const ClassesPage = lazy(() => import('./src/pages/ClassesPage'));
const EventsPage = lazy(() => import('./src/pages/EventsPage'));
const ConsultorioPage = lazy(() => import('./src/pages/ConsultorioPage'));
const ShopPage = lazy(() => import('./src/modules/shop/pages/ShopPage'));
const BlogPage = lazy(() => import('./src/modules/blog/pages/BlogPage'));
const ContactPage = lazy(() => import('./src/pages/ContactPage'));

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh]" role="status" aria-label="Cargando página">
    <div className="w-8 h-8 border-4 border-slate-is border-t-transparent rounded-full animate-spin" />
  </div>
);

const PageRenderer: React.FC = () => {
  const { page } = useNavigation();

  switch (page) {
    case 'nosotros':
      return <AboutPage />;
    case 'clases':
      return <ClassesPage />;
    case 'eventos':
      return <EventsPage />;
    case 'consultorio':
      return <ConsultorioPage />;
    case 'tienda':
      return <ShopPage />;
    case 'blog':
      return <BlogPage />;
    case 'contacto':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const AppContent: React.FC = () => {
  const { page } = useNavigation();

  useEffect(() => {
    const canonicalUrl = pageCanonicalUrls[page] || pageCanonicalUrls.home;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }, [page]);

  return (
    <>
      {/* Particle cursor — 2D canvas, pointer-events:none, skipped if reduced-motion */}
      {!prefersReducedMotion() && (
        <ErrorBoundary fallback={null}>
          <SplashCursor />
        </ErrorBoundary>
      )}

      <div style={{ position: 'relative' }} className="bg-base text-base-text antialiased">
        {/* Header is fixed/z-50 — always on top */}
        <Header />

        {/* Main page content — wrapped in ErrorBoundary so WebGL crashes don't break nav */}
        <main id="main-content">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <PageRenderer />
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />

        {/* Modals layer — above everything */}
        <div style={{ position: 'relative', zIndex: 60 }}>
          <BookingModal />
          <CheckoutModal />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <CartProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </CartProvider>
    </NavigationProvider>
  );
};

export default App;
