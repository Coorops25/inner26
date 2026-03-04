
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ShoppingCartIcon } from '../constants';

const navLinks = [
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    navigate(page);
    setIsOpen(false);
  };

  // Styles based on scroll state
  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
    scrolled 
      ? 'bg-white/95 backdrop-blur-md py-4 border-b border-stone-100 text-stone-800' 
      : 'bg-transparent py-8 text-white'
  }`;
  
  const logoClasses = "text-xl md:text-2xl tracking-[0.05em] font-heading font-bold uppercase transition-colors duration-300 relative z-50";
  const linkClasses = "text-[11px] font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors duration-300";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-full">
        
        {/* Left: Brand */}
        <div className="w-1/4 flex justify-start">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className={logoClasses}>
            Inner Spirit
            </a>
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-10 xl:space-x-14">
          {navLinks.map((link) => (
            <a 
              key={link.page} 
              href={`#${link.page}`} 
              onClick={(e) => { e.preventDefault(); handleNavigate(link.page); }} 
              className={linkClasses}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="w-1/4 flex justify-end items-center space-x-8">
            {/* Cart */}
            <button onClick={toggleCheckoutModal} className="relative group p-1" aria-label="Carrito">
                <span className="group-hover:text-accent transition-colors duration-300">
                    <ShoppingCartIcon />
                </span>
                {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-transparent">
                    {totalItems}
                </span>
                )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden flex flex-col justify-center items-end w-8 h-8 space-y-1.5 focus:outline-none z-50" 
                aria-label="Menú"
            >
                <span className={`block h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'w-6 opacity-0' : 'w-4'}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ease-out ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#F5F0E6] z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <nav className="flex flex-col items-center space-y-8 text-center">
            {navLinks.map((link, idx) => (
              <a 
                key={link.page} 
                href={`#${link.page}`} 
                onClick={(e) => { e.preventDefault(); handleNavigate(link.page); }} 
                className={`text-4xl font-heading text-stone-800 hover:text-accent transition-transform duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
      </div>
    </header>
  );
};

export default Header;
