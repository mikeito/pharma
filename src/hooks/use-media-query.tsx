'use client';

import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    updateMatches(); // Initial check

    const mediaQueryListener = () => {
      updateMatches();
    };

    mediaQuery.addListener(mediaQueryListener);

    return () => {
      mediaQuery.removeListener(mediaQueryListener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
