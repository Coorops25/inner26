
import React, { useContext } from 'react';
import type { Product } from '../../../types';
import { CartContext } from '../../../context/CartContext';
import { useNavigation } from '../../../context/NavigationContext';
import { Illustration } from '../../../assets/Illustrations';

const products: Product[] = [
  { id: 1, name: 'Cristal de Cuarzo',   price: '45.000', imageUrl: '', illustrationName: 'crystal'  },
  { id: 2, name: 'Incienso Natural',    price: '22.000', imageUrl: '', illustrationName: 'incense'  },
  { id: 3, name: 'Aceite Esencial',     price: '35.000', imageUrl: '', illustrationName: 'oil'      },
  { id: 4, name: 'Diario de Gratitud',  price: '65.000', imageUrl: '', illustrationName: 'journal'  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="is-surface is-surface--interactive group relative flex flex-col overflow-hidden">
      <div className="is-media-stage aspect-square overflow-hidden flex items-center justify-center relative">
        <Illustration
          name={product.illustrationName ?? ''}
          className="w-1/2 h-1/2 transition-all duration-700 group-hover:scale-110"
          style={{ color: '#C9ADA1' } as React.CSSProperties}
        />

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
          className="absolute bottom-4 right-4 min-h-11 min-w-11 rounded-full flex items-center justify-center text-white text-lg font-bold md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-within:opacity-100 md:group-focus-within:translate-y-0 transition-all duration-300 z-10 bg-slate-is shadow-lg"
          aria-label={`Añadir ${product.name} al carrito`}
        >
          +
        </button>
      </div>

      <div className="flex justify-between items-start gap-3 p-5">
        <h3 className="font-heading text-xl leading-tight transition-colors text-ink group-hover:text-slate-is">{product.name}</h3>
        <p className="is-metric text-sm font-mono whitespace-nowrap text-muted">${product.price}</p>
      </div>
    </div>
  );
};

const ShopSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="tienda" className="is-section is-section--paper">
      <div className="is-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="is-eyebrow">La Tienda · Objetos conscientes</span>
            <h2 className="is-display text-4xl md:text-5xl mt-5">
              Objetos para tu ritual
            </h2>
            <p className="is-copy mt-4 max-w-md">
              Piezas escogidas con cuidado para acompañar la práctica: madera, mineral, aroma y textil que sostienen la presencia dentro y fuera del estudio.
            </p>
          </div>
          <a
            href="/tienda"
            onClick={(e) => { e.preventDefault(); navigate('tienda'); }}
            className="is-action is-action--ghost self-start sm:self-auto shrink-0"
          >
            Ver colección completa &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
