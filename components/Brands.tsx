import React from 'react';

const Brands: React.FC = () => {
  const brands = [
    "Airstream®",
    "Caterpillar®",
    "PGA of America®",
    "Gallery Furniture"
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-10 font-bold text-center">
          Brands I've worked with:
        </h3>
        
        <div className="relative w-full">
          {/* 
            Container for the scrolling track. 
            'animate-scroll' moves -50% of the width. 
            We render the logos twice so that when it hits -50%, 
            it lines up perfectly with the start of the second set, creating a loop.
          */}
          <div className="flex w-max animate-scroll hover:paused">
            {/* First Set */}
            <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
              {brands.map((brand, idx) => (
                <div 
                  key={`brand-1-${idx}`} 
                  className="text-slate-500 hover:text-white transition-all duration-300 transform hover:scale-110 text-2xl md:text-4xl font-black tracking-tight whitespace-nowrap cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>

            {/* Duplicate Set for Loop */}
            <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
              {brands.map((brand, idx) => (
                <div 
                  key={`brand-2-${idx}`} 
                  className="text-slate-500 hover:text-white transition-all duration-300 transform hover:scale-110 text-2xl md:text-4xl font-black tracking-tight whitespace-nowrap cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;