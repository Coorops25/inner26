import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import ParaQuienSection from '../components/sections/espacio/ParaQuienSection';
import EspacioBreakdownSection from '../components/sections/espacio/EspacioBreakdownSection';
import AgendaTabsSection from '../components/sections/espacio/AgendaTabsSection';
import PaquetesSection from '../components/sections/espacio/PaquetesSection';
import UbicacionSection from '../components/sections/espacio/UbicacionSection';
import EspacioFinalCtaSection from '../components/sections/espacio/EspacioFinalCtaSection';

const HERO_WHATSAPP_HREF =
  'https://wa.me/573212248261?text=' +
  encodeURIComponent(
    'Hola, quiero conocer El Espacio de Inner Spirit Studio para un encuentro wellness.',
  );

const EspacioPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="animate-fade-in-up">
      {/* Hero / intro */}
      <section
        aria-labelledby="espacio-hero-title"
        className="is-page-section is-section--paper"
      >
        <div className="is-shell">
          <div className="max-w-3xl">
            <span className="is-eyebrow" style={{ color: '#4D6A6D' }}>
              La Candelaria, Bogotá
            </span>
            <h1
              id="espacio-hero-title"
              className="is-display mt-6 text-[2.75rem] leading-[0.98] sm:text-6xl md:text-7xl"
            >
              Un espacio para habitar la práctica, no solo tomar una clase.
            </h1>
            <p className="is-page-lead mt-8 max-w-2xl">
              Inner Spirit Studio recibe clases permanentes, workshops, certificaciones,
              rituales y experiencias de turismo wellness en el corazón histórico de
              Bogotá.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={HERO_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="is-action w-full sm:w-auto"
              >
                Reservar el espacio
              </a>
              <a
                href="/contacto"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('contacto');
                }}
                className="is-action is-action--ghost w-full sm:w-auto"
              >
                Conversar una idea
              </a>
            </div>

            <div className="is-luxury-rule mt-12" />
          </div>
        </div>
      </section>

      <ParaQuienSection />
      <EspacioBreakdownSection />
      <AgendaTabsSection />
      <PaquetesSection />
      <UbicacionSection />
      <EspacioFinalCtaSection />
    </div>
  );
};

export default EspacioPage;
