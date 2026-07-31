import React from 'react';
import { Plus, ShieldCheck, Flame, Star, Clock } from 'lucide-react';
import { MenuItem, Language } from '../types';
import { translations } from '../translations';

interface MenuItemCardProps {
  item: MenuItem;
  lang: Language;
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'pizza': return '🍕';
    case 'sandwiches': return '🥪';
    case 'calzone': return '🥐';
    case 'krepa': return '🥞';
    case 'sides': return '🍟';
    case 'drinks': return '🥤';
    case 'pasta': return '🍝';
    case 'desserts': return '🍰';
    default: return '🍽️';
  }
};

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  lang,
  onSelectItem,
  onQuickAdd,
}) => {
  const t = translations[lang];
  const catIcon = getCategoryIcon(item.category);

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-lg hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Section: Either Image or Text Header */}
      {item.image ? (
        <div className="relative aspect-16/9 sm:aspect-16/10 overflow-hidden bg-slate-100 cursor-pointer" onClick={() => onSelectItem(item)}>
          <img
            src={item.image}
            alt={item.name[lang]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Badges Top Left */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-wrap gap-1 items-center">
            {item.isHalal && (
              <span className="bg-emerald-700 text-white font-black text-[9px] sm:text-[10px] uppercase px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded shadow-xs flex items-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-200" />
                100% Hallall
              </span>
            )}
            {item.isPopular && (
              <span className="bg-yellow-400 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded shadow-xs flex items-center gap-0.5">
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-slate-950" />
                {t.filterPopular}
              </span>
            )}
            {item.isSpicy && (
              <span className="bg-red-600 text-white font-black text-[9px] sm:text-[10px] uppercase px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded shadow-xs flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white" />
                {t.filterSpicy}
              </span>
            )}
          </div>

          {/* Prep time badge bottom right */}
          {item.prepTime && (
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-slate-950/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-400" />
              <span>{item.prepTime}</span>
            </div>
          )}
        </div>
      ) : (
        /* Text Header for items without photos */
        <div className="p-3 sm:p-4 bg-gradient-to-r from-orange-50/80 to-amber-50/50 border-b border-orange-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-white shadow-2xs border border-orange-200/60">
              {catIcon}
            </span>
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-orange-800 bg-orange-100 px-2 py-0.5 rounded">
              {item.category}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {item.isHalal && (
              <span className="bg-emerald-700 text-white font-black text-[9px] uppercase px-1.5 py-0.5 rounded shadow-2xs flex items-center gap-0.5">
                <ShieldCheck className="w-2.5 h-2.5 text-emerald-200" />
                Hallall
              </span>
            )}
            {item.isPopular && (
              <span className="bg-yellow-400 text-slate-950 font-black text-[9px] uppercase px-1.5 py-0.5 rounded shadow-2xs">
                ⭐ Top
              </span>
            )}
            {item.isSpicy && (
              <span className="bg-red-600 text-white font-black text-[9px] uppercase px-1.5 py-0.5 rounded shadow-2xs">
                🔥
              </span>
            )}
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 
              onClick={() => onSelectItem(item)}
              className="font-black text-slate-900 text-sm sm:text-base group-hover:text-orange-600 transition-colors cursor-pointer leading-snug"
            >
              {item.name[lang]}
            </h3>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 mt-0.5 font-normal leading-relaxed">
            {item.description[lang]}
          </p>
        </div>

        {/* Bottom Price & Button Row */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[9px] sm:text-[10px] text-slate-400 block uppercase tracking-wider font-extrabold italic">
              {item.sizes ? t.fromPrice : ''}
            </span>
            <span className="text-base sm:text-lg font-black text-slate-900 font-mono">
              {item.price} <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wider italic">{t.currency}</span>
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5">
            {item.sizes || item.toppings ? (
              <button
                onClick={() => onSelectItem(item)}
                className="inline-flex items-center gap-1 bg-orange-50 hover:bg-orange-100 text-orange-950 border border-orange-200 font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs transition-colors cursor-pointer active:scale-95"
              >
                <span>{t.customize}</span>
              </button>
            ) : null}

            <button
              onClick={() => onQuickAdd(item)}
              className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold p-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs shadow-2xs transition-all cursor-pointer active:scale-90"
              title={t.addToCart}
            >
              <Plus className="w-4 h-4 text-white" />
              <span className="hidden sm:inline ml-1 font-bold">{t.addToCart}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
