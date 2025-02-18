import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  isFavorite?: boolean;
  onFavoriteClick?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Monstera Deliciosa",
  description = "A beautiful tropical plant with distinctive split leaves. Perfect for bringing a jungle vibe to your home.",
  imageUrl = "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&auto=format&fit=crop",
  price = 29.99,
  isFavorite = false,
  onFavoriteClick = () => {},
}: ProductCardProps) => {
  return (
    <Card className="w-[340px] h-[420px] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 hover:bg-white/80"
          onClick={() => onFavoriteClick(id)}
        >
          <Heart
            className={cn(
              "h-6 w-6",
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-500",
            )}
          />
        </Button>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">
          ${price.toFixed(2)}
        </span>
        <Button variant="default" className="bg-[#8BC34A] hover:bg-[#7CB342]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
