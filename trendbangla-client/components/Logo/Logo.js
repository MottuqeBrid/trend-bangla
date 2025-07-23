import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      {/* Logo Image */}
      <div className="relative">
        <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/logo.png"
            alt="Trend Bangla Logo"
            width={40}
            height={40}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        {/* Small accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-white"></div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-base-content tracking-tight">
          Trend
        </span>
        <span className="text-sm font-medium text-primary opacity-80">
          Bangla
        </span>
      </div>
    </Link>
  );
};

export default Logo;
