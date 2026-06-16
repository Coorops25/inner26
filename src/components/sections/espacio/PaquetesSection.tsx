import React from 'react';

interface Paquete {
  readonly id: string;
  readonly badge: string;
  readonly name: string;
  readonly priceLine: string;
  readonly bullets: readonly string[];
  readonly featured: boolean;
  readonly whatsappMessage: string;
}

const WHATSAPP_BASE = 'https://wa.me/573212248261?text=';

const paquetes: readonly Paquete[] = [
  {
    id: 'taller-intimo',
    badge: 'Entrada',
    name: 'Taller íntimo',
    priceLine: 'Cotización · según fecha',
    bullets: [
      'Uso del estudio por jornada o media jornada',
      'Montaje base y ambientación cuidada',
      'Coordinación de cupos y confirmaciones',
    ],
    featured: false,
    whatsappMessage:
      'Hola, me interesa el paquete Taller íntimo en Inner Spirit Studio. ¿Podemos cotizar una fecha?',
  },
  {
    id: 'certificacion',
    badge: 'Más solicitado',
    name: 'Certificación',
    priceLine: 'A medida · requiere llamada',
    bullets: [
      'Espacio preparado para varios días',
      'Atmósfera serena y logística para grupos',
      'Acompañamiento de producción de principio a fin',
    ],
    featured: true,
    whatsappMessage:
      'Hola, quiero organizar una Certificación en Inner Spirit Studio. ¿Agendamos una llamada?',
  },
  {
    id: 'retiro-urbano',
    badge: 'Curado',
    name: 'Retiro urbano',
    priceLine: 'Diseño · por objetivo',
    bullets: [
      'Experiencia diseñada alrededor de tu intención',
      'Integración de rituales, pausa y La Candelaria',
      'Curaduría completa de la jornada y los detalles',
    ],
    featured: false,
    whatsappMessage:
      'Hola, sueño con un Retiro urbano en Inner Spirit Studio. ¿Podemos diseñarlo juntos?',
  },
];

const CheckIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="mt-0.5 h-4 w-4 shrink-0"
    fill="none"
    stroke={color}
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

const PaquetesSection: React.FC = () => {
  return (
    <section
      aria-labelledby="espacio-paquetes-title"
      className="is-page-section is-section--night"
    >
      <div className="is-shell">
        <div className="max-w-2xl">
          <span className="is-eyebrow" style={{ color: '#C9ADA1' }}>
            Cómo trabajamos
          </span>
          <h2
            id="espacio-paquetes-title"
            className="is-display is-display--light mt-6 text-4xl sm:text-5xl"
          >
            Propuestas, no precios de catálogo
          </h2>
          <p
            className="mt-6 text-base font-light leading-relaxed"
            style={{ color: 'rgba(234, 224, 204, 0.78)' }}
          >
            Sin precios inventados: cada propuesta se cotiza según fecha, duración,
            número de asistentes y necesidades de producción.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {paquetes.map((paquete) => {
            const accent = paquete.featured ? '#C9ADA1' : '#8B9A8B';
            return (
              <article
                key={paquete.id}
                className="is-surface is-surface--dark flex flex-col p-7"
                style={
                  paquete.featured
                    ? {
                        borderColor: 'rgba(201, 173, 161, 0.55)',
                        boxShadow: '0 28px 80px rgba(0, 0, 0, 0.35)',
                      }
                    : undefined
                }
                aria-label={paquete.featured ? `${paquete.name} (opción destacada)` : paquete.name}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
                    style={{
                      background: paquete.featured
                        ? 'rgba(201, 173, 161, 0.22)'
                        : 'rgba(139, 154, 139, 0.18)',
                      color: paquete.featured ? '#E4D6CB' : '#B6C2B6',
                    }}
                  >
                    {paquete.badge}
                  </span>
                  {paquete.featured && (
                    <span
                      className="is-luxury-rule"
                      style={{ background: '#C9ADA1' }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3
                  className="font-heading mt-6 text-3xl"
                  style={{ color: '#FAF7F2' }}
                >
                  {paquete.name}
                </h3>
                <p
                  className="is-metric mt-2 text-sm font-semibold uppercase tracking-[0.12em]"
                  style={{ color: accent }}
                >
                  {paquete.priceLine}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {paquete.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm font-light leading-relaxed"
                      style={{ color: 'rgba(234, 224, 204, 0.82)' }}
                    >
                      <CheckIcon color={accent} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(paquete.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`is-action mt-8 w-full ${paquete.featured ? '' : 'is-action--light'}`}
                  style={
                    paquete.featured
                      ? {
                          background: '#C9ADA1',
                          borderColor: '#C9ADA1',
                          color: '#1A1A18',
                        }
                      : undefined
                  }
                >
                  Cotizar este formato
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PaquetesSection;
