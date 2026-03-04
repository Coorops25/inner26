
import React, { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider, CartContext } from './context/CartContext';
import BookingModal from './components/BookingModal';
import CheckoutModal from './components/CheckoutModal';

// Import Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import EventsPage from './pages/EventsPage';
import ConsultorioPage from './pages/ConsultorioPage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';


const PageRenderer: React.FC = () => {
  const { page } = useContext(CartContext);

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

const App: React.FC = () => {
  return (
    <CartProvider>
      <div style={{ position: 'relative' }} className="bg-base text-base-text antialiased">
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Header />
          <main>
            <PageRenderer />
          </main>
          <Footer />
        </div>

        <div style={{ position: 'relative', zIndex: 60 }}>
          <BookingModal />
          <CheckoutModal />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
