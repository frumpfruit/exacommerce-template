import React from 'react';

export default function ProcessPage({ onNavigate }) {
  return (
    <div className="bg-[#f9faf6] text-[#1a1c1a] selection:bg-[#D8F3DC] selection:text-[#012d1d]">
<main>
{/* Hero Section */}
<section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#012d1d]"><div className="absolute inset-0 z-0">
 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIPrlJN9FCPLCBTos-JF1a5BTNqJ--UBloFyXaiQght2STiGVUibhEpYFibrvj7A-pgCUPerhiISwO1pF5COBDPw4xsgRh95XgC4FYD0HOifaGtuFzGBhhIDm0oAsFhtWsPeNZD8THk1995XKox_uAS6M1518-2AE8deAz2puZkNQDTkJ5K9nM4ZkkL6SNItDiHN0vONUAEKzG1BbVXNCuIlAh41eKOqc6tkZJn8diRku_x_yjWgdkNGYcVGwtwxPAcUqUlKJW5Hhz" alt="Panoramic view of a vast, misty Eucalyptus forest at sunrise" className="w-full h-full object-cover" />
 <div className="absolute inset-0 bg-[#012d1d]/60 backdrop-blur-sm"></div>
</div>

<div className="relative z-10 text-center px-[24px] max-w-4xl [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]">
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#D8F3DC] tracking-widest mb-4 block">STRETCHING THE LIMITS OF SUSTAINABILITY</span>
<h1 className="font-['Hanken_Grotesk'] text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-[700] tracking-[-0.02em] text-white mb-6 leading-tight">From Sapling to Scientific Fiber</h1>
<p className="font-['Manrope'] text-[18px] leading-[28px] font-[400] text-[#a5d0b9] max-w-2xl mx-auto">Discover the meticulous lifecycle of Acacia and Eucalyptus, engineered with industrial precision and ecological stewardship.</p>
<div className="mt-10 flex justify-center gap-4">
<a className="bg-[#D8F3DC] text-[#012d1d] px-8 py-4 rounded-full font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] hover:translate-y-[-2px] transition-transform shadow-lg" href="#timeline">Explore the Lifecycle</a>
</div>
</div>
</section>
{/* Technical Hook: Remarkably Tastier Fiber */}
<section className="py-[120px] bg-[#F4F1EE]">
<div className="max-w-[1280px] mx-auto px-[24px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="relative rounded-2xl overflow-hidden border border-[#c1c8c2] shadow-xl">
<img className="w-full h-full object-cover" data-alt="A microscopic, high-fidelity macro shot of refined pulp fibers, showing incredible crystalline structures and organic textures. The lighting is cold, laboratory-white, emphasizing the engineering and purity of the Eucalyptus fiber against a soft gray background. The overall tone is professional, industrial, and high-end." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKoWfVVULfbw-dCIvfbjmeMnWHeF2Lcqwm8Iy2pcvz3VQJ2iXpssQK9iNKc0EXzCCc9a-r-VehqljMqnCy4K_m7GXY46TkXY-eiSBuWl4Pel7nPCJdN537jxI1ZvryKRNjQRQDlEn8jfrQhIC39ZGxJNQCAPtLugedHw7KTjhYAL_ELItgqJAW-FpuOnsWPam-mI0O3g-NyLCjKMORab85oMTDX1z4bv5AI4iLdUUtg2dN1DSmrwDZMPjiS8SjeLSDFINntmmkOuCn" />
<div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/40 to-transparent"></div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#0e6c4a] mb-4 block">THE CORE CONCEPT</span>
<h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-[700] tracking-[-0.01em] text-[#012d1d] mb-6">Remarkably Tastier Fiber</h2>
<p className="font-['Manrope'] text-[18px] leading-[28px] font-[400] text-[#414844] mb-8">Just as fine wine depends on the terroir, our pulp's "flavor" profile is determined by chemical purity and fiber structural integrity. We treat industrial fiber with the same reverence as artisanal craft.</p>
<ul className="space-y-6">
<li className="flex gap-4">
<span className="material-symbols-outlined text-[#0e6c4a] bg-[#D8F3DC] p-2 rounded-lg" data-icon="biotech">biotech</span>
<div>
<h4 className="font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] text-[#012d1d]">Molecular Precision</h4>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">Low lignin content achieved through proprietary eco-digestion.</p>
</div>
</li>
<li className="flex gap-4">
<span className="material-symbols-outlined text-[#0e6c4a] bg-[#D8F3DC] p-2 rounded-lg" data-icon="opacity">opacity</span>
<div>
<h4 className="font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] text-[#012d1d]">High Opacity Index</h4>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">Optimized for premium applications in technical papers.</p>
</div>
</li>
</ul>
</div>
</div>
</section>
{/* Interactive Timeline Section */}
<section className="py-[120px] bg-white overflow-hidden" id="timeline">
<div className="max-w-[1280px] mx-auto px-[24px]">
<div className="text-center mb-[64px]">
<h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-[700] tracking-[-0.01em] text-[#012d1d]">The Stewardship Cycle</h2>
<p className="font-['Manrope'] text-[18px] leading-[28px] font-[400] text-[#414844] max-w-2xl mx-auto">A data-driven approach to every phase of the forest lifecycle.</p>
</div>
<div className="relative relative before:content-[''] before:absolute before:left-[20px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#c1c8c2] before:z-0">
{/* Step 1: Planting */}
<div className="relative z-10 flex flex-col md:flex-row items-center gap-12 mb-32 group transition-all duration-700 opacity-100 translate-y-0">
<div className="w-full md:w-1/2 md:pr-12 md:text-right">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#012d1d] text-white font-bold mb-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-1 border-4 border-white">1</div>
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#0e6c4a] tracking-widest block mb-2">PHASE ONE</span>
<h3 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#012d1d] mb-4">Precision Planting</h3>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">We begin with genetically superior Eucalyptus and Acacia saplings, selected for rapid growth and optimal fiber density. Every seedling is GPS-mapped to monitor its development over a 7-year cycle.</p>
</div>
<div className="w-full md:w-1/2">
<div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 border border-[#EDF0F2]">
<img className="w-full h-80 object-cover scale-105 group-hover:scale-100 transition-transform duration-700" data-alt="A high-contrast editorial photograph of a worker's hands gently placing a vibrant green sapling into rich, dark soil. The lighting is early morning sun, casting soft golden glows. The image captures the texture of the soil and the delicate veins of the leaves in extreme detail, symbolizing stewardship and care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdM4J_SGi_mETc9peY7Uxs5Cc8xWQUcsj3lifneA8O5oaDjZkZlGebzBe2r0CxxCwIq61hqJ4WBPG0XdXn5RasmvvImAyRJnkLilUDlZ1mfV_a6EWcUzJJbBG3Sx_M0hW28CgeGpmLx_TSan276nhSspfmY9-q5UfmWKlcHyP-5iN2qGLKUYO19eyzQ4NtFGwGnFSWbmCAddYw3y96OzxhJqX8jNdcKbvQryL-KPXROncvp55s0JZJRzoxGCJ0JDB6o6Bgn_qHLCXR" />
</div>
</div>
</div>
{/* Step 2: R&D */}
<div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-12 mb-32 group transition-all duration-700 opacity-100 translate-y-0">
<div className="w-full md:w-1/2 md:pl-12">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#012d1d] text-white font-bold mb-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-1 border-4 border-white">2</div>
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#0e6c4a] tracking-widest block mb-2">PHASE TWO</span>
<h3 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#012d1d] mb-4">Advanced R&amp;D</h3>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">Continuous field monitoring using drone-based LiDAR and soil sensors. We analyze nutrient uptake to minimize environmental impact while maximizing the "Engineered Nature" efficiency.</p>
</div>
<div className="w-full md:w-1/2">
<div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 border border-[#EDF0F2]">
<img className="w-full h-80 object-cover scale-105 group-hover:scale-100 transition-transform duration-700" data-alt="A futuristic R&amp;D lab setting where a modern drone is hovering above a tray of diverse plant specimens. Technical data overlays and digital readouts are subtly reflected on glass surfaces. The lighting is cool, professional blue and white, emphasizing high-tech agricultural science and innovation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDozjPpWb0d_OHR9HDtSesgFzWzmY05jc3nB7BNNnyIDypFmyzqyW9uzUEYvRk5cBf2r2ToCiKqYKHEByoxzgLY2RCcuBBmjZ255DyJ_YwkkAAoFXP69Q5FrWk1arCwhsjzEvzqv6WBKOOEJ4VqC2OwVZg84NJvKVJrBCf-n77pcpsx5RaqPUWUu7Z3twnt_umFgE5Dxqn6GRto2V9sdxPfzfTfzONyCajbaRFwZt5HxwMCZ5WYt3k2HDjRt4zjGOmVnqDPgoeZOhR1" />
</div>
</div>
</div>
{/* Step 3: Harvest */}
<div className="relative z-10 flex flex-col md:flex-row items-center gap-12 mb-32 group transition-all duration-700 opacity-100 translate-y-0">
<div className="w-full md:w-1/2 md:pr-12 md:text-right">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#012d1d] text-white font-bold mb-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-1 border-4 border-white">3</div>
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#0e6c4a] tracking-widest block mb-2">PHASE THREE</span>
<h3 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#012d1d] mb-4">Low-Impact Harvest</h3>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">Harvesting occurs with surgical precision. Using multi-process harvesters that debark on-site, we return nutrients directly to the forest floor, ensuring a closed-loop ecosystem.</p>
</div>
<div className="w-full md:w-1/2">
<div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 border border-[#EDF0F2]">
<img className="w-full h-80 object-cover scale-105 group-hover:scale-100 transition-transform duration-700" data-alt="A powerful, modern industrial harvester working in a sun-drenched forest of tall Eucalyptus trees. The machine is high-tech with a clean yellow and black finish. Dust motes dance in the light shafts. The shot captures the sheer scale and efficiency of the operation while maintaining a sense of clean, orderly forestry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYDG6en-wCfsYk0UOyiWaBIh7cc_idRPgP7UshahwSA0Ht-iK1EGs59lQvINhTf2K27Q9Zo29HMbutzQa7H9pRas98JQQNJT6CbxSbeu5XjB0oGXI9U1BwZ6ZsSPE8mq58QTPBflzCt96T_FJL_3zf-o-dyAmKEwznKq6bfq1fdZ8dc-y__O3ctgdhf4b4oscX1EWnuJJWb_t66BZQccn330inCiXUwRKetsP71ew2TeWs1qlXiGNmHikbnGAL7DYl8Kt1gFQnFlnn" />
</div>
</div>
</div>
{/* Step 4: Pulping */}
<div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-12 mb-32 group transition-all duration-700 opacity-100 translate-y-0">
<div className="w-full md:w-1/2 md:pl-12">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#012d1d] text-white font-bold mb-4 md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-1 border-4 border-white">4</div>
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#0e6c4a] tracking-widest block mb-2">PHASE FOUR</span>
<h3 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-[600] text-[#012d1d] mb-4">Refined Pulping</h3>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#414844]">Our facility utilizes ECF (Elemental Chlorine Free) bleaching and renewable biomass energy. The raw wood is transformed into high-grade pulp sheets ready for global industrial applications.</p>
</div>
<div className="w-full md:w-1/2">
<div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 border border-[#EDF0F2]">
<img className="w-full h-80 object-cover scale-105 group-hover:scale-100 transition-transform duration-700" data-alt="Inside a gleaming, modern pulp processing plant. Polished steel pipes and large, clean white vats dominate the scene. Everything is immaculate, conveying a sense of laboratory-grade cleanliness and industrial perfection. The lighting is bright and even, highlighting the technical sophistication of the pulp transformation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6T8BYCgnfixByXAAhAbn8J_AL-wrvxh990KJXE-7Ii7TFUoAyKfqxWx-asPr5IGAE4rPHjb_Zb4r9rwOxPmkO5kNid84ra7GesjQIqCDgIYEubWBC-ndYCyutz2Ye1txPMoOGatV_TSnequ8_N69o-2kbF0ZZVA3IOw41A62D3Q7kCxkaeN4YqbLgo3ldqSwC0nJu4jWnIA6aCV3lz_pfqz6_8N9SoioB_3UiDFatjHol_Cf4WP23kQIrJ4f37pK9KlC7GbvQlxEA" />
</div>
</div>
</div>
</div>
</div>
</section>
{/* Growth Metrics Section */}
<section className="py-[120px] bg-[#012d1d] text-white relative overflow-hidden">

<div className="max-w-[1280px] mx-auto px-[24px] relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#D8F3DC] mb-4 block">GROWTH CYCLE</span>
<div className="font-['Hanken_Grotesk'] text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-[700] tracking-[-0.02em] mb-2">7 Years</div>
<div className="w-full bg-white/20 h-1 rounded-full mb-4">
<div className="bg-[#D8F3DC] h-full rounded-full" style={{ width: '100%' }}></div>
</div>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#a5d0b9]">Optimized rotation for maximum carbon sequestration.</p>
</div>
<div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#D8F3DC] mb-4 block">WATER RECYCLING</span>
<div className="font-['Hanken_Grotesk'] text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-[700] tracking-[-0.02em] mb-2">94%</div>
<div className="w-full bg-white/20 h-1 rounded-full mb-4">
<div className="bg-[#D8F3DC] h-full rounded-full" style={{ width: '94%' }}></div>
</div>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#a5d0b9]">Industrial water closed-loop efficiency rating.</p>
</div>
<div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
<span className="font-['Hanken_Grotesk'] text-[12px] leading-[16px] font-[700] tracking-[0.05em] text-[#D8F3DC] mb-4 block">BIOMASS POWERED</span>
<div className="font-['Hanken_Grotesk'] text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] font-[700] tracking-[-0.02em] mb-2">100%</div>
<div className="w-full bg-white/20 h-1 rounded-full mb-4">
<div className="bg-[#D8F3DC] h-full rounded-full" style={{ width: '100%' }}></div>
</div>
<p className="font-['Manrope'] text-[16px] leading-[24px] font-[400] text-[#a5d0b9]">Facilities run entirely on forest-derived bioenergy.</p>
</div>
</div>
</div>
</section>
{/* Final CTA: Catalog */}
<section className="py-[120px] bg-[#f9faf6]">
<div className="max-w-4xl mx-auto px-[24px] text-center">
<h2 className="font-['Hanken_Grotesk'] text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-[700] tracking-[-0.01em] text-[#012d1d] mb-6">Ready to source premium industrial fiber?</h2>
<p className="font-['Manrope'] text-[18px] leading-[28px] font-[400] text-[#414844] mb-10">Explore our full catalog of Eucalyptus and Acacia pulp variations, tailored for your specific manufacturing needs.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<button className="bg-[#012d1d] text-[#ffffff] px-10 py-5 rounded-full font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] hover:bg-[#0e6c4a] transition-colors shadow-lg">View Product Catalog</button>
<button className="border border-[#012d1d] text-[#012d1d] px-10 py-5 rounded-full font-['Hanken_Grotesk'] text-[16px] leading-[20px] font-[600] hover:bg-[#F4F1EE] transition-colors">Request Sample Specs</button>
</div>
</div>
</section>
</main>

    </div>
  );
}
