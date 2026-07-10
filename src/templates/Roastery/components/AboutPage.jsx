import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const brand = {
  blue: "#004E7C",
  deepBlue: "#024871",
  coral: "#F58A6C",
  cream: "#F7F9FF",
  white: "#FFFFFF",
  brown: "#2C1503",
  tan: "#F5E6D3",
  gray: "#41474F",
  lightGray: "#e2efff",

  onSurface: "#001d32",
  softMint: "#EDF8F8",
  surface: "#f7f9ff",
  primary: "#003759",};

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const fadeLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const fadeRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

function useCountUp(target, duration = 1600, active = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function AboutStatBadge({ target, suffix, label, color }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(target, 1400, inView);
  return (
    <div ref={ref}>
      <p className="text-[40px] font-bold" style={{ color }}>{count}{suffix}</p>
      <p className="text-[14px] uppercase tracking-[2px] font-bold opacity-80">{label}</p>
    </div>
  );
}

export default function AboutPage({ onNavigate }) {
  return (
    <div className="font-body-md" style={{ backgroundColor: brand.cream, color: brand.onSurface }}>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-24 px-8 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed"
          style={{ backgroundImage: "url('/images/roastery/kevin-schmid-ftA71vetxuo-unsplash.jpg')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,30,50,0.92) 0%, rgba(2,30,50,0.3) 60%, transparent 100%)" }} />
        <div className="relative z-10 max-w-[900px]">
          <motion.p {...fadeUp} className="uppercase text-[11px] tracking-[4px] font-bold mb-6" style={{ color: brand.coral }}>
            Our Story &mdash; Est. 2019
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[52px] md:text-[88px] font-bold leading-[1.0] mb-8 text-white"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            We Started<br />With a Question.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20px] md:text-[24px] text-white/75 max-w-xl leading-relaxed"
          >
            Why does coffee taste like cardboard when it should taste like the mountain it came from?
          </motion.p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32 px-8 md:px-16" style={{ backgroundColor: brand.white }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div {...fadeLeft}>
            <p className="uppercase text-[11px] tracking-[3px] font-bold mb-6" style={{ color: brand.coral }}>The Beginning</p>
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.05] mb-8" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
              Two founders.<br />One obsession.
            </h2>
            <p className="text-[17px] leading-[1.85] mb-6" style={{ color: brand.gray }}>
              In 2019, Arya and Dika — a geologist and a chef — drove a beat-up Land Rover into the highlands of Aceh Tengah with a notebook, a portable cupping setup, and absolutely no business plan. They were chasing a flavor memory: a cup of Gayo coffee served to them by a farmer named Pak Ridwan, brewed over an open flame at 1,500 meters above sea level.
            </p>
            <p className="text-[17px] leading-[1.85] mb-6" style={{ color: brand.gray }}>
              That cup ruined them — in the best possible way. Back in Jakarta, no café, no roastery, no specialty store could recreate it. The coffee they found commercially was harvested too early, processed too fast, and roasted too dark to hide the sins of a broken supply chain.
            </p>
            <p className="text-[17px] leading-[1.85]" style={{ color: brand.gray }}>
              So they decided to fix the chain themselves. Not as a brand exercise — as a personal necessity.
            </p>
          </motion.div>
          <motion.div {...fadeRight} className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2px] shadow-2xl">
              <img
                src="/images/roastery/charles-sims-k-w7laFKa0g-unsplash.jpg"
                alt="Coffee origin farm"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 shadow-xl rounded-[2px]" style={{ backgroundColor: brand.deepBlue, color: brand.white, maxWidth: '260px' }}>
              <AboutStatBadge target={5} suffix="+" label="Years of Direct Relationship" color={brand.coral} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-8 md:px-16" style={{ backgroundColor: brand.cream }}>
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fadeUp} className="max-w-[640px] mb-20">
            <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>What We Stand For</p>
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.05]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
              Principles, not policies.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Precision Over Speed",
                body: "We roast maximum 10kg per batch. That's not a limitation — it's a discipline. Every batch gets the full attention it deserves: live temperature monitoring, hand-written roast curves, and side-by-side cuppings before anything leaves our facility.",
              },
              {
                num: "02",
                title: "Farmer-First Pricing",
                body: "We pay 20–35% above fair trade minimums. Not as a marketing claim, but because we've seen what happens when farmers can't afford to hire quality pickers, maintain drying infrastructure, or plant new varietals. The economics of origin are our economics.",
              },
              {
                num: "03",
                title: "Transparent Provenance",
                body: "Every bag we sell carries full traceability: farm name, elevation, varietal, processing method, harvest month, and roast date. If you ask us where your coffee comes from, we can tell you the name of the person who picked it.",
              },
              {
                num: "04",
                title: "No Blends. Ever.",
                body: "Blending erases identity. We believe every origin has a singular flavor profile that deserves to be experienced on its own terms. A Flores Bajawa should taste like Flores Bajawa — not like a committee's idea of 'approachable coffee.'",
              },
              {
                num: "05",
                title: "48-Hour Freshness Guarantee",
                body: "Coffee degrades rapidly after roasting. We roast to order and ship within 48 hours of the roast date. No sitting on warehouse shelves. No buying 'fresh' coffee that was roasted three months ago. Our system is built around your cup, not around our convenience.",
              },
              {
                num: "06",
                title: "Continuous Learning",
                body: "We visit our partner farms at least twice a year — not just for quality checks, but to learn. Soil, rainfall patterns, new varietals, post-harvest experiments. Coffee is a living product. Our knowledge of it should be too.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
                className="p-10 rounded-[2px] border"
                style={{ backgroundColor: brand.white, borderColor: 'rgba(0,0,0,0.06)' }}
              >
                <span className="text-[13px] font-bold uppercase tracking-[2px] mb-6 block" style={{ color: brand.coral }}>{val.num}</span>
                <h3 className="text-[22px] font-bold leading-[1.3] mb-4" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>{val.title}</h3>
                <p className="text-[15px] leading-[1.8]" style={{ color: brand.gray }}>{val.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Brand Face */}
      <section className="py-32 px-8 md:px-16" style={{ backgroundColor: brand.deepBlue, color: brand.white }}>
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fadeUp} className="max-w-[720px] mx-auto text-center mb-20">
            <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>The People Behind It</p>
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.05]" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
              Small team. Massive conviction.
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/75">
              Elite Brew operates with a team of seven. No venture capital. No agency partners. No influencer strategy. Just seven people who are genuinely obsessed with making coffee better.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Arya Wibowo", role: "Co-Founder & Head of Sourcing", bio: "Former geologist. Spent 6 years mapping mineral deposits in Papua before realizing the most interesting thing about the land was what grew above it. Now maps farm elevations and soil pH instead." },
              { name: "Dika Prasetyo", role: "Co-Founder & Master Roaster", bio: "Trained under a Danish roastmaster for two years. Returned to Indonesia convinced that Indonesian coffee — roasted correctly — is among the finest in the world. He's spent five years proving it." },
              { name: "Sari Kusuma", role: "Quality Control & Education Lead", bio: "Q-Grader certified. Former barista champion. Leads every cupping, writes every roast note, and runs our monthly brew sessions for subscribers who want to go deeper." },
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-[2px]"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="w-14 h-14 rounded-full mb-6 flex items-center justify-center font-bold text-[22px]" style={{ backgroundColor: brand.coral, color: brand.white }}>
                  {person.name.charAt(0)}
                </div>
                <h3 className="text-[20px] font-bold mb-1" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>{person.name}</h3>
                <p className="text-[12px] uppercase tracking-[1.5px] mb-4" style={{ color: brand.coral }}>{person.role}</p>
                <p className="text-[15px] leading-[1.8] text-white/70">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section {...fadeUp} className="py-24 px-8 md:px-16 text-center" style={{ backgroundColor: brand.cream }}>
        <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>Ready to Taste the Story?</p>
        <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.05] mb-8" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          Every bag begins<br />at 1,500 meters.
        </h2>
        <button
          onClick={() => onNavigate && onNavigate('store')}
          className="px-12 py-5 font-bold text-white rounded-[2px] transition-transform hover:-translate-y-1"
          style={{ backgroundColor: brand.coral }}
        >
          Shop All Origins
        </button>
      </motion.section>
    </div>
  );
}
