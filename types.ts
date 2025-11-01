
export interface Product {
  id: number;
  name: string;
  category: 'Sayur' | 'Beras' | 'Buah';
  price: number;
  rating: number;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface HealthArticle {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export enum Tab {
  Market = 'Market',
  Health = 'Health',
  Profile = 'Profile',
}
