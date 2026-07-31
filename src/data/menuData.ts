import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // ================= MENU PIZZA =================
  {
    id: 'pizza-margarita',
    name: {
      sq: 'Margarita',
      en: 'Margherita Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella të shkrirë.',
      en: 'Classic tomato sauce and melted mozzarella.',
    },
    price: 400,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 300 },
    ],
  },
  {
    id: 'pizza-kerpudhe',
    name: {
      sq: 'Kërpudhë',
      en: 'Mushroom Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, kërpudha të freskëta.',
      en: 'Tomato sauce, mozzarella, fresh mushrooms.',
    },
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 350 },
    ],
  },
  {
    id: 'pizza-sallam',
    name: {
      sq: 'Sallam',
      en: 'Salami Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, sallam hallall.',
      en: 'Tomato sauce, mozzarella, halal salami.',
    },
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 350 },
    ],
  },
  {
    id: 'pizza-proshute',
    name: {
      sq: 'Proshutë',
      en: 'Beef Ham Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, proshutë viçi hallall.',
      en: 'Tomato sauce, mozzarella, halal beef ham.',
    },
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 350 },
    ],
  },
  {
    id: 'pizza-bianca',
    name: {
      sq: 'Bianca',
      en: 'Pizza Bianca',
    },
    description: {
      sq: 'Pana kreme, mozzarella e shkrirë.',
      en: 'Cream sauce and melted mozzarella.',
    },
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 350 },
    ],
  },
  {
    id: 'pizza-proshute-sallam',
    name: {
      sq: 'Proshutë - Sallam',
      en: 'Ham & Salami Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, proshutë hallall, sallam hallall.',
      en: 'Tomato sauce, mozzarella, halal beef ham, halal salami.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-proshute-kerpudhe',
    name: {
      sq: 'Proshutë - Kërpudhë',
      en: 'Ham & Mushroom Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, proshutë hallall, kërpudha të freskëta.',
      en: 'Tomato sauce, mozzarella, halal beef ham, fresh mushrooms.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    isPopular: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-pana-proshute',
    name: {
      sq: 'Pana - Proshutë',
      en: 'Cream & Ham Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, proshutë hallall, pana kreme.',
      en: 'Tomato sauce, mozzarella, halal beef ham, cream.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-kapricoza',
    name: {
      sq: 'Kapriçoza',
      en: 'Capricciosa Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, sallam hallall, ullinj, kërpudha, speca.',
      en: 'Tomato sauce, mozzarella, halal salami, olives, mushrooms, peppers.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-vegjetariane',
    name: {
      sq: 'Vegjetariane',
      en: 'Vegetarian Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, domate, speca, ullinj, kërpudha, misër.',
      en: 'Tomato sauce, mozzarella, tomatoes, peppers, olives, mushrooms, corn.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    isVegetarian: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-4-stinet',
    name: {
      sq: '4 Stinët',
      en: 'Four Seasons Pizza (4 Stinët)',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, sallam, suxhuk hallall, ton, kërpudha.',
      en: 'Tomato sauce, mozzarella, salami, halal beef sausage, tuna, mushrooms.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-tono',
    name: {
      sq: 'Tono',
      en: 'Tuna & Olives Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, ton, ullinj të zinj.',
      en: 'Tomato sauce, mozzarella, tuna, black olives.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-pikante',
    name: {
      sq: 'Pikante',
      en: 'Spicy Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, sallam pikant hallall, speca.',
      en: 'Tomato sauce, mozzarella, spicy halal salami, bell peppers.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    isSpicy: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-4-djathrat',
    name: {
      sq: '4 Djathërat',
      en: '4 Cheeses Pizza (4 Djathrat)',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, guda, gorgonzola, djath i bardhë.',
      en: 'Tomato sauce, mozzarella, gouda, gorgonzola, white cheese.',
    },
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    isVegetarian: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-4-djathrat-proshute',
    name: {
      sq: '4 Djathërat - Proshutë',
      en: '4 Cheese & Ham Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, guda, gorgonzola, djath i bardhë, proshutë hallall.',
      en: 'Tomato sauce, mozzarella, gouda, gorgonzola, white cheese, halal beef ham.',
    },
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 450 },
    ],
  },
  {
    id: 'pizza-4-djathrat-suxhuk',
    name: {
      sq: '4 Djathërat - Suxhuk',
      en: '4 Cheese & Sausage Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, guda, gorgonzola, djath i bardhë, suxhuk hallall.',
      en: 'Tomato sauce, mozzarella, gouda, gorgonzola, white cheese, halal sausage.',
    },
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 450 },
    ],
  },
  {
    id: 'pizza-rucola',
    name: {
      sq: 'Rucola',
      en: 'Rucola & Grana Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, proshutë hallall, rucola, pomodorino, grana.',
      en: 'Tomato sauce, mozzarella, halal beef ham, rucola, cherry tomatoes, grana cheese.',
    },
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 450 },
    ],
  },
  {
    id: 'pizza-iliria',
    name: {
      sq: 'Iliria',
      en: 'Pizza Iliria',
    },
    description: {
      sq: 'Salcë, mozzarella, proshutë, suxhuk hallall, domate, djath i bardhë, rigon, vaj ulliri.',
      en: 'Tomato sauce, mozzarella, ham, halal sausage, tomatoes, white feta cheese, oregano, olive oil.',
    },
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 450 },
    ],
  },
  {
    id: 'pizza-fileto-pule-perime',
    name: {
      sq: 'Fileto Pule - Perime',
      en: 'Chicken & Veggie Pizza',
    },
    description: {
      sq: 'Salcë, mozzarella, fileto pule hallall, ullinj, domate, speca, misër.',
      en: 'Tomato sauce, mozzarella, halal chicken fillet, olives, tomatoes, peppers, corn.',
    },
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 450 },
    ],
  },
  {
    id: 'pizza-la-crema',
    name: {
      sq: 'La Crema',
      en: 'La Crema Pizza',
    },
    description: {
      sq: 'Pana kreme, mozzarella, proshutë, suxhuk hallall, kërpudha të freskëta.',
      en: 'Cream sauce, mozzarella, beef ham, halal sausage, fresh mushrooms.',
    },
    price: 600,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-tono-kerpudhe',
    name: {
      sq: 'Tono - Kërpudhë',
      en: 'Tuna & Mushroom Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, ton, kërpudha të freskëta.',
      en: 'Tomato sauce, mozzarella, tuna, fresh mushrooms.',
    },
    price: 600,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-speciale',
    name: {
      sq: 'Speciale',
      en: 'Pizza Speciale',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, proshutë, sallam, suxhuk, ton, kërpudha, domate, ullinj, speca.',
      en: 'Tomato sauce, mozzarella, ham, salami, sausage, tuna, mushrooms, tomatoes, olives, peppers.',
    },
    price: 600,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    isPopular: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-chicken-pana',
    name: {
      sq: 'Chicken - Pana',
      en: 'Chicken & Cream Pizza',
    },
    description: {
      sq: 'Salcë domateje, mozzarella, fileto pule hallall, pana kreme.',
      en: 'Tomato sauce, mozzarella, halal chicken fillet, cooking cream.',
    },
    price: 600,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },
  {
    id: 'pizza-komuna-e-parisit',
    name: {
      sq: 'Pica Komuna e Parisit',
      en: 'Pica Komuna e Parisit',
    },
    description: {
      sq: 'Pana, gorgonzola, mozzarella, grana, proshutë viçi hallall, kërpudha, domate.',
      en: 'Cream sauce, gorgonzola, mozzarella, grana, halal beef ham, mushrooms, tomatoes.',
    },
    price: 600,
    category: 'pizza',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCPIOjHDSPMOrjC7k2GXVuNABxQvwgN2l__bYIdE0we1HHpC6VKI0hbx4&s=10',
    isHalal: true,
    isPopular: true,
    sizes: [
      { id: 'norm', name: { sq: 'Normale', en: 'Normal' }, priceExtra: 0 },
      { id: 'fam', name: { sq: 'Familjare', en: 'Family Size' }, priceExtra: 400 },
    ],
  },

  // ================= SPECIAL SECTION (Sandwiches / Rolls) =================
  {
    id: 'special-item',
    name: {
      sq: 'Special (Wrap/Sanduiç)',
      en: 'Special (Wrap/Sandwich)',
    },
    description: {
      sq: 'Majonez, mozzarella, ton, sallam, suxhuk, domate, kërpudha, speca, ullinj.',
      en: 'Mayo, mozzarella, tuna, salami, sausage, tomato, mushrooms, peppers, olives.',
    },
    price: 300,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'special-ton-kerpudhe',
    name: {
      sq: 'Special Ton - Kërpudhë',
      en: 'Special Tuna & Mushroom',
    },
    description: {
      sq: 'Majonez, mozzarella, ton, kërpudhë.',
      en: 'Mayo, mozzarella, tuna, mushroom.',
    },
    price: 300,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },
  {
    id: 'special-chicken-rukola',
    name: {
      sq: 'Special Chicken - Rukola',
      en: 'Special Chicken & Arugula',
    },
    description: {
      sq: 'Majonez, mozzarella, fileto pule, rucola, domate.',
      en: 'Mayo, mozzarella, chicken fillet, arugula, tomato.',
    },
    price: 300,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },
  {
    id: 'special-la-crema',
    name: {
      sq: 'Special La Crema',
      en: 'Special La Crema',
    },
    description: {
      sq: 'Majonez, mozzarella, suxhuk, proshutë, kërpudha, pana.',
      en: 'Mayo, mozzarella, sausage, ham, mushrooms, cream.',
    },
    price: 300,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },
  {
    id: 'special-suxhuk-4-djathrat',
    name: {
      sq: 'Special Suxhuk - 4 Djathërat',
      en: 'Special Sausage 4 Cheese',
    },
    description: {
      sq: 'Majonez, mozzarella, guda, suxhuk, gorgonzola, djath i bardhë.',
      en: 'Mayo, mozzarella, gouda, sausage, gorgonzola, white cheese.',
    },
    price: 300,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },
  {
    id: 'special-fileto-pule-pana',
    name: {
      sq: 'Special Fileto Pule - Pana',
      en: 'Special Chicken & Cream',
    },
    description: {
      sq: 'Majonez, mozzarella, fileto pule, domate, pana.',
      en: 'Mayo, mozzarella, chicken fillet, tomato, cream.',
    },
    price: 300,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },
  {
    id: 'special-fileto-pule-perime',
    name: {
      sq: 'Special Fileto Pule - Perime',
      en: 'Special Chicken & Veggie',
    },
    description: {
      sq: 'Majonez, mozzarella, fileto pule, ullinj, domate, misër, speca.',
      en: 'Mayo, mozzarella, chicken fillet, olives, tomato, corn, peppers.',
    },
    price: 300,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },

  // ================= MENU SANDUIÇ =================
  {
    id: 'sanduic-normal',
    name: {
      sq: 'Sanduiç Normal',
      en: 'Normal Sandwich',
    },
    description: {
      sq: 'Majonez, mozzarella, sallam, domate, speca, ullinj.',
      en: 'Mayo, mozzarella, salami, tomato, peppers, olives.',
    },
    price: 250,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },
  {
    id: 'sanduic-vegjetariane',
    name: {
      sq: 'Sanduiç Vegjetariane',
      en: 'Vegetarian Sandwich',
    },
    description: {
      sq: 'Majonez, mozzarella, domate, speca, kërpudha, ullinj, misër.',
      en: 'Mayo, mozzarella, tomato, peppers, mushrooms, olives, corn.',
    },
    price: 250,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
    isVegetarian: true,
  },
  {
    id: 'sanduic-4-djathrat',
    name: {
      sq: 'Sanduiç 4 Djathërat',
      en: '4 Cheeses Sandwich',
    },
    description: {
      sq: 'Majonez, guda, mozzarella, gorgonzola, djath i bardhë.',
      en: 'Mayo, gouda, mozzarella, gorgonzola, white cheese.',
    },
    price: 280,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },
  {
    id: 'sanduic-pikant',
    name: {
      sq: 'Sanduiç Pikant',
      en: 'Spicy Sausage Sandwich',
    },
    description: {
      sq: 'Majonez, mozzarella, suxhuk, domate, speca, ullinj.',
      en: 'Mayo, mozzarella, sausage, tomato, peppers, olives.',
    },
    price: 280,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
    isSpicy: true,
  },
  {
    id: 'sanduic-ton',
    name: {
      sq: 'Sanduiç Ton',
      en: 'Tuna Sandwich',
    },
    description: {
      sq: 'Majonez, mozzarella, ton, domate, speca, ullinj.',
      en: 'Mayo, mozzarella, tuna, tomato, peppers, olives.',
    },
    price: 280,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },
  {
    id: 'sanduic-proshute-kerpudhe',
    name: {
      sq: 'Sanduiç Proshutë - Kërpudhë',
      en: 'Ham & Mushroom Sandwich',
    },
    description: {
      sq: 'Majonez, mozzarella, proshutë, kërpudha.',
      en: 'Mayo, mozzarella, beef ham, mushrooms.',
    },
    price: 280,
    category: 'sandwiches',
    image: 'https://imageproxy.wolt.com/assets/664c5e820378382c605b3a3c?w=600',
    isHalal: true,
  },

  // ================= MENU CALZONE =================
  {
    id: 'calzone-klasik',
    name: {
      sq: 'Calzone',
      en: 'Classic Calzone',
    },
    description: {
      sq: 'Salcë, mozzarella, sallam, ullinj, speca.',
      en: 'Tomato sauce, mozzarella, halal salami, olives, peppers.',
    },
    price: 400,
    category: 'calzone',
    image: 'https://t3.ftcdn.net/jpg/02/99/87/66/360_F_299876604_3llYzqIQ8TLJ8C2TLgNEpUpjoMnceizX.jpg',
    isHalal: true,
  },
  {
    id: 'calzone-deshires',
    name: {
      sq: 'Calzone (Sipas Dëshirës)',
      en: 'Calzone (Custom Choice)',
    },
    description: {
      sq: 'Calzone e palosur me përbërës sipas dëshirës suaj.',
      en: 'Folded pizza dough stuffed with your custom choice of halal ingredients.',
    },
    price: 450,
    category: 'calzone',
    image: 'https://t3.ftcdn.net/jpg/02/99/87/66/360_F_299876604_3llYzqIQ8TLJ8C2TLgNEpUpjoMnceizX.jpg',
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'patate-skuqura',
    name: {
      sq: 'Patate të Skuqura',
      en: 'French Fries (Patate)',
    },
    description: {
      sq: 'Patate krokante të ngrohta me kripë.',
      en: 'Crispy golden potato fries.',
    },
    price: 300,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    isVegetarian: true,
  },

  // ================= KREPA =================
  {
    id: 'krepa-cokollate-zeze',
    name: {
      sq: 'Çokollatë e Zezë',
      en: 'Dark Chocolate Crepe',
    },
    description: {
      sq: 'Krepë e ngrohtë me çokollatë të zezë.',
      en: 'Warm fresh crepe filled with rich dark chocolate.',
    },
    price: 200,
    category: 'krepa',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
  },
  {
    id: 'krepa-cokollate-bardhe',
    name: {
      sq: 'Çokollatë e Bardhë',
      en: 'White Chocolate Crepe',
    },
    description: {
      sq: 'Krepë e nxehtë me çokollatë të bardhë të shkrirë.',
      en: 'Warm fresh crepe filled with sweet melted white chocolate.',
    },
    price: 200,
    category: 'krepa',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
  },
  {
    id: 'krepa-nutella',
    name: {
      sq: 'Nutella',
      en: 'Nutella Crepe',
    },
    description: {
      sq: 'Krepë e mbushur me Nutella origjinale.',
      en: 'Warm sweet crepe stuffed with rich authentic Nutella.',
    },
    price: 200,
    category: 'krepa',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'krepa-lidia',
    name: {
      sq: 'Lidia',
      en: 'Crepe Lidia',
    },
    description: {
      sq: 'Çokollatë e zezë, banane e freskët, biskotë.',
      en: 'Dark chocolate, fresh sliced banana, crushed biscuit.',
    },
    price: 300,
    category: 'krepa',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
  },
  {
    id: 'krepa-bounty',
    name: {
      sq: 'Bounty',
      en: 'Crepe Bounty',
    },
    description: {
      sq: 'Çokollatë e zezë, banane, arrë kokosi.',
      en: 'Dark chocolate, fresh banana, shredded coconut.',
    },
    price: 300,
    category: 'krepa',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
  },

  // ================= DRINKS =================
  {
    id: 'drink-uje',
    name: {
      sq: 'Ujë (0.5L)',
      en: 'Water (0.5L)',
    },
    description: {
      sq: 'Ujë natyral i pastër mineral.',
      en: 'Pure natural spring drinking water.',
    },
    price: 50,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
  },
  {
    id: 'drink-dhalle',
    name: {
      sq: 'Dhallë',
      en: 'Dhallë (Ayran)',
    },
    description: {
      sq: 'Dhallë tradite i ftohtë dhe freskues.',
      en: 'Traditional chilled salted yogurt drink.',
    },
    price: 100,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'drink-kola',
    name: {
      sq: 'Kola',
      en: 'Coca-Cola',
    },
    description: {
      sq: 'Kutizë ftohtë akull Koka-Kola.',
      en: 'Ice cold classic Coca-Cola can.',
    },
    price: 150,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
  },
  {
    id: 'drink-fanta',
    name: {
      sq: 'Fanta',
      en: 'Fanta',
    },
    description: {
      sq: 'Fanta e ftohtë me shije portokalli.',
      en: 'Ice cold sparkling Fanta Orange.',
    },
    price: 150,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
  },
  {
    id: 'drink-birra',
    name: {
      sq: 'Birra',
      en: 'Birra (Beer / Non-Alcoholic)',
    },
    description: {
      sq: 'Birra e ftohtë.',
      en: 'Chilled refreshing beer.',
    },
    price: 150,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
    isHalal: false,
  },
  {
    id: 'drink-b52',
    name: {
      sq: 'B52 Energy Drink',
      en: 'B52 Energy Drink',
    },
    description: {
      sq: 'Pije energjike B52 e ftohtë akull.',
      en: 'Ice cold B52 energy drink.',
    },
    price: 150,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80',
    isHalal: true,
  },
];
