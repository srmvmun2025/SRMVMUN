// Animated Secretary General Ad Component
// Tech: React + TailwindCSS + Framer Motion
// Theme: #EFDB9E (golden sand), #800301 (deep red), background black

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Letter() {
  const gold = "#EFDB9E";
  const crimson = "#800301";

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { y: 6, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring" as const, 
        damping: 18, 
        stiffness: 220 
      } 
    },
  };

  return (
    <section
      className="relative min-h-[80svh] w-full overflow-hidden bg-black text-[--gold]"
      style={{
        // CSS variables for easy theme reuse
        // @ts-expect-error - custom props for Tailwind arbitrary values
        "--gold": gold,
        "--crimson": crimson,
      }}
      aria-label="From the Secretary General's Desk"
    >
      {/* Ambient accents */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(60% 60% at 50% 50%, var(--gold), transparent)" }} />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(50% 50% at 50% 50%, var(--crimson), transparent)" }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-4 py-16 md:py-24"
      >
        <div>
          {/* Letter (with image inside on the right) */}
          <div>
            {/* Header Row */}
            <motion.header variants={item} className="relative mb-6 flex items-center gap-4 md:gap-6">
              {/* Wax seal (animated) */}
              <motion.div
                className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-full shadow-[0_0_0_6px_rgba(0,0,0,0.6)_inset,0_8px_40px_rgba(128,3,1,0.35)]"
                style={{ backgroundColor: "var(--crimson)" }}
                initial={{ y: 0, scale: 1, rotate: 0 }}
                animate={{ y: [0, -3, 0], scale: [1, 1.03, 1], rotate: [0, -1, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                aria-hidden
              >
                <div className="z-10 text-lg font-black tracking-widest text-[rgba(0,0,0,0.5)]">SG</div>
                <motion.div
                  className="z-10 absolute inset-0 rounded-full ring-2 ring-[rgba(0,0,0,0.65)]"
                  animate={{ opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />
                {/* Glitter sweep */}
                <motion.div
                  className="pointer-events-none absolute -inset-8 z-0 rotate-12"
                  style={{
                    background:
                      "linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 65%, rgba(255,255,255,0) 100%)",
                    filter: "blur(6px)",
                    mixBlendMode: "screen",
                  }}
                  initial={{ x: "-120%" }}
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <div className="flex-1">
                <h1 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl" style={{ color: "var(--gold)" }}>
                  From the Secretary General&apos;s Desk
                </h1>
                <div className="mt-2 h-[2px] w-40 bg-[--gold]/30">
                  <motion.div
                    className="h-full w-24 bg-[--gold]"
                    initial={{ x: -96 }}
                    animate={{ x: 160 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.2, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.header>

            {/* Date + Social row */}
            <motion.div
              variants={item}
              className="mb-6 flex flex-wrap items-center gap-3 text-sm md:gap-4"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[--gold]/30 bg-white/5 px-3 py-1.5 backdrop-blur">
                <span className="block h-2 w-2 rounded-full" style={{ background: "var(--crimson)" }} />
                <strong className="font-medium" style={{ color: "var(--gold)" }}>19–21 September 2025</strong>
              </span>
              <a
                href="https://instagram.com/srmvmun"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[--gold]/20 px-3 py-1.5 text-[--gold] opacity-90 transition hover:border-[--gold]/50 hover:opacity-100"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition group-hover:scale-110">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
                </svg>
                @srmvmun
              </a>
            </motion.div>

            {/* Letter card with image inside on the right */}
            <motion.div
              variants={item}
              className="relative overflow-hidden rounded-[24px] bg-gradient-to-b from-neutral-900/70 to-neutral-900/30 shadow-[0_10px_40px_rgba(239,219,158,0.06)]"
            >
              {/* gold frame shimmer */}
              <div className="pointer-events-none absolute inset-0 rounded-[26px] opacity-40" style={{ background: `conic-gradient(from 180deg at 50% 50%, transparent 0 20%, ${gold}22 22%, transparent 28% 70%, ${gold}22 72%, transparent 100%)` }} />

              <div className="relative rounded-[24px] p-6 md:p-10">
                {/* vertical ribbon */}
                <div className="absolute left-0 top-0 h-full w-[6px] rounded-l-[24px]" style={{ background: `linear-gradient(180deg, ${crimson}, #2a0000)` }} />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                  {/* Left column: letter text + chips + CTA */}
                  <div>
                    <article className="text-white">
                      <div className="mx-auto max-w-prose text-[15px] leading-[1.85] md:max-w-none md:text-[16px] lg:text-[17px]">
                        <p className="mb-6 opacity-90">
                          From being the delegate of Romania in <strong className="font-semibold text-[--gold]">SRMVMUN 2022</strong> to penning this letter as the <strong className="font-semibold text-[--gold]">Secretary General</strong> of its 7th edition, the road has been long, humbling, and incredibly fulfilling.
                        </p>
                        <p className="mb-6 opacity-90">
                          Hello everyone, I am <strong className="font-semibold text-[--gold]">Sivakaarthikeyan V</strong>, a final-year student majoring in computer science with varied interests—from rewatching Harry Potter every winter to being intrigued by Tamizh culture.
                        </p>
                        <p className="mb-6 opacity-90">
                          The 7th edition of <strong className="font-semibold text-[--gold]">SRMVMUN</strong> shall be held on the <strong className="font-semibold text-[--gold]">19th, 20th, and 21st of September 2025</strong>. I take this opportunity to welcome you all to this edition that holds a special place in my heart.
                        </p>
                        <p className="mb-6 opacity-90">
                          In this edition, we have <strong className="font-semibold text-[--gold]">6 committees</strong>, namely <em>UNGA, UNSC, UNHRC, ECOSOC, SCEA,</em> and <em>IPC</em>. Each committee has been curated with immense thought and vision, ensuring that delegates—whether first-timers or veterans—are met with intellectually stimulating agendas, vibrant debate, and a chance to grow both as individuals and as diplomats.
                        </p>
                        <p className="mb-6 opacity-90">
                          I encourage you to stay connected with us through our official Instagram handle <strong className="font-semibold text-[--gold]">@srmvmun</strong>, where we will share regular updates, important announcements, and behind-the-scenes glimpses of what we&apos;ve been preparing with passion—and yes, with verve. For any queries or assistance, please feel free to contact our team; we&apos;re here to help.
                        </p>
                        <p className="mb-6 opacity-90">
                          Looking forward to welcoming you all to this conference. I hope each and every one of you gets to voice your opinions on global issues and related matters.
                        </p>
                        <p className="mt-10">
                          <span className="block text-sm opacity-80">Warm Regards,</span>
                          <span className="block text-base font-medium">Sivakarthikeyan V</span>
                          <span className="block text-sm opacity-80">Secretary General, SRMVMUN&apos; 25</span>
                        </p>
                      </div>
                    </article>

                    {/* Committees chips */}
                    <div className="mt-8 flex flex-wrap gap-2 text-white">
                      {["UNGA", "UNSC", "UNHRC", "ECOSOC", "SCEA", "IPC"].map((c) => (
                        <motion.span
                          key={c}
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ type: "spring", stiffness: 260, damping: 18 }}
                          className="inline-flex items-center gap-2 rounded-full border border-gray-800 border-opacity-40 bg-black/60 px-3 py-1 text-sm"
                        >
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--crimson)" }} />
                          {c}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap items-center gap-4 justify-start">
                      <div className="inline-flex items-center gap-2 rounded-xl border border-gray-800 border-opacity-30 bg-white/5 px-4 py-2 text-xs text-white/90">
                        <span className="i" aria-hidden>📍</span>
                        SRM Vadapalani, Chennai
                      </div>
                    </div>
                  </div>

                  <div className="order-last mt-2 md:order-none md:mt-0 md:self-start md:justify-center">
  <div className="relative mx-auto w-full sm:max-w-[460px] md:max-w-[520px] lg:max-w-[560px] xl:max-w-[620px] overflow-hidden rounded-3xl bg-neutral-900/40 shadow-[0_10px_40px_rgba(239,219,158,0.08)]">
    <Image
      src="/sk.jpg"
      alt="SRM Vadapalani campus"
      width={940}
      height={1150}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 48vw, 620px"
      className="h-auto w-full object-cover"
      priority={false}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
  </div>
</div>


                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom ticker */}
        <motion.div variants={item} className="mt-10 overflow-hidden rounded-xl border border-[--gold]/15">
          <div className="animate-[marquee_28s_linear_infinite] whitespace-nowrap py-2 text-center text-xs tracking-widest text-white">
            <span className="mx-4">SRMVMUN • Debate with verve • Grow as a diplomat • Voice your opinion • </span>
            <span className="mx-4">SRMVMUN • Debate with verve • Grow as a diplomat • Voice your opinion • </span>
            <span className="mx-4">SRMVMUN • Debate with verve • Grow as a diplomat • Voice your opinion • </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
