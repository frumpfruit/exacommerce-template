import React from 'react';
import { motion } from 'framer-motion';

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

const steps = [
  {
    number: "01",
    title: "Origin Scouting",
    subtitle: "The Field",
    duration: "2–4 months before harvest",
    image: "/images/roastery/kevin-schmid-ftA71vetxuo-unsplash.jpg",
    body: "Every relationship begins on the ground — literally. Our sourcing team travels to farms across Aceh, Flores, Papua, East Java, and North Sumatra before the harvest season begins. We walk the land, assess the canopy density, examine soil composition, and test the water sources. We're geologists of taste. Altitude, microclimate, and shade cover predict flavor profiles more accurately than any roaster's skill.",
    details: [
      "Farm elevation mapping (1,200–2,100 masl)",
      "Soil pH and mineral composition testing",
      "Varietal verification: Gayo, S795, Lini S, Andungsari, Tim Tim",
      "Farmer interviews on harvest readiness and processing intent",
    ],
  },
  {
    number: "02",
    title: "Selective Harvesting",
    subtitle: "The Hands",
    duration: "At peak ripeness only",
    image: "/images/roastery/charles-sims-k-w7laFKa0g-unsplash.jpg",
    body: "We contract only hand-picked, cherry-selective harvests. No strip harvesting, no mechanical picking. Each cherry must be individually chosen at peak ripeness — Brix reading between 20–26° — by trained pickers who understand that an underripe cherry will define the entire batch. Our partner farmers are compensated per kilogram of ripe cherry, not per kilogram of any cherry. The incentive structure matters.",
    details: [
      "Hand-picking: 1–2 kg per picker per day",
      "Brix measurement at point of harvest",
      "Same-day wet processing initiation",
      "Cherry sorting: float bath and visual QC",
    ],
  },
  {
    number: "03",
    title: "Post-Harvest Processing",
    subtitle: "The Method",
    duration: "7–35 days depending on method",
    image: "/images/roastery/skylar-michael-SwmUmhrFr54-unsplash.jpg",
    body: "Processing is where flavor is shaped as much as it is revealed. We work with three primary methods across our partner farms, selecting the approach that complements each variety's inherent character. Wet-washed coffees from Gayo reveal a clean, bright acidity. Natural and honey-processed Flores coffees offer stone fruit depth and body. We don't impose a single method — we let the terroir lead.",
    details: [
      "Washed: 24–36 hr fermentation, mechanical depulping",
      "Natural: 20–35 days on raised African drying beds",
      "Honey: partial mucilage retained, 14–21 days drying",
      "Moisture content target: 10.5–11.5% before export",
    ],
  },
  {
    number: "04",
    title: "Green Bean QC & Import",
    subtitle: "The Gate",
    duration: "Before anything enters our roastery",
    image: "/images/roastery/jason-betz-klub_Ke-268-unsplash.jpg",
    body: "Every lot that arrives at our Jakarta facility undergoes a full physical and sensory QC before we accept it. We cup blind — our team doesn't know which farm a sample is from during evaluation. This removes relationship bias. The coffee must score 84+ on the SCA scale to proceed. Those that don't are returned or redirected. We've turned down lots we paid for. It happens.",
    details: [
      "Moisture and water activity analysis",
      "Screen size distribution (14–18 screen)",
      "Defect count per 300g sample (SCAA method)",
      "Blind cupping: minimum 84.0 SCA score required",
    ],
  },
  {
    number: "05",
    title: "Precision Roasting",
    subtitle: "The Fire",
    duration: "Roasted to order, within 48 hours of shipment",
    image: "/images/roastery/skylar-michael-SwmUmhrFr54-unsplash.jpg",
    body: "We roast on a 10kg Probat drum roaster — a machine from 1984 that has been rebuilt, calibrated, and tuned to perform with surgical precision. Each origin gets its own hand-written roast profile, developed over 8–14 test batches. We measure inlet temperature, exhaust temperature, bean temperature, rate of rise (RoR), and first-crack timing. Every variable is logged. Every deviation is noted. Every batch is cupped the following day before it's approved for release.",
    details: [
      "Probat P10 drum roaster — fully rebuilt, analog-digital hybrid",
      "Batch size: 8–10kg maximum",
      "Roast profiles: development time ratio 20–24%",
      "Post-roast rest: 12 hours minimum before packaging",
    ],
  },
  {
    number: "06",
    title: "Packaging & Dispatch",
    subtitle: "The Promise",
    duration: "Shipped within 48 hours of roast date",
    image: "/images/roastery/karl-fredrickson-TYIzeCiZ_60-unsplash.jpg",
    body: "We package in resealable, food-grade kraft bags with one-way degassing valves. CO₂ released post-roast escapes; oxygen cannot enter. Every bag is hand-labeled with the roast date, farm name, varietal, process, elevation, and flavor notes — written by the roaster who made the batch, not by a marketing department. You receive the bag within 48 hours of the roast date. No exceptions. That's not a slogan. It's an operational constraint we've built our entire logistics system around.",
    details: [
      "One-way degassing valves on all packaging",
      "Nitrogen flush prior to sealing",
      "Cold-chain option for subscription orders",
      "Carbon-neutral shipping via JNE GoGreen program",
    ],
  },
];

export default function ProcessPage({ onNavigate }) {
  return (
    <div className="font-body-md" style={{ backgroundColor: brand.cream, color: brand.onSurface }}>

      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex items-end pb-24 px-8 md:px-16 overflow-hidden bg-center bg-cover bg-fixed"
        style={{ backgroundImage: "url('/images/roastery/skylar-michael-SwmUmhrFr54-unsplash.jpg')" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,20,40,0.96) 0%, rgba(2,20,40,0.45) 50%, transparent 100%)" }} />
        <div className="relative z-10 max-w-[900px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase text-[11px] tracking-[4px] font-bold mb-6"
            style={{ color: brand.coral }}
          >
            From Farm to Cup &mdash; Six Stages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[52px] md:text-[88px] font-bold leading-[1.0] mb-8 text-white"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif', letterSpacing: '-0.02em' }}
          >
            How We Make<br />The Coffee You Drink.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[20px] text-white/70 max-w-xl leading-relaxed"
          >
            Precision is not a word we use lightly. Every step in our process was designed to protect flavor, reward farmers, and deliver a cup that surprises even the most experienced palate.
          </motion.p>
        </div>
      </section>

      {/* Step-by-step Process */}
      {steps.map((step, i) => (
        <section key={i} className={`py-0 overflow-hidden`} style={{ backgroundColor: i % 2 === 0 ? brand.white : brand.cream }}>
          <div className={`max-w-[1280px] mx-auto flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[580px]`}>

            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 overflow-hidden"
            >
              <img src={step.image} alt={step.title} className="w-full h-full object-cover min-h-[400px] hover:scale-105 transition-transform duration-1000" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 lg:py-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[48px] font-bold leading-none" style={{ color: brand.coral, fontFamily: 'Hanken Grotesk' }}>{step.number}</span>
                <div>
                  <p className="uppercase text-[10px] tracking-[3px] font-bold" style={{ color: brand.coral }}>{step.subtitle}</p>
                  <p className="text-[12px] mt-1" style={{ color: brand.gray }}>{step.duration}</p>
                </div>
              </div>
              <h2 className="text-[32px] md:text-[44px] font-bold leading-[1.1] mb-6" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>{step.title}</h2>
              <p className="text-[16px] leading-[1.85] mb-8" style={{ color: brand.gray }}>{step.body}</p>
              <ul className="space-y-3">
                {step.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-3 text-[14px]" style={{ color: brand.gray }}>
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: brand.coral }} />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-32 px-8 md:px-16 text-center" style={{ backgroundColor: brand.deepBlue, color: brand.white }}>
        <motion.div {...fadeUp}>
          <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>You've Read How It's Made</p>
          <h2 className="text-[40px] md:text-[64px] font-bold leading-[1.05] mb-8" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
            Now taste why<br />it matters.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate && onNavigate('store')}
              className="px-12 py-5 font-bold rounded-[2px] transition-transform hover:-translate-y-1"
              style={{ backgroundColor: brand.coral, color: brand.white }}
            >
              Shop All Roasts
            </button>
            <button
              onClick={() => onNavigate && onNavigate('inquiry')}
              className="px-12 py-5 font-bold rounded-[2px] border transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: brand.white }}
            >
              Contact the Team
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
