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

const readingTime: Record<number, string> = {
  1: '4 min de lectura',
  2: '5 min de lectura',
  3: '6 min de lectura',
  4: '5 min de lectura',
  5: '6 min de lectura',
};

const BlogSection: React.FC = () => {
  const { navigate } = useNavigation();
  const goToBlog = (e: React.MouseEvent) => { e.preventDefault(); navigate('blog'); };

  const [featured, ...rest] = blogPosts;
  const secondary = rest.slice(0, 4);

  return (
    <section id="blog" className="is-section is-section--paper">
      <div className="is-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="is-eyebrow">Journal · Inner Spirit</span>
            <h2 className="is-display text-4xl md:text-5xl mt-5">
              Palabras para el camino
            </h2>
            <p className="is-copy mt-4 max-w-md">
              Lecturas pausadas sobre práctica, ritual y vida interior — para acompañarte entre una respiración y la siguiente.
            </p>
          </div>
          <a
            href="/blog"
            onClick={goToBlog}
            className="is-action is-action--ghost self-start sm:self-auto shrink-0"
          >
            Ver todo el journal &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured — dark surface */}
          {featured && (
            <a
              href="/blog"
              onClick={goToBlog}
              className="is-surface is-surface--dark is-surface--interactive group lg:col-span-7 flex flex-col overflow-hidden no-underline"
            >
              <div className="is-media-stage aspect-[16/10] w-full">
                <Illustration
                  name={featured.illustrationName ?? 'meditation'}
                  className="w-1/3 h-1/3 transition-transform duration-700 group-hover:scale-110"
                  style={{ color: '#C9ADA1' } as React.CSSProperties}
                />
              </div>
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: '#C9ADA1' }}>
                    Destacado
                  </span>
                  <span className="is-luxury-rule" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: '#8B9A8B' }}>
                    {featured.category}
                  </span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl leading-tight mb-3" style={{ color: '#FAF7F2' }}>
                  {featured.title}
                </h3>
                <p className="font-light leading-relaxed mb-6" style={{ color: 'rgba(234,224,204,0.72)' }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[12px] tracking-wide" style={{ color: '#798478' }}>
                  <span className="is-metric">{readingTime[featured.id]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold transition-colors group-hover:text-white" style={{ color: '#C9ADA1' }}>
                    Leer artículo &rarr;
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Secondary — compact editorial list */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {secondary.map((post) => (
              <a
                key={post.id}
                href="/blog"
                onClick={goToBlog}
                className="is-surface is-surface--interactive group flex items-center gap-4 p-4 no-underline"
              >
                <div className="is-media-stage shrink-0 w-20 h-20 rounded-sm overflow-hidden flex items-center justify-center">
                  <Illustration
                    name={post.illustrationName ?? 'meditation'}
                    className="w-2/5 h-2/5 transition-transform duration-700 group-hover:scale-110"
                    style={{ color: '#C9ADA1' } as React.CSSProperties}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-1 text-slate-is">
                    {post.category}
                  </p>
                  <h3 className="font-heading text-lg leading-snug text-ink transition-colors group-hover:text-slate-is">
                    {post.title}
                  </h3>
                  <p className="is-metric text-[11px] mt-1.5" style={{ color: '#798478' }}>
                    {readingTime[post.id]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
