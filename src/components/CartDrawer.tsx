import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, Phone, Bike, Store, Utensils, Award, CheckCircle2, Navigation, Loader2, MapPin } from 'lucide-react';
import { CartItem, Language, OrderType } from '../types';
import { translations } from '../translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onOrderSuccess: (
    orderType: OrderType,
    name: string,
    phone: string,
    address: string,
    items: CartItem[],
    total: number
  ) => void;
  onOpenCallModal: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderSuccess,
  onOpenCallModal,
}) => {
  if (!isOpen) return null;

  const t = translations[lang];

  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  // GPS Location State
  const [gpsLocation, setGpsLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const handleFetchGpsLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(lang === 'sq' ? 'GPS nuk mbështetet nga shfletuesi juaj.' : 'GPS is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setGpsLocation({ lat, lng });
        setIsLocating(false);
        if (!deliveryAddress) {
          setDeliveryAddress(lang === 'sq' ? 'Vendndodhja GPS (shih linkun në meç)' : 'GPS Location (see link in chat)');
        }
      },
      (err) => {
        setIsLocating(false);
        let errorMsg = lang === 'sq' ? 'S’mund të merret GPS. Ju lutemi provoni përsëri.' : 'Unable to retrieve GPS.';
        if (err.code === err.PERMISSION_DENIED) {
          errorMsg = lang === 'sq' ? 'Leja për lokacion u refuzua. Ju lutemi jepni lejen në shfletues.' : 'Location permission was denied.';
        }
        setLocationError(errorMsg);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Subtotal calculation
  const rawSubtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  // Delivery fee logic: Free over 1,500 ALL, else 100 ALL
  const deliveryFee = orderType === 'delivery' ? (rawSubtotal >= 1500 || rawSubtotal === 0 ? 0 : 100) : 0;

  const finalTotal = Math.max(0, rawSubtotal + deliveryFee);

  // Formatted string summary for WhatsApp / Phone call
  const generateFormattedOrderText = () => {
    let msg = `🍕 *POROSI E RE - PICERI KOMUNA E PARISIT* 🍕\n`;
    msg += `------------------------------------\n`;
    msg += `👤 *Emri:* ${customerName || 'Klient'}\n`;
    msg += `📞 *Tel:* ${customerPhone || '+355...'}\n`;
    msg += `📦 *Mënyra:* ${orderType.toUpperCase()}\n`;
    if (orderType === 'delivery') {
      msg += `📍 *Adresa:* ${deliveryAddress || 'Tiranë'}\n`;
      if (gpsLocation) {
        msg += `🗺️ *Vendndodhja GPS (Google Maps):* https://maps.google.com/?q=${gpsLocation.lat},${gpsLocation.lng}\n`;
      }
    } else if (orderType === 'dinein') {
      msg += `🍽️ *Tavolina:* ${tableNumber || '1'}\n`;
    }
    if (orderNotes) {
      msg += `📝 *Shënime:* ${orderNotes}\n`;
    }
    msg += `------------------------------------\n`;
    msg += `🛒 *PRODUKTET:*\n`;

    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.quantity}x ${item.menuItem.name[lang]}*`;
      if (item.selectedSize) {
        msg += ` (${item.selectedSize.name[lang]})`;
      }
      if (item.selectedToppings && item.selectedToppings.length > 0) {
        msg += ` + [${item.selectedToppings.map((t) => t.name[lang]).join(', ')}]`;
      }
      msg += ` - ${item.totalPrice} ${t.currency}\n`;
    });

    msg += `------------------------------------\n`;
    msg += `Nëntotali: ${rawSubtotal} ${t.currency}\n`;
    if (deliveryFee > 0) {
      msg += `Tarifa e Dorëzimit: ${deliveryFee} ${t.currency}\n`;
    } else if (orderType === 'delivery') {
      msg += `Tarifa e Dorëzimit: FALAS\n`;
    }
    msg += `💰 *TOTALI PËRFUNDIMTAR: ${finalTotal} ${t.currency}*\n`;

    return msg;
  };

  const handleWhatsAppCheckout = () => {
    if (!customerName || !customerPhone) {
      alert(lang === 'sq' ? 'Ju lutemi plotësoni emrin dhe numrin e telefonit.' : 'Please enter your name and phone number.');
      return;
    }
    if (orderType === 'delivery' && !deliveryAddress) {
      alert(lang === 'sq' ? 'Ju lutemi shkruani adresën e dorëzimit.' : 'Please enter delivery address.');
      return;
    }

    const text = encodeURIComponent(generateFormattedOrderText());
    window.open(`https://wa.me/355696010008?text=${text}`, '_blank');
    onOrderSuccess(orderType, customerName, customerPhone, deliveryAddress, cartItems, finalTotal);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl border-l border-slate-200">
        
        {/* Drawer Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg font-serif uppercase tracking-tight">{t.cartTitle}</h2>
              <p className="text-xs text-slate-300">
                {cartItems.length} {lang === 'sq' ? 'produkte' : 'items'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Contents */}
        {cartItems.length > 0 ? (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            
            {/* Items List */}
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-3"
                >
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name[lang]}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                      {item.menuItem.name[lang]}
                    </h4>
                    
                    {item.selectedSize && (
                      <p className="text-[11px] text-orange-600 font-semibold">
                        {item.selectedSize.name[lang]}
                      </p>
                    )}

                    {item.selectedToppings && item.selectedToppings.length > 0 && (
                      <p className="text-[10px] text-slate-500 truncate">
                        +{item.selectedToppings.map((t) => t.name[lang]).join(', ')}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono font-bold text-xs text-slate-900">
                        {item.totalPrice} {t.currency}
                      </span>

                      {/* Quantity Modifier */}
                      <div className="flex items-center gap-2 bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          className="text-slate-600 hover:text-slate-900 text-xs font-bold"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono font-bold text-xs">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          className="text-slate-600 hover:text-slate-900 text-xs font-bold"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.cartItemId)}
                    className="text-slate-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Type Toggle Buttons */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <label className="font-bold text-xs text-slate-900 block uppercase tracking-wider">
                {t.orderType}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    orderType === 'delivery'
                      ? 'bg-orange-600 border-orange-600 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <Bike className="w-4 h-4" />
                  <span>{t.delivery}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType('takeout')}
                  className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    orderType === 'takeout'
                      ? 'bg-orange-600 border-orange-600 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>{t.takeout}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType('dinein')}
                  className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    orderType === 'dinein'
                      ? 'bg-orange-600 border-orange-600 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <Utensils className="w-4 h-4" />
                  <span>{t.dinein}</span>
                </button>
              </div>
            </div>

            {/* Customer Contact Details */}
            <div className="space-y-3 bg-orange-50/50 p-4 rounded-xl border border-orange-200/80">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider font-serif">
                {t.yourDetails}
              </h4>

              <div className="grid grid-cols-1 gap-2">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t.fullName + ' *'}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />

                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder={t.phoneNum + ' * (+355...)'}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />

                {orderType === 'delivery' && (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder={t.deliveryAddress + ' *'}
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      required
                    />

                    {/* GPS Button */}
                    <button
                      type="button"
                      onClick={handleFetchGpsLocation}
                      disabled={isLocating}
                      className={`w-full py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        gpsLocation
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                          : 'bg-white border-orange-300 hover:bg-orange-50 text-orange-700'
                      }`}
                    >
                      {isLocating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-orange-600" />
                          <span>{t.locating}</span>
                        </>
                      ) : gpsLocation ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="truncate">{t.gpsCaptured} ({gpsLocation.lat.toFixed(4)}, {gpsLocation.lng.toFixed(4)})</span>
                        </>
                      ) : (
                        <>
                          <Navigation className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>{t.getGpsLocation}</span>
                        </>
                      )}
                    </button>

                    {locationError && (
                      <p className="text-[11px] text-red-600 font-medium px-1">
                        {locationError}
                      </p>
                    )}
                  </div>
                )}

                {orderType === 'dinein' && (
                  <input
                    type="text"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    placeholder={t.tableNo + ' (p.sh. Tavolina 4)'}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                )}

                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder={t.orderNotes}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Price Calculations Breakdown */}
            <div className="space-y-1.5 text-xs font-semibold text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between">
                <span>{t.subtotal}:</span>
                <span className="font-mono text-slate-900">{rawSubtotal} {t.currency}</span>
              </div>

              {orderType === 'delivery' && (
                <div className="flex justify-between text-slate-600">
                  <span>{t.deliveryFee}:</span>
                  <span className="font-mono text-emerald-700">
                    {deliveryFee === 0 ? t.freeDelivery : `${deliveryFee} ${t.currency}`}
                  </span>
                </div>
              )}

              <div className="border-t border-slate-200 pt-2 flex justify-between text-sm font-black text-slate-900">
                <span>{t.total}:</span>
                <span className="font-mono text-orange-600 text-base">{finalTotal} {t.currency}</span>
              </div>
            </div>

          </div>
        ) : (
          /* Empty Cart View */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-3xl shadow-inner">
              🍕
            </div>
            <h3 className="font-bold text-lg text-slate-900 font-serif">{t.cartEmpty}</h3>
            <p className="text-xs text-slate-500 max-w-xs">{t.cartEmptySubtitle}</p>
            <button
              onClick={onClose}
              className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-md transition-colors cursor-pointer uppercase tracking-wider"
            >
              {t.orderNow}
            </button>
          </div>
        )}

        {/* Drawer Sticky Footer Action Buttons */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2">
            
            {/* 1. WhatsApp Order Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t.sendWhatsApp}</span>
            </button>

            {/* 2. Direct Call Order Button */}
            <button
              onClick={onOpenCallModal}
              className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-2.5 rounded-xl text-xs shadow-2xs transition-all cursor-pointer uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{t.callToOrder} (+355 69 601 0008)</span>
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
