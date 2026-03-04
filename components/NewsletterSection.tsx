
import React from 'react';

const NewsletterSection: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Gracias por unirte.');
    };

    return (
        <section className="py-24 md:py-32 bg-stone-100 border-t border-stone-200">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-heading text-base-text mb-6">
                    Cartas desde la Calma
                </h2>
                <p className="text-lg text-stone-500 font-light mb-10 leading-relaxed">
                    Recibe inspiración, fechas de rituales y noticias de nuestra comunidad. <br className="hidden md:block"/>
                    Directamente a tu bandeja, sin ruido innecesario.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border-b border-stone-400 focus-within:border-accent transition-colors">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        required
                        className="flex-grow py-4 bg-transparent outline-none text-base-text placeholder-stone-400 text-lg"
                        aria-label="Correo electrónico"
                    />
                    <button
                        type="submit"
                        className="py-4 text-stone-400 hover:text-accent font-serif italic text-lg transition-colors"
                    >
                        Suscribirme
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSection;
