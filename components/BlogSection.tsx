
import React, { useContext } from 'react';
import type { BlogPost } from '../types';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Pasos para Iniciar tu Práctica de Meditación',
    category: 'Meditación',
    excerpt: 'La meditación no requiere experiencia previa — solo la disposición de sentarte contigo mismo un momento al día.',
    imageUrl: '',
    illustrationName: 'meditation',
  },
  {
    id: 2,
    title: 'Yoga: Posturas Esenciales para tu Base',
    category: 'Yoga',
    excerpt: 'Una guía de las posturas fundamentales de Hatha y Vinyasa para construir una práctica sólida y consciente.',
    imageUrl: '',
    illustrationName: 'yoga',
  },
  {
    id: 3,
    title: 'Breathwork: El Arte de Respirar con Consciencia',
    category: 'Bienestar',
    excerpt: 'La respiración es la herramienta más poderosa que tienes. Descubre cómo el breathwork puede transformar tu energía.',
    imageUrl: '',
    illustrationName: 'breathwork',
  },
];

const BlogSection: React.FC = () => {
  const { navigate } = useContext(CartContext);

  return (
    <section id="blog" className="py-12 md:py-16 border-t" style={{ background: '#FAF7F2', borderColor: '#EAE0CC' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl md:text-4xl font-heading" style={{ color: '#1A1A18' }}>Journal</h2>
          <button
            onClick={() => navigate('blog')}
            className="text-sm font-bold uppercase tracking-widest transition-colors"
            style={{ color: '#A0A083' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#4D6A6D'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#A0A083'; }}
          >
            Ver Todo
          </button>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col md:flex-row gap-8 items-center cursor-pointer pb-8 border-b last:border-0"
              style={{ borderColor: '#EAE0CC' }}
              onClick={() => navigate('blog')}
            >
              {/* Illustration */}
              <div
                className="w-full md:w-1/3 aspect-[3/2] overflow-hidden flex items-center justify-center transition-colors duration-500"
                style={{ background: '#EAE0CC' }}
              >
                <Illustration
                  name={post.illustrationName ?? 'meditation'}
                  className="w-2/5 h-2/5 transition-all duration-700 group-hover:scale-110"
                  style={{ color: '#C9ADA1' } as React.CSSProperties}
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: '#4D6A6D' }}>
                  {post.category}
                </span>
                <h3 className="text-3xl font-heading mb-3 transition-colors" style={{ color: '#252520' }}>
                  {post.title}
                </h3>
                <p className="font-light leading-relaxed mb-4 max-w-lg" style={{ color: '#798478' }}>
                  {post.excerpt}
                </p>
                <span
                  className="text-sm pb-0.5 transition-all"
                  style={{ borderBottom: '1px solid #C9ADA1', color: '#A0A083' }}
                >
                  Leer Artículo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
