
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const classes = [
  {
    title: 'Yoga',
    description: 'Una práctica para unificar cuerpo, mente y respiración. Nuestras sesiones de yoga fluyen con la energía del grupo, explorando posturas (asanas), respiración consciente (pranayama) y quietud. Abierto a todos los niveles, desde principiantes hasta practicantes avanzados.',
    imageUrl: 'https://images.unsplash.com/photo-1599447421405-0e32096d30fd?q=80&w=800&auto=format&fit=crop',
    price: 25,
  },
  {
    title: 'Meditación',
    description: 'Un espacio de silencio para observar y descansar. A través de prácticas de atención plena y meditación guiada, cultivamos la calma interior y la claridad. No se requiere experiencia, solo la disposición de sentarse y estar presente.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    price: 20,
  },
  {
    title: 'Danza Holística',
    description: 'Movimiento libre para liberar el cuerpo y la mente. Sin pasos a seguir ni coreografías, esta práctica es una invitación a que tu cuerpo se exprese auténticamente, guiado por la música y tu impulso interior. Un espacio para soltar, sentir y disfrutar.',
    imageUrl: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=800&auto=format&fit=crop',
    price: 30,
  },
];

const ClassesPage: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);

  const handleBookClick = (cls: typeof classes[0]) => {
    openBookingModal({
      type: 'class',
      title: cls.title,
      price: cls.price,
      imageUrl: cls.imageUrl
    });
  };

  return (
    <div className="animate-fade-in-up">
      <section className="py-20 md:py-32 bg-base">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading text-accent font-semibold">Nuestras Prácticas Semanales</h1>
            <p className="mt-6 text-xl text-base-text/80 leading-relaxed">
              Cada clase es una invitación a habitar tu cuerpo y calmar tu mente. No se requiere experiencia, solo presencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {classes.map((item) => (
              <div key={item.title} className="bg-base rounded-lg shadow-sm overflow-hidden group border border-black/5 flex flex-col">
                <div className="overflow-hidden aspect-[4/3] bg-stone-100 relative">
                  <img src={item.imageUrl} alt={`Ilustración de ${item.title}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-3xl font-heading font-bold text-base-text">{item.title}</h3>
                  <p className="mt-4 text-base-text/80 flex-grow leading-relaxed font-light">{item.description}</p>
                  <div className="mt-8">
                    <button 
                      onClick={() => handleBookClick(item)}
                      className="w-full border border-accent text-accent hover:bg-accent hover:text-white font-heading uppercase tracking-widest text-sm py-3 px-6 transition-all duration-300">
                      Ver Horarios
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassesPage;
