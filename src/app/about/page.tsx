import Image from "next/image";
import Link from "next/link";
import { Compass, ShieldCheck, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Julian Thorne",
      role: "Co-Founder & Head of Curation",
      bio: "Former documentary photographer and alpine trail guide with 14 years exploring backcountry Europe and Asia.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Maya Lind",
      role: "Co-Founder & Experience Director",
      bio: "Specializes in regenerative hospitality, culinary heritage preservation, and boutique architectural stays.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Lead Naturalist & Regional Partner Director",
      bio: "Marine biologist and outdoor educator committed to zero-trace island exploration and coral restoration.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Our Story &amp; Purpose</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-content-primary">
          Go Somewhere New.
        </h1>
        <p className="mt-4 text-lg text-content-secondary leading-relaxed">
          ROAMLY was born out of a desire for quieter, more mindful journeys. We
          build travel discovery experiences that prioritize authentic places,
          unhurried exploration, and deep respect for local cultures.
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-floating mb-20 border border-border">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85"
          alt="Vintage van driving on open road towards scenic peaks"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Philosophy Grid */}
      <div id="philosophy" className="mb-24 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-content-primary">
            How We Approach Travel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-primary p-8 rounded-3xl border border-border shadow-subtle">
            <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-content-primary mb-3">
              Curation Over Volume
            </h3>
            <p className="text-sm text-content-secondary leading-relaxed">
              We reject endless catalogs of mass-market bus tours. Every journey
              is hand-scouted by individuals who have personally walked the
              trails and broken bread with local hosts.
            </p>
          </div>

          <div className="bg-surface-primary p-8 rounded-3xl border border-border shadow-subtle">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-content-primary mb-3">
              Leave Places Better
            </h3>
            <p className="text-sm text-content-secondary leading-relaxed">
              We partner exclusively with locally owned lodges, family-run
              groves, and certified eco-guides. Tourism dollars must directly
              support the habitats and communities we visit.
            </p>
          </div>

          <div className="bg-surface-primary p-8 rounded-3xl border border-border shadow-subtle">
            <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-content-primary mb-3">
              Transparent &amp; Flexible
            </h3>
            <p className="text-sm text-content-secondary leading-relaxed">
              No hidden booking charges or forced retail stops. We share clear
              daily itineraries, small-group limits, and generous refund windows.
            </p>
          </div>
        </div>
      </div>

      {/* Team / Curators */}
      <div className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-2">
            The Team
          </span>
          <h2 className="text-3xl font-extrabold text-content-primary">
            Curators Behind the Journeys
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-surface-primary rounded-3xl p-6 border border-border shadow-subtle text-center"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 border-2 border-brand/20">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-content-primary">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-brand mt-0.5 mb-3">
                {member.role}
              </p>
              <p className="text-xs text-content-secondary leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Careers Section */}
      <div
        id="careers"
        className="bg-brand text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto scroll-mt-28"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          Join Our Global Guild of Curators
        </h3>
        <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed mb-6">
          Are you a local outdoor guide, independent lodge owner, or cultural
          historian? We are always seeking passionate partners around the world.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold uppercase tracking-wider transition-all"
        >
          <span>Get in Touch with Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
