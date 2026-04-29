
import React from 'react';
import { useNavigation } from '../context/NavigationContext';

const ConsultorioPage: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <div className="animate-fade-in-up">
      <section className="relative py-24 md:py-40 bg-stone-900 text-white overflow-hidden">
         <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-semibold">Acompañamiento Individual</h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-stone-200 leading-relaxed">
            Un espacio seguro y confidencial para caminar a tu lado en tu proceso de autodescubrimiento.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-base">
        <div className="container mx-auto px-6 max-w-3xl text-center">
            <div className="text-lg text-base-text leading-relaxed space-y-8">
                <p>A veces, el camino necesita un testigo.</p>
                <p>
                En sesiones individuales, ofrecemos un espacio seguro para explorar lo que emerge:
                patrones que se repiten, preguntas sin respuesta, duelos callados. No se trata de "arreglar" nada, sino de iluminar con consciencia lo que ya está presente.
                </p>
                <p>
                Trabajamos con herramientas simples: la escucha profunda, el diálogo consciente y, cuando es necesario, prácticas energéticas suaves para re-equilibrar el cuerpo sutil. Cada sesión es única, tejida a la medida de tu necesidad del momento.
                </p>
                <p className="font-semibold text-accent text-2xl font-heading">No damos consejos. Caminamos contigo.</p>
            </div>
            <div className="mt-16">
            <a
              href="/contacto"
              onClick={(e) => { e.preventDefault(); navigate('contacto'); }}
              className="font-semibold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
              style={{ background: '#4D6A6D', color: '#EAE0CC' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#3d5557'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#4D6A6D'; }}
            >
              Conversemos para agendar
            </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultorioPage;