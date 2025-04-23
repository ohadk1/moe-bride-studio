import React from "react";
import { useLocation } from "react-router-dom";

interface LogoProps {
  small?: boolean;
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const showLightLogo = isHome && !isScrolled;

  const logoSrc = showLightLogo ? "/logo-light.webp" : "/logo-dark.webp";

  return (
    <img
      src={logoSrc}
      alt="M.O.E bride studio"
      className="h-10 w-auto md:h-12"
    />
  );
};

export default Logo;
