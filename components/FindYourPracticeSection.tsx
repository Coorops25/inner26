
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

interface PracticeItem {
    type: 'class' | 'event' | 'service' | 'blog';
    title: string;
    description: string;
    imageUrl: string;
    price?: number;
}

const practiceData: Record<string, PracticeItem[]> = {
  calma: [
    {
      type: 'class',
      title: 'Meditación',
      description: 'Cultiva el silencio interior y la claridad mental.',
      imageUrl: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop',
      price: 20,
    },
    {
      type: 'service',
      title: 'Sesión 1:1',
      description: 'Espacio individual de escucha profunda.',
      imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop',
    },
  ],
  movimiento: [
    {
      type: 'class',
      title: 'Yoga Flow',
      description: 'Unión de respiración y movimiento consciente.',
      imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop',
      price: 25,
    },
    {
      type: 'class',
      title: 'Danza Libre',
      description: 'Expresión auténtica sin coreografías.',
      imageUrl: 'https://images.unsplash.com/photo-1535525266644-dc287837c803?q=80&w=800&auto=format&fit=crop',
      price: 30,
    },
  ],
  conexion: [
    {
      type: 'event',
      title: 'Inner Dance',
      description: 'Ritual sonoro de expansión de consciencia.',
      imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
      price: 50,
    },
    {
      type: 'blog',
      title: 'Chakras',
      description: 'Guía para equilibrar tus centros de energía.',
      imageUrl: 'https://images.unsplash.com/photo-1505569197939-22019fab07ad?q=80&w=700',
    },
  ],
};

type Category = 'calma' | 'movimiento' | 'conexion';

const CategoryTab: React.FC<{label: string, active: boolean, onClick: () => void}> = ({ label, active, onClick }) => (
    <button 
        onClick={onClick}
        className={`pb-4 text-lg md:text-xl font-heading tracking-wide transition-all duration-300 border-b-2 ${
            active 
            ? 'text-stone-900 border-accent' 
            : 'text-stone-400 border-transparent hover:text-stone-600'
        }`}
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
                imageUrl: item.imageUrl,
            });
        } else if (item.type === 'service') navigate('consultorio');
        else if (item.type === 'blog') navigate('blog');
    };

    return (
        <div onClick={handleClick} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[16/9] mb-4 bg-stone-100">
                <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-heading text-stone-900 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-stone-500 font-light mt-1 text-sm">{item.description}</p>
                </div>
                <span className="text-accent text-xl group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </div>
        </div>
    );
};

const FindYourPracticeSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('movimiento');

    return (
        <section className="py-32 bg-[#FBF9F6]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-heading text-stone-900 mb-12">¿Qué buscas hoy?</h2>
                    <div className="flex justify-center gap-8 md:gap-16 border-b border-stone-200">
                        <CategoryTab label="Calma" active={activeCategory === 'calma'} onClick={() => setActiveCategory('calma')} />
                        <CategoryTab label="Movimiento" active={activeCategory === 'movimiento'} onClick={() => setActiveCategory('movimiento')} />
                        <CategoryTab label="Conexión" active={activeCategory === 'conexion'} onClick={() => setActiveCategory('conexion')} />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up">
                    {practiceData[activeCategory].map((item, idx) => (
                        <PracticeCard key={`${activeCategory}-${idx}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FindYourPracticeSection;
