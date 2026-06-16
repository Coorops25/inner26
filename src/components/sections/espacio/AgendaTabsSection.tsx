import React, { useRef, useState } from 'react';

interface ScheduleRow {
  readonly time: string;
  readonly title: string;
  readonly description: string;
  readonly status: string;
}

interface AgendaTab {
  readonly id: string;
  readonly label: string;
  readonly rows: readonly ScheduleRow[];
}

const tabs: readonly AgendaTab[] = [
  {
    id: 'clases',
    label: 'Clases',
    rows: [
      {
        time: 'Lun · Vie',
        title: 'Yoga y meditación para todos los niveles',
        description: 'Práctica abierta para empezar el día con respiración y movimiento.',
        status: 'Confirmar cupo',
      },
      {
        time: 'Mar · Jue',
        title: 'Movimiento consciente',
        description: 'Secuencias suaves para reconectar cuerpo, atención y pausa.',
        status: 'Por agenda',
      },
      {
        time: 'Sáb',
        title: 'Práctica restaurativa',
        description: 'Una sesión lenta para descansar el sistema nervioso.',
        status: 'Por agenda',
      },
    ],
  },
  {
    id: 'workshops',
    label: 'Workshops',
    rows: [
      {
        time: 'Por fecha',
        title: 'Taller de bienestar para grupos',
        description: 'Jornadas temáticas diseñadas para equipos y comunidades.',
        status: 'Cotizar',
      },
      {
        time: 'Intensivo',
        title: 'Certificación o intensivo',
        description: 'Formaciones de varios días con atmósfera serena y preparada.',
        status: 'Cotizar',
      },
    ],
  },
  {
    id: 'rituales',
    label: 'Rituales',
    rows: [
      {
        time: 'A medida',
        title: 'Ritual para viajeros wellness',
        description: 'Una experiencia para habitar La Candelaria desde la pausa.',
        status: 'Diseñar',
      },
      {
        time: 'Por temporada',
        title: 'Círculos y meditaciones temáticas',
        description: 'Ceremonias y encuentros íntimos con acompañamiento.',
        status: 'Consultar',
      },
    ],
  },
];

const AgendaTabsSection: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        focusTab(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
      default:
        break;
    }
  };

  const activeTab = tabs[selected] ?? tabs[0];

  return (
    <section
      aria-labelledby="espacio-agenda-title"
      className="is-page-section is-section--paper"
    >
      <div className="is-shell">
        <div className="max-w-2xl">
          <span className="is-eyebrow" style={{ color: '#4D6A6D' }}>
            Agenda viva
          </span>
          <h2
            id="espacio-agenda-title"
            className="is-display mt-6 text-4xl sm:text-5xl"
          >
            Lo que puede habitar el espacio
          </h2>
          <p className="is-copy mt-6">
            Una muestra del ritmo del estudio. Cada propuesta se confirma según
            disponibilidad, fecha y tipo de encuentro.
          </p>
        </div>

        <div className="mt-12">
          <div
            role="tablist"
            aria-label="Tipos de agenda"
            aria-orientation="horizontal"
            className="flex flex-wrap gap-2 border-b"
            style={{ borderColor: 'rgba(77, 106, 109, 0.16)' }}
          >
            {tabs.map((tab, index) => {
              const isActive = index === selected;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  id={`agenda-tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`agenda-panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setSelected(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="font-heading min-h-11 px-5 pb-3 pt-2 text-lg md:text-xl tracking-wide transition-colors duration-300 border-b-2 -mb-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-is"
                  style={{
                    color: isActive ? '#1A1A18' : '#798478',
                    borderColor: isActive ? '#4D6A6D' : 'transparent',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {tabs.map((tab, index) => {
            const isActive = index === selected;
            return (
              <div
                key={tab.id}
                id={`agenda-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`agenda-tab-${tab.id}`}
                hidden={!isActive}
                tabIndex={0}
                className="pt-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-is"
              >
                {isActive && (
                  <ul className="flex flex-col gap-3">
                    {(activeTab?.rows ?? []).map((row, rowIndex) => (
                      <li
                        key={`${tab.id}-${rowIndex}`}
                        className="is-surface flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                      >
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                          <span
                            className="is-metric shrink-0 text-xs font-bold uppercase tracking-[0.16em] sm:w-28"
                            style={{ color: '#4D6A6D' }}
                          >
                            {row.time}
                          </span>
                          <div>
                            <h3
                              className="font-heading text-xl leading-tight"
                              style={{ color: '#1A1A18' }}
                            >
                              {row.title}
                            </h3>
                            <p
                              className="mt-1 text-sm font-light leading-relaxed"
                              style={{ color: '#5E675D' }}
                            >
                              {row.description}
                            </p>
                          </div>
                        </div>
                        <span
                          className="inline-flex shrink-0 items-center self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] sm:self-center"
                          style={{
                            background: 'rgba(139, 154, 139, 0.16)',
                            color: '#5C6B5C',
                          }}
                        >
                          {row.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgendaTabsSection;
