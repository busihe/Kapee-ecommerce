import React, { useState } from "react";
import ProductCard from "./product-card";
import Aftersell from "./aftersell"
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryItem {
  name: string;
  hasSubmenu: boolean;
}

const HomePage: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [isSidebarOpen] = useState(true);

  const categories: CategoryItem[] = [
    { name: "Men's Clothing", hasSubmenu: true },
    { name: "Women's Clothing", hasSubmenu: true },
    { name: "Accessories", hasSubmenu: true },
    { name: "Shoes", hasSubmenu: true },
    { name: "Jewellery", hasSubmenu: true },
    { name: "Bags & Backpacks", hasSubmenu: true },
    { name: "Watches", hasSubmenu: true },
    { name: "Dresses", hasSubmenu: false },
    { name: "Shirts", hasSubmenu: false },
  ];

  const navigationItems = [
    { name: "HOME", path: "/home1", hasDropdown: true },
    { name: "SHOP", path: "/myshop", hasDropdown: true },
    { name: "PAGES", path: "/page", hasDropdown: true },
    { name: "BLOG", path: "/blog", hasDropdown: true },
    {
      name: "ELEMENTS",
      path: "/elements",
      hasDropdown: true,
      children: [{ name: "Typography", path: "/elements/typography" }],
    },
    { name: "BUY NOW", path: "/buy", hasDropdown: false },
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(categoryName)) {
        newExpanded.delete(categoryName);
      } else {
        newExpanded.add(categoryName);
      }
      return newExpanded;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Categories Button */}
            <button
              onClick={() => {}}
              className="bg-yellow-400 text-gray-900 px-6 py-3 flex items-center gap-3 font-semibold transition-colors"
            >
              <Menu className="w-5 h-5" />
              SHOP BY CATEGORIES
            </button>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium py-2"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
     

      {/* Sidebar + Hero */}
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <div
          className={`bg-white shadow-lg transition-all duration-300 ${
            isSidebarOpen ? "w-80" : "w-0 overflow-hidden"
          }`}
        >
          <div className="p-6">
            <div className="space-y-1">
              {categories.map((category, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => category.hasSubmenu && toggleCategory(category.name)}
                    className="w-full flex items-center justify-between py-4 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 rounded transition-colors"
                  >
                    <span className="font-medium">{category.name}</span>
                    {category.hasSubmenu && (
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          expandedCategories.has(category.name) ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu placeholder */}
                  {category.hasSubmenu && expandedCategories.has(category.name) && (
                    <div className="pl-4 pb-2">
                      <div className="text-sm text-gray-500 py-1">
                        Subcategories would appear here
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      

        {/* Hero */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
          <h1 className="text-5xl font-bold">Welcome to Home</h1>
          
        </div>
         
      </div>
         <ProductCard/>
         <Aftersell/>
    </div>
     
  );
};

export default HomePage;
