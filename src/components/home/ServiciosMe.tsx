import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building } from 'lucide-react';

const ServiciosMe = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-slate-50 py-24 relative overflow-hidden z-10">
      {/* Background radial blur */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="font-sans text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase block">
            Nuestros Servicios
          </span>
          <h2 className="font-serif font-black text-slate-900 text-3xl md:text-5xl leading-tight">
            Asesoría Profesional de Principio a Fin
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
            Te ofrecemos soluciones a la medida, combinando la mejor tecnología de búsqueda y un profundo conocimiento legal.
          </p>
        </div>

        {/* Bloque Asimétrico 1: Comprar (P2 Magazine Split 60/40) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden relative aspect-[16/10] bg-slate-200 shadow-lg shadow-slate-200/50 border border-slate-200/40 group">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200"
              alt="Comprar Residencia"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <span className="font-serif font-black text-7xl sm:text-8xl text-blue-500/10 leading-none block">
              01
            </span>
            <div className="-mt-8 space-y-3">
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-[#1D4ED8]" />
                Para Compradores
              </h3>
              <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
                Encuentra tu hogar ideal o inversión con el respaldo de nuestro buscador inteligente. Filtramos las mejores propiedades que coinciden exactamente con tus requerimientos de presupuesto, ubicación y estilo de vida.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/solicita-inmueble"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-lg active:scale-95"
              >
                Iniciar Búsqueda Inteligente
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bloque Asimétrico 2: Vender (P2 Magazine Split 40/60 Inverso) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Orden inverso en mobile: texto arriba, imagen abajo */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:order-1 order-2">
            <span className="font-serif font-black text-7xl sm:text-8xl text-blue-500/10 leading-none block">
              02
            </span>
            <div className="-mt-8 space-y-3">
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 flex items-center gap-2.5">
                <Building className="w-6 h-6 text-[#1D4ED8]" />
                Para Vendedores
              </h3>
              <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
                Promocionamos tu propiedad de manera estratégica con campañas de marketing digital de alto impacto. Nos encargamos de todo el proceso de filtrado de clientes y cierre notarial para garantizar una transacción 100% segura.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/528441223344?text=Hola%20M%26E%20Inmobiliaria,%20me%20gustar%C3%ADa%20vender%20una%20propiedad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-blue-500/30 text-slate-700 hover:text-[#1D4ED8] font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm active:scale-95"
              >
                Promocionar Propiedad
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden relative aspect-[16/10] bg-slate-200 shadow-lg shadow-slate-200/50 border border-slate-200/40 group lg:order-2 order-1">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
              alt="Vender Residencia"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiciosMe;
