
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const events = [
  {
    title: 'INNER DANCE',
    description: 'Un ritual contemporáneo para que el cuerpo hable sin palabras y el alma encuentre su ritmo. Solo tú, la música y la oscuridad amable.',
    date: 'Sábado, 7 de Octubre, 6:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    illustrationName: 'dance',
    price: 50,
  },
  {
    title: 'Círculo de Luna Llena',
    description: 'Un encuentro para compartir, meditar y soltar bajo la energía de la luna llena. Un espacio de conexión profunda con nosotras mismas y la comunidad.',
    date: 'Viernes, 20 de Octubre, 7:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=800&auto=format&fit=crop',
    illustrationName: 'ritual',
    price: 35,
  },
  {
    title: 'Taller de Escritura Intuitiva',
    description: 'Explora tu mundo interior a través de la palabra escrita. Un taller para desbloquear la creatividad y escuchar tu voz más auténtica, sin juicios ni expectativas.',
    date: 'Domingo, 29 de Octubre, 10:00 AM',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
    illustrationName: 'journal',
    price: 45,
  },
];

const EventsPage: React.FC = () => {
    const { openBookingModal } = useContext(CartContext);

    const handleBookClick = (event: typeof events[0]) => {
        openBookingModal({
          type: 'event',
          title: event.title,
          price: event.price,
          imageUrl: event.imageUrl,
          illustrationName: event.illustrationName
        });
      };

  return (
    <div className="animate-fade-in-up">
        <section id="eventos-page" className="py-20 md:py-32 bg-base">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-heading text-accent font-semibold">Rituales y Encuentros</h1>
                    <p className="mt-6 text-xl text-base-text/80 leading-relaxed">
                        Espacios creados para profundizar, compartir y transformar en comunidad.
                    </p>
                </div>
                <div className="space-y-16">
                    {events.map(event => (
                        <div key={event.title} className="bg-white rounded-sm shadow-sm md:flex items-stretch max-w-5xl mx-auto overflow-hidden border border-stone-100 group">
                            <div className="md:w-1/2 overflow-hidden relative min-h-[300px] flex items-center justify-center bg-stone-50">
                                {event.illustrationName ? (
                                  <Illustration name={event.illustrationName} className="w-1/2 h-1/2 text-stone-300 group-hover:text-accent transition-colors duration-700" />
                                ) : (
                                  <img src={event.imageUrl} alt={`Ilustración de ${event.title}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" referrerPolicy="no-referrer" />
                                )}
                                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                                <h3 className="text-4xl font-heading font-bold text-stone-900">{event.title}</h3>
                                <p className="mt-4 text-stone-600 leading-relaxed font-light text-lg">
                                {event.description}
                                </p>
                                <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between">
                                    <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
                                        {event.date}
                                    </span>
                                    <span className="font-heading text-xl text-stone-800">
                                        ${event.price}
                                    </span>
                                </div>
                                <div className="mt-8">
                                <button 
                                    onClick={() => handleBookClick(event)}
                                    className="bg-stone-900 text-white font-heading uppercase tracking-widest text-sm py-3 px-8 hover:bg-accent transition-colors duration-300 w-full md:w-auto">
                                    Reservar Lugar
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

export default EventsPage;
