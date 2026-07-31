import React from 'react';
import { Phone, ShoppingBag, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { Language, CartItem } from '../types';
import { translations } from '../translations';
import { checkRealtimeOpeningStatus } from '../utils/hours';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenHoursModal: () => void;
  onOpenCallModal: () => void;
  onOpenDirections: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  cartItems,
  onOpenCart,
  onOpenHoursModal,
  onOpenCallModal,
  onOpenDirections,
}) => {
  const t = translations[lang];
  const status = checkRealtimeOpeningStatus(lang);
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Banner Notice Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-slate-300 text-[11px] font-semibold uppercase tracking-wider">
              📍 {t.addressShort} • Rruga Tish Daija
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <button 
              onClick={onOpenHoursModal}
              className="hover:text-orange-400 flex items-center gap-1 transition-colors cursor-pointer text-xs font-medium"
            >
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              <span className={status.isOpen ? 'text-emerald-400 font-bold' : 'text-orange-400 font-bold'}>
                {status.statusText}
              </span>
              <span className="hidden md:inline">({status.nextChangeText})</span>
            </button>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <button 
              onClick={onOpenDirections}
              className="hover:text-orange-400 hidden sm:flex items-center gap-1 transition-colors cursor-pointer text-xs font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{t.getDirections}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-0.5 shadow-md shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=120&q=80" 
                alt="Pizza Komuna e Parisit Logo" 
                className="w-full h-full object-cover rounded-full border-2 border-white"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-sm sm:text-xl text-slate-900 tracking-tight leading-none uppercase group-hover:text-orange-600 transition-colors">
                  Piceri Komuna e Parisit
                </h1>
              </div>
              <p className="text-[10px] sm:text-xs text-orange-600 font-bold uppercase tracking-widest hidden sm:block mt-1">
                Tirana
              </p>
            </div>
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle Button Pill */}
          <div className="flex bg-slate-100 rounded-full p-1 border border-slate-200">
            <button
              onClick={onToggleLang}
              className={`px-3 py-1 text-xs font-bold transition-all cursor-pointer rounded-full ${
                lang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              EN
            </button>
            <button
              onClick={onToggleLang}
              className={`px-3 py-1 text-xs font-bold transition-all cursor-pointer rounded-full ${
                lang === 'sq' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              AL
            </button>
          </div>

          {/* Direct Phone Call Button */}
          <a
            href="tel:+355696010008"
            className="hidden md:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            title="Call Restaurant +355 69 601 0008"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>+355 69 601 0008</span>
          </a>

          {/* Cart Trigger Button */}
          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm shadow-sm transition-all cursor-pointer active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-orange-400" />
            <span className="hidden sm:inline">{t.cart}</span>
            {totalCartCount > 0 && (
              <span className="bg-orange-600 text-white font-black text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
