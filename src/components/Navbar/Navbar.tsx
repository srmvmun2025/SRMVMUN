"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logoLeft from "../../assets/MUN_LOGO.png";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle hash navigation when page loads
  useEffect(() => {
    if (pathname.startsWith("/#") || pathname.startsWith("/")) {
      const hash = pathname.includes("#") ? pathname.split("#")[1] : "";
      if (hash) {
        // Use requestAnimationFrame for immediate execution after DOM update
        requestAnimationFrame(() => {
          scrollToHash(`#${hash}`, 500);
        });
      }
    }
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/committee", label: "Committees" },
    { href: "#portfolio", label: "Schedule" },
    { href: "/Background-Guide", label: "Background Guide" },
  ];

  const scrollToHash = (hash: string, duration = 900) => {
    if (!hash.startsWith("#")) return;
    const id = hash.slice(1);
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 96; // navbar height buffer
    const target =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;
    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, start + distance * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("/")) {
      // External page navigation - let Next.js handle it
      return;
    } else if (href.startsWith("#")) {
      // Hash navigation
      e.preventDefault();

      if (pathname === "/") {
        // Already on home page, just scroll
        scrollToHash(href, 1100);
      } else {
        // On different page, navigate to home page with hash immediately
        router.push(`/${href}`, { scroll: false });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-navbar-border bg-black backdrop-blur supports-[backdrop-filter]:bg-navbar">
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logoLeft}
                alt="Left Logo"
                className="object-contain"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className=" text-neutral-500 hover:text-[#efdb9e] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/srmvmun.png"
              alt="Right Logo"
              className="hidden md:block object-contain"
              width={70}
              height={70}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-navbar-link hover:text-navbar-link-hover transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" style={{ color: "var(--primary)" }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: "var(--primary)" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navbar-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navbar-link hover:text-navbar-link-hover transition-colors duration-200 font-medium px-4 py-2"
                  onClick={(e) => {
                    if (link.href.startsWith("/")) {
                      // External page navigation - let it navigate naturally
                      setIsMobileMenuOpen(false);
                    } else if (link.href.startsWith("#")) {
                      // Hash navigation
                      e.preventDefault();
                      setIsMobileMenuOpen(false);

                      if (pathname === "/") {
                        // Already on home page, just scroll
                        scrollToHash(link.href, 1100);
                      } else {
                        // On different page, navigate to home page with hash immediately
                        router.push(`/${link.href}`, { scroll: false });
                      }
                    }
                  }}
                  style={{ color: "var(--primary)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
