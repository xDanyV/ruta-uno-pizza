import { MenuItem } from '@/types';

export const categories: { key: MenuItem['category']; label: string }[] = [
  { key: 'pizzas', label: 'Pizzas Artesanales' },
  { key: 'deepdish', label: 'Chicago Deep Dish' },
  { key: 'snacks', label: 'Entradas & Pastas' },
  { key: 'cafe', label: 'Cafetería & Bebidas' },
];

export const menuItems: MenuItem[] = [
  // --- PIZZAS ARTESANALES (Borde Rústico) ---
  {
    id: 'pizza-margarita-rustica',
    name: 'Margarita Rústica Especial',
    description: 'Masa madre de fermentación lenta con borde crujiente inflado, mozzarella fresco, jitomates cherry salteados, albahaca fresca y reducción de balsámico.',
    price: 240,
    category: 'pizzas',
    image: '/images/menu/pizza-margarita.jpg',
    tag: 'Clásica de la Casa',
    popular: true,
  },
  {
    id: 'pizza-pepperoni-hot-honey',
    name: 'Pepperoni & Hot Honey',
    description: 'Generosa porción de pepperoni premium crujiente, queso mozzarella gratinado y un baño de miel picante artesanal sobre la corteza horneada.',
    price: 265,
    category: 'pizzas',
    image: '/images/menu/pizza-pepperoni-honey.jpg',
    tag: 'Más Vendida',
    popular: true,
  },
  {
    id: 'pizza-carnes-suprema',
    name: 'Suprema de Carnes & Champiñón',
    description: 'Salsa de tomate casera con hierbas italianas, pepperoni, jamón selva negra, salchicha italiana, champiñones frescos y aceitunas negras.',
    price: 285,
    category: 'pizzas',
    image: '/images/menu/pizza-carnes.jpg',
  },

  // --- CHICAGO DEEP DISH ---
  {
    id: 'deep-dish-clasica-chicago',
    name: 'Chicago Deep Dish Clásica',
    description: 'Borde alto relleno con doble capa de queso mozzarella fundido, salchicha italiana especiada y cubierta de salsa de tomate rústica con orégano.',
    price: 360,
    category: 'deepdish',
    image: '/images/menu/deep-dish-clasica.jpg',
    tag: 'Especialidad',
    popular: true,
  },
  {
    id: 'deep-dish-suprema-ruta-uno',
    name: 'Deep Dish Suprema Ruta Uno',
    description: 'Corteza gruesa dorada al horno, queso mozzarella en hebras infinitas, pepperoni, pimientos asados, champiñones y albahaca fresca.',
    price: 390,
    category: 'deepdish',
    image: '/images/menu/deep-dish-suprema.jpg',
    popular: true,
  },
  {
    id: 'deep-dish-cuatro-quesos',
    name: 'Deep Dish 4 Quesos Fondue',
    description: 'Mezcla intensa de mozzarella, parmesano añejo, gouda y provolone ahumado, coronada con salsa espesa de tomates tatemados.',
    price: 375,
    category: 'deepdish',
    image: '/images/menu/deep-dish-quesos.jpg',
  },

  // --- ENTRADAS & PASTAS (Snacks) ---
  {
    id: 'alitas-bbq-artesanal',
    name: 'Alitas Glaseadas BBQ Ahumada',
    description: 'Alitas crujientes marinadas y bañadas en salsa BBQ de la casa, servidas con bastones de apio y aderezo ranch rústico.',
    price: 175,
    category: 'snacks',
    image: '/images/menu/alitas-bbq.jpg',
    tag: 'Para Compartir',
    popular: true,
  },
  {
    id: 'pasta-alfredo-pollo',
    name: 'Fettuccine Alfredo con Pollo',
    description: 'Pasta fresca bañada en cremosa salsa Alfredo a base de mantequilla y parmesano, acompañada de pechuga de pollo a la plancha y pan de ajo.',
    price: 195,
    category: 'snacks',
    image: '/images/menu/pasta-alfredo.jpg',
  },
  {
    id: 'papas-gajo-rusticas',
    name: 'Papas Gajo a las Finas Hierbas',
    description: 'Papas sazonadas con pimentón, romero y ajo horneado, servidas con dip cremoso de queso cheddar y chipotle.',
    price: 110,
    category: 'snacks',
    image: '/images/menu/papas-gajo.jpg',
  },

  // --- CAFETERÍA & BEBIDAS ---
  {
    id: 'iced-caramel-latte',
    name: 'Iced Caramel Macchiato',
    description: 'Espresso doble de grano selecto, leche entera cremada fría, vainilla y espiral de caramelo salado sobre cubos de hielo.',
    price: 85,
    category: 'cafe',
    image: '/images/menu/iced-caramel.jpg',
    tag: 'Favorito Frío',
    popular: true,
  },
  {
    id: 'frappe-moka-artesanal',
    name: 'Frappé Moka & Nuez',
    description: 'Base de café frappé con chocolate amargo, crema batida artesanal y trocitos de nuez tostada.',
    price: 90,
    category: 'cafe',
    image: '/images/menu/frappe-moka.jpg',
  },
  {
    id: 'cerveza-artesanal-local',
    name: 'Cerveza Artesanal de la Casa',
    description: 'Selección de cerveza artesanal local estilo IPA o Blonde Ale, servida bien fría en copa.',
    price: 95,
    category: 'cafe',
    image: '/images/menu/cerveza-artesanal.jpg',
  },
];