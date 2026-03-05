
import React, { useContext } from 'react';
import type { Product } from '../types';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const products: Product[] = [
    { id: 1, name: 'Cristal de Cuarzo', price: '15.00', imageUrl: 'https://images.unsplash.com/photo-1596464716127-f9a0639b936f?q=80&w=600&auto=format&fit=crop', illustrationName: 'crystal' },
    { id: 2, name: 'Incienso Natural', price: '8.00', imageUrl: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=600&auto=format&fit=crop', illustrationName: 'incense' },
    { id: 3, name: 'Aceite Esencial', price: '12.00', imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5e84d85?q=80&w=600&auto=format&fit=crop', illustrationName: 'oil' },
    { id: 4, name: 'Diario de Gratitud', price: '22.00', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop', illustrationName: 'journal' },
    { id: 5, name: 'Vela de Soja', price: '18.00', imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop', illustrationName: 'candle' },
    { id: 6, name: 'Manta de Lino', price: '45.00', imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=600&auto=format&fit=crop', illustrationName: 'blanket' },
    { id: 7, name: 'Cuenco Tibetano', price: '60.00', imageUrl: 'https://images.unsplash.com/photo-1567332219356-d7a1ae5d34df?q=80&w=600&auto=format&fit=crop', illustrationName: 'bowl' },
    { id: 8, name: 'Palo Santo', price: '10.00', imageUrl: 'https://images.unsplash.com/photo-1602157796985-783457e4e08b?q=80&w=600&auto=format&fit=crop', illustrationName: 'palosanto' },
  ];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
        id: `prod-${product.id}`,
        name: product.name,
        price: parseFloat(product.price),
        imageUrl: product.imageUrl,
        illustrationName: product.illustrationName,
        quantity: 1,
        type: 'product',
    });
  };
    
  return (
    <div className="group text-center cursor-pointer">
        <div className="overflow-hidden rounded-sm aspect-square bg-[#FBF9F6] p-0 relative mb-4 flex items-center justify-center">
            {product.illustrationName ? (
                <Illustration name={product.illustrationName} className="w-1/2 h-1/2 text-stone-400 group-hover:text-accent transition-colors duration-500" />
            ) : (
                <img src={product.imageUrl} alt={`Foto de ${product.name}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" referrerPolicy="no-referrer" />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            
             {/* Floating Add Button */}
            <button 
                onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
                className="absolute bottom-4 right-4 bg-stone-900 text-white w-10 h-10 rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent shadow-lg"
                aria-label="Añadir"
            >
                +
            </button>
        </div>
        <h3 className="text-lg font-heading text-stone-800">{product.name}</h3>
        <p className="text-stone-500 font-mono text-sm mt-1">${product.price}</p>
    </div>
  );
}

const ShopPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
        <section id="tienda-page" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-heading text-accent font-semibold">Herramientas para la Presencia</h1>
                    <p className="mt-6 text-xl text-base-text/80 leading-relaxed">
                        Objetos simples y conscientes para acompañar tu práctica y rituales diarios.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-y-16">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default ShopPage;
