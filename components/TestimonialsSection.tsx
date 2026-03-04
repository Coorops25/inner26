
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: 1, name: 'Ana Lucía', quote: 'Un espacio de paz que no sabía que necesitaba.', rating: 5 },
  { id: 2, name: 'Carlos M.', quote: 'La sanación energética me devolvió la claridad.', rating: 5 },
  { id: 3, name: 'Sofía Rojas', quote: 'Cada evento es una experiencia que te recarga.', rating: 5 },
  { id: 4, name: 'Javier P.', quote: 'El ambiente hace que meditar sea accesible y profundo.', rating: 5 },
  { id: 5, name: 'Isabella G.', quote: 'Danza holística: mi terapia semanal indispensable.', rating: 5 },
];

const TestimonialsSection: React.FC = () => {
    // Duplicate array for infinite loop illusion
    const loop = [...testimonials, ...testimonials, ...testimonials];

    return (
    <section className="py-24 bg-stone-900 text-stone-300 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 text-center">
             <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">Comunidad</span>
        </div>
        
        <div className="relative w-full">
             <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .marquee-content {
                    display: flex;
                    width: fit-content;
                    animation: marquee 60s linear infinite;
                }
                .marquee-content:hover {
                    animation-play-state: paused;
                }
                `}
            </style>
            <div className="marquee-content">
                {loop.map((t, i) => (
                    <div key={i} className="w-[400px] md:w-[600px] px-8 md:px-16 flex flex-col justify-center items-center text-center flex-shrink-0">
                        <p className="font-heading text-2xl md:text-3xl text-white leading-relaxed mb-6">"{t.quote}"</p>
                        <p className="font-sans text-sm tracking-widest text-accent uppercase">{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default TestimonialsSection;
