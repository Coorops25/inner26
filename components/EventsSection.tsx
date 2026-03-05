
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const eventDetails = {
    title: 'INNER DANCE',
    subtitle: 'RITUAL DE LUNA NUEVA',
    description: `No es una fiesta. Es un ritual contemporáneo.
    Una noche para soltar lo que cargas, para que el cuerpo hable sin palabras.
    
    No hay coreografía. No hay miradas.
    Solo tú, la música y la oscuridad amable.`,
    date: 'Sábado, 7 de Octubre — 6:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200',
    illustrationName: 'dance',
    price: 50,
}

const EventsSection: React.FC = () => {
    const { openBookingModal } = useContext(CartContext);

    return (
    <section id="eventos" className="py-32 bg-[#F5F0E6]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-stretch min-h-[600px]">
          
          {/* Image Side */}
          <div className="md:w-1/2 relative overflow-hidden group flex items-center justify-center bg-stone-50">
            {eventDetails.illustrationName ? (
              <Illustration name={eventDetails.illustrationName} className="w-1/2 h-1/2 text-stone-300 group-hover:text-accent transition-colors duration-700" />
            ) : (
              <img 
                  src={eventDetails.imageUrl} 
                  alt="Inner Dance" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" 
                  loading="lazy" 
                  referrerPolicy="no-referrer"
              />
            )}
          </div>

          {/* Text Side */}
          <div className="md:w-1/2 bg-stone-900 text-stone-200 flex flex-col justify-center p-12 md:p-20 relative">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
              Próximo Encuentro
            </span>
            
            <h3 className="text-5xl md:text-7xl font-heading text-white mb-2 leading-none">
              {eventDetails.title}
            </h3>
            <p className="text-stone-400 font-serif italic text-xl mb-8">
              {eventDetails.subtitle}
            </p>

            <div className="w-12 h-px bg-stone-700 mb-8"></div>

            <p className="text-lg font-light leading-relaxed whitespace-pre-line mb-12 opacity-90">
              {eventDetails.description}
            </p>

            <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <span className="text-white font-mono text-sm tracking-wide border border-stone-700 px-4 py-2 rounded-full">
                    {eventDetails.date}
                </span>
                <button 
                    onClick={() => openBookingModal({ type: 'event', title: eventDetails.title, price: eventDetails.price, imageUrl: eventDetails.imageUrl })}
                    className="text-white border-b border-accent pb-1 hover:text-accent transition-colors font-heading text-xl"
                >
                    Reservar Lugar &rarr;
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
