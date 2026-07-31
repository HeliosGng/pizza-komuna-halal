import React from 'react';
import { X, Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { checkRealtimeOpeningStatus, getTiranaTime } from '../utils/hours';

interface OpeningHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenCallModal: () => void;
  onOpenDirections: () => void;
}

export const OpeningHoursModal: React.FC<OpeningHoursModalProps> = ({
  isOpen,
  onClose,
  lang,
  onOpenCallModal,
  onOpenDirections,
}) => {
  if (!isOpen) return null;

  const t = translations[lang];
  const status = checkRealtimeOpeningStatus(lang);
  const currentDayIndex = getTiranaTime().getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri, 6 = Sat

  const daysList = [
    { daySq: 'E Premte', dayEn: 'Friday', hours: '14:00 - 00:00 (2:00 PM - 12:00 AM)', dayIndex: 5 },
    { daySq: 'E Shtunë', dayEn: 'Saturday', hours: '10:00 - 00:00 (10:00 AM - 12:00 AM)', dayIndex: 6 },
    { daySq: 'E Dielë', dayEn: 'Sunday', hours: '10:00 - 00:00 (10:00 AM - 12:00 AM)', dayIndex: 0 },
    { daySq: 'E Hënë', dayEn: 'Monday', hours: '10:00 - 00:00 (10:00 AM - 12:00 AM)', dayIndex: 1 },
    { daySq: 'E Martë', dayEn: 'Tuesday', hours: '10:00 - 00:00 (10:00 AM - 12:00 AM)', dayIndex: 2 },
    { daySq: 'E Mërkurë', dayEn: 'Wednesday', hours: '10:00 - 00:00 (10:00 AM - 12:00 AM)', dayIndex: 3 },
    { daySq: 'E Enjte', dayEn: 'Thursday', hours: '10:00 - 00:00 (10:00 AM - 12:00 AM)', dayIndex: 4 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg font-serif uppercase tracking-tight">{t.openingHours}</h3>
              <p className="text-xs text-slate-300">Piceri Komuna e Parisit hallall</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Real-time Status Card */}
        <div className="p-5 border-b border-slate-100 bg-orange-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-red-500'}`} />
              <span className={`font-black text-sm tracking-wide ${status.isOpen ? 'text-emerald-700' : 'text-red-700'}`}>
                {status.statusText}
              </span>
            </div>
            <span className="text-xs bg-white px-2.5 py-1 rounded-full border border-slate-200 text-slate-700 font-semibold shadow-2xs">
              Tirana Time (UTC+2)
            </span>
          </div>
          <p className="text-xs text-slate-600 font-medium mt-1.5">
            {status.nextChangeText}
          </p>
        </div>

        {/* Weekly Schedule List */}
        <div className="p-5 space-y-2 max-h-80 overflow-y-auto">
          {daysList.map((item) => {
            const isToday = item.dayIndex === currentDayIndex;
            return (
              <div
                key={item.dayEn}
                className={`flex items-center justify-between p-3 rounded-xl text-xs sm:text-sm transition-all ${
                  isToday
                    ? 'bg-orange-100 border-2 border-orange-600 font-bold text-orange-950 shadow-2xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isToday && <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />}
                  <span>{lang === 'sq' ? item.daySq : item.dayEn}</span>
                  {isToday && (
                    <span className="text-[10px] bg-orange-600 text-white font-bold px-1.5 py-0.2 rounded uppercase">
                      {lang === 'sq' ? 'Sot' : 'Today'}
                    </span>
                  )}
                </div>
                <span className="font-mono text-slate-900">{item.hours}</span>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenCallModal();
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 fill-white" />
            <span>{t.phoneCall}</span>
          </button>
          
          <button
            onClick={() => {
              onClose();
              onOpenDirections();
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer uppercase tracking-wider"
          >
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>{t.getDirections}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
