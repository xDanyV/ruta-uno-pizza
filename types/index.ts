export type Category = 'pizzas' | 'deepdish' | 'cafe' | 'snacks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  tag?: string;
  popular?: boolean;
}