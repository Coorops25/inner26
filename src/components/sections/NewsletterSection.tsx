
import React from 'react';
import Ribbons from '../effects/Ribbons';
import { useToast } from '../../context/ToastContext';

const NewsletterSection: React.FC = () => {
  const { showToast } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.querySelector('input[type="email"]') as HTMLInputElement)?.value ?? '';
    const text = encodeURIComponent(`Hola Inner Spirit, quiero unirme a la comunidad y recibir noticias. Mi correo es: ${email}`);
    showToast('Abriendo WhatsApp para confirmar tu suscripción...', 'success');
    setTimeout(() => window.open(`https://wa.me/573212248261?text=${text}`, '_blank'), 500);
    form.reset();
  };

  return (
    <section
      className="relative py-12 md:py-16 border-t overflow-hidden"
      style={{ background: '#EAE0CC', borderColor: '#D9D1C0' }}
    >
      {/* Animated ribbon waves as section background */}
      <div className="absolute inset-0">
        <Ribbons />
      </div>

      <div className="relative container mx-auto px-6 text-center max-w-3xl" style={{ zIndex: 10 }}>
        <span className="text-xs font-bold tracking-[0.25em] uppercase mb-3 block" style={{ color: '#4D6A6D' }}>
          Comunidad
        </span>
        <h2 className="text-3xl md:text-4xl font-heading mb-4" style={{ color: '#1A1A18' }}>
          Cartas desde la Calma
        </h2>
        <p className="text-base font-light mb-6 leading-relaxed" style={{ color: '#5C6B5C' }}>
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
