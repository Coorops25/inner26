
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ShoppingCartIcon } from '../constants';

const navLinks: Array<{ page: 'nosotros' | 'clases' | 'eventos' | 'consultorio' | 'tienda' | 'contacto'; label: string }> = [
  { page: 'nosotros', label: 'Nosotros' },
  { page: 'clases', label: 'Clases' },
  { page: 'eventos', label: 'Eventos' },
  { page: 'consultorio', label: 'Consultorio' },
  { page: 'tienda', label: 'Tienda' },
  { page: 'contacto', label: 'Contacto' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, toggleCheckoutModal, navigate } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavigate = (page: string) => {
    navigate(page);
    setIsOpen(false);
  };

  const headerStyle: React.CSSProperties = scrolled
    ? { background: 'rgba(234,224,204,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(160,160,131,0.2)', color: '#252520' }
    : { background: 'transparent', color: '#ffffff' };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] py-5 md:py-7"
      style={headerStyle}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Brand */}
        <div className="w-1/4 flex justify-start">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}
            className="text-lg md:text-xl tracking-[0.08em] font-heading font-bold uppercase transition-colors duration-300 relative z-50"
          >
            Inner Spirit
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-10 xl:space-x-14">
          {navLinks.map((link) => (
            <a
              key={link.page}
              href={`#${link.page}`}
              onClick={(e) => { e.preventDefault(); handleNavigate(link.page); }}
              className="text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 opacity-80 hover:opacity-100"
              style={{ color: 'inherit' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="w-1/4 flex justify-end items-center space-x-6">
          <button
            onClick={toggleCheckoutModal}
            className="relative group p-1 opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Carrito"
          >
            <ShoppingCartIcon />
            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: '#4D6A6D' }}
              >
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-end w-8 h-8 space-y-1.5 focus:outline-none z-50"
            aria-label="Menú"
          >
            <span className={`block h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'w-6 opacity-0' : 'w-4'}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        style={{ background: '#EAE0CC' }}
      >
        <nav className="flex flex-col items-center space-y-8 text-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.page}
              href={`#${link.page}`}
              onClick={(e) => { e.preventDefault(); handleNavigate(link.page); }}
              className={`text-4xl font-heading transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ color: '#252520', transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-14 flex gap-6 text-sm tracking-widest uppercase" style={{ color: '#798478' }}>
          <a href="https://instagram.com/innerspirit_studio" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/573212248261" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
