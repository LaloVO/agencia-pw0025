import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { useSiteUser } from '@/hooks/useSiteUser';

const NAV_LINKS = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/mapa', label: 'Ver Mapa' },
  { href: '/solicita-inmueble', label: 'Búsqueda Inteligente' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useSiteUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      navigate(href);
    }
  };

  const whatsappNumber = user?.telefono_usuario?.replace(/\D/g, '') ?? '528441223344';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6">
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? 'max-w-[92%] rounded-full px-6 py-3 backdrop-blur-xl bg-white/80 border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
            : 'max-w-7xl px-6 py-2 bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/#inicio')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1D4ED8] to-[#2563EB] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Building2 className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="text-left">
              <span className="font-serif font-black text-sm text-slate-900 tracking-wider uppercase block leading-none">
                M&E Inmobiliaria
              </span>
              <span className="text-[10px] text-[#1D4ED8] tracking-[0.18em] uppercase font-sans font-bold">
                Asesoría Profesional
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-xs uppercase tracking-widest font-sans font-bold text-slate-600 hover:text-[#1D4ED8] hover:bg-slate-100/50 rounded-full transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola%20M%26E%20Inmobiliaria,%20me%20interesa%20una%20propiedad`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            {user?.telefono_usuario ?? 'Saltillo'}
          </a>

          {/* Mobile hamburger */}
          <button
            id="navbar-menu-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-800 border border-slate-200"
            aria-label="Abrir menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 mx-4 rounded-3xl backdrop-blur-xl bg-white/95 border border-slate-200/60 shadow-xl p-5 animate-in fade-in zoom-in-95 duration-200">
          <ul className="flex flex-col gap-1.5 mb-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-sans font-bold uppercase tracking-wider text-slate-700 hover:text-[#1D4ED8] hover:bg-slate-50 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola%20M%26E%20Inmobiliaria,%20me%20interesa%20una%20propiedad`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1D4ED8] text-white text-xs font-sans font-bold uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/15"
          >
            <Phone className="w-4 h-4" />
            Contactar Asesor
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
