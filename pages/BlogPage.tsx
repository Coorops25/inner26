
import React from 'react';
import type { BlogPost } from '../types';
import { Illustration } from '../src/assets/Illustrations';

const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '5 Pasos para Iniciar tu Práctica',
      category: 'Meditación',
      excerpt: 'Descubre cómo incorporar la meditación en tu rutina para reducir el estrés y aumentar la claridad mental.',
      imageUrl: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop',
      illustrationName: 'meditation'
    },
    {
      id: 2,
      title: 'Yoga para Principiantes',
      category: 'Yoga',
      excerpt: 'Una guía de las posturas de yoga fundamentales que te ayudarán a construir una base sólida para tu práctica.',
      imageUrl: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop',
      illustrationName: 'yoga'
    },
    {
      id: 3,
      title: 'Alineando tus Chakras',
      category: 'Crecimiento Espiritual',
      excerpt: 'Aprende qué son los chakras y por qué mantenerlos en equilibrio es crucial para tu salud física y emocional.',
      imageUrl: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=800&auto=format&fit=crop',
      illustrationName: 'abstract-spirit'
    },
    {
      id: 4,
      title: 'Rituales de Luna Nueva',
      category: 'Crecimiento Espiritual',
      excerpt: 'Aprovecha la energía de la luna nueva con estos sencillos pero poderosos rituales para plantar las semillas de tus deseos.',
      imageUrl: 'https://images.unsplash.com/photo-1481819613568-3701cbc70156?q=80&w=800&auto=format&fit=crop',
      illustrationName: 'ritual'
    },
     {
      id: 5,
      title: 'Alimentación Consciente',
      category: 'Bienestar',
      excerpt: 'Explora cómo una alimentación consciente puede transformar tu energía y apoyar tu camino espiritual.',
      imageUrl: 'https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=800&auto=format&fit=crop',
      illustrationName: 'oil'
    }
  ];

const BlogPage: React.FC = () => {
    const handleReadMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert('Navegando al artículo completo...');
    };

  return (
    <div className="animate-fade-in-up">
        <section id="blog-page" className="py-20 md:py-32 bg-[#FBF9F6]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-heading text-accent font-semibold">Palabras para el Camino</h1>
                    <p className="mt-6 text-xl text-base-text/80 leading-relaxed">
                        Recursos, guías e inspiración para nutrir tu viaje interior.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                    <div className="overflow-hidden aspect-[3/2] bg-stone-50 mb-6 flex items-center justify-center">
                        {post.illustrationName ? (
                            <Illustration name={post.illustrationName} className="w-1/2 h-1/2 text-stone-300 group-hover:text-accent transition-colors duration-700" />
                        ) : (
                            <img src={post.imageUrl} alt={`Ilustración para ${post.title}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0" loading="lazy" referrerPolicy="no-referrer" />
                        )}
                    </div>
                    <div>
                        <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{post.category}</p>
                        <h3 className="text-2xl font-heading font-bold text-stone-900 leading-tight group-hover:text-stone-600 transition-colors">{post.title}</h3>
                        <p className="mt-3 text-stone-500 font-light leading-relaxed">{post.excerpt}</p>
                        <a href="#" onClick={handleReadMore} className="inline-block mt-4 text-sm font-semibold text-stone-900 border-b border-stone-300 hover:border-accent pb-0.5 transition-all">
                        Leer artículo
                        </a>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default BlogPage;
