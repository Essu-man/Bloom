import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  isFavorite: boolean;
}

interface ProductGridProps {
  products?: Product[];
  onFavoriteClick?: (id: string) => void;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      name: "Monstera Deliciosa",
      description: "A beautiful tropical plant with distinctive split leaves.",
      imageUrl:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&auto=format&fit=crop",
      price: 29.99,
      isFavorite: false,
    },
    {
      id: "2",
      name: "Ceramic Plant Pot",
      description: "Modern minimalist ceramic pot perfect for indoor plants.",
      imageUrl:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop",
      price: 24.99,
      isFavorite: true,
    },
    {
      id: "3",
      name: "Snake Plant",
      description: "Low-maintenance plant perfect for air purification.",
      imageUrl:
        "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=800&auto=format&fit=crop",
      price: 19.99,
      isFavorite: false,
    },
    {
      id: "4",
      name: "Terracotta Pot Set",
      description: "Classic terracotta pots in various sizes.",
      imageUrl:
        "https://images.unsplash.com/photo-1604762512526-b7ce326d9b38?w=800&auto=format&fit=crop",
      price: 34.99,
      isFavorite: false,
    },
  ],
  onFavoriteClick = () => {},
}: ProductGridProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
              isFavorite={product.isFavorite}
              onFavoriteClick={onFavoriteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
