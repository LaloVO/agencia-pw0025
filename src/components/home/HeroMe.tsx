import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Building2, MapPin } from 'lucide-react';
import { useSiteUser } from '@/hooks/useSiteUser';

const HeroMe = () => {
  const { user } = useSiteUser();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [tipo, setTipo] = useState<'comprar' | 'rentar'>('comprar');
  const [query, setQuery] = useState('');

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    params.set('accion', tipo === 'comprar' ? '1' : '2');
    navigate(`/mapa?${params.toString()}`);
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] md:min-h-screen w-full flex flex-col justify-between bg-slate-50 overflow-hidden pt-28">
      {/* Background Subtle Shapes */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Top 65% — Text Editorial y Branded Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        <div className={`max-w-4xl transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-[#1D4ED8]">
              Líderes en Saltillo
            </span>
          </div>

          <h1 className="font-serif font-black text-slate-900 text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1.08] mb-6">
            Tu patrimonio en las <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1D4ED8]">
              mejores manos.
            </span>
          </h1>

          <p className="font-sans text-slate-500 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Bienvenido a **Agencia**. Nos especializamos en conectar tus metas patrimoniales con las mejores propiedades residenciales, comerciales y terrenos en Coahuila.
          </p>
        </div>
      </div>

      {/* Bottom 35% — Buscador Vertical Prominente con imagen de soporte a los lados */}
      <div className="relative z-10 w-full px-6 pb-16 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Buscador Prominente */}
            <div className="lg:col-span-8 bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif font-bold text-slate-800 text-sm tracking-wide">Buscar Propiedades</span>
                {/* Selector de tipo */}
                <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200/50">
                  <button
                    onClick={() => setTipo('comprar')}
                    className={`px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all ${
                      tipo === 'comprar'
                        ? 'bg-white text-[#1D4ED8] shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Comprar
                  </button>
                  <button
                    onClick={() => setTipo('rentar')}
                    className={`px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all ${
                      tipo === 'rentar'
                        ? 'bg-white text-[#1D4ED8] shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Rentar
                  </button>
                </div>
              </div>

              {/* Input */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                <div className="flex-1 relative flex items-center">
                  <MapPin className="absolute left-4 w-5 h-5 text-blue-500 shrink-0" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Colonia, zona o tipo de propiedad (ej. casa, departamento)..."
                    className="w-full bg-slate-50 border border-slate-200/60 rounded-full py-4 pl-12 pr-4 text-slate-800 placeholder:text-slate-400 text-sm font-sans focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="px-8 py-4 bg-[#1D4ED8] hover:bg-[#2563EB] text-white text-xs font-sans font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md shadow-blue-500/10 flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Buscar
                </button>
              </div>
            </div>

            {/* Imagen Editorial de Soporte Lateral (Asimétrica) */}
            <div className="hidden lg:block lg:col-span-4 rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-200/20 bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000"
                alt="Boutique Residence"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif font-black text-sm uppercase tracking-wider leading-none">Viviendas Exclusivas</p>
                <p className="font-sans text-[10px] text-white/70 mt-1 uppercase tracking-widest">Saltillo, Ramos Arizpe & Arteaga</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMe;
