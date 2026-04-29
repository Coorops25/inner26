
import React from 'react';
import { useNavigation } from '../../context/NavigationContext';

const InstagramSVG = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.63 1.802h-.63c-2.403 0-2.736.01-3.7.054-.977.044-1.504.207-1.857.344a3.1 3.1 0 00-1.15.748 3.1 3.1 0 00-.747 1.15c-.137.353-.3.88-.344 1.857-.043.965-.052 1.252-.052 3.7s.009 2.736.052 3.7c.044.977.207 1.504.344 1.857a3.1 3.1 0 00.748 1.15 3.1 3.1 0 001.15.747c.353.137.88.3 1.857.344.964.044 1.297.052 3.7.052s2.736-.008 3.7-.052c.977-.044 1.504-.207 1.857-.344a3.1 3.1 0 001.15-.747 3.1 3.1 0 00.747-1.15c.137-.353.3-.88.344-1.857.044-.964.052-1.297.052-3.7s-.008-2.736-.052-3.7c-.044-.977-.207-1.504-.344-1.857a3.1 3.1 0 00-.747-1.15 3.1 3.1 0 00-1.15-.748c-.353-.137-.88-.3-1.857-.344-.964-.043-1.297-.052-3.7-.052zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const WhatsAppSVG = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.82l-1.33 4.86 4.98-1.31c1.39.75 2.97 1.18 4.62 1.18h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.22 15.2c-.28.27-.64.43-1.04.51-.39.08-.85.12-1.33.08-1.02-.09-2.28-.53-3.32-1.55-1.32-1.32-2.19-2.95-2.3-3.13-.11-.18-.89-1.19-.89-2.23s.54-1.54.73-1.75c.18-.21.4-.27.59-.27.16 0 .31 0 .43.01.21.01.48.04.69.34.25.35.88 2.13.94 2.29s.09.28.01.46c-.08.18-.21.32-.39.51-.2.21-.4.43-.55.59-.13.13-.27.28-.13.53.15.25.68.98 1.48 1.78.96.96 1.79 1.25 2.04 1.33.25.08.4-.04.55-.23.14-.18.61-.71.78-.95.17-.25.33-.27.56-.16.23.11 1.46.68 1.71.81.25.12.41.18.47.27.06.09.04.52-.24.79z" />
  </svg>
);

const Footer: React.FC = () => {
  const { navigate } = useNavigation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 bg-warm-black text-muted">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center">

        {/* Big brand word */}
        <h2
          className="text-[11vw] leading-none font-heading font-bold select-none pointer-events-none mb-1"
          style={{ color: 'rgba(77,106,109,0.18)' }}
        >
          INNER SPIRIT
        </h2>
        <p className="text-xs tracking-[0.3em] uppercase mb-10 text-slate-is">
          Studio — La Candelaria, Bogotá
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 md:gap-0 border-t border-slate-is/20 pt-12">
          {/* Location */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest block text-slate-is">Ubicación</span>
            <p className="font-light leading-relaxed text-accent">
              Transversal 1 # 17-29<br />
              La Candelaria, Bogotá<br />
              Colombia — CP 111711
            </p>
            <div className="space-y-1 text-sm mt-2 text-muted">
              <p>Lun–Vie: 6:30 AM – 9:00 PM</p>
              <p>Sáb–Dom: 8:00 AM – 9:00 PM</p>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6 flex flex-col items-center">
            <div className="flex gap-6 text-muted-light">
              <a
                href="https://instagram.com/innerspirit_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                aria-label="Instagram @innerspirit_studio"
              >
                <InstagramSVG />
              </a>
              <a
                href="https://wa.me/573212248261"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                aria-label="WhatsApp +57 321 224 8261"
              >
                <WhatsAppSVG />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <a
                href="https://wa.me/573212248261"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-white"
              >
                +57 321 224 8261
              </a>
              <a
                href="/contacto"
                onClick={(e) => { e.preventDefault(); navigate('contacto'); }}
                className="block mx-auto transition-colors hover:text-white pb-0.5 border-b border-muted-light/40"
              >
                hola@innerspirit.co
              </a>
            </div>
            <p className="text-xs tracking-widest uppercase text-slate-is">@innerspirit_studio</p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest block text-slate-is">Navegación</span>
            <div className="flex flex-col gap-2 text-sm">
              {(['clases', 'eventos', 'nosotros', 'tienda', 'contacto'] as const).map(p => (
                <a
                  key={p}
                  href={`/${p}`}
                  onClick={(e) => { e.preventDefault(); navigate(p); }}
                  className="capitalize transition-colors hover:text-white text-left md:text-center"
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </a>
              ))}
            </div>
            <p className="text-xs mt-4 text-muted-light/50">
              &copy; {year} Inner Spirit Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* WhatsApp floating CTA */}
        <a
          href="https://wa.me/573212248261?text=Hola%2C%20quiero%20reservar%20una%20clase%20en%20Inner%20Spirit%20Studio"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 z-40 text-white"
          style={{ background: '#25D366', touchAction: 'manipulation' }}
          aria-label="Escríbenos por WhatsApp"
        >
          <WhatsAppSVG />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
