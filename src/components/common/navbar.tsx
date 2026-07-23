import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-md flex items-center justify-between px-8 z-50 text-white">
      <div className="font-bold text-xl">
        <Link href="/">Mango Peel Ads</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/teams" className="hover:underline">Teams</Link>
        <Link href="/works" className="hover:underline">Works</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
