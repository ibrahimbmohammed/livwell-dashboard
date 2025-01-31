import Image from 'next/image';
import Link from 'next/link';
import logo from "@assets/png/livewell.png";

interface DashboardLogoProps {
  className: string;
}

const Logo = ({ className }: DashboardLogoProps) => {
  return (
    <Link href="/">
      <button>
        <Image
          src={logo.src}
          alt="org-logo"
          className={`cursor-pointer object-cover ${className}`}
          height="40"
          width="41"
        />
      </button>
    </Link>
  );
};

export default Logo;
