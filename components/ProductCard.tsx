
import React from 'react';
import { Product } from '../types';
import { StarIcon } from './icons';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-md font-semibold text-[#37474F] truncate">{product.name}</h3>
        <p className="text-lg font-bold text-[#2E7D32] mt-1">Rp{product.price.toLocaleString('id-ID')}</p>
        <div className="flex items-center mt-2 text-gray-500">
          <StarIcon className="w-5 h-5 text-[#FFC107]" />
          <span className="ml-1 text-sm">{product.rating}</span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full mt-4 bg-[#FFC107] text-white font-semibold py-2 rounded-xl shadow-sm hover:bg-amber-500 transition-colors duration-300"
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
