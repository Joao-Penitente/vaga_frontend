import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return <Image src="/logo.svg" width={160} height={24} alt="logo" className={className} />;
}
