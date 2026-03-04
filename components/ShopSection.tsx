
import React, { useContext } from 'react';
import type { Product } from '../types';
import { CartContext } from '../context/CartContext';

const products: Product[] = [
  { id: 1, name: 'Cristal de Cuarzo', price: '15.00', imageUrl: 'https://images.unsplash.com/photo-1596464716127-f9a0639b936f?q=80&w=500&auto=format&fit=crop' },
  { id: 2, name: 'Incienso Natural', price: '8.00', imageUrl: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=500&auto=format&fit=crop' },
  { id: 3, name: 'Aceite Esencial', price: '12.00', imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5e84d85?q=80&w=500&auto=format&fit=crop' },
  { id: 4, name: 'Diario de Gratitud', price: '22.00', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500&auto=format&fit=crop' },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
    
  return (
  <div className="group relative">
    {/* Image Aspect 1:1 for clean grid */}
    <div className="aspect-square bg-[#FBF9F6] mb-6 overflow-hidden flex items-center justify-center relative">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        loading="lazy" 
      />
      
      {/* Quick Add Button showing on hover */}
      <button 
        onClick={() => addToCart({ id: `prod-${product.id}`, name: product.name, price: parseFloat(product.price), imageUrl: product.imageUrl, quantity: 1, type: 'product' })}
        className="absolute bottom-4 right-4 bg-base-text text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent z-10"
        aria-label="Añadir al carrito"
      >
        +
      </button>
    </div>
    
    <div className="flex justify-between items-start">
        <div>
            <h3 className="font-heading text-xl text-base-text group-hover:text-stone-600 transition-colors">{product.name}</h3>
            <p className="text-stone-500 text-sm mt-1 font-mono">${product.price}</p>
        </div>
    </div>
  </div>
);
}

const ShopSection: React.FC = () => {
    const { navigate } = useContext(CartContext);

  return (
    <section id="tienda" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">La Tienda</span>
          <h2 className="text-4xl md:text-5xl font-heading text-base-text text-center">Objetos de Poder</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button onClick={() => navigate('tienda')} className="text-base-text hover:text-accent border-b border-base-text hover:border-accent transition-colors pb-1 text-lg font-heading">
            Ver colección completa &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
