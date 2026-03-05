
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CloseIcon } from '../constants';
import { Illustration } from '../src/assets/Illustrations';

const CheckoutModal: React.FC = () => {
  const { isCheckoutModalOpen, toggleCheckoutModal, cart, removeFromCart, clearCart } = useContext(CartContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isCheckoutModalOpen) return null;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias. Tu lugar ha sido reservado.');
    clearCart();
    toggleCheckoutModal();
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-start p-4 overflow-y-auto">
      <div
        className="rounded-sm shadow-2xl w-full max-w-lg relative my-8 animate-fade-in-up border"
        style={{ background: '#EAE0CC', borderColor: 'rgba(160,160,131,0.25)' }}
      >
        {/* Header */}
        <div
          className="sticky top-0 p-6 border-b flex justify-between items-center z-10 rounded-t-sm"
          style={{ background: '#EAE0CC', borderColor: 'rgba(160,160,131,0.25)' }}
        >
          <h2 className="text-3xl font-heading font-bold" style={{ color: '#252520' }}>
            Tu carrito
          </h2>
          <button
            onClick={toggleCheckoutModal}
            className="transition-colors"
            style={{ color: '#A0A083' }}
            aria-label="Cerrar carrito"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {cart.length === 0 ? (
            <p className="text-center py-12 text-lg" style={{ color: '#A0A083' }}>
              Tu carrito está vacío.
            </p>
          ) : (
            <>
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-14 h-14 rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"
                        style={{ background: '#F3EDE2' }}
                      >
                        <Illustration
                          name={item.illustrationName ?? 'abstract-spirit'}
                          className="w-1/2 h-1/2"
                          style={{ color: '#C9ADA1' } as React.CSSProperties}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm" style={{ color: '#252520' }}>{item.name}</h4>
                        {item.details && (
                          <p className="text-xs" style={{ color: '#A0A083' }}>{item.details}</p>
                        )}
                        <p className="text-xs font-mono mt-0.5" style={{ color: '#798478' }}>
                          ${item.price.toLocaleString('es-CO')} × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-semibold uppercase tracking-wider transition-colors"
                      style={{ color: '#A0A083' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#252520'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#A0A083'; }}
                      aria-label={`Quitar ${item.name}`}
                    >
                      Quitar
                    </button>
                  </div>
                ))}
              </div>

              <div
                className="border-t pt-4 flex justify-between items-center font-bold text-lg mb-8"
                style={{ borderColor: 'rgba(160,160,131,0.3)', color: '#252520' }}
              >
                <span>Total</span>
                <span className="font-mono">${totalPrice.toLocaleString('es-CO')} COP</span>
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4" style={{ color: '#252520' }}>
                Información de Pago
              </h3>
              <form onSubmit={handlePayment} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full p-3 rounded-sm outline-none text-sm"
                  style={{ border: '1px solid rgba(160,160,131,0.4)', background: '#F3EDE2', color: '#252520' }}
                  required
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-3 rounded-sm outline-none text-sm"
                  style={{ border: '1px solid rgba(160,160,131,0.4)', background: '#F3EDE2', color: '#252520' }}
                  required
                />
                <div
                  className="p-3 rounded-sm text-center"
                  style={{ background: 'rgba(77,106,109,0.08)' }}
                >
                  <p className="text-xs" style={{ color: '#798478' }}>Simulación de pasarela de pago</p>
                </div>
                <button
                  type="submit"
                  className="w-full font-semibold py-3 rounded-sm transition-all text-sm uppercase tracking-widest hover:opacity-90"
                  style={{ background: '#4D6A6D', color: '#EAE0CC' }}
                >
                  Confirmar pago · ${totalPrice.toLocaleString('es-CO')} COP
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
