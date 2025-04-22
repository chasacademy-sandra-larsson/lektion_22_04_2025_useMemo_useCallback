"use client"
import React, { useEffect } from 'react';
import { Product } from './ProductList';



interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}


const ProductCard = React.memo(({ product, isFavorite, onToggleFavorite }: ProductCardProps) => {

  // Runs after every render
  useEffect(() => {
    console.log(`ProductCard rendered for product: ${product.name}`);
  });

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => onToggleFavorite(product.id)}>
        {isFavorite ? '💖' : '🤍'}
      </button>
    </div>
  );
});

export default ProductCard;
