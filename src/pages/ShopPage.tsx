
import React, { useContext } from 'react';
import type { Product } from '../types';
import { CartContext } from '../context/CartContext';
import { Illustration } from '../assets/Illustrations';

const products: Product[] = [
  { id: 1, name: 'Cristal de Cuarzo',   price: '45.000', imageUrl: '', illustrationName: 'crystal'   },
  { id: 2, name: 'Incienso Natural',    price: '22.000', imageUrl: '', illustrationName: 'incense'   },
  { id: 3, name: 'Aceite Esencial',     price: '35.000', imageUrl: '', illustrationName: 'oil'       },
  { id: 4, name: 'Diario de Gratitud',  price: '65.000', imageUrl: '', illustrationName: 'journal'   },
  { id: 5, name: 'Vela de Soja',        price: '48.000', imageUrl: '', illustrationName: 'candle'    },
  { id: 6, name: 'Manta de Lino',       price: '120.000', imageUrl: '', illustrationName: 'blanket'  },
  { id: 7, name: 'Cuenco Tibetano',     price: '160.000', imageUrl: '', illustrationName: 'bowl'     },
  { id: 8, name: 'Palo Santo',          price: '28.000', imageUrl: '', illustrationName: 'palosanto' },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="group text-center cursor-pointer">
      <div
        className="overflow-hidden rounded-sm aspect-square relative mb-5 flex items-center justify-center transition-colors duration-500"
        style={{ background: '#F3EDE2' }}
      >
        <Illustration
          name={product.illustrationName ?? ''}
          className="w-1/2 h-1/2 transition-all duration-700 group-hover:scale-110"
          style={{ color: '#C9ADA1' } as React.CSSProperties}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart({
              id: `prod-${product.id}`,
              name: product.name,
              price: parseFloat(product.price.replace('.', '')),
              imageUrl: product.imageUrl,
              illustrationName: product.illustrationName,
              quantity: 1,
              type: 'product',
            });
          }}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 shadow-lg"
          style={{ background: '#4D6A6D' }}
          aria-label="Añadir"
        >
          +
        </button>
      </div>
      <h3 className="text-lg font-heading" style={{ color: '#252520' }}>{product.name}</h3>
      <p className="font-mono text-sm mt-1" style={{ color: '#A0A083' }}>${product.price} COP</p>
    </div>
  );
};

const ShopPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <section id="tienda-page" className="py-20 md:py-32" style={{ background: '#FAF7F2' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#4D6A6D' }}>
              La Tienda
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-semibold" style={{ color: '#4D6A6D' }}>
              Herramientas para la Presencia
            </h1>
            <p className="mt-6 text-xl font-light leading-relaxed" style={{ color: '#798478' }}>
              Objetos conscientes para acompañar tu práctica y rituales diarios.
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
