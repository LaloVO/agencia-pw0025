import { useEffect, useRef, useState } from 'react';
import { useSiteUser } from '@/hooks/useSiteUser';
import { Send, Sparkles, MessageSquare } from 'lucide-react';

const ContactoMe = () => {
  const { user } = useSiteUser();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tel = user?.telefono_usuario ?? '844-122-3344';
    const text = encodeURIComponent(
      `Hola M&E Inmobiliaria, mi nombre es ${form.nombre}. Me interesa ponerme en contacto.\n` +
      `Correo: ${form.email}\n` +
      `Teléfono: ${form.telefono}\n` +
      `Mensaje: ${form.mensaje}`
    );
    window.open(`https://wa.me/${tel.replace(/\D/g, '')}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section ref={ref} className="bg-white py-24 relative overflow-hidden z-10" id="contacto">
      {/* Background Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Contenedor Principal de Vidrio/Sombra */}
        <div className="bg-slate-50 border border-slate-200/60 p-8 sm:p-12 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent" />

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="font-sans text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase block">
              Contacto Directo
            </span>
            <h2 className="font-serif font-black text-slate-900 text-2xl sm:text-4xl leading-tight">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="font-sans text-slate-500 text-sm">
              Déjame tus datos y me comunicaré contigo a la brevedad para asesorarte sin compromiso.
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="nombre" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Nombre Completo</label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre y apellido..."
                  className="w-full bg-white border border-slate-200/60 rounded-2xl py-3.5 px-4 text-slate-800 placeholder:text-slate-400 text-sm font-sans focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Correo Electrónico</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ejemplo@correo.com..."
                  className="w-full bg-white border border-slate-200/60 rounded-2xl py-3.5 px-4 text-slate-800 placeholder:text-slate-400 text-sm font-sans focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="telefono" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Número de Teléfono</label>
              <input
                id="telefono"
                type="tel"
                required
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                placeholder="Teléfono a 10 dígitos..."
                className="w-full bg-white border border-slate-200/60 rounded-2xl py-3.5 px-4 text-slate-800 placeholder:text-slate-400 text-sm font-sans focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="mensaje" className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Mensaje o Requerimiento</label>
              <textarea
                id="mensaje"
                rows={3}
                required
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                placeholder="Cuéntame qué tipo de propiedad o servicio requieres..."
                className="w-full bg-white border border-slate-200/60 rounded-2xl py-3.5 px-4 text-slate-800 placeholder:text-slate-400 text-sm font-sans focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-md shadow-blue-500/10 hover:shadow-lg active:scale-95 transition-all duration-300"
            >
              {sent ? '¡Mensaje Enviado!' : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar por WhatsApp
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactoMe;
