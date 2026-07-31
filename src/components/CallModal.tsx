import React, { useState } from 'react';
import { X, Phone, Copy, Check, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { checkRealtimeOpeningStatus } from '../utils/hours';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const t = translations[lang];
  const status = checkRealtimeOpeningStatus(lang);
  const [copied, setCopied] = useState(false);

  const phoneNum = '+355696010008';
  const displayPhone = '+355 69 601 0008';

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 text-center space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3 h-3" />
            100% Hallall
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Icon & Phone Card */}
        <div className="space-y-3">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <Phone className="w-8 h-8 fill-orange-600" />
          </div>

          <h3 className="font-bold text-xl font-serif text-slate-900 uppercase">
            {t.callDirect}
          </h3>

          <p className="text-2xl font-black text-orange-600 font-mono tracking-tight">
            {displayPhone}
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-orange-600" />
            <span className={status.isOpen ? 'text-emerald-700 font-bold' : 'text-orange-600 font-bold'}>
              {status.statusText}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <a
            href={`tel:${phoneNum}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 rounded-xl text-sm shadow-md transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>{lang === 'sq' ? 'Telefono Tani' : 'Call Now'}</span>
          </a>

          <button
            onClick={handleCopy}
            className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer uppercase tracking-wider"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (lang === 'sq' ? 'U Kopjua!' : 'Copied!') : (lang === 'sq' ? 'Kopjo Numrin' : 'Copy Number')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
