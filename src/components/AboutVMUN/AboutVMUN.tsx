import React from 'react';
import Image from 'next/image';
import { Sparkles, Globe2, Users, Shield } from 'lucide-react';

const AboutSRM: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(45% 45% at 50% 50%, rgba(239,219,158,0.35), transparent 70%)'}} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(45% 45% at 50% 50%, rgba(128,3,1,0.35), transparent 70%)'}} />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Right Content (on desktop) */}
        <div className="space-y-8 order-1 lg:order-2">
          <div>
            <h2 className="relative inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EFDB9E] via-white to-[#EFDB9E] mb-4">
              About VMUN
            </h2>
            {/* Animated underline */}
            <div className="h-[3px] w-16 bg-gradient-to-r from-[#EFDB9E] via-[#EFDB9E]/60 to-transparent rounded-full overflow-hidden">
              <span className="block h-full w-1/3 bg-[#EFDB9E] animate-[underline_2.4s_ease-in-out_infinite]" />
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              SRM Institute of Science and Technology stands as one of India&apos;s premier educational institutions,
              fostering excellence in academics, research, and holistic development since 1985.
            </p>
            <p>
              With a commitment to nurturing global citizens, SRM has consistently ranked among the top universities in
              India, producing leaders who shape the future across diverse fields including technology, business,
              healthcare, and diplomacy.
            </p>
            <p>
              Our institution&apos;s dedication to international exposure and cross-cultural understanding makes it the
              perfect foundation for hosting world-class Model United Nations conferences.
            </p>
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EFDB9E]/30 bg-black/40 px-3 py-1.5 text-sm text-[#EFDB9E]">
              <Globe2 className="h-4 w-4" /> Global Perspective
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EFDB9E]/30 bg-black/40 px-3 py-1.5 text-sm text-[#EFDB9E]">
              <Users className="h-4 w-4" /> Diverse Committees
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EFDB9E]/30 bg-black/40 px-3 py-1.5 text-sm text-[#EFDB9E]">
              <Shield className="h-4 w-4" /> Code of Conduct
            </span>
          </div>
        </div>

        {/* Left Image – frame (on desktop) */}
        <div className="relative group order-2 lg:order-1">
          <div className="relative rounded-2xl border border-[#EFDB9E]/30 p-1.5 shadow-[0_0_40px_rgba(239,219,158,0.08)]">
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/placeholder.png" alt="SRM campus overview" width={1000} height={720} className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent" />
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes */}
      <style jsx>{`
        @keyframes underline { 0% { transform: translateX(-100%);} 100% { transform: translateX(300%);} }
      `}</style>
    </section>
  );
};

export default AboutSRM;
