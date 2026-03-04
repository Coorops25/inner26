
import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop', // Window
  'https://images.unsplash.com/photo-1592398188185-110a1744b199?q=80&w=800&auto=format&fit=crop', // Minimal Space
  'https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=800&auto=format&fit=crop', // Nature/Plants
];

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1800')" }}>
         <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-heading font-semibold">Somos un espacio para recordar</h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-stone-200 leading-relaxed">
            Un lugar para soltar el ruido de afuera y volver a escuchar la sabiduría que ya habita en ti.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-base">
        <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-heading text-accent font-semibold mb-8">Nuestra Filosofía</h2>
            <div className="text-xl text-base-text leading-relaxed space-y-8">
                <p>No somos un gimnasio. No somos un centro de terapia. Somos un espacio donde el movimiento nace desde adentro. Donde la meditación no es una técnica, sino un descanso. Donde la danza no tiene pasos, solo impulso.</p>
                <p>Creemos que cada persona posee su propia brújula interna. Nuestro rol no es dar respuestas, sino crear las condiciones de calma y presencia para que puedas escuchar las tuyas.</p>
            </div>
        </div>
      </section>

      {/* Founder Section */}
       <section className="py-20 md:py-32" style={{backgroundColor: '#F0EBE3'}}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    <div className="md:w-2/5 flex justify-center">
                        <div className="relative">
                        <div className="absolute -inset-2 border border-accent/30 rounded-full"></div>
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop"
                            alt="Ilustración abstracta de la guía de Inner Spirit"
                            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                        />
                        </div>
                    </div>
                    <div className="md:w-3/5 text-center md:text-left">
                         <h2 className="text-4xl md:text-5xl font-heading text-accent font-semibold mb-6">La Guía</h2>
                        <p className="text-xl text-base-text/90 leading-relaxed">
                            El camino de Inner Spirit es sostenido por una escucha.
                        </p>
                        <p className="mt-4 text-lg text-base-text/80 leading-relaxed">
                            Una que ha sido nutrida por estudios en Sanación Energética, Meditación y Yoga Holístico, pero cuya verdadera guía es la presencia compartida en el silencio. Más que enseñar, el propósito es crear el espacio para que cada quien recuerde su propia sabiduría, cultivando una comunidad basada en la autenticidad y el respeto por cada proceso individual.
                        </p>
                    </div>
                </div>
            </div>
        </section>

      {/* Studio Gallery Section */}
       <section className="py-20 md:py-32 bg-base">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-heading text-accent font-semibold">El Espacio</h2>
                     <p className="mt-6 text-xl text-base-text/80 leading-relaxed max-w-3xl mx-auto">
                        Un lugar amplio, con paredes de barro, luz natural y un piso de madera que ha visto miles de respiraciones.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {galleryImages.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 aspect-[3/4]">
                    <img src={src} alt={`Ilustración abstracta del estudio ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default AboutPage;
