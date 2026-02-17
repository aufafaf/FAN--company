/**
 * useMediaQuery Hook
 * Responsive breakpoint detection
 */

import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/lib/constants";

// export function useMediaQuery(query: string): boolean {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);

//     // Set initial value
//     setMatches(media.matches);

//     // Create listener
//     const listener = (event: MediaQueryListEvent) => {
//       setMatches(event.matches);
//     };

//     // Add listener
//     media.addEventListener("change", listener);

//     return () => {
//       media.removeEventListener("change", listener);
//     };
//   }, [query]);

//   return matches;
// }

export function useMediaQuery(query: string): boolean {
  const getMatch = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}


// Convenient breakpoint hooks
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`);
}

export function useIsTablet() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`);
}

export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
}

export function useBreakpoint() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return {
    isMobile,
    isTablet,
    isDesktop,
    breakpoint: isMobile ? "mobile" : isTablet ? "tablet" : "desktop",
  };
}
