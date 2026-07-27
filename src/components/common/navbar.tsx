"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/works" },
    { name: "Team", href: "/teams" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 h-24 flex items-center px-6 md:px-12 lg:px-16 z-50">
      
      {/* Logo (Left) */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="flex items-center">
          <img 
            src="/logo/logo.png" 
            alt="Mango Peel Ads" 
            className="h-10 md:h-12 lg:h-14 w-auto object-contain" 
          />
        </Link>
      </div>

      {/* Navigation Links (Center) */}
      <div className="hidden md:flex flex-none items-center justify-center gap-6 lg:gap-10">
        {navLinks.map((link) => {
          // Normalize paths for matching
          const isActive = 
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative py-2 text-[14px] lg:text-[15px] transition-colors duration-300"
            >
              <span className={isActive ? "text-[#0F172A] font-bold" : "text-[#334155] font-medium hover:text-[#0F172A]"}>
                {link.name}
              </span>
              
              {/* Active Indicator */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FFB800] rounded-full" />
              )}
            </Link>
          );
        })}
      </div>

      {/* CTA Button (Right) */}
      <div className="flex-1 flex justify-end">
        <Link 
          href="/contact"
          className="flex items-center gap-2 bg-[#1A3626] text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-full text-[13px] lg:text-[14px] font-semibold tracking-wide hover:bg-[#12271b] transition-all duration-300 hover:shadow-lg"
        >
          Let's Talk
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </Link>
      </div>
      
    </nav>
  );
}
