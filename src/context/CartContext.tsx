
import React, { createContext, useState, ReactNode } from 'react';
import type { CartItem, BookingDetails } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  isBookingModalOpen: boolean;
  bookingDetails: BookingDetails | null;
  openBookingModal: (details: BookingDetails) => void;
  closeBookingModal: () => void;
  isCheckoutModalOpen: boolean;
  toggleCheckoutModal: () => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const addToCart = (item: CartItem): void => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (itemId: string): void => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = (): void => {
    setCart([]);
  };

  const openBookingModal = (details: BookingDetails): void => {
    setBookingDetails(details);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = (): void => {
    setIsBookingModalOpen(false);
    setBookingDetails(null);
  };
  
  const toggleCheckoutModal = (): void => {
    setIsCheckoutModalOpen(prev => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isBookingModalOpen,
        bookingDetails,
        openBookingModal,
        closeBookingModal,
        isCheckoutModalOpen,
        toggleCheckoutModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
