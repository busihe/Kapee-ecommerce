import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';

interface CategoryItem {
  name: string;
  hasSubmenu: boolean;
  isExpanded?: boolean;
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
    { name: "Shirts", hasSubmenu: false }
  ];

  const navigationItems = [
    { name: "HOME", hasDropdown: true, className:"" },
    { name: "SHOP", hasDropdown: true },
    { name: "PAGES", hasDropdown: true },
    { name: "BLOG", hasDropdown: true },
    { name: "ELEMENTS", hasDropdown: true },
    { name: "BUY NOW", hasDropdown: false }
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
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
    <div>
      {/**------------------Our Category and headphone--------------------------- */}
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Categories Button */}
            <button
          onClick={() => {}}
           className="bg-yellow-400  text-gray-900 px-6 py-3 flex items-center gap-3 font-semibold transition-colors"
>
               <Menu className="w-5 h-5" />
                    SHOP BY CATEGORIES
                </button> 

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium py-2">
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <div className={`bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-80' : 'w-0 overflow-hidden'}`}>
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
                          expandedCategories.has(category.name) ? 'rotate-90' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Submenu placeholder - would expand with actual subcategories */}
                  {category.hasSubmenu && expandedCategories.has(category.name) && (
                    <div className="pl-4 pb-2">
                      <div className="text-sm text-gray-500 py-1">Subcategories would appear here</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
          <div className="relative h-96 flex items-center justify-between px-12">
            {/* Content Section */}
            <div className="flex-1 max-w-lg">
              <div className="mb-4">
                <span className="text-yellow-500 font-bold text-lg tracking-wide">
                  BEATS EP ON-EAR
                </span>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                PERSONALIZED<br />
                HEADPHONES
              </h1>
              
              <p className="text-2xl text-gray-700 mb-8 font-medium">
                Min. 40-80% Off
              </p>
              
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg transition-colors hover:transform hover:scale-105 duration-200">
                BUY NOW
              </button>
            </div>

            {/* Headphones Image Section */}
            <div className="flex-1 flex justify-center items-center relative">
              <div className="relative">
                {/* Headphones Representation */}
               <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                <img src="../electronics-slider-2.png"
              alt="Headphones"
              className="w-96 ml-10"/> 
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-32 left-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* -------------Speaker and watch---------------------*/}
    <section className="">
      <div className="container mx-auto grid grid-cols-2 gap-4 bg-gray-100 p-6">
      {/*Column 1 */}
      <div>
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
          <div className="relative h-96 flex items-center justify-between px-12">
            {/* Content Section */}
            <div className="flex-1 max-w-lg">
              <div className="mb-4">
                <span className="text-yellow-500 font-bold text-lg tracking-wide">
                  DIGITAL SMART
                </span>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                WIRELESS SPEAKER<br />
              </h1>
              
              <p className="text-2xl text-gray-700 mb-8 font-medium">
                Min. 30-70% Off
              </p>
              
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg transition-colors hover:transform hover:scale-105 duration-200">
                BUY NOW
              </button>
            </div>

            {/* Headphones Image Section */}
            <div className="flex-1 flex justify-center items-center relative">
              <div className="relative">
                {/* Headphones Representation */}
               <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                <img src="../electronics-banner-1.jpg"
              alt="Headphones"
              className="w-96 ml-10"/> 
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-32 left-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Column 2 */}

      <div>
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
          <div className="relative h-96 flex items-center justify-between px-12">
            {/* Content Section */}
            <div className="flex-1 max-w-lg">
              <div className="mb-4">
                <span className="text-yellow-500 font-bold text-lg tracking-wide">
                  DIGITAL SMART
                </span>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                WATCH CHARGER<br />
              </h1>
              
              <p className="text-2xl text-gray-700 mb-8 font-medium">
                UP TO 70% Off
              </p>
              
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold text-lg transition-colors hover:transform hover:scale-105 duration-200">
                BUY NOW
              </button>
            </div>

            {/* Headphones Image Section */}
            <div className="flex-1 flex justify-light items-right relative">
              <div className="relative">
                {/* Headphones Representation */}
               <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                <img src="../electronics-banner-2.jpg"
              alt="Headphones"
              className="w-96 ml-10"/> 
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-32 left-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

{/** ---------------------------------------------------- */}

    </div>
  );
};

export default HomePage;