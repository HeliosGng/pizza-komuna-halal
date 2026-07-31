import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { checkRealtimeOpeningStatus } from '../utils/hours';

interface MapDirectionsSectionProps {
  lang: Language;
  onOpenCallModal: () => void;
  onOpenDirections: () => void;
  onOpenHoursModal: () => void;
}

export const MapDirectionsSection: React.FC<MapDirectionsSectionProps> = ({
  lang,
  onOpenCallModal,
  onOpenDirections,
  onOpenHoursModal,
}) => {
  const t = translations[lang];
  const status = checkRealtimeOpeningStatus(lang);

  return (
    <section id="location-section" className="py-12 sm:py-16 bg-[#fdfaf6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-950 font-black text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-orange-200">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Tirana, Albania</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif tracking-tight uppercase">
            {t.locationTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {t.locationSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Map Frame */}
          <div className="lg:col-span-7 bg-slate-100 rounded-2xl overflow-hidden shadow-md border border-slate-200 relative aspect-16/10 sm:aspect-16/9">
            
            {/* Embedded map view centered on exact coordinates 41.3163643, 19.8062304 */}
            <iframe
              title="Piceri Komuna e Parisit Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.openstreetmap.org/export/embed.html?bbox=19.8010%2C41.3120%2C19.8115%2C41.3200&layer=mapnik&marker=41.3163643%2C19.8062304"
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <p className="font-bold text-xs text-orange-400 font-serif">Piceri Komuna e Parisit</p>
              </div>
              <p className="text-[11px] text-slate-300">Rruga Tish Daija, Tiranë, Albania</p>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">Plus Code: 8R84+GF Tiranë</p>
            </div>

            {/* Direct Directions Floating Button */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={onOpenDirections}
                className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-4 py-2.5 rounded-xl text-xs shadow-md flex items-center gap-2 transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>{t.directionsButton}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Address Details & Contact Info */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase text-slate-900">
                {t.contactUs}
              </h3>

              {/* Address Row */}
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                    {lang === 'sq' ? 'Adresa Jonë' : 'Location Address'}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                    {t.addressFull}
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">
                    {t.plusCode}
                  </p>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold shrink-0">
                  📞
                </div>
                <div className="flex-1">
                  <p className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                    {lang === 'sq' ? 'Telefon Direkt' : 'Direct Phone'}
                  </p>
                  <p className="text-sm font-bold text-orange-600 font-mono mt-0.5">
                    +355 69 601 0008
                  </p>
                  <button
                    onClick={onOpenCallModal}
                    className="text-xs text-slate-600 underline hover:text-orange-600 mt-1 inline-block font-medium cursor-pointer"
                  >
                    {t.callDirect} &rarr;
                  </button>
                </div>
              </div>

              {/* Real-time Opening Hours Row */}
              <div 
                onClick={onOpenHoursModal}
                className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-2xs cursor-pointer hover:border-orange-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                  ⏰
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                      {t.openingHours}
                    </p>
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded uppercase ${status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                      {status.statusText}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 font-semibold mt-1">
                    {t.fridayHours}
                  </p>
                  <p className="text-xs text-slate-700 font-semibold">
                    {t.regularHours}
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenDirections}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3 rounded-xl text-xs transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>{t.openInGoogleMaps}</span>
              </button>

              <a
                href="https://www.google.com/maps/place/Piceri+Komuna+e+Parisit+hallall/@41.3163188,19.8060835,19.83z/data=!4m6!3m5!1s0x135031da98c6d9ad:0xcf3ea9f62539af9e!8m2!3d41.3163643!4d19.8062304!16s%2Fg%2F11v099y39v"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold px-4 py-3 rounded-xl text-xs transition-colors cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-slate-500" />
                <span>Google Listing</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
