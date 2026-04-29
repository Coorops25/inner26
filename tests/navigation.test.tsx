import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { CartProvider } from '../context/CartContext';
import { ToastProvider } from '../context/ToastContext';
import { NavigationProvider, useNavigation } from '../context/NavigationContext';

// Minimal consumer component to test navigate
const NavigationConsumer: React.FC = () => {
  const { page, navigate } = useNavigation();
  return (
    <div>
      <span data-testid="current-page">{page}</span>
      <button onClick={() => navigate('clases')}>Ir a Clases</button>
      <button onClick={() => navigate('eventos')}>Ir a Eventos</button>
      <button onClick={() => navigate('contacto')}>Ir a Contacto</button>
      <button onClick={() => navigate('home')}>Ir a Home</button>
    </div>
  );
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <NavigationProvider>
    <CartProvider>
      <ToastProvider>{children}</ToastProvider>
    </CartProvider>
  </NavigationProvider>
);

describe('Navigation', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('inicia en la página home', () => {
    render(<NavigationConsumer />, { wrapper: Wrapper });
    expect(screen.getByTestId('current-page').textContent).toBe('home');
  });

  it('navega a clases al hacer click', () => {
    render(<NavigationConsumer />, { wrapper: Wrapper });
    fireEvent.click(screen.getByText('Ir a Clases'));
    expect(screen.getByTestId('current-page').textContent).toBe('clases');
  });

  it('navega a eventos', () => {
    render(<NavigationConsumer />, { wrapper: Wrapper });
    fireEvent.click(screen.getByText('Ir a Eventos'));
    expect(screen.getByTestId('current-page').textContent).toBe('eventos');
  });

  it('navega a contacto', () => {
    render(<NavigationConsumer />, { wrapper: Wrapper });
    fireEvent.click(screen.getByText('Ir a Contacto'));
    expect(screen.getByTestId('current-page').textContent).toBe('contacto');
  });

  it('actualiza el pathname del navegador al navegar', () => {
    render(<NavigationConsumer />, { wrapper: Wrapper });
    fireEvent.click(screen.getByText('Ir a Clases'));
    expect(window.location.pathname).toBe('/clases');
  });

  it('detecta la página correcta desde la URL al iniciar', () => {
    window.history.pushState({}, '', '/blog');
    render(<NavigationConsumer />, { wrapper: Wrapper });
    expect(screen.getByTestId('current-page').textContent).toBe('blog');
  });
});
