
import React, { useContext } from 'react';
import type { BlogPost } from '../types';
import { CartContext } from '../context/CartContext';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Pasos para Iniciar tu Práctica',
    category: 'Meditación',
    excerpt: 'Descubre cómo incorporar la meditación en tu rutina.',
    imageUrl: 'https://images.unsplash.com/photo-1601758178112-731c3b24e6b2?q=80&w=700',
  },
  {
    id: 2,
    title: 'Yoga: Posturas Esenciales',
    category: 'Yoga',
    excerpt: 'Una guía de las posturas fundamentales para tu base.',
    imageUrl: 'https://images.unsplash.com/photo-1617634667999-968538b3257f?q=80&w=700',
  },
  {
    id: 3,
    title: 'Alineando la Energía Vital',
    category: 'Crecimiento Espiritual',
    excerpt: 'Por qué el equilibrio energético es crucial para tu salud.',
    imageUrl: 'https://images.unsplash.com/photo-1599383636454-322677805299?q=80&w=700',
  },
];

const BlogSection: React.FC = () => {
    const { navigate } = useContext(CartContext);

  return (
    <section id="blog" className="py-32 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-baseline mb-16">
            <h2 className="text-4xl font-heading text-stone-900">Journal</h2>
            <button onClick={() => navigate('blog')} className="text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-accent transition-colors">
                Ver Todo
            </button>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group flex flex-col md:flex-row gap-8 items-center cursor-pointer border-b border-stone-100 pb-12 last:border-0">
               {/* Image - reduced visual weight */}
              <div className="w-full md:w-1/3 aspect-[3/2] overflow-hidden bg-stone-50">
                <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
                    loading="lazy" 
                />
              </div>
              
              {/* Content */}
              <div className="w-full md:w-2/3">
                <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">{post.category}</span>
                <h3 className="text-3xl font-heading text-stone-900 group-hover:text-stone-600 transition-colors mb-3">
                    {post.title}
                </h3>
                <p className="text-stone-500 font-light leading-relaxed mb-4 max-w-lg">
                    {post.excerpt}
                </p>
                <span className="text-sm border-b border-stone-300 pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">Leer Artículo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
