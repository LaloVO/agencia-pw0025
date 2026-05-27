import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '15+', label: 'Años de Trayectoria' },
  { value: '350+', label: 'Propiedades Vendidas' },
  { value: '98%', label: 'Clientes Satisfechos' },
  { value: '100%', label: 'Seguridad Legal' },
];

const StatsMe = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white border-y border-slate-100 py-16 relative overflow-hidden z-10">
      {/* Background Shape */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-transparent to-blue-50/10 pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 divide-y divide-slate-100 md:divide-y-0 md:divide-x divide-slate-200/60">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center px-4 pt-6 md:pt-0">
              <span className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#1D4ED8] block tracking-tight leading-none mb-2">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMe;
