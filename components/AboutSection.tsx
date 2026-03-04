
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AboutSection: React.FC = () => {
    const { navigate } = useContext(CartContext);

    return (
        <section id="about" className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    
                    {/* Left: Text Content */}
                    <div className="lg:w-1/2 lg:pr-12 order-2 lg:order-1">
                        <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-6 block">Nuestra Esencia</span>
                        <h2 className="text-5xl md:text-6xl font-heading text-stone-900 leading-none mb-8">
                            Un espacio para <br/><span className="italic font-light text-accent">recordar</span>.
                        </h2>
                        
                        <div className="w-12 h-px bg-accent mb-8"></div>
                        
                        <div className="text-lg font-light text-stone-600 leading-relaxed space-y-6">
                            <p>
                                Inner Spirit no es un destino, es un punto de partida. Un santuario diseñado para soltar el ruido externo y reconectar con la sabiduría silenciosa que ya habita en ti.
                            </p>
                            <p>
                                Sostenido por una escucha profunda nutrida en la sanación y la presencia, nuestro propósito no es enseñarte algo nuevo, sino crear el espacio fértil para que tú misma te reveles.
                            </p>
                        </div>

                        <div className="mt-12">
                            <button 
                                onClick={() => navigate('nosotros')} 
                                className="text-stone-900 border-b border-stone-300 pb-1 hover:border-accent hover:text-accent transition-all duration-300 font-heading text-xl"
                            >
                                Conoce nuestra historia &rarr;
                            </button>
                        </div>
                    </div>

                    {/* Right: Image - Clean vertical aspect ratio */}
                    <div className="lg:w-1/2 order-1 lg:order-2 relative">
                        <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                             <img
                                src="https://images.unsplash.com/photo-1614730341194-75c60740a2d3?q=80&w=800&fit=crop"
                                alt="Abstract connection"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                loading="lazy"
                            />
                            {/* Decorative element */}
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#F5F0E6] z-10 hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
