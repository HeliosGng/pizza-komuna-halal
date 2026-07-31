import React, { useState, useMemo } from 'react';
import { Search, Flame, Star, ShieldCheck, Sparkles, UtensilsCrossed } from 'lucide-react';
import { CategoryId, Language, MenuItem } from '../types';
import { translations } from '../translations';
import { menuItems } from '../data/menuData';
import { MenuItemCard } from './MenuItemCard';

interface MenuSectionProps {
  lang: Language;
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  lang,
  onSelectItem,
  onQuickAdd,
}) => {
  const t = translations[lang];

  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState<'all' | 'popular' | 'spicy' | 'halal' | 'vegetarian'>('all');

  const categories: { id: CategoryId; label: string; icon: string }[] = [
    { id: 'all', label: t.catAll, icon: '🍽️' },
    { id: 'pizza', label: t.catPizza, icon: '🍕' },
    { id: 'sandwiches', label: t.catSandwiches, icon: '🥪' },
    { id: 'calzone', label: t.catCalzone, icon: '🥐' },
    { id: 'krepa', label: t.catKrepa, icon: '🥞' },
    { id: 'sides', label: t.catSides, icon: '🍟' },
    { id: 'drinks', label: t.catDrinks, icon: '🥤' },
    { id: 'desserts', label: t.catDesserts, icon: '🍰' },
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category check
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Tag filter
      if (filterTag === 'popular' && !item.isPopular) return false;
      if (filterTag === 'spicy' && !item.isSpicy) return false;
      if (filterTag === 'halal' && !item.isHalal) return false;
      if (filterTag === 'vegetarian' && !item.isVegetarian) return false;

      // Search query check
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const nameMatch = item.name[lang].toLowerCase().includes(q);
        const descMatch = item.description[lang].toLowerCase().includes(q);
        return nameMatch || descMatch;
      }

      return true;
    });
  }, [activeCategory, searchQuery, filterTag, lang]);

  return (
    <section id="menu-section" className="py-6 sm:py-16 bg-[#faf6f0] border-b border-slate-200 relative overflow-hidden">
      {/* Background pizza pattern texture behind menu headers */}
      <div 
        className="absolute inset-x-0 top-0 h-96 bg-cover bg-center opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GnSVyC0qXj6xgN-6Xu8e42bQ6O3--juwHuhTbuUA_EMY6mTiLaC0Dg&s=10')` }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-5 sm:mb-8 bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-orange-200/60 shadow-xs">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-950 font-black text-[10px] sm:text-xs uppercase tracking-widest px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full border border-orange-200">
            <UtensilsCrossed className="w-3 h-3 text-orange-600" />
            <span>100% Halal Certified Menu</span>
          </div>
          <h2 className="text-xl sm:text-4xl font-black text-slate-900 font-serif tracking-tight uppercase">
            {lang === 'sq' ? 'Menyja Jonë Autentike' : 'Our Authentic Menu'}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium">
            {lang === 'sq'
              ? 'Nga pica të freskëta 100% hallall, kalzone & krepa deri te sanduiçe të nxehta krokante dhe pije me shije autentike.'
              : 'From fresh 100% halal pizza, calzone & crepes to hot crispy toasted sandwiches and refreshing drinks.'}
          </p>
        </div>

        {/* Search & Quick Filter Tags Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-5 sm:mb-8">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setFilterTag('all')}
              className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterTag === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {t.catAll}
            </button>

            <button
              onClick={() => setFilterTag('popular')}
              className={`inline-flex items-center gap-1 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterTag === 'popular'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-orange-50 text-orange-900 border border-orange-200 hover:bg-orange-100'
              }`}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>{t.filterPopular}</span>
            </button>

            <button
              onClick={() => setFilterTag('halal')}
              className={`inline-flex items-center gap-1 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterTag === 'halal'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <ShieldCheck className="w-3 h-3" />
              <span>{t.filterHalal}</span>
            </button>

            <button
              onClick={() => setFilterTag('spicy')}
              className={`inline-flex items-center gap-1 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterTag === 'spicy'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-red-50 text-red-900 border border-red-200 hover:bg-red-100'
              }`}
            >
              <Flame className="w-3 h-3" />
              <span>{t.filterSpicy}</span>
            </button>
          </div>

        </div>

        {/* Category Tab Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2.5 mb-5 sm:mb-8 scrollbar-none border-b border-slate-200">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-sm scale-102'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="text-sm sm:text-base">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                lang={lang}
                onSelectItem={onSelectItem}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300 p-8 space-y-3">
            <p className="text-4xl">🍕</p>
            <h3 className="font-bold text-slate-900 text-base">{t.noItemsFound}</h3>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setFilterTag('all');
              }}
              className="text-xs text-amber-700 font-bold hover:underline cursor-pointer"
            >
              Reset Filters & Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
