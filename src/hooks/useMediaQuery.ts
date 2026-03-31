import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useMediaQuery = (breakpoint: Breakpoint): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const checkMatch = () => {
      setMatches(window.innerWidth >= breakpoints[breakpoint]);
    };

    checkMatch();
    
    const listener = () => checkMatch();
    window.addEventListener('resize', listener);
    
    return () => window.removeEventListener('resize', listener);
  }, [breakpoint]);

  return matches;
};

export const useIsMobile = (): boolean => useMediaQuery('md');
export const useIsTablet = (): boolean => useMediaQuery('lg');
export const useIsDesktop = (): boolean => useMediaQuery('xl');
