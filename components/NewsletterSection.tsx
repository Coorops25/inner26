
import React from 'react';

const NewsletterSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por unirte a nuestra comunidad.');
  };

  return (
    <section className="py-16 md:py-20 border-t" style={{ background: '#EAE0CC', borderColor: '#D9D1C0' }}>
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-[0.25em] uppercase mb-4 block" style={{ color: '#4D6A6D' }}>
          Comunidad
        </span>
        <h2 className="text-4xl md:text-5xl font-heading mb-6" style={{ color: '#252520' }}>
          Cartas desde la Calma
        </h2>
        <p className="text-lg font-light mb-8 leading-relaxed" style={{ color: '#798478' }}>
          Recibe inspiración, fechas de rituales y noticias de nuestra comunidad.<br className="hidden md:block" />
          Directamente a tu bandeja, sin ruido innecesario.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border-b transition-colors focus-within:border-opacity-100"
          style={{ borderColor: '#A0A083' }}
        >
          <input
            type="email"
            placeholder="Tu correo electrónico"
            required
            className="flex-grow py-4 bg-transparent outline-none text-lg placeholder-stone-400"
            style={{ color: '#252520' }}
            aria-label="Correo electrónico"
          />
          <button
            type="submit"
            className="py-4 font-serif italic text-lg transition-colors"
            style={{ color: '#798478' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#4D6A6D'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#798478'; }}
          >
            Suscribirme
          </button>
        </form>
        <p className="text-xs mt-6" style={{ color: '#A0A083' }}>
          Sin spam. Solo lo que nutre. Siempre puedes darte de baja.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
