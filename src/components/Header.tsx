import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (category: string, value: string) => void;
}

const Header = ({
  onSearch = () => {},
  onFilterChange = () => {},
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Plants", "Pots"];
  const careRequirements = ["Any", "Low", "Medium", "High"];
  const materials = ["Any", "Ceramic", "Clay", "Plastic", "Metal"];

  return (
    <header className="w-full h-20 bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 md:px-6 lg:px-8 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-[#8BC34A]">BloomBuddy</h1>
        </div>

        <div className="flex-1 max-w-2xl relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search plants and pots..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch(e.target.value);
              }}
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Category
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => onFilterChange("category", category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Care Level
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {careRequirements.map((level) => (
                <DropdownMenuItem
                  key={level}
                  onClick={() => onFilterChange("care", level)}
                >
                  {level}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Material
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {materials.map((material) => (
                <DropdownMenuItem
                  key={material}
                  onClick={() => onFilterChange("material", material)}
                >
                  {material}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
