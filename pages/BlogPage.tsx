
import React, { useEffect } from 'react';
import type { BlogPost } from '../types';
import { Illustration } from '../src/assets/Illustrations';
import { useToast } from '../context/ToastContext';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Pasos para Iniciar tu Práctica de Meditación',
    category: 'Meditación',
    excerpt: 'La meditación no requiere experiencia previa — solo la disposición de sentarte contigo mismo unos minutos al día.',
    imageUrl: '',
    illustrationName: 'meditation',
  },
  {
    id: 2,
    title: 'Yoga para Principiantes: Posturas Esenciales',
    category: 'Yoga',
    excerpt: 'Una guía de las posturas fundamentales de Hatha Yoga para construir una base sólida y consciente.',
    imageUrl: '',
    illustrationName: 'yoga',
  },
  {
    id: 3,
    title: 'Alineando tu Energía Vital con los Chakras',
    category: 'Crecimiento Espiritual',
    excerpt: 'Aprende qué son los chakras y cómo mantenerlos en equilibrio para tu salud física y emocional.',
    imageUrl: '',
    illustrationName: 'abstract-spirit',
  },
  {
    id: 4,
    title: 'Rituales de Luna Nueva: Sembrando Intenciones',
    category: 'Crecimiento Espiritual',
    excerpt: 'Aprovecha la energía renovadora de la luna nueva con estos rituales simples para plantar las semillas de tus deseos.',
    imageUrl: '',
    illustrationName: 'ritual',
  },
  {
    id: 5,
    title: 'Breathwork: El Arte de Respirar con Consciencia',
    category: 'Bienestar',
    excerpt: 'La respiración es la herramienta más accesible para transformar tu energía. Descubre las técnicas más usadas en el studio.',
    imageUrl: '',
    illustrationName: 'breathwork',
  },
];

const BlogPage: React.FC = () => {
  const { showToast } = useToast();
  useEffect(() => {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog - Inner Spirit Studio",
      "description": "Artículos sobre yoga, meditación, crecimiento espiritual y bienestar integral.",
      "url": "https://innerspirit.co/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Inner Spirit Studio",
        "url": "https://innerspirit.co"
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(blogSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const handleReadMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showToast('Artículo próximamente disponible.', 'info');
  };

  return (
    <div className="animate-fade-in-up">
      <section id="blog-page" className="py-20 md:py-32" style={{ background: '#FAF7F2' }}>
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#4D6A6D' }}>
              Journal
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold" style={{ color: '#4D6A6D' }}>
              Palabras para el Camino
            </h1>
            <p className="mt-6 text-xl font-light leading-relaxed" style={{ color: '#798478' }}>
              Recursos, guías e inspiración para nutrir tu viaje interior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div
                  className="overflow-hidden aspect-[3/2] mb-6 flex items-center justify-center transition-colors duration-500"
                  style={{ background: '#EAE0CC' }}
                >
                  <Illustration
                    name={post.illustrationName ?? 'meditation'}
                    className="w-2/5 h-2/5 transition-all duration-700 group-hover:scale-110"
                    style={{ color: '#C9ADA1' } as React.CSSProperties}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#4D6A6D' }}>
                    {post.category}
                  </p>
                  <h3 className="text-2xl font-heading font-bold leading-tight mb-3 transition-colors" style={{ color: '#252520' }}>
                    {post.title}
                  </h3>
                  <p className="font-light leading-relaxed mb-4" style={{ color: '#798478' }}>
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    onClick={handleReadMore}
                    className="inline-block text-sm font-semibold pb-0.5 transition-all"
                    style={{ color: '#252520', borderBottom: '1px solid #C9ADA1' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#4D6A6D'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = '#4D6A6D'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#252520'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = '#C9ADA1'; }}
                  >
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
