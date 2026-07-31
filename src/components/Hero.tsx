import React from 'react';
import { Phone, MessageSquare, MapPin, Star, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { checkRealtimeOpeningStatus } from '../utils/hours';

interface HeroProps {
  lang: Language;
  onOpenCallModal: () => void;
  onOpenDirections: () => void;
  onOpenHoursModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenCallModal,
  onOpenDirections,
  onOpenHoursModal,
}) => {
  const t = translations[lang];
  const status = checkRealtimeOpeningStatus(lang);

  const scrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsAppDirect = () => {
    const msg = encodeURIComponent(
      lang === 'sq'
        ? 'Përshëndetje! Po ju shkruaj nga faqja e internetit të Piceri Komuna e Parisit hallall. Dëshiroj të bëj një porosi.'
        : 'Hello! I am contacting you from the Piceri Komuna e Parisit website. I would like to place an order.'
    );
    window.open(`https://wa.me/355696010008?text=${msg}`, '_blank');
  };

  return (
    <div className="relative bg-[#20140e] text-white pt-4 pb-8 sm:pt-8 sm:pb-16 overflow-hidden border-b border-orange-950/40">
      {/* Background image overlay using requested photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none scale-105" 
        style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCPIOjHDSPMOrjC7k2GXVuNABxQvwgN2l__bYIdE0we1HHpC6VKI0hbx4&s=10')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <button
                onClick={onOpenHoursModal}
                className={`inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold border transition-colors cursor-pointer ${
                  status.isOpen
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 hover:bg-emerald-900/80'
                    : 'bg-orange-950/80 text-orange-300 border-orange-500/50 hover:bg-orange-900/80'
                }`}
              >
                <Clock className="w-3 h-3 text-orange-400" />
                <span>{status.statusText}</span>
                <span className="font-normal opacity-85">({status.nextChangeText})</span>
              </button>

              <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-slate-950 font-black text-[11px] sm:text-xs px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full shadow-md">
                <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                <span>4.8 ⭐ (30+ Reviews)</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-serif leading-tight sm:leading-[1.12]">
              {lang === 'sq' ? (
                <>
                  Picat më të mira <span className="text-orange-500 underline decoration-orange-400 decoration-wavy decoration-2">100% Hallall</span> në Tiranë
                </>
              ) : (
                <>
                  Authentic <span className="text-orange-500 underline decoration-orange-400 decoration-wavy decoration-2">100% Halal</span> Pizza & Sandwiches in Tirana
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-slate-200 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {t.heroSubtitle} {lang === 'sq' ? 'Toaste krokante të nxehta, kalzone dhe shërbim i shpejtë në Rruga Tish Daija.' : 'Hot toasted crispy sandwiches, calzone, crepes, and fast delivery at Rruga Tish Daija.'}
            </p>

            {/* Daily Special Banner Card */}
            <div className="bg-slate-900/90 border border-orange-500/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl text-left shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 backdrop-blur-md">
              <div className="space-y-0.5 sm:space-y-1">
                <span className="text-[9px] sm:text-[10px] font-black text-orange-300 uppercase tracking-widest bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/30">
                  Special e Ditës
                </span>
                <h3 className="text-sm sm:text-lg font-bold text-white">
                  Pica Komuna e Parisit
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2">
                  Pana, gorgonzola, mozzarella, grana, proshutë viçi hallall, kërpudha, domate.
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-end sm:self-center">
                <span className="font-black text-lg sm:text-xl text-orange-400 font-mono">600 ALL</span>
                <button
                  onClick={scrollToMenu}
                  className="bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer active:scale-95"
                >
                  + {t.addToCart}
                </button>
              </div>
            </div>

            {/* Action Buttons Grid */}
            <div className="pt-1 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              {/* Order Menu Button */}
              <button
                onClick={scrollToMenu}
                className="col-span-2 sm:w-auto inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black uppercase tracking-wider px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>{t.orderNow}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* WhatsApp Quick Order Button */}
              <button
                onClick={openWhatsAppDirect}
                className="inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-500 text-white font-extrabold px-3 py-2.5 sm:px-5 sm:py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </button>

              {/* Call Directly Button */}
              <button
                onClick={onOpenCallModal}
                className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold px-3 py-2.5 sm:px-5 sm:py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95 border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                <span>355 69 601 0008</span>
              </button>

              {/* Directions Button */}
              <button
                onClick={onOpenDirections}
                className="col-span-2 sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-3 py-2.5 sm:px-4 sm:py-3.5 rounded-xl text-xs sm:text-sm border border-slate-700 shadow-sm transition-all cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>{t.getDirections}</span>
              </button>
            </div>

          </div>

          {/* Right Column Image Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Featured Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-4/3 group">
                <img
                  src="https://suebeehomemaker.com/wp-content/uploads/2024/09/supreme-pizza-recipe-6.jpg"
                  alt="Pica Komuna e Parisit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Image Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl sm:rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between gap-2">
                  <div>
                    <p className="font-bold text-xs sm:text-sm font-serif leading-tight">Pica Speciale</p>
                    <p className="text-[11px] text-orange-400 font-medium mt-0.5">100% Hallall • Specialitet</p>
                  </div>
                  <span className="font-black text-orange-400 text-base sm:text-lg font-mono shrink-0">600 ALL</span>
                </div>
              </div>

              {/* Secondary Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                  🥪
                </div>
                <div>
                  <p className="font-bold text-xs text-slate-900">Sanduiçe Krokante</p>
                  <p className="text-[11px] text-slate-500 font-medium">"Well toasted & delicious!"</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-xl">
                  🥐
                </div>
                <div>
                  <p className="font-bold text-xs text-slate-900">Kalzone & Krepa</p>
                  <p className="text-[11px] text-slate-500 font-medium">Të mbushura me dëshirë</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
