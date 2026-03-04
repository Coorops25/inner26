
import React, { useContext } from 'react';
import { InstagramIcon, WhatsAppIcon } from '../constants';
import { CartContext } from '../context/CartContext';

const Footer: React.FC = () => {
  const { navigate } = useContext(CartContext);

  return (
    <footer className="bg-[#1c1917] text-stone-400 py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center">
        
        {/* Brand */}
        <h2 className="text-[12vw] leading-none font-heading font-bold text-stone-800 select-none pointer-events-none">
            INNER SPIRIT
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-16 gap-12 md:gap-0 border-t border-white/10 pt-12">
            
            {/* Location */}
            <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-600">Ubicación</span>
                <p className="text-stone-300 font-light">Trav. 1 #17-29<br/>Candelaria, Colombia</p>
            </div>

            {/* Social & Contact */}
            <div className="space-y-6">
                <div className="flex justify-center gap-8">
                    <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
                    <a href="#" className="hover:text-white transition-colors"><WhatsAppIcon /></a>
                </div>
                <button onClick={() => navigate('contacto')} className="text-stone-300 hover:text-white border-b border-stone-700 hover:border-white transition-all pb-1">
                    hola@innerspirit.net
                </button>
            </div>

            {/* Legal / Credits */}
            <div className="space-y-2">
                 <span className="text-xs font-bold uppercase tracking-widest text-stone-600">Legal</span>
                 <div className="flex flex-col gap-1">
                    <a href="#" className="text-sm hover:text-white transition-colors">Política de Privacidad</a>
                    <span className="text-xs text-stone-600 mt-2">&copy; {new Date().getFullYear()} Inner Spirit Sanctuary.</span>
                 </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
