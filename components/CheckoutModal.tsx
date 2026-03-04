
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CloseIcon } from '../constants';

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
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start p-4 overflow-y-auto">
            <div className="bg-base rounded-lg shadow-2xl w-full max-w-lg relative my-8 animate-fade-in-up border border-black/10">
                <div className="sticky top-0 bg-base p-6 border-b border-black/10 flex justify-between items-center rounded-t-lg z-10">
                    <h2 className="text-3xl font-heading text-accent font-bold">Tu carrito</h2>
                    <button onClick={toggleCheckoutModal} className="text-detail hover:text-base-text transition-colors duration-400" aria-label="Cerrar carrito">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="p-6">
                    {cart.length === 0 ? (
                        <p className="text-center text-base-text/70 py-12">Tu carrito está vacío.</p>
                    ) : (
                        <>
                            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                                {cart.map(item => (
                                    <div key={item.id} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-md object-cover"/>
                                            <div>
                                                <h4 className="font-semibold text-base-text">{item.name}</h4>
                                                <p className="text-sm text-detail">{item.details}</p>
                                                <p className="text-sm text-base-text font-medium">${item.price.toFixed(2)} x {item.quantity}</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item.id)} 
                                            className="text-stone hover:text-base-text text-sm font-semibold transition-colors"
                                            aria-label={`Quitar ${item.name} del carrito`}
                                        >
                                            Quitar
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-black/10 pt-4 flex justify-between items-center font-bold text-xl">
                                <span className="text-base-text">Total</span>
                                <span className="text-base-text">${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-2xl font-heading text-base-text font-bold mb-4">Información de Pago</h3>
                                <form onSubmit={handlePayment} className="space-y-4">
                                    <input type="text" placeholder="Nombre en la tarjeta" className="w-full p-3 border border-black/20 rounded-md focus:ring-accent focus:border-accent bg-base" required />
                                    <input type="email" placeholder="Correo electrónico" className="w-full p-3 border border-black/20 rounded-md focus:ring-accent focus:border-accent bg-base" required />
                                    <div className="bg-black/5 p-3 rounded-md">
                                       <p className="text-sm text-center text-detail">Simulación de pasarela de pago</p>
                                    </div>
                                    <button type="submit" className="w-full bg-accent hover:bg-opacity-80 text-white font-semibold py-3 rounded-md transition-colors text-lg">
                                        Pagar ${totalPrice.toFixed(2)}
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
