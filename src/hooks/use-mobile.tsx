
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Return false for SSR
    if (typeof window === 'undefined') return false;
    // On client, initialize with current window width
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    }
    
    // Check immediately on mount to prevent flash of incorrect layout
    setIsMobile(mql.matches);
    
    // Modern event listener syntax
    mql.addEventListener("change", onChange);
    
    // Cleanup listener on unmount
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
