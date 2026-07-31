import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
  onOpenCallModal: () => void;
  onOpenDirections: () => void;
  onOpenHoursModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenCallModal,
  onOpenDirections,
  onOpenHoursModal,
}) => {
  const t = translations[lang];

  return (
    <footer className="bg-slate-950 text-white pt-12 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-xl">
                🍕
              </div>
              <div>
                <h3 className="font-bold text-xl font-serif text-white uppercase tracking-tight">
                  Piceri Komuna e Parisit
                </h3>
                <span className="bg-emerald-900 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-700 uppercase">
                  100% Hallall
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              {t.footerDesc}
            </p>

            <div className="flex items-center gap-2 text-xs text-orange-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.halalCertified}</span>
            </div>
          </div>

          {/* Quick Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-white font-serif uppercase tracking-wider">
              {t.contactUs}
            </h4>

            <div className="space-y-2 text-xs text-slate-300 font-medium">
              <button
                onClick={onOpenDirections}
                className="flex items-start gap-2 hover:text-orange-400 text-left cursor-pointer transition-colors"
              >
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Rruga Tish Daija, Komuna e Parisit, Tiranë, Albania</span>
              </button>

              <button
                onClick={onOpenCallModal}
                className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-mono font-bold text-orange-400">+355 69 601 0008</span>
              </button>

              <button
                onClick={onOpenHoursModal}
                className="flex items-start gap-2 hover:text-orange-400 text-left cursor-pointer transition-colors"
              >
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p>E Premte: 14:00 - 00:00</p>
                  <p>E Shtunë - E Enjte: 10:00 - 00:00</p>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white font-serif uppercase tracking-wider">
              {lang === 'sq' ? 'Navigimi' : 'Navigation'}
            </h4>

            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a href="#menu-section" className="hover:text-orange-400 transition-colors">
                  {t.orderNow}
                </a>
              </li>
              <li>
                <a href="#location-section" className="hover:text-orange-400 transition-colors">
                  {t.locationTitle}
                </a>
              </li>
              <li>
                <a href="#reviews-section" className="hover:text-orange-400 transition-colors">
                  {t.reviewsTitle}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Piceri Komuna e Parisit. {t.rightsReserved}</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Tirana, Albania
          </p>
        </div>

      </div>
    </footer>
  );
};
