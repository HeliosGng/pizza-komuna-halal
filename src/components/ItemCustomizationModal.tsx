import React, { useState } from 'react';
import { X, Plus, Minus, ShieldCheck, ShoppingBag } from 'lucide-react';
import { MenuItem, OptionSize, OptionTopping, Language } from '../types';
import { translations } from '../translations';

interface ItemCustomizationModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    selectedSize?: OptionSize,
    selectedToppings?: OptionTopping[],
    specialNotes?: string
  ) => void;
}

export const ItemCustomizationModal: React.FC<ItemCustomizationModalProps> = ({
  item,
  isOpen,
  onClose,
  lang,
  onAddToCart,
}) => {
  if (!isOpen || !item) return null;

  const t = translations[lang];

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<OptionSize | undefined>(
    item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined
  );
  const [selectedToppings, setSelectedToppings] = useState<OptionTopping[]>([]);
  const [specialNotes, setSpecialNotes] = useState('');

  // Calculate unit price based on size
  const basePrice = item.price + (selectedSize ? selectedSize.priceExtra : 0);
  const toppingsPrice = selectedToppings.reduce((sum, top) => sum + top.price, 0);
  const unitPrice = basePrice + toppingsPrice;
  const totalPrice = unitPrice * quantity;

  const toggleTopping = (topping: OptionTopping) => {
    if (selectedToppings.some((t) => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const handleConfirmAdd = () => {
    onAddToCart(item, quantity, selectedSize, selectedToppings, specialNotes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header Image */}
        <div className="relative h-48 sm:h-56 bg-slate-900 shrink-0">
          <img
            src={item.image}
            alt={item.name[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-950 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges Over Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              {item.isHalal && (
                <span className="bg-emerald-700 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  100% Hallall
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white drop-shadow-sm uppercase">
              {item.name[lang]}
            </h2>
          </div>
        </div>

        {/* Scrollable Customization Content */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {item.description[lang]}
          </p>

          {/* Size Options */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="font-bold text-sm text-slate-900 block font-serif uppercase tracking-wider">
                1. {t.selectSize}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {item.sizes.map((sz) => {
                  const isSelected = selectedSize?.id === sz.id;
                  return (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-orange-100 border-2 border-orange-600 text-orange-950 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="block font-bold">{sz.name[lang]}</span>
                      <span className="text-[11px] text-orange-600 font-mono mt-0.5 block">
                        {sz.priceExtra > 0 ? `+${sz.priceExtra} ${t.currency}` : 'Standard'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Extra Halal Toppings */}
          {item.toppings && item.toppings.length > 0 && (
            <div className="space-y-2">
              <label className="font-bold text-sm text-slate-900 block font-serif uppercase tracking-wider">
                2. {t.extraToppings}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.toppings.map((top) => {
                  const isChecked = selectedToppings.some((t) => t.id === top.id);
                  return (
                    <button
                      key={top.id}
                      type="button"
                      onClick={() => toggleTopping(top)}
                      className={`p-3 rounded-xl flex items-center justify-between text-xs font-semibold border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-orange-100 border-2 border-orange-600 text-orange-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{top.name[lang]}</span>
                      <span className="font-mono text-orange-600 font-bold">+ {top.price} {t.currency}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-2">
            <label className="font-bold text-sm text-slate-900 block font-serif uppercase tracking-wider">
              3. {t.specialInstructions}
            </label>
            <input
              type="text"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder={t.instructionsPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Footer Actions: Quantity & Add Button */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-mono font-bold text-base w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Submit Button */}
          <button
            onClick={handleConfirmAdd}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-5 py-3 rounded-xl text-sm shadow-md transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{t.addToCart}</span>
            <span className="bg-orange-800/40 px-2 py-0.5 rounded-lg font-mono ml-1">
              {totalPrice} {t.currency}
            </span>
          </button>

        </div>

      </div>
    </div>
  );
};
