
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

interface PracticeItem {
  type: 'class' | 'event' | 'service' | 'blog';
  title: string;
  description: string;
  illustrationName: string;
  price?: number;
  priceLabel?: string;
}

const practiceData: Record<string, PracticeItem[]> = {
  calma: [
    {
      type: 'class',
      title: 'Meditación',
      description: 'Sesiones guiadas para cultivar el silencio interior y la claridad mental.',
      illustrationName: 'meditation',
      price: 36000,
      priceLabel: '$36.000 COP',
    },
    {
      type: 'service',
      title: 'Sesión 1:1',
      description: 'Acompañamiento individual con escucha profunda y presencia plena.',
      illustrationName: 'abstract-spirit',
    },
  ],
  movimiento: [
    {
      type: 'class',
      title: 'Yoga Flow',
      description: 'Vinyasa, Hatha y Yin — unión de respiración y movimiento consciente.',
      illustrationName: 'yoga',
      price: 36000,
      priceLabel: '$36.000 COP',
    },
    {
      type: 'class',
      title: 'Breathwork',
      description: 'Técnicas de respiración para liberar tensiones y expandir la energía.',
      illustrationName: 'breathwork',
      price: 36000,
      priceLabel: '$36.000 COP',
    },
  ],
  conexion: [
    {
      type: 'event',
      title: 'Inner Dance',
      description: 'Ritual sonoro de expansión — danza interna, meditación musical y visual.',
      illustrationName: 'dance',
      price: 55000,
      priceLabel: '$55.000 COP',
    },
    {
      type: 'class',
      title: 'Sound Healing',
      description: 'Cuencos tibetanos, gong y campanas para armonizar cuerpo y mente.',
      illustrationName: 'sound-healing',
      price: 36000,
      priceLabel: '$36.000 COP',
    },
  ],
};

type Category = 'calma' | 'movimiento' | 'conexion';

const CategoryTab: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`pb-4 text-lg md:text-xl font-heading tracking-wide transition-all duration-300 border-b-2 ${active ? 'border-b-2' : 'border-transparent'}`}
    style={{
      color: active ? '#252520' : '#A0A083',
      borderBottomColor: active ? '#4D6A6D' : 'transparent',
    }}
  >
    {label}
  </button>
);

const PracticeCard: React.FC<{ item: PracticeItem }> = ({ item }) => {
  const { openBookingModal, navigate } = useContext(CartContext);

  const handleClick = () => {
    if (item.type === 'class' || item.type === 'event') {
      openBookingModal({
        type: item.type,
        title: item.title,
        price: item.price ?? 0,
        imageUrl: '',
        illustrationName: item.illustrationName,
      });
    } else if (item.type === 'service') navigate('consultorio');
    else if (item.type === 'blog') navigate('blog');
  };

  return (
    <div onClick={handleClick} className="group cursor-pointer">
      <div
        className="relative overflow-hidden aspect-[16/9] mb-5 flex items-center justify-center transition-colors duration-500"
        style={{ background: '#F3EDE2' }}
      >
        <Illustration
          name={item.illustrationName}
          className="w-1/3 h-1/3 transition-colors duration-700"
          style={{ color: '#C9ADA1' } as React.CSSProperties}
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-heading transition-colors duration-300" style={{ color: '#252520' }}>
            {item.title}
          </h3>
          <p className="font-light mt-1 text-sm leading-relaxed max-w-xs" style={{ color: '#798478' }}>
            {item.description}
          </p>
          {item.priceLabel && (
            <p className="text-xs font-mono mt-2" style={{ color: '#A0A083' }}>{item.priceLabel}</p>
          )}
        </div>
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#4D6A6D' }}>
          &rarr;
        </span>
      </div>
    </div>
  );
};

const FindYourPracticeSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('movimiento');

  return (
    <section className="py-32" style={{ background: '#FAF7F2' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-12" style={{ color: '#252520' }}>
            ¿Qué buscas hoy?
          </h2>
          <div className="flex justify-center gap-8 md:gap-16 border-b" style={{ borderColor: '#D9D1C0' }}>
            <CategoryTab label="Calma"       active={activeCategory === 'calma'}       onClick={() => setActiveCategory('calma')} />
            <CategoryTab label="Movimiento"  active={activeCategory === 'movimiento'}  onClick={() => setActiveCategory('movimiento')} />
            <CategoryTab label="Conexión"    active={activeCategory === 'conexion'}    onClick={() => setActiveCategory('conexion')} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 animate-fade-in-up">
          {practiceData[activeCategory].map((item, idx) => (
            <PracticeCard key={`${activeCategory}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindYourPracticeSection;
