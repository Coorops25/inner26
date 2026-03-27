import React from 'react';
import { useEventInstagramFeed } from '../hooks/useEventInstagramFeed';
import type { StudioEvent } from '../types';

interface EventInstagramFeedProps {
  event: StudioEvent;
  onReserveFromPost: () => void;
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('es-CO', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(`${value}T12:00:00`));

const EventInstagramFeed: React.FC<EventInstagramFeedProps> = ({ event, onReserveFromPost }) => {
  const { posts, isLoading } = useEventInstagramFeed(event);
  const profileUrl =
    (import.meta.env.VITE_IG_PROFILE_URL as string | undefined) ??
    'https://instagram.com/innerspirit_studio';

  return (
    <section className="mt-12" aria-label={`Publicaciones de Instagram para ${event.title}`}>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#4D6A6D' }}>
            Instagram por Evento
          </span>
          <h4 className="text-2xl md:text-3xl font-heading mt-2" style={{ color: '#252520' }}>
            Publicaciones activas de {event.title}
          </h4>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest"
          style={{ color: '#798478' }}
        >
          Ver perfil completo
        </a>
      </div>

      {isLoading && (
        <p className="text-sm mb-4" style={{ color: '#798478' }}>
          Actualizando publicaciones...
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-sm overflow-hidden border flex flex-col"
            style={{ borderColor: 'rgba(121,132,120,0.2)', background: '#FAF7F2' }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={post.imageUrl}
                alt={`Publicacion del evento ${event.title}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col gap-4 flex-grow">
              <p className="text-xs uppercase tracking-[0.18em]" style={{ color: '#A0A083' }}>
                Publicado {formatDate(post.publishDate)}
              </p>
              <p className="text-sm leading-relaxed flex-grow" style={{ color: '#252520' }}>
                {post.caption}
              </p>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={onReserveFromPost}
                  className="text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full transition-opacity hover:opacity-90"
                  style={{ background: '#4D6A6D', color: '#EAE0CC' }}
                >
                  {post.ctaLabel ?? 'Reservar'}
                </button>
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em]"
                  style={{ color: '#798478' }}
                >
                  Ver IG
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EventInstagramFeed;
