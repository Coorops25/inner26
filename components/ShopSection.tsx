
import React, { useContext } from 'react';
import type { Product } from '../types';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../src/assets/Illustrations';

const products: Product[] = [
  { id: 1, name: 'Cristal de Cuarzo',   price: '45.000', imageUrl: '', illustrationName: 'crystal'  },
  { id: 2, name: 'Incienso Natural',    price: '22.000', imageUrl: '', illustrationName: 'incense'  },
  { id: 3, name: 'Aceite Esencial',     price: '35.000', imageUrl: '', illustrationName: 'oil'      },
  { id: 4, name: 'Diario de Gratitud',  price: '65.000', imageUrl: '', illustrationName: 'journal'  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="group relative">
      <div
        className="aspect-square mb-6 overflow-hidden flex items-center justify-center relative transition-colors duration-500"
        style={{ background: '#F3EDE2' }}
      >
        <Illustration
          name={product.illustrationName ?? ''}
          className="w-1/2 h-1/2 transition-all duration-700 group-hover:scale-110"
          style={{ color: '#C9ADA1' } as React.CSSProperties}
        />

        {/* Quick add — always visible on touch, hover on desktop */}
        <button
          onClick={() => addToCart({
            id: `prod-${product.id}`,
            name: product.name,
            price: parseFloat(product.price.replace('.', '')),
            imageUrl: product.imageUrl,
            illustrationName: product.illustrationName,
            quantity: 1,
            type: 'product',
          })}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 z-10"
          style={{ background: '#4D6A6D' }}
          aria-label="Añadir al carrito"
        >
          +
        </button>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-heading text-xl transition-colors" style={{ color: '#252520' }}>{product.name}</h3>
          <p className="text-sm mt-1 font-mono" style={{ color: '#A0A083' }}>${product.price} COP</p>
        </div>
      </div>
    </div>
  );
};

const ShopSection: React.FC = () => {
  const { navigate } = useContext(CartContext);

  return (
    <section id="tienda" className="py-12 md:py-16" style={{ background: '#FAF7F2' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#A0A083' }}>
            La Tienda
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-center" style={{ color: '#252520' }}>
            Objetos de Poder
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/tienda"
            onClick={(e) => { e.preventDefault(); navigate('tienda'); }}
            className="font-heading text-lg pb-1 transition-all duration-300 inline-block"
            style={{ color: '#252520', borderBottom: '1px solid #A0A083' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#4D6A6D'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = '#4D6A6D'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#252520'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = '#A0A083'; }}
          >
            Ver colección completa &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
