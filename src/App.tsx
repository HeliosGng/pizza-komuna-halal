import React, { useState, useEffect } from 'react';
import { Language, MenuItem, CartItem, OptionSize, OptionTopping, OrderType } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ItemCustomizationModal } from './components/ItemCustomizationModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { MapDirectionsSection } from './components/MapDirectionsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { OpeningHoursModal } from './components/OpeningHoursModal';
import { CallModal } from './components/CallModal';
import { FloatingActionBar } from './components/FloatingActionBar';
import { Footer } from './components/Footer';

export default function App() {
  // 1. Language State
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('pkp_lang');
    return (saved as Language) || 'sq';
  });

  const toggleLanguage = () => {
    const nextLang = lang === 'sq' ? 'en' : 'sq';
    setLang(nextLang);
    localStorage.setItem('pkp_lang', nextLang);
  };

  // 2. Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('pkp_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('pkp_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // 3. Modals and Drawers Visibility
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  // Success Order Data for Modal
  const [successOrder, setSuccessOrder] = useState<{
    orderType: OrderType;
    customerName: string;
    customerPhone: string;
    address: string;
    items: CartItem[];
    totalAmount: number;
  } | null>(null);

  // Handlers
  const handleSelectItem = (item: MenuItem) => {
    setCustomizingItem(item);
  };

  const handleQuickAdd = (item: MenuItem) => {
    // If item has sizes, open customization modal for size selection
    if (item.sizes && item.sizes.length > 0) {
      setCustomizingItem(item);
      return;
    }

    const defaultSize = item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined;
    const cartItemId = item.id + '-std';

    setCartItems((prev) => {
      const existing = prev.find((c) => c.cartItemId === cartItemId);
      if (existing) {
        return prev.map((c) =>
          c.cartItemId === cartItemId
            ? { ...c, quantity: c.quantity + 1, totalPrice: (c.quantity + 1) * c.unitPrice }
            : c
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          menuItem: item,
          quantity: 1,
          selectedSize: defaultSize,
          unitPrice: item.price,
          totalPrice: item.price,
        },
      ];
    });
  };

  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    selectedSize?: OptionSize,
    selectedToppings?: OptionTopping[],
    specialNotes?: string
  ) => {
    const basePrice = item.price + (selectedSize ? selectedSize.priceExtra : 0);
    const toppingsPrice = (selectedToppings || []).reduce((sum, top) => sum + top.price, 0);
    const unitPrice = basePrice + toppingsPrice;
    const totalPrice = unitPrice * quantity;

    const toppingsKey = (selectedToppings || []).map((t) => t.id).sort().join('-');
    const cartItemId = `${item.id}-${selectedSize ? selectedSize.id : 'def'}-${toppingsKey}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((c) => c.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: newQty * unitPrice,
          specialNotes: specialNotes || updated[existingIndex].specialNotes,
        };
        return updated;
      }
      return [
        ...prev,
        {
          cartItemId,
          menuItem: item,
          quantity,
          selectedSize,
          selectedToppings,
          specialNotes,
          unitPrice,
          totalPrice,
        },
      ];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: newQty, totalPrice: newQty * item.unitPrice }
          : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleOrderSuccess = (
    orderType: OrderType,
    customerName: string,
    customerPhone: string,
    address: string,
    items: CartItem[],
    totalAmount: number
  ) => {
    setSuccessOrder({
      orderType,
      customerName,
      customerPhone,
      address,
      items,
      totalAmount,
    });

    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleOpenDirections = () => {
    window.open(
      'https://www.google.com/maps/place/Piceri+Komuna+e+Parisit+hallall/@41.3163188,19.8060835,19.83z/data=!4m6!3m5!1s0x135031da98c6d9ad:0xcf3ea9f62539af9e!8m2!3d41.3163643!4d19.8062304!16s%2Fg%2F11v099y39v',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fdfaf6] text-slate-800">
      
      {/* 1. Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenHoursModal={() => setIsHoursModalOpen(true)}
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onOpenDirections={handleOpenDirections}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          lang={lang}
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenDirections={handleOpenDirections}
          onOpenHoursModal={() => setIsHoursModalOpen(true)}
        />

        {/* 3. Menu Section */}
        <MenuSection
          lang={lang}
          onSelectItem={handleSelectItem}
          onQuickAdd={handleQuickAdd}
        />

        {/* 4. Map & Directions Section */}
        <MapDirectionsSection
          lang={lang}
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenDirections={handleOpenDirections}
          onOpenHoursModal={() => setIsHoursModalOpen(true)}
        />

        {/* 5. Customer Reviews Section */}
        <ReviewsSection lang={lang} />
      </main>

      {/* 6. Footer */}
      <Footer
        lang={lang}
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onOpenDirections={handleOpenDirections}
        onOpenHoursModal={() => setIsHoursModalOpen(true)}
      />

      {/* 7. Floating Action Bar for Quick Mobile Access */}
      <FloatingActionBar
        lang={lang}
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onOpenDirections={handleOpenDirections}
      />

      {/* Modals & Drawers */}
      <ItemCustomizationModal
        item={customizingItem}
        isOpen={!!customizingItem}
        onClose={() => setCustomizingItem(null)}
        lang={lang}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        lang={lang}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
        onOrderSuccess={handleOrderSuccess}
        onOpenCallModal={() => setIsCallModalOpen(true)}
      />

      <OpeningHoursModal
        isOpen={isHoursModalOpen}
        onClose={() => setIsHoursModalOpen(false)}
        lang={lang}
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onOpenDirections={handleOpenDirections}
      />

      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        lang={lang}
      />

      {successOrder && (
        <OrderSuccessModal
          isOpen={!!successOrder}
          onClose={() => setSuccessOrder(null)}
          lang={lang}
          orderType={successOrder.orderType}
          customerName={successOrder.customerName}
          customerPhone={successOrder.customerPhone}
          address={successOrder.address}
          items={successOrder.items}
          totalAmount={successOrder.totalAmount}
        />
      )}

    </div>
  );
}
