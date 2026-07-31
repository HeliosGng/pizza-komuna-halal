export type Language = 'en' | 'sq';

export type CategoryId = 'all' | 'pizza' | 'sandwiches' | 'calzone' | 'krepa' | 'sides' | 'drinks' | 'desserts';

export interface LocalizedText {
  en: string;
  sq: string;
}

export interface OptionSize {
  id: string;
  name: LocalizedText;
  priceExtra: number; // In ALL (Lek)
}

export interface OptionTopping {
  id: string;
  name: LocalizedText;
  price: number; // In ALL (Lek)
}

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: number; // Price in ALL (Lek)
  category: CategoryId;
  image: string;
  isHalal: boolean;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  prepTime?: string;
  sizes?: OptionSize[];
  toppings?: OptionTopping[];
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  selectedSize?: OptionSize;
  selectedToppings?: OptionTopping[];
  specialNotes?: string;
  unitPrice: number;
  totalPrice: number;
}

export type OrderType = 'delivery' | 'takeout' | 'dinein';

export interface OrderDetails {
  orderType: OrderType;
  customerName: string;
  customerPhone: string;
  address: string;
  tableNumber?: string;
  notes?: string;
  paymentMethod: 'cash' | 'card_on_delivery' | 'loyalty_pts';
  pointsRedeemed?: number;
  discountAmount?: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  tags?: string[];
  likes: number;
}

export interface LoyaltyUser {
  phone: string;
  name: string;
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold';
  history: {
    id: string;
    type: 'earned' | 'redeemed';
    points: number;
    description: string;
    date: string;
  }[];
}

export interface RewardItem {
  id: string;
  title: LocalizedText;
  pointsRequired: number;
  description: LocalizedText;
  discountValue?: number; // In ALL
  freeItemId?: string;
  iconName: string;
}
