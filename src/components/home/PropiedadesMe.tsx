import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProperties } from '@/hooks/useProperties';
import PropertyCard from '@/components/PropertyCard';

const PropiedadesMe = () => {
  const { properties, isLoading } = useProperties({ limit: 4 });
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-24 relative overflow-hidden z-10" id="propiedades">
      {/* Background shape */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="font-sans text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase mb-2">
              Portafolio Destacado
            </p>
            <h2 className="font-serif font-black text-slate-900 text-3xl md:text-5xl leading-tight">
              Propiedades Exclusivas <br />en Saltillo
            </h2>
          </div>
          <Link
            to="/mapa"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md shadow-blue-500/10 active:scale-95 whitespace-nowrap"
          >
            Explorar en Mapa
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetric Editorial Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-100 rounded-3xl h-[400px]"
              />
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20 text-slate-400 font-sans text-sm">
            Cargando propiedades...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Tarjeta 1: Columna 5-span, Taller/Offset superior */}
            <div
              className={`md:col-span-5 md:mt-8 transition-all duration-1000 transform ${
                visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              {properties[0] && <PropertyCard property={properties[0]} />}
            </div>

            {/* Tarjeta 2: Columna 7-span, Normal */}
            <div
              className={`md:col-span-7 transition-all duration-1000 delay-200 transform ${
                visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              {properties[1] && <PropertyCard property={properties[1]} />}
            </div>

            {/* Tarjeta 3: Columna 7-span, Normal */}
            <div
              className={`md:col-span-7 transition-all duration-1000 delay-300 transform ${
                visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              {properties[2] && <PropertyCard property={properties[2]} />}
            </div>

            {/* Tarjeta 4: Columna 5-span, Offset inferior */}
            <div
              className={`md:col-span-5 md:-mt-8 transition-all duration-1000 delay-400 transform ${
                visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              {properties[3] && <PropertyCard property={properties[3]} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropiedadesMe;
