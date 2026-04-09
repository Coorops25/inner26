
import React from 'react';

const testimonials = [
  { id: 1, name: 'Forrest N.', quote: 'Really beautiful, relaxing space to practice yoga. Tiago is very welcoming.', origin: 'Google Reviews' },
  { id: 2, name: 'Ana L.', quote: 'Un refugio para aquellos que buscan un espacio acogedor y espiritual. La atmósfera es tranquila y serena.', origin: 'Google Reviews' },
  { id: 3, name: 'Carlos M.', quote: 'La sanación energética me devolvió la claridad. Un espacio que sana desde adentro.', origin: 'Google Reviews' },
  { id: 4, name: 'Sofía R.', quote: 'Cada evento es una experiencia que te recarga el alma. Inner Dance cambió mi relación con mi cuerpo.', origin: 'Google Reviews' },
  { id: 5, name: 'Isabella G.', quote: 'La danza holística se convirtió en mi terapia semanal indispensable. Lo recomiendo a todos.', origin: 'Google Reviews' },
  { id: 6, name: 'Javier P.', quote: 'El ambiente hace que meditar sea accesible y profundo. Los profes son increíbles.', origin: 'Google Reviews' },
];

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#C9ADA1">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection: React.FC = () => {
  const loop = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 md:py-16 overflow-hidden border-t" style={{ background: '#121210', borderColor: 'rgba(77,106,109,0.15)' }}>
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#4D6A6D' }}>Comunidad</span>
        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="text-3xl font-heading" style={{ color: '#C9ADA1' }}>4.9</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#C9ADA1">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm" style={{ color: '#798478' }}>143+ reseñas en Google</span>
        </div>
      </div>

      <div className="relative w-full">
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .marquee-content {
            display: flex;
            width: fit-content;
            animation: marquee 70s linear infinite;
          }
          .marquee-content:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="marquee-content">
          {loop.map((t, i) => (
            <div key={i} className="w-[360px] md:w-[520px] px-8 md:px-12 flex flex-col items-center text-center flex-shrink-0">
              <StarRating />
              <p className="font-heading text-xl md:text-2xl text-white leading-relaxed mb-5">"{t.quote}"</p>
              <p className="font-sans text-xs tracking-widest uppercase" style={{ color: '#A0A083' }}>{t.name}</p>
              <p className="text-[10px] mt-1" style={{ color: '#4D6A6D' }}>{t.origin}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
