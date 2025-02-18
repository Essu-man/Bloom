import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Info, Leaf, Droplets, Thermometer, Sun } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";

interface PlantDetails {
  wateringFrequency?: string;
  sunlight?: string;
  temperature?: string;
  humidity?: string;
  soil?: string;
  height?: string;
  nativeTo?: string;
  fullDescription?: string;
}

interface ProductCardProps {
  id?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  type?: "plant" | "pot";
  details?: PlantDetails;
}

const ProductCard = ({
  id = "1",
  name = "Monstera Deliciosa",
  description = "A beautiful tropical plant with distinctive split leaves. Perfect for bringing a jungle vibe to your home.",
  imageUrl = "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&auto=format&fit=crop",
  type = "plant",
  details = {
    wateringFrequency: "Every 1-2 weeks",
    sunlight: "Bright indirect light",
    temperature: "65-85°F (18-29°C)",
    humidity: "High",
    soil: "Well-draining potting mix",
    height: "Up to 10 feet indoors",
    nativeTo: "Southern Mexico and Panama",
    fullDescription:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its large, glossy leaves with natural holes. This tropical plant is a popular choice for indoor spaces due to its dramatic appearance and relatively easy care requirements.",
  },
}: ProductCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-full sm:w-[340px] h-[420px] bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
          <div className="relative h-full">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="pt-4 relative">
              <div className="absolute -top-8 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                {type === "plant" ? (
                  <Leaf className="h-6 w-6 text-[#8BC34A]" />
                ) : (
                  <Info className="h-6 w-6 text-[#6495ED]" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {description}
              </p>
              <div className="mt-4 flex gap-2">
                {type === "plant" && (
                  <>
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <Sun className="h-4 w-4 text-yellow-500" />
                    <Thermometer className="h-4 w-4 text-red-500" />
                  </>
                )}
              </div>
            </CardContent>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {type === "plant" ? (
              <Leaf className="h-6 w-6 text-[#8BC34A]" />
            ) : (
              <Info className="h-6 w-6 text-[#6495ED]" />
            )}
            {name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <p className="mt-4 text-gray-600">{details.fullDescription}</p>
          </div>
          <div className="space-y-4">
            {type === "plant" && (
              <>
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  <div>
                    <h4 className="font-semibold">Watering</h4>
                    <p className="text-sm text-gray-600">
                      {details.wateringFrequency}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-yellow-500" />
                  <div>
                    <h4 className="font-semibold">Sunlight</h4>
                    <p className="text-sm text-gray-600">{details.sunlight}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <div>
                    <h4 className="font-semibold">Temperature</h4>
                    <p className="text-sm text-gray-600">
                      {details.temperature}
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className="border-t pt-4 mt-4">
              <h4 className="font-semibold mb-2">Additional Information</h4>
              <dl className="space-y-2">
                {type === "plant" && (
                  <>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Humidity
                      </dt>
                      <dd className="text-sm text-gray-900">
                        {details.humidity}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Soil Type
                      </dt>
                      <dd className="text-sm text-gray-900">{details.soil}</dd>
                    </div>
                  </>
                )}
                <div>
                  <dt className="text-sm font-medium text-gray-500">Height</dt>
                  <dd className="text-sm text-gray-900">{details.height}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Native To
                  </dt>
                  <dd className="text-sm text-gray-900">{details.nativeTo}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;
