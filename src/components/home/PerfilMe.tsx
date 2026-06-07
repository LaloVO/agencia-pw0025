import { useEffect, useRef, useState } from 'react';
import { useSiteUser } from '@/hooks/useSiteUser';
import { Phone, Award, Shield, Heart } from 'lucide-react';

const PerfilMe = () => {
  const { user } = useSiteUser();
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

  const tel = user?.telefono_usuario ?? '844-122-3344';
  const whatsappUrl = `https://wa.me/${tel.replace(/\D/g, '')}?text=Hola%20M%26E%20Inmobiliaria,%20me%20gustar%C3%ADa%20ponerme%20en%20contacto`;

  const profileImg = user?.imagen_perfil_usuario 
    ?? 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800';

  return (
    <section ref={ref} className="bg-slate-50 py-16 relative overflow-hidden z-10" id="perfil">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200/40 bg-white transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Columna Izquierda: 50% Banner Azul Corporativo con Texto */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] p-8 sm:p-12 md:p-16 flex flex-col justify-between text-white relative">
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="font-sans text-white/80 text-xs font-bold tracking-[0.2em] uppercase block">
                Tu Asesor de Confianza
              </span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
                {user?.nombre_usuario ?? 'Agencia Asesoría Inmobiliaria'}
              </h2>
              <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">
                Mi compromiso es darte una experiencia de compra, venta o renta de inmuebles totalmente transparente y segura. Te guío de forma personalizada en cada paso del proceso, cuidando siempre de tu patrimonio.
              </p>
            </div>

            {/* Diferenciadores */}
            <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10 relative z-10">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                  <Award className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-white/90">Experiencia</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                  <Shield className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-white/90">Seguridad</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                  <Heart className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-white/90">Compromiso</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: 50% Foto del Asesor */}
          <div className="lg:col-span-6 relative aspect-square lg:aspect-auto min-h-[400px] bg-slate-100 overflow-hidden">
            <img
              src={profileImg}
              alt={user?.nombre_usuario ?? 'Agencia Asesor'}
              className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
            />
            {/* Hover overlay perimetral */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 flex items-end p-8 sm:p-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-sans font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 z-20"
              >
                <Phone className="w-4 h-4 text-[#1D4ED8]" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PerfilMe;
