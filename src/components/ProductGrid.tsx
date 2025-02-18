import React from "react";
import ProductCard from "./ProductCard";

interface PlantDetails {
  wateringFrequency: string;
  sunlight: string;
  temperature: string;
  humidity: string;
  soil: string;
  height: string;
  nativeTo: string;
  fullDescription: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: "plant" | "pot";
  details: PlantDetails;
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
      type: "plant" as const,
      details: {
        wateringFrequency: "Every 1-2 weeks",
        sunlight: "Bright indirect light",
        temperature: "65-85°F (18-29°C)",
        humidity: "High",
        soil: "Well-draining potting mix",
        height: "Up to 10 feet indoors",
        nativeTo: "Southern Mexico and Panama",
        fullDescription:
          "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its large, glossy leaves with natural holes.",
      },
    },
    {
      id: "2",
      name: "Handcrafted Ceramic Pot",
      description: "Artisanal ceramic pot with a modern, minimalist design.",
      imageUrl:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop",
      type: "pot" as const,
      details: {
        wateringFrequency: "",
        sunlight: "",
        temperature: "",
        humidity: "",
        soil: "",
        height: "6 inches",
        nativeTo: "Handmade in Portugal",
        fullDescription:
          "Each pot is uniquely handcrafted by artisans using traditional techniques, featuring a minimalist design that complements any indoor plant.",
      },
    },
    {
      id: "3",
      name: "Snake Plant",
      description: "Low-maintenance plant perfect for air purification.",
      imageUrl:
        "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=800&auto=format&fit=crop",
      type: "plant" as const,
      details: {
        wateringFrequency: "Every 2-3 weeks",
        sunlight: "Low to bright indirect light",
        temperature: "60-85°F (15-29°C)",
        humidity: "Low to moderate",
        soil: "Well-draining cactus mix",
        height: "Up to 4 feet indoors",
        nativeTo: "West Africa",
        fullDescription:
          "The Snake Plant, or Sansevieria, is one of the most adaptable and easy-to-care-for indoor plants, known for its air-purifying qualities.",
      },
    },
    {
      id: "4",
      name: "Modern Concrete Planter",
      description: "Sleek concrete planter with clean lines.",
      imageUrl:
        "https://images.unsplash.com/photo-1604762512526-b7ce326d9b38?w=800&auto=format&fit=crop",
      type: "pot" as const,
      details: {
        wateringFrequency: "",
        sunlight: "",
        temperature: "",
        humidity: "",
        soil: "",
        height: "8 inches",
        nativeTo: "Made in Sweden",
        fullDescription:
          "This minimalist concrete planter combines industrial chic with Scandinavian design principles, featuring clean lines and a smooth finish.",
      },
    },
  ],
  onFavoriteClick = () => {},
}: ProductGridProps) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              type={product.type}
              details={product.details}
              onFavoriteClick={onFavoriteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
