
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const classes = [
  {
    title: 'Yoga',
    subtitle: 'Unión y Respiración',
    description: 'Fluye con tu respiración y encuentra el equilibrio.',
    imageUrl: 'https://images.unsplash.com/photo-1599447421405-0e32096d30fd?q=80&w=800&auto=format&fit=crop',
    illustrationName: 'yoga',
    price: 25,
  },
  {
    title: 'Meditación',
    subtitle: 'Silencio Interior',
    description: 'Cultiva la paz interior y la claridad mental.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    illustrationName: 'meditation',
    price: 20,
  },
  {
    title: 'Danza Holística',
    subtitle: 'Expresión Libre',
    description: 'Libera tensiones y expresa tu ser auténtico.',
    imageUrl: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=800&auto=format&fit=crop',
    illustrationName: 'dance',
    price: 30,
  },
];

const ClassesSection: React.FC = () => {
  const { openBookingModal } = useContext(CartContext);

  const handleBookClick = (cls: typeof classes[0]) => {
    openBookingModal({
      type: 'class',
      title: cls.title,
      price: cls.price,
      imageUrl: cls.imageUrl,
      illustrationName: cls.illustrationName
    });
  };

  return (
    <section id="clases" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-100 pb-10">
           <div>
             <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">Práctica Diaria</span>
             <h2 className="text-5xl font-heading text-base-text mt-4">Ritmo Semanal</h2>
           </div>
           <p className="max-w-md text-stone-500 font-light mt-6 md:mt-0 text-right md:text-left">
             No necesitas experiencia previa. Solo la disposición de estar presente y habitar tu cuerpo.
           </p>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {classes.map((item, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => handleBookClick(item)}>
              
              {/* Image Container */}
              <div className="relative overflow-hidden w-full aspect-[3/4] mb-6 bg-stone-50 flex items-center justify-center">
                {item.illustrationName ? (
                  <Illustration name={item.illustrationName} className="w-1/2 h-1/2 text-stone-300 group-hover:text-accent transition-colors duration-700" />
                ) : (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                    loading="lazy" 
                    referrerPolicy="no-referrer"
                  />
                )}
                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 flex items-center justify-center">
                   <button className="bg-white/90 backdrop-blur-sm text-base-text px-6 py-3 font-heading text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                     Ver Horarios
                   </button>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-heading text-base-text group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-stone-400 mt-2 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
