"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { TravelSearchPanel } from "./TravelSearchPanel";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 z-30 overflow-visible">
      {/* Edge-to-Edge Full-Screen Background Image with clipping isolated here */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2600&q=85"
          alt="Full-screen scenic alpine road trip with majestic mountains, evergreen pines, and turquoise lake"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] scale-[1.02]"
        />
        {/* Subtle cinematic overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />
      </div>

      {/* Main Hero Content Area */}
      <div className="max-w-7xl mx-auto w-full z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-6"
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
            className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-xl font-normal leading-relaxed drop-shadow"
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
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide shadow-lg shadow-accent/25 hover:shadow-xl transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Search Trips</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white text-sm font-semibold tracking-wide transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Plan Your Trip
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Travel Search Panel near bottom of full-screen hero */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="max-w-6xl mx-auto w-full z-20 mt-12 sm:mt-16"
      >
        <TravelSearchPanel />
      </motion.div>
    </section>
  );
}
