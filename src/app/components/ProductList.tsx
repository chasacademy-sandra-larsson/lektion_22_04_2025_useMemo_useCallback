"use client"

import { useState, useCallback } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Sneakers' },
  { id: 2, name: 'T-shirt' },
];

export type Product = {
  id: number;
  name: string;
};



export default function ProductList() {
   'use memo'
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite =(id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
