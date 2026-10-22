"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { TravelSearchPanel } from "./TravelSearchPanel";

export function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Framed Scenic Hero Card Matching Reference 3 */}
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-12 lg:p-16 shadow-2xl border border-black/10">
        {/* Background Image Container with Alpine Mountain Lake & Road */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85"
            alt="Scenic alpine road trip through majestic peaks, turquoise lake, and evergreen pines"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[center_55%]"
          />
          {/* Subtle directional gradients for crisp contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl pt-6 sm:pt-10">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>Your Next Adventure Starts Here</span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md"
          >
            Find Your Next <br />
            <span className="text-white/95">Escape</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-5 text-base sm:text-lg text-white/90 max-w-lg font-normal leading-relaxed drop-shadow"
          >
            Discover extraordinary places, unique stays, and unforgettable
            experiences around the world.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/trips"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide shadow-lg shadow-accent/25 hover:shadow-xl transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Search Trips</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-sm font-semibold tracking-wide transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan Your Trip
            </Link>
          </motion.div>
        </div>

        {/* Floating Travel Search Panel overlapping bottom boundary */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative z-20 w-full mt-10 sm:mt-12"
        >
          <TravelSearchPanel />
        </motion.div>
      </div>
    </section>
  );
}
