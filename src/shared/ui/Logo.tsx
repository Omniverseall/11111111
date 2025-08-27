import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-8 h-8", 
  width = 32, 
  height = 32 
}) => {
  return (
    <Image
      src="/logo.svg"
      alt="EdoLine Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};