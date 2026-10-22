"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Explore", href: "/destinations" },
  { label: "Trips", href: "/trips" },
  { label: "Stays", href: "/experiences" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isTransparent = isHomepage && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white"
            : "bg-surface-primary/95 backdrop-blur-md py-3.5 border-b border-border shadow-subtle text-content-primary"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <BrandLogo
              variant={isTransparent ? "light" : "auto"}
              showTagline={false}
              size="md"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-7 lg:space-x-9"
          >
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded",
                    isTransparent
                      ? isActive
                        ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white"
                        : "text-white/85 hover:text-white"
                      : isActive
                      ? "text-brand font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand"
                      : "text-content-secondary hover:text-content-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ThemeToggle isTransparent={isTransparent} />

            <Link
              href="/sign-in"
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isTransparent
                  ? "text-white/90 hover:text-white hover:bg-white/10 border border-white/25"
                  : "text-content-primary hover:text-brand hover:bg-surface-secondary border border-border"
              )}
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className="text-sm font-medium px-5 py-2 rounded-full bg-accent hover:bg-accent-hover text-white transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Join Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle isTransparent={isTransparent} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className={cn(
                "p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-content-primary hover:bg-surface-secondary"
              )}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-surface-primary shadow-2xl p-6 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between border-l border-border",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <BrandLogo size="sm" showTagline />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-content-secondary hover:text-content-primary rounded-lg hover:bg-surface-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-2">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                    isActive
                      ? "bg-surface-secondary text-brand font-semibold"
                      : "text-content-primary hover:bg-surface-secondary hover:text-brand"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-border flex flex-col space-y-3">
          <Link
            href="/sign-in"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 text-sm font-medium rounded-full border border-border text-content-primary hover:bg-surface-secondary transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 text-sm font-medium rounded-full bg-accent hover:bg-accent-hover text-white transition-colors shadow-sm"
          >
            Join Free
          </Link>
        </div>
      </div>
    </>
  );
}
