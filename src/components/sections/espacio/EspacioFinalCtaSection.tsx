import React from 'react';

const WHATSAPP_HREF =
  'https://wa.me/573212248261?text=' +
  encodeURIComponent(
    'Hola, quiero contarles qué me gustaría traer al espacio de Inner Spirit Studio.',
  );

const EspacioFinalCtaSection: React.FC = () => {
  return (
    <section
      aria-labelledby="espacio-final-title"
      className="is-page-section is-section--paper"
    >
      <div className="is-shell">
        <div
          className="is-surface relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <span className="is-eyebrow justify-center" style={{ color: '#4D6A6D' }}>
            Conversemos
          </span>
          <h2
            id="espacio-final-title"
            className="is-display mx-auto mt-6 max-w-3xl text-4xl sm:text-5xl md:text-6xl"
          >
            Cuéntanos qué quieres traer al espacio
          </h2>
          <p
            className="is-copy mx-auto mt-6 max-w-xl"
          >
            Un taller, una certificación, un retiro o un ritual: escríbenos y diseñamos
            juntos la mejor forma de habitar Inner Spirit Studio.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="is-action w-full sm:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.6a8.5 8.5 0 1 1 16.1-3.9Z" />
              </svg>
              Escribir por WhatsApp
            </a>
            <a
              href="mailto:hola@innerspiritstudio.com?subject=El%20Espacio%20%C2%B7%20Inner%20Spirit%20Studio"
              className="is-action is-action--ghost w-full sm:w-auto"
            >
              Enviar un correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspacioFinalCtaSection;
