import React from 'react';
import { Phone, MessageSquare, MapPin, ShoppingBag } from 'lucide-react';
import { Language, CartItem } from '../types';
import { translations } from '../translations';

interface FloatingActionBarProps {
  lang: Language;
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenCallModal: () => void;
  onOpenDirections: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  lang,
  cartItems,
  onOpenCart,
  onOpenCallModal,
  onOpenDirections,
}) => {
  const t = translations[lang];
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const openWhatsAppDirect = () => {
    const msg = encodeURIComponent(
      lang === 'sq'
        ? 'Përshëndetje! Po ju shkruaj nga faqja e internetit të Piceri Komuna e Parisit. Dëshiroj të bëj një porosi.'
        : 'Hello! I am contacting you from the Piceri Komuna e Parisit website. I would like to place an order.'
    );
    window.open(`https://wa.me/355696010008?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 z-40 animate-slide-up">
      <div className="bg-slate-950/95 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-2xl border border-slate-800 shadow-2xl flex items-center justify-between gap-2 max-w-lg mx-auto sm:mx-0">
        
        {/* Direct Call Button */}
        <button
          onClick={onOpenCallModal}
          className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
          title="Call +355 69 601 0008"
        >
          <Phone className="w-4 h-4 text-orange-400 shrink-0" />
          <span className="hidden xs:inline">{t.phoneCall}</span>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsAppDirect}
          className="inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
          title="WhatsApp Order"
        >
          <MessageSquare className="w-4 h-4 fill-white shrink-0" />
          <span className="hidden xs:inline">WhatsApp</span>
        </button>

        {/* Directions Button */}
        <button
          onClick={onOpenDirections}
          className="hidden md:inline-flex items-center justify-center gap-1 bg-slate-900 hover:bg-slate-800 text-orange-400 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors cursor-pointer uppercase tracking-wider border border-slate-800"
          title="GPS Directions"
        >
          <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
          <span>{t.getDirections}</span>
        </button>

        {/* Prominent Cart Order Button at the end of screen */}
        <button
          onClick={onOpenCart}
          className={`relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 font-black py-2.5 px-4 rounded-xl text-xs shadow-lg transition-all cursor-pointer active:scale-95 uppercase tracking-wider ${
            totalCartCount > 0
              ? 'bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white ring-2 ring-orange-400/50 animate-pulse'
              : 'bg-orange-600 hover:bg-orange-700 text-white'
          }`}
        >
          <ShoppingBag className="w-4 h-4 fill-white shrink-0" />
          <span>
            {totalCartCount > 0
              ? `${t.viewInCart || 'Shporta'} (${totalCartCount}) • ${totalCartPrice} ${t.currency}`
              : t.cart}
          </span>
          {totalCartCount > 0 && (
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          )}
        </button>

      </div>
    </div>
  );
};
