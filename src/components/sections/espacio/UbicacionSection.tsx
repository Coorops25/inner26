import React from 'react';

interface VisitStep {
  readonly index: string;
  readonly title: string;
  readonly description: string;
}

const visitSteps: readonly VisitStep[] = [
  {
    index: '01',
    title: 'Antes de llegar',
    description:
      'Coordinamos horario, acceso y recomendaciones para caminar el centro histórico con calma.',
  },
  {
    index: '02',
    title: 'Durante el evento',
    description:
      'El espacio queda listo y acompañado: tú sostienes la experiencia, nosotros los detalles.',
  },
  {
    index: '03',
    title: 'Después',
    description:
      'Cierre, seguimiento y un mapa de La Candelaria para seguir habitando el barrio con pausa.',
  },
];

const UbicacionSection: React.FC = () => {
  return (
    <section
      aria-labelledby="espacio-ubicacion-title"
      className="is-page-section is-section--sand"
    >
      <div className="is-shell">
        <div className="max-w-2xl">
          <span className="is-eyebrow" style={{ color: '#4D6A6D' }}>
            La Candelaria, Bogotá
          </span>
          <h2
            id="espacio-ubicacion-title"
            className="is-display mt-6 text-4xl sm:text-5xl"
          >
            Una pausa inesperada en el centro
          </h2>
          <p className="is-copy mt-6">
            Para turistas y locales, la ubicación aporta contexto: historia,
            caminabilidad, cultura y una pausa inesperada dentro del centro de Bogotá.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          {/* Stylized map card */}
          <div
            className="is-surface relative overflow-hidden min-h-[20rem]"
            role="img"
            aria-label="Mapa estilizado de la ubicación del estudio en La Candelaria, Bogotá"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(77,106,109,0.10) 1px, transparent 1px), linear-gradient(180deg, rgba(77,106,109,0.08) 1px, transparent 1px)',
                backgroundSize: '2.5rem 2.5rem',
              }}
            />
            {/* A diagonal "avenue" */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(118deg, transparent 46%, rgba(201,173,161,0.45) 46%, rgba(201,173,161,0.45) 49%, transparent 49%)',
              }}
            />

            {/* Pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span
                className="relative flex h-5 w-5 items-center justify-center"
                aria-hidden="true"
              >
                <span
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{ background: 'rgba(77, 106, 109, 0.25)', transform: 'scale(2.2)' }}
                />
                <span
                  className="relative inline-flex h-3 w-3 rounded-full ring-4"
                  style={{ background: '#4D6A6D', color: 'rgba(250,247,242,0.9)' }}
                />
              </span>
            </div>

            {/* Label card */}
            <div
              className="absolute bottom-5 left-5 right-5 rounded-md border p-4 sm:right-auto sm:max-w-xs"
              style={{
                borderColor: 'rgba(77, 106, 109, 0.18)',
                background: 'rgba(250, 247, 242, 0.92)',
                backdropFilter: 'blur(2px)',
              }}
            >
              <p
                className="is-metric text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: '#4D6A6D' }}
              >
                Inner Spirit Studio
              </p>
              <p
                className="font-heading mt-1 text-xl leading-snug"
                style={{ color: '#1A1A18' }}
              >
                La Candelaria · Bogotá
              </p>
              <p className="mt-1 text-sm font-light" style={{ color: '#5E675D' }}>
                Centro histórico, a pasos de plazas y calles caminables.
              </p>
            </div>
          </div>

          {/* Visit panel */}
          <div className="flex flex-col justify-center">
            <ol className="flex flex-col gap-4">
              {visitSteps.map((step) => (
                <li key={step.index} className="is-surface flex gap-5 p-6">
                  <span
                    className="is-metric font-heading text-3xl leading-none"
                    style={{ color: '#C9ADA1' }}
                    aria-hidden="true"
                  >
                    {step.index}
                  </span>
                  <div>
                    <h3
                      className="font-heading text-xl"
                      style={{ color: '#1A1A18' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-2 text-sm font-light leading-relaxed"
                      style={{ color: '#5E675D' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbicacionSection;
