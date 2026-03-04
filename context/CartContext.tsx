
import React, { createContext, useState, ReactNode, useEffect } from 'react';
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
  page: string;
  navigate: (page: string) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const navigate = (targetPage: string) => {
    setPage(targetPage);
  };

  const addToCart = (item: CartItem) => {
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

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const openBookingModal = (details: BookingDetails) => {
    setBookingDetails(details);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setBookingDetails(null);
  };
  
  const toggleCheckoutModal = () => {
    setIsCheckoutModalOpen(prev => !prev);
  }

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
        page,
        navigate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
