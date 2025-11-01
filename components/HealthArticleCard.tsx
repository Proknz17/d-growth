
import React from 'react';
import { HealthArticle } from '../types';

interface HealthArticleCardProps {
  article: HealthArticle;
}

const HealthArticleCard: React.FC<HealthArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-4 transform hover:shadow-lg transition-shadow duration-300">
      <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#2E7D32]">{article.title}</h3>
        <p className="text-sm text-[#37474F] mt-2">{article.excerpt}</p>
        <a href="#" className="text-[#81C784] font-semibold mt-4 inline-block hover:text-[#2E7D32]">
          Baca Selengkapnya &rarr;
        </a>
      </div>
    </div>
  );
};

export default HealthArticleCard;
