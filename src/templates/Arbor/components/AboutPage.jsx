import React from 'react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="bg-[#f9faf6] text-[#1a1c1a] selection:bg-[#D8F3DC]">
<main>
{/* Hero Section: From Seed to Fiber */}
<section className="relative overflow-hidden pt-20 pb-[120px]">
<div className="max-w-[1280px] mx-auto px-[24px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="z-10">
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#0e6c4a] bg-[#D8F3DC] px-3 py-1 rounded-full uppercase mb-6 inline-block">Our Narrative</span>
<h1 className="font-['Hanken_Grotesk'] text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-[700] tracking-[-0.02em] text-[#012d1d] mb-6 leading-tight">
 From seed to fiber,<br/><span className="text-[#0e6c4a]">Engineered Nature.</span>
</h1>
<p className="font-['Manrope'] text-[18px] leading-[28px] font-[400] text-[#414844] mb-10 max-w-lg">
 Arbor Pulp redefines sustainable forestry through the precision cultivation of Eucalyptus and Acacia. We bridge the gap between industrial scale and ecological stewardship.
 </p>
<div className="flex gap-4">
<button className="bg-[#012d1d] text-[#ffffff] px-8 py-4 rounded-lg font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] hover:shadow-lg transition-all">Explore the Lifecycle</button>
<button className="border border-[#012d1d] text-[#012d1d] px-8 py-4 rounded-lg font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] hover:bg-[#F4F1EE] transition-all flex items-center gap-2">
<span className="material-symbols-outlined">play_circle</span>
 Watch the Process
 </button>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative border border-[#EDF0F2]">
<img className="w-full h-full object-cover" data-alt="A professional, high-fidelity close-up of a lush, vibrant green Eucalyptus nursery under soft morning sunlight. The focus is on the intricate vein patterns of the leaves, highlighting a scientific and premium agricultural aesthetic. The background is a soft, out-of-focus forest, suggesting a vast, well-managed plantation. The lighting is bright and airy, consistent with a clean, corporate sustainability report." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1iQQC9XQxYmBbkQ8k7Jtqodavo7nUFcS1L7jCP0tKCxQaxUaxbzfsPUm3abmYhMPAFj3WLE6xySOWdS_SSoESZ1mjV-0xqh7Ffd_PGggC2eYNnJW10uDbcM-t8HmiDuRlX5VMkeAfUV0c1wXDzDRpivpJMDUCncvaupjCI1mRnr2DUkG0l8qtVYlvQCVBAGCMe_z--q8msIDwceFM8vlkp0H1LrIBPqzZOfIQLnV_1AkvpcosVfE2xcncgfTSMWVWZKLzBhnjyPPB" />
<div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/30 to-transparent"></div>
</div>
{/* Stats Floating Card */}
<div className="absolute -bottom-10 -left-10 bg-white/70 backdrop-blur-md p-8 rounded-xl border border-[#EDF0F2] shadow-xl hidden md:block max-w-[240px]">
<div className="text-[#0e6c4a] font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] mb-1">15M+</div>
<div className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#414844]">Trees Managed Globally</div>
</div>
</div>
</div>
</section>
{/* Values: Sustainability, Innovation, Precision */}
<section className="bg-[#F4F1EE] py-[120px]">
<div className="max-w-[1280px] mx-auto px-[24px] text-center mb-16">
<h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-[700] tracking-[-0.01em] text-[#012d1d] mb-4">Values that Root Our Success</h2>
<div className="w-24 h-1 bg-[#0e6c4a] mx-auto"></div>
</div>
<div className="max-w-[1280px] mx-auto px-[24px] grid grid-cols-1 md:grid-cols-3 gap-10">
{/* Value Card 1 */}
<div className="bg-white p-10 rounded-xl border border-[#EDF0F2] hover:shadow-xl transition-shadow group">
<div className="w-14 h-14 bg-[#D8F3DC] rounded-lg flex items-center justify-center text-[#0e6c4a] mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">eco</span>
</div>
<h3 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#012d1d] mb-4">Sustainability</h3>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">
 Our closed-loop stewardship ensures that for every harvest, a more resilient ecosystem is born. We prioritize biodiversity in our Eucalyptus groves.
 </p>
</div>
{/* Value Card 2 */}
<div className="bg-white p-10 rounded-xl border border-[#EDF0F2] hover:shadow-xl transition-shadow group">
<div className="w-14 h-14 bg-[#D8F3DC] rounded-lg flex items-center justify-center text-[#0e6c4a] mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">biotech</span>
</div>
<h3 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#012d1d] mb-4">Innovation</h3>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">
 Leveraging satellite data and soil analytics to optimize growth cycles, ensuring the highest fiber quality for industrial applications.
 </p>
</div>
{/* Value Card 3 */}
<div className="bg-white p-10 rounded-xl border border-[#EDF0F2] hover:shadow-xl transition-shadow group">
<div className="w-14 h-14 bg-[#D8F3DC] rounded-lg flex items-center justify-center text-[#0e6c4a] mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
</div>
<h3 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#012d1d] mb-4">Precision Growth</h3>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">
 Engineering nature with scientific rigor. Our Acacia stewardship focuses on structural integrity and sustainable yield optimization.
 </p>
</div>
</div>
</section>
{/* Impact Stats: Bento Grid */}
<section className="py-[120px]">
<div className="max-w-[1280px] mx-auto px-[24px]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
{/* Large Feature */}
<div className="md:col-span-7 relative rounded-2xl overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A wide-angle aerial view of a geometric, perfectly managed Acacia forest plantation. The trees form a rhythmic pattern of greens and browns, reflecting the 'Engineered Nature' concept. The lighting is clear and crisp, showcasing a professional industrial-scale operation with high-contrast shadows. The vibe is modern, sustainable, and powerful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAujkRUYownt9K5LoQtQJiZ0SHluVGhKv-2nw5M68MUMFmsgrx6LVRyY5o4NXfPqr2t2Mwz_NpCwi3gzYLWmkWrAkc7hmd8H_l7WMv7E2gkMSDRhpnHOwNwH_lJ6HdizGNIL7ZI7wXp5-WFy_45bct1W-ddnBEUG-zxR5Kc0z--E9vY5NYmGbxKOi0cPPe9TRM7UV3WAzuJU6b5L5RV0_WXV5jv45Z8Aan0hhD2VnB1gBkeI2cDTfMbR9UIeP4pmu67mZv6ZikW2171" />
<div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-10 left-10 text-white max-w-md">
<h4 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] mb-2">Global Footprint</h4>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] opacity-90">Spanning across three continents, our managed forests provide high-quality fiber while sequestering millions of tons of carbon annually.</p>
</div>
</div>
{/* Side Stack */}
<div className="md:col-span-5 grid grid-rows-2 gap-6">
<div className="bg-[#012d1d] p-10 rounded-2xl flex flex-col justify-center text-white relative overflow-hidden">
{/* Micro interaction background */}
<div className="absolute top-0 right-0 opacity-10">
<span className="material-symbols-outlined text-[200px] -mr-10 -mt-10">forest</span>
</div>
<div className="text-6xl font-['Hanken_Grotesk'] text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-[700] tracking-[-0.01em] mb-2">84%</div>
<div className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] uppercase tracking-widest mb-4">Carbon Neutrality Target</div>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] opacity-80">On track to exceed industry standards for net-zero pulp production by 2030.</p>
</div>
<div className="bg-[#eeeeeb] p-10 rounded-2xl flex flex-col justify-center border border-[#EDF0F2]">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-1 bg-[#0e6c4a]"></div>
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#0e6c4a] uppercase">Resource Stewardship</span>
</div>
<h4 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#012d1d] mb-2">Water Recycling</h4>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">Our nursery operations utilize 95% recycled water systems, minimizing local environmental strain.</p>
</div>
</div>
</div>
</div>
</section>
{/* Team/Integrity: Mission-Driven Content */}
<section className="bg-[#2D2A26] text-white py-[120px] relative overflow-hidden">
{/* Animated decorative element */}
<div className="absolute inset-0 opacity-5 pointer-events-none">
<div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
</div>
<div className="max-w-[1280px] mx-auto px-[24px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<img className="rounded-2xl shadow-2xl border border-[#EDF0F2] border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 aspect-square object-cover" data-alt="A professional portrait of a senior forest management executive standing in a modern, glass-walled office with a view of a lush green nursery behind. They are wearing a high-quality grey knit sweater, looking approachable yet authoritative. The image style is soft-lit, corporate, and emphasizes integrity and wisdom. High-end lifestyle photography aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA0si9dRRZHwhWueiXzi_ZpuhnFpTu50QMHOINq0HomrakqjqZ2qhVKBluyvP198uJbDmasRm54hz1tbjfTXRjDKlsyieCLcDRLy2_zm7sVJZJ7FYuhO75tAJbI1uUEKijFb7_cdKhMZeovCc_qNhN98OV8hmXIIyZ8xJKXRFkBKWsDK98rOjSHI_CX6_0-gWfMPr5fON4qbj-IfMJfMDB-hpoRFBmuIHnJSCGow77-i5OdpZmQXpkX3MWP_V_w-fGlOs0vf7DNg9w" />
</div>
<div className="order-1 lg:order-2">
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#D8F3DC] mb-6 block">Our Stewardship</span>
<h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-[700] tracking-[-0.01em] mb-8 leading-tight">Led by Precision, Guided by Integrity.</h2>
<p className="font-['Manrope'] text-[18px] leading-[28px] font-[400] text-white/80 mb-8 italic">
 "Sustainable forestry isn't just about planting trees; it's about engineering a system where nature and industry can thrive in a symbiotic cycle. At Arbor Pulp, we're not just suppliers—we're guardians of the fiber lifecycle."
 </p>
<div className="flex items-center gap-4 mb-10">
<div className="h-px w-12 bg-[#D8F3DC]"></div>
<div>
<div className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#D8F3DC] leading-none">Dr. Elena Sterling</div>
<div className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-white/60">Chief of Stewardship</div>
</div>
</div>
<button className="bg-[#D8F3DC] text-[#012d1d] px-8 py-4 rounded-full font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] hover:bg-white transition-all active:scale-95">
 Meet the Advisory Board
 </button>
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-[120px] bg-[#f9faf6]">
<div className="max-w-3xl mx-auto px-[24px] text-center">
<span className="material-symbols-outlined text-6xl text-[#0e6c4a] mb-6">workspace_premium</span>
<h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-[700] tracking-[-0.01em] text-[#012d1d] mb-6">Partner in Sustainability</h2>
<p className="font-['Manrope'] text-[18px] leading-[28px] font-[400] text-[#414844] mb-10">
 Ready to integrate premium, sustainable Eucalyptus and Acacia fiber into your production chain? Join the leaders in industrial stewardship.
 </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="px-6 py-4 rounded-lg border-[#EDF0F2] focus:border-[#0e6c4a] focus:ring-0 w-full sm:w-80" placeholder="Professional Email Address" type="email" />
<button className="bg-[#012d1d] text-[#ffffff] px-8 py-4 rounded-lg font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] hover:bg-[#0e6c4a] transition-all">Request Specification Catalog</button>
</div>
<p className="mt-6 font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#414844]">Trusted by 12 Global Fortune 500 Manufacturing Partners</p>
</div>
</section>
</main>

    </div>
  );
}
