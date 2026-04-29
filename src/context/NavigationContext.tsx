
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PageName =
  | 'home'
  | 'nosotros'
  | 'clases'
  | 'eventos'
  | 'consultorio'
  | 'tienda'
  | 'blog'
  | 'contacto'
  | '404';

export const PAGE_TO_PATH: Record<PageName, string> = {
  '404': '/404',
  home: '/',
  nosotros: '/nosotros',
  clases: '/clases',
  eventos: '/eventos',
  consultorio: '/consultorio',
  tienda: '/tienda',
  blog: '/blog',
  contacto: '/contacto',
};

export const pathToPage = (pathname: string): PageName => {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const found = (Object.entries(PAGE_TO_PATH) as Array<[PageName, string]>).find(
    ([, path]) => path === normalizedPath
  );
  return found?.[0] ?? '404';
};

export const pageToPath = (page: PageName): string => PAGE_TO_PATH[page];

interface NavigationContextType {
  page: PageName;
  navigate: (page: PageName) => void;
}

const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<PageName>(() => {
    if (typeof window === 'undefined') return 'home';
    return pathToPage(window.location.pathname);
  });

  const navigate = (targetPage: PageName): void => {
    if (page === targetPage) return;

    const performNavigation = () => {
      setPage(targetPage);
      if (typeof window !== 'undefined') {
        const targetPath = pageToPath(targetPage);
        if (window.location.pathname !== targetPath) {
          window.history.pushState({ page: targetPage }, '', targetPath);
        }
        window.scrollTo(0, 0);
      }
    };

    // Support for View Transitions API
    if (document.startViewTransition) {
      document.startViewTransition(performNavigation);
    } else {
      performNavigation();
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const targetPage = pathToPage(window.location.pathname);
      if (document.startViewTransition) {
        document.startViewTransition(() => setPage(targetPage));
      } else {
        setPage(targetPage);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <NavigationContext.Provider value={{ page, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
