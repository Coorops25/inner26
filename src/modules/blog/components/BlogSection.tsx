import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import { Illustration } from '../../../assets/Illustrations';
import type { BlogPost } from '../../../types';

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
    excerpt: 'La respiración es la herramienta más accesible para transformar tu energía. Descubre las técnicas más usadas en el estudio.',
    imageUrl: '',
    illustrationName: 'breathwork',
  },
];

const BlogSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="blog" className="py-12 md:py-16 border-t border-base bg-cream">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">Journal</h2>
          <a
            href="/blog"
            onClick={(e) => { e.preventDefault(); navigate('blog'); }}
            className="text-sm font-bold uppercase tracking-widest transition-colors text-muted hover:text-slate-is"
          >
            Ver Todo
          </a>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href="/blog"
              onClick={(e) => { e.preventDefault(); navigate('blog'); }}
              className="group flex flex-col md:flex-row gap-8 items-center cursor-pointer pb-8 border-b border-base last:border-0 no-underline"
            >
              <div className="w-full md:w-1/3 aspect-[3/2] overflow-hidden flex items-center justify-center transition-colors duration-500 bg-base">
                <Illustration
                  name={post.illustrationName ?? 'meditation'}
                  className="w-1/2 h-1/2 transition-all duration-700 group-hover:scale-110"
                  style={{ color: '#C9ADA1' } as React.CSSProperties}
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-slate-is">
                  {post.category}
                </p>
                <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight mb-3 transition-colors text-ink">
                  {post.title}
                </h3>
                <p className="font-light leading-relaxed mb-4 text-muted-light">
                  {post.excerpt}
                </p>
                <span className="inline-block text-sm font-semibold pb-0.5 text-ink border-b border-accent group-hover:text-slate-is group-hover:border-slate-is transition-all">
                  Leer artículo
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
