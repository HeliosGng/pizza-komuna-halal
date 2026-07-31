import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, Phone, MessageSquare, MapPin, ChefHat, Bike } from 'lucide-react';
import { Language, CartItem, OrderType } from '../types';
import { translations } from '../translations';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  orderType: OrderType;
  customerName: string;
  customerPhone: string;
  address: string;
  items: CartItem[];
  totalAmount: number;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  lang,
  orderType,
  customerName,
  customerPhone,
  address,
  items,
  totalAmount,
}) => {
  if (!isOpen) return null;

  const t = translations[lang];

  // Animated order tracking step simulation: 1 = received, 2 = preparing, 3 = delivery
  const [step, setStep] = useState(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(3);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const orderId = 'PKG-' + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-6">
        
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 font-serif uppercase tracking-tight">
            {t.orderSuccessTitle}
          </h2>
          <p className="text-xs text-slate-600 font-medium">
            {t.orderSuccessDesc}
          </p>
          <div className="inline-block bg-slate-100 text-slate-800 font-mono text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
            ID: #{orderId}
          </div>
        </div>

        {/* Live Status Progress Bar */}
        <div className="bg-orange-50/80 p-4 rounded-xl border border-orange-200/80 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-600 animate-spin" />
              {lang === 'sq' ? 'Koha e Pritjes:' : 'Estimated Time:'} ~25 min
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold">
            <div className={`p-2 rounded-lg flex flex-col items-center gap-1 ${step >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
              <CheckCircle2 className="w-4 h-4" />
              <span>{lang === 'sq' ? 'Marrë' : 'Received'}</span>
            </div>
            <div className={`p-2 rounded-lg flex flex-col items-center gap-1 ${step >= 2 ? 'bg-orange-600 text-white animate-pulse' : 'bg-slate-200 text-slate-500'}`}>
              <ChefHat className="w-4 h-4" />
              <span>{lang === 'sq' ? 'Në Përgatitje' : 'Preparing'}</span>
            </div>
            <div className={`p-2 rounded-lg flex flex-col items-center gap-1 ${step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
              <Bike className="w-4 h-4" />
              <span>{orderType === 'delivery' ? (lang === 'sq' ? 'Në Dorëzim' : 'On Delivery') : (lang === 'sq' ? 'Gati për Marrje' : 'Ready')}</span>
            </div>
          </div>
        </div>

        {/* Summary Receipt */}
        <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="font-bold text-slate-900 border-b border-slate-200 pb-2 flex justify-between">
            <span>{customerName} ({customerPhone})</span>
            <span className="uppercase text-orange-600 font-mono">{orderType}</span>
          </div>
          {orderType === 'delivery' && (
            <p className="text-slate-600 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{address}</span>
            </p>
          )}

          <div className="space-y-1.5 pt-1">
            {items.map((item) => (
              <div key={item.cartItemId} className="flex items-center justify-between font-medium">
                <span>{item.quantity}x {item.menuItem.name[lang]}</span>
                <span className="font-mono text-slate-800">{item.totalPrice} {t.currency}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-2 flex items-center justify-between font-bold text-sm text-slate-900">
            <span>{t.total}:</span>
            <span className="font-mono text-orange-600 text-base">{totalAmount} {t.currency}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <a
            href="tel:+355696010008"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-colors cursor-pointer uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 text-orange-400 fill-orange-400" />
            <span>{t.callDirect}</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:flex-1 inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3 rounded-xl text-xs transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>{lang === 'sq' ? 'Kthehu te Faqja' : 'Back to Website'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
