import React from 'react';

interface UseCase {
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const useCases: readonly UseCase[] = [
  {
    index: '01',
    title: 'Talleres permanentes',
    description:
      'Para facilitadores que necesitan un espacio estable, cuidado y reconocible en Bogotá.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" {...strokeProps}>
        <path d="M4 19V7l8-4 8 4v12" />
        <path d="M4 19h16" />
        <path d="M9 19v-5h6v5" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Certificaciones',
    description:
      'Jornadas de formación con una atmósfera serena, clara y preparada para grupos.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" {...strokeProps}>
        <circle cx="12" cy="9" r="5" />
        <path d="M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Turismo wellness',
    description:
      'Experiencias para visitantes que quieren vivir La Candelaria desde el cuerpo y la pausa.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" {...strokeProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Rituales privados',
    description:
      'Ceremonias, círculos, meditaciones y encuentros diseñados con acompañamiento.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6" {...strokeProps}>
        <path d="M12 3c2.5 2.5 4 5 4 8a4 4 0 0 1-8 0c0-3 1.5-5.5 4-8Z" />
        <path d="M9.5 20.5h5" />
      </svg>
    ),
  },
];

const ParaQuienSection: React.FC = () => {
  return (
    <section
      aria-labelledby="espacio-paraquien-title"
      className="is-page-section is-section--paper"
    >
      <div className="is-shell">
        <div className="max-w-2xl">
          <span className="is-eyebrow" style={{ color: '#4D6A6D' }}>
            Para quién es
          </span>
          <h2
            id="espacio-paraquien-title"
            className="is-display mt-6 text-4xl sm:text-5xl"
          >
            Una base para producir encuentros con identidad local
          </h2>
          <p className="is-copy mt-6">
            No es solo un calendario de clases: es una base para producir encuentros
            wellness con identidad local, en el corazón histórico de Bogotá.
          </p>
        </div>

        <div className="is-luxury-rule mt-12 mb-10" />

        <ul className="is-card-grid lg:[grid-template-columns:repeat(4,minmax(0,1fr))]">
          {useCases.map((item) => (
            <li
              key={item.index}
              className="is-surface is-surface--interactive flex flex-col p-7"
            >
              <div className="flex items-center justify-between">
                <span
                  className="is-metric text-sm font-semibold tracking-[0.18em]"
                  style={{ color: '#A0A083' }}
                >
                  {item.index}
                </span>
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: 'rgba(77, 106, 109, 0.08)', color: '#4D6A6D' }}
                >
                  {item.icon}
                </span>
              </div>
              <h3
                className="font-heading mt-6 text-2xl leading-tight"
                style={{ color: '#1A1A18' }}
              >
                {item.title}
              </h3>
              <p
                className="mt-3 text-sm font-light leading-relaxed"
                style={{ color: '#5E675D' }}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ParaQuienSection;
