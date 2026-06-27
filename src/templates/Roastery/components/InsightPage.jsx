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

const articles = [
  {
    category: "Origin Story",
    title: "What the Altitude of Gayo Tells You About Flavor",
    excerpt: "The Aceh Tengah plateau sits between 1,200 and 1,600 meters above sea level. In that range, something peculiar happens to coffee chemistry — and it explains why Gayo coffees taste the way they do.",
    readTime: "8 min read",
    date: "June 12, 2026",
    image: "/images/roastery/charles-sims-k-w7laFKa0g-unsplash.jpg",
    featured: true,
    content: "At altitude, coffee cherries mature more slowly. The longer maturation cycle allows the seed to accumulate more complex sugars, organic acids, and aromatic compounds. The result is a cup with higher perceived sweetness, pronounced floral notes, and a layered acidity that doesn't read as sharp — it reads as dynamic. Gayo's volcanic soil, rich in nitrogen and potassium, contributes mineral complexity. Combined with the biannual harvest cycle — a natural flushing of nutrients — the flavor profile of a properly sourced and processed Gayo lot is unlike anything produced at lower elevations.",
  },
  {
    category: "Roasting Science",
    title: "Why Light Roast Isn't Easy — It's Actually the Hardest",
    excerpt: "The specialty coffee world's obsession with light roast has a counterintuitive consequence: it demands far more skill from the roaster, not less.",
    readTime: "6 min read",
    date: "June 1, 2026",
    image: "/images/roastery/skylar-michael-SwmUmhrFr54-unsplash.jpg",
    featured: false,
  },
  {
    category: "Brew Guide",
    title: "The V60: Why Your Grind Size Is Probably Killing Your Cup",
    excerpt: "You can have the best beans in the world, water at exactly 93°C, and a beautiful pour technique — and still produce a flat, underwhelming cup. Here's why.",
    readTime: "5 min read",
    date: "May 22, 2026",
    image: "/images/roastery/karl-fredrickson-TYIzeCiZ_60-unsplash.jpg",
    featured: false,
  },
  {
    category: "Farmer Spotlight",
    title: "Pak Yusuf Has Been Growing Coffee for 41 Years. He Still Tastes Every Cherry Before Picking.",
    excerpt: "At 68 years old, Pak Yusuf Harahap manages 2.4 hectares of Lini S and Tim Tim varietals in the hills above Takengon. His method of 'tasting to pick' is more accurate than any refractometer.",
    readTime: "10 min read",
    date: "May 10, 2026",
    image: "/images/roastery/kevin-schmid-ftA71vetxuo-unsplash.jpg",
    featured: false,
  },
  {
    category: "Sustainability",
    title: "Processing Wastewater: The Part of Specialty Coffee Nobody Talks About",
    excerpt: "Wet processing produces pulp and effluent that, if handled carelessly, devastates local water systems. Here's what we're doing about it at our partner farms.",
    readTime: "7 min read",
    date: "April 28, 2026",
    image: "/images/roastery/jason-betz-klub_Ke-268-unsplash.jpg",
    featured: false,
  },
];

export default function InsightPage({ onNavigate }) {
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <div className="font-body-md" style={{ backgroundColor: brand.cream, color: brand.onSurface }}>

      {/* Hero Header */}
      <section className="pt-24 pb-16 px-8 md:px-16" style={{ backgroundColor: brand.white }}>
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b"
            style={{ borderColor: 'rgba(0,0,0,0.1)' }}
          >
            <div>
              <p className="uppercase text-[11px] tracking-[4px] font-bold mb-3" style={{ color: brand.coral }}>From The Roastery</p>
              <h1 className="text-[56px] md:text-[80px] font-bold leading-[1.0]" style={{ fontFamily: 'Hanken Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                Insight.
              </h1>
            </div>
            <p className="text-[17px] max-w-md leading-relaxed pb-2" style={{ color: brand.gray }}>
              Dispatches from the farm, the roastery, and the cup. Written by the people who grow, process, and roast your coffee — not by a content calendar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="px-8 md:px-16 py-16" style={{ backgroundColor: brand.white }}>
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[2px] overflow-hidden shadow-2xl cursor-pointer group"
              style={{ backgroundColor: brand.deepBlue, color: brand.white }}
            >
              <div className="lg:col-span-7 h-[400px] lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="lg:col-span-5 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] uppercase tracking-[2px] font-bold px-3 py-1 rounded-full" style={{ backgroundColor: brand.coral, color: brand.white }}>{featured.category}</span>
                  <span className="text-[12px] text-white/50">{featured.date}</span>
                </div>
                <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] mb-6 group-hover:opacity-80 transition-opacity" style={{ fontFamily: 'Hanken Grotesk' }}>
                  {featured.title}
                </h2>
                <p className="text-[16px] leading-relaxed text-white/75 mb-8">{featured.excerpt}</p>
                <div className="border-t pt-6 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                  <span className="text-[13px] text-white/50">{featured.readTime}</span>
                  <span className="font-bold text-[14px] group-hover:gap-4 transition-all flex items-center gap-2" style={{ color: brand.coral }}>
                    Read Full Article &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="px-8 md:px-16 py-16" style={{ backgroundColor: brand.cream }}>
        <div className="max-w-[1280px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase text-[11px] tracking-[3px] font-bold mb-12" style={{ color: brand.coral }}
          >
            More from the Archive
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {rest.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-[280px] overflow-hidden rounded-[2px] mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] uppercase tracking-[2px] font-bold" style={{ color: brand.coral }}>{article.category}</span>
                  <span className="text-[12px]" style={{ color: brand.gray }}>{article.date}</span>
                </div>
                <h3
                  className="text-[22px] md:text-[26px] font-bold leading-[1.3] mb-3 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'Hanken Grotesk', color: brand.onSurface }}
                >
                  {article.title}
                </h3>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: brand.gray }}>{article.excerpt}</p>
                <div className="flex items-center justify-between border-t pt-5" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
                  <span className="text-[12px]" style={{ color: brand.gray }}>{article.readTime}</span>
                  <span className="font-bold text-[13px] flex items-center gap-1" style={{ color: brand.onSurface }}>Read &rarr;</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: brand.deepBlue, color: brand.white }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[640px] mx-auto text-center"
        >
          <p className="uppercase text-[11px] tracking-[3px] font-bold mb-4" style={{ color: brand.coral }}>Get it In Your Inbox</p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] mb-4" style={{ fontFamily: 'Hanken Grotesk' }}>
            New essays, monthly.<br />No fluff, ever.
          </h2>
          <p className="text-[16px] text-white/65 leading-relaxed mb-10">
            One curated piece per month from the farm, roastery, or brewing room. Written by the people who know the product from the inside out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 rounded-[2px]"
            />
            <button
              className="px-8 py-4 font-bold rounded-[2px] whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ backgroundColor: brand.coral, color: brand.white }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-[12px] text-white/40 mt-4">Monthly. Unsubscribe anytime.</p>
        </motion.div>
      </section>
    </div>
  );
}
