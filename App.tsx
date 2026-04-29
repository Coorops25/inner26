
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

interface PageSEO {
  canonical: string;
  title: string;
  description: string;
}

const pageSEO: Record<string, PageSEO> = {
  '404': {
    canonical: 'https://innerspirit.co/',
    title: 'Página no encontrada — Inner Spirit Studio',
    description: 'La página que buscas no existe. Vuelve al inicio para explorar nuestras clases de yoga, eventos y más.',
  },
  home: {
    canonical: 'https://innerspirit.co/',
    title: 'Inner Spirit Studio — Yoga & Bienestar en La Candelaria, Bogotá',
    description: 'Centro de yoga, meditación, danza y bienestar integral en La Candelaria, Bogotá. Clases diarias, eventos, sound healing y acompañamiento individual. #1 estudio de yoga en Bogotá.',
  },
  nosotros: {
    canonical: 'https://innerspirit.co/nosotros',
    title: 'Nosotros — Inner Spirit Studio | Nuestra Historia',
    description: 'Conoce la historia de Inner Spirit Studio, un santuario de yoga y bienestar en el corazón de La Candelaria. 4.9⭐ en Google con 143+ reseñas.',
  },
  clases: {
    canonical: 'https://innerspirit.co/clases',
    title: 'Clases de Yoga, Meditación y Breathwork — Inner Spirit Studio',
    description: 'Vinyasa, Hatha, Yin Yoga, meditación guiada, breathwork y sound healing. Clases para todos los niveles en La Candelaria, Bogotá. Desde $36.000 COP.',
  },
  eventos: {
    canonical: 'https://innerspirit.co/eventos',
    title: 'Eventos y Rituales — Inner Spirit Studio',
    description: 'Inner Dance, ceremonias de luna nueva, retiros y encuentros conscientes en Bogotá. Experiencias transformadoras en comunidad.',
  },
  consultorio: {
    canonical: 'https://innerspirit.co/consultorio',
    title: 'Consultorio — Sesiones Individuales | Inner Spirit Studio',
    description: 'Acompañamiento individual: yoga terapéutico, meditación guiada, breathwork y arte terapia. Sesiones 1:1 personalizadas en La Candelaria.',
  },
  tienda: {
    canonical: 'https://innerspirit.co/tienda',
    title: 'Tienda — Objetos Conscientes | Inner Spirit Studio',
    description: 'Cristales, incienso, aceites esenciales, cuencos tibetanos y más. Herramientas para acompañar tu práctica y rituales diarios.',
  },
  blog: {
    canonical: 'https://innerspirit.co/blog',
    title: 'Blog — Recursos para tu Viaje Interior | Inner Spirit Studio',
    description: 'Artículos sobre yoga, meditación, breathwork, chakras y crecimiento espiritual. Guías prácticas para nutrir tu bienestar.',
  },
  contacto: {
    canonical: 'https://innerspirit.co/contacto',
    title: 'Contacto — Inner Spirit Studio | La Candelaria, Bogotá',
    description: 'Visítanos en Transversal 1 #17-29, La Candelaria, Bogotá. WhatsApp: +57 321 224 8261. Horario: Lun-Vie 6:30AM–9PM, Sáb-Dom 8AM–9PM.',
  },
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

const NotFoundPage: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <h1 className="text-7xl md:text-9xl font-heading font-bold text-slate-is/20 leading-none">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading mt-4 text-ink">Página no encontrada</h2>
        <p className="mt-3 text-muted max-w-md mx-auto">Lo sentimos, no pudimos encontrar lo que buscas.</p>
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('home'); }}
          className="mt-8 inline-block px-8 py-3 bg-slate-is text-sand-dune font-heading text-lg transition-all hover:bg-deep-teal"
        >
          Volver al inicio
        </a>
      </div>
    </section>
  );
};

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
    case '404':
      return <NotFoundPage />;
    default:
      return <HomePage />;
  }
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const AppContent: React.FC = () => {
  const { page } = useNavigation();

  useEffect(() => {
    const seo = pageSEO[page] ?? pageSEO.home!;

    // Update document title
    document.title = seo.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = seo.description;

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', seo.description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', seo.canonical);

    // Update Twitter tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', seo.title);
    const twDescription = document.querySelector('meta[name="twitter:description"]');
    if (twDescription) twDescription.setAttribute('content', seo.description);

    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = seo.canonical;
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
