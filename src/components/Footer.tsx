import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Building2, Facebook, MessageCircle } from 'lucide-react';
import { useSiteUser } from '@/hooks/useSiteUser';

const Footer = () => {
  const { user } = useSiteUser();
  const year = new Date().getFullYear();

  const tel = user?.telefono_usuario ?? '844-122-3344';
  const email = user?.email_usuario ?? 'contacto@meinmobiliaria.com.mx';
  const whatsappUrl = `https://wa.me/${tel.replace(/\D/g, '')}?text=Hola%20M%26E%20Inmobiliaria,%20me%20gustaría%20más%20información`;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-6 md:px-12 rounded-t-[2.5rem] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand Block */}
        <div className="space-y-4 col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1D4ED8] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-serif font-black text-white text-base tracking-widest uppercase">
              M&E Inmobiliaria
            </span>
          </div>
          <p className="font-sans text-sm text-slate-400 max-w-sm leading-relaxed">
            Asesoría profesional en Saltillo. Te acompañamos a tomar la mejor decisión patrimonial con honestidad, rapidez y seguridad legal.
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-white text-sm uppercase tracking-widest">Contacto</h3>
          <ul className="space-y-3 font-sans text-sm">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#1D4ED8] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#1D4ED8]" />
                <span>{tel}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 hover:text-[#1D4ED8] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#1D4ED8]" />
                <span className="break-all">{email}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#1D4ED8]" />
              <span>Saltillo, Coahuila, México</span>
            </li>
          </ul>
        </div>

        {/* Social / Redes */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-white text-sm uppercase tracking-widest">Sígannos</h3>
          <p className="font-sans text-xs text-slate-500 leading-relaxed">
            Mantente al día con nuestras preventas exclusivas y nuevas oportunidades de inversión.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100064087568495"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#1D4ED8] text-white flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Dividir */}
      <div className="h-px bg-slate-800 my-10 max-w-7xl mx-auto" />

      {/* Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
        <p>© {year} Asesoría Inmobiliaria M&E. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link to="/solicita-inmueble" className="hover:text-white transition-colors">
            Búsqueda Inteligente
          </Link>
          <Link to="/mapa" className="hover:text-white transition-colors">
            Mapa de Propiedades
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
