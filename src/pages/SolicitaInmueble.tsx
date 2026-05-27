import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormularioMultiStep from "@/components/home/FormularioMultiStep";
import { useSiteUser } from "@/hooks/useSiteUser";
import { useEffect, useState } from "react";

export default function SolicitaInmueble() {
  const { user } = useSiteUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Búsqueda Inteligente Inmobiliaria | {user?.nombre_usuario ?? "M&E Inmobiliaria"}</title>
        <meta
          name="description"
          content="Completa nuestro formulario inteligente de 6 pasos para definir tu perfil de búsqueda en Saltillo. Te presentaremos opciones altamente calificadas."
        />
      </Helmet>

      <div className="bg-slate-50 min-h-screen text-slate-800 relative overflow-hidden">
        {/* Luces radiales de fondo (Ambient Glows) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

        <Navbar />

        <main className={`relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Encabezado Editorial Premium */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="font-sans text-[#1D4ED8] text-xs font-bold tracking-[0.25em] uppercase block">
              Servicio de Búsqueda Inteligente
            </span>
            <h1 className="font-serif font-black text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Encuentra Tu Propiedad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1D4ED8]">
                Ideal en Saltillo
              </span>
            </h1>
            <p className="font-sans text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-2">
              Cuéntanos sobre tus necesidades, estilo de vida y presupuesto. 
              Te presentaremos opciones calificadas que encajan con lo que buscas.
            </p>
          </div>

          {/* Wrapper Liquid-Glass Premium para el Formulario MultiStep */}
          <div className="max-w-4xl mx-auto relative group">
            {/* Brillo perimetral sutil */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-[#1D4ED8]/10 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000" />
            
            {/* Contenedor principal de vidrio líquido */}
            <div className="relative backdrop-blur-2xl bg-white/80 border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden">
              
              {/* Barra superior de acento azul */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent" />

              {/* Formulario — Lógica Category A intacta */}
              <FormularioMultiStep />
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
