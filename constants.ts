
import { Product, HealthArticle } from './types';

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Bayam Segar', category: 'Sayur', price: 5000, rating: 4.8, imageUrl: 'https://picsum.photos/seed/bayam/400/400' },
  { id: 2, name: 'Beras Pandan Wangi 5kg', category: 'Beras', price: 65000, rating: 4.9, imageUrl: 'https://picsum.photos/seed/beras/400/400' },
  { id: 3, name: 'Apel Fuji Premium', category: 'Buah', price: 25000, rating: 4.7, imageUrl: 'https://picsum.photos/seed/apel/400/400' },
  { id: 4, name: 'Wortel Organik', category: 'Sayur', price: 8000, rating: 4.6, imageUrl: 'https://picsum.photos/seed/wortel/400/400' },
  { id: 5, name: 'Beras Merah Sehat 2kg', category: 'Beras', price: 35000, rating: 4.8, imageUrl: 'https://picsum.photos/seed/berasmerah/400/400' },
  { id: 6, name: 'Jeruk Sunkist Manis', category: 'Buah', price: 20000, rating: 4.9, imageUrl: 'https://picsum.photos/seed/jeruk/400/400' },
  { id: 7, name: 'Kangkung Hidroponik', category: 'Sayur', price: 6000, rating: 4.7, imageUrl: 'https://picsum.photos/seed/kangkung/400/400' },
  { id: 8, name: 'Pisang Cavendish', category: 'Buah', price: 18000, rating: 4.8, imageUrl: 'https://picsum.photos/seed/pisang/400/400' },
];

export const HEALTH_ARTICLES: HealthArticle[] = [
  { id: 1, title: '5 Manfaat Bayam untuk Kesehatan Mata', excerpt: 'Bayam kaya akan Lutein dan Zeaxanthin, antioksidan yang melindungi...', imageUrl: 'https://picsum.photos/seed/artikel1/800/600' },
  { id: 2, title: 'Tips Memilih Beras Berkualitas Tinggi', excerpt: 'Jangan terkecoh harga murah, perhatikan ciri-ciri beras yang baik...', imageUrl: 'https://picsum.photos/seed/artikel2/800/600' },
  { id: 3, title: 'Resep Jus Detoks Pagi Hari dengan Buah Lokal', excerpt: 'Mulai harimu dengan segelas jus segar untuk membersihkan racun...', imageUrl: 'https://picsum.photos/seed/artikel3/800/600' },
  { id: 4, title: 'Gaya Hidup Sehat: Lebih dari Sekadar Makanan', excerpt: 'Kombinasi pola makan, olahraga, dan istirahat yang cukup adalah kunci...', imageUrl: 'https://picsum.photos/seed/artikel4/800/600' },
];
