
import { Link } from 'react-router-dom';

interface LogoProps {
  small?: boolean;
}

const Logo = ({ small = false }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center">
      <div className={`transition-all duration-300 ${small ? 'w-32' : 'w-48'}`}>
        <img
          src="/lovable-uploads/54a5aac8-0195-4889-aa6f-65f63e267b8f.png"
          alt="M.O.E bride studio"
          className="w-full h-auto"
        />
      </div>
    </Link>
  );
};

export default Logo;
