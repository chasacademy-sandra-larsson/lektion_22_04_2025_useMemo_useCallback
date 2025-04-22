"use client"

import { useState, useCallback } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Sneakers' },
  { id: 2, name: 'T-shirt' },
  { id: 3, name: 'Stereo'}
];

export type Product = {
  id: number;
  name: string;
};



export default function ProductList() {

  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  }, []);

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
