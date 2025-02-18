import React, { useState } from "react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  isFavorite: boolean;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([
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
  ]);

  const handleSearch = (query: string) => {
    // Implement search functionality
    console.log("Search query:", query);
  };

  const handleFilterChange = (category: string, value: string) => {
    // Implement filter functionality
    console.log("Filter:", category, value);
  };

  const handleFavoriteClick = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <main className="pt-20">
        <ProductGrid
          products={products}
          onFavoriteClick={handleFavoriteClick}
        />
      </main>
    </div>
  );
};

export default Home;
