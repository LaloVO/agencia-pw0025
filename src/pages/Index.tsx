import { Helmet } from 'react-helmet-async';
import { useSiteUser } from '@/hooks/useSiteUser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroMe from '@/components/home/HeroMe';
import StatsMe from '@/components/home/StatsMe';
import ServiciosMe from '@/components/home/ServiciosMe';
import PropiedadesMe from '@/components/home/PropiedadesMe';
import PerfilMe from '@/components/home/PerfilMe';
import ContactoMe from '@/components/home/ContactoMe';

const Index = () => {
  const { user } = useSiteUser();

  return (
    <>
      <Helmet>
        <title>
          {user?.nombre_usuario ?? 'Agencia'} — Asesoría Profesional en Saltillo
        </title>
        <meta
          name="description"
          content="Agencia en Saltillo, Ramos Arizpe y Arteaga. Venta, renta e inversión inmobiliaria con seguridad legal, transparencia y acompañamiento experto."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-slate-50 overflow-x-hidden">
        {/* P7 — Hero con Grid Vertical */}
        <HeroMe />

        {/* P3 — Horizontal 4-Stat Strip */}
        <StatsMe />

        {/* P2 — Magazine Split 60/40 de Servicios */}
        <ServiciosMe />

        {/* P9 — Grid Asimétrico en Z de Propiedades */}
        <PropiedadesMe />

        {/* P10 — Magazine Bio Split del Asesor */}
        <PerfilMe />

        {/* Formulario de Contacto Corporativo */}
        <ContactoMe />
      </main>

      <Footer />
    </>
  );
};

export default Index;
