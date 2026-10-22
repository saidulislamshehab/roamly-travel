import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Compass } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-primary border-t border-border mt-auto pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" showTagline />
            <p className="text-sm text-content-secondary max-w-sm leading-relaxed">
              ROAMLY is a travel discovery platform that helps people discover
              extraordinary destinations, explore curated journeys, compare travel
              packages, and plan lifelong memories.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ROAMLY on Instagram"
                className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center text-content-secondary hover:text-brand hover:bg-brand/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ROAMLY on X"
                className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center text-content-secondary hover:text-brand hover:bg-brand/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ROAMLY on Facebook"
                className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center text-content-secondary hover:text-brand hover:bg-brand/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ROAMLY on YouTube"
                className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center text-content-secondary hover:text-brand hover:bg-brand/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Vintage adventure badge inspired by reference */}
            <div className="pt-4 inline-flex items-center gap-3 px-3.5 py-2 rounded-xl border border-dashed border-border bg-surface-secondary/60">
              <Compass className="w-5 h-5 text-brand" />
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-content-primary">
                  Explore & Belong
                </p>
                <p className="text-[11px] text-content-secondary">
                  Curated journeys for mindful explorers
                </p>
              </div>
            </div>
          </div>

          {/* Column: Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-content-primary mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/destinations"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  All Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/trips"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Featured Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Travel Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Travel Guides & Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-content-primary mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  About ROAMLY
                </Link>
              </li>
              <li>
                <Link
                  href="/about#philosophy"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#careers"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Support & Trust */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-content-primary mb-4">
              Travel Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/contact#faq"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/trips"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Trip Planning Process
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-content-secondary hover:text-brand transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-content-secondary gap-4">
          <p>© {currentYear} ROAMLY Inc. All rights reserved. Go Somewhere New.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-brand transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              Terms
            </Link>
            <span className="text-[11px] text-mutedIcon bg-surface-secondary px-2.5 py-1 rounded-full">
              Demo Prototype v1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
