import { Link } from 'react-router-dom';
import { Bed, Bath, Square, Car, MapPin } from 'lucide-react';
import { CBFProperty, formatPrice } from '@/lib/cbf';

interface PropertyCardProps {
  property: CBFProperty;
  variant?: 'default' | 'compact';
}

const PropertyCard = ({ property, variant = 'default' }: PropertyCardProps) => {
  const images = property.imagenes_propiedades ?? [];
  const mainImage = images[0]?.image_url 
    ?? 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800';

  const badge = property.id_tipo_accion === 2 ? 'Renta' : 'Venta';
  const location = [property.colonia, property.direccion].filter(Boolean).join(', ') || 'Saltillo, Coahuila';

  if (variant === 'compact') {
    return (
      <Link
        to={`/properties/${property.id}`}
        className="group flex gap-4 bg-white border border-slate-100 hover:border-blue-500/30 rounded-2xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 cursor-pointer"
      >
        {/* Imagen */}
        <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative bg-slate-100">
          <img
            src={mainImage}
            alt={property.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2 z-10">
            <span className="px-2 py-0.5 bg-[#1D4ED8] text-white text-[9px] font-sans font-bold uppercase tracking-wider rounded-md">
              {badge}
            </span>
          </div>
        </div>

        {/* Detalles */}
        <div className="flex flex-col justify-between py-1 min-w-0">
          <div className="space-y-1">
            <h3 className="font-serif font-black text-sm text-slate-800 line-clamp-1 group-hover:text-[#1D4ED8] transition-colors leading-snug">
              {property.nombre}
            </h3>
            <p className="font-sans text-[11px] text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="truncate">{location}</span>
            </p>
          </div>
          <p className="font-serif font-black text-[#1D4ED8] text-sm">
            {formatPrice(property.precio)}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/properties/${property.id}`}
      className="group bg-white border border-slate-100 hover:border-blue-500/20 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1"
    >
      {/* Container de Imagen */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
        <img
          src={mainImage}
          alt={property.nombre}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3.5 py-1 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white text-[10px] font-sans font-bold uppercase tracking-wider rounded-full shadow-md shadow-blue-500/10">
            {badge}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Precio */}
          <p className="font-serif font-black text-[#1D4ED8] text-xl tracking-tight leading-none">
            {formatPrice(property.precio)}
          </p>
          
          {/* Nombre */}
          <h3 className="font-serif font-black text-slate-800 text-base line-clamp-1 leading-snug group-hover:text-[#1D4ED8] transition-colors duration-200 pt-0.5">
            {property.nombre}
          </h3>

          {/* Ubicación */}
          <p className="font-sans text-xs text-slate-400 flex items-center gap-1.5 pt-0.5">
            <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="truncate">{location}</span>
          </p>
        </div>

        {/* Características Técnicas */}
        <div className="grid grid-cols-4 gap-2 pt-5 mt-5 border-t border-slate-100 font-sans text-xs text-slate-600 font-semibold">
          <div className="flex flex-col items-center gap-1 justify-center py-1.5 bg-slate-50/50 rounded-2xl">
            <Bed className="w-4 h-4 text-blue-500" />
            <span className="text-[10px]">{property.habitaciones ?? 0} Rec.</span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center py-1.5 bg-slate-50/50 rounded-2xl">
            <Bath className="w-4 h-4 text-blue-500" />
            <span className="text-[10px]">{property.banios ?? 0} Baños</span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center py-1.5 bg-slate-50/50 rounded-2xl">
            <Car className="w-4 h-4 text-blue-500" />
            <span className="text-[10px]">{property.estacionamientos ?? 0} Est.</span>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center py-1.5 bg-slate-50/50 rounded-2xl">
            <Square className="w-4 h-4 text-blue-500" />
            <span className="text-[10px]">{property.area ?? 0} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
