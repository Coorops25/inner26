export type PageName = 
  | 'home' 
  | 'nosotros' 
  | 'clases' 
  | 'eventos' 
  | 'consultorio' 
  | 'tienda' 
  | 'blog' 
  | 'contacto';

export const PAGE_TO_PATH: Record<PageName, string> = {
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
  return found?.[0] ?? 'home';
};

export const pageToPath = (page: PageName): string => PAGE_TO_PATH[page];
