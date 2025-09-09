import React from "react";
import { Link } from "react-router-dom";

const Elements: React.FC = () => {
  const items = [
    "Typography",
    "Headings",
    "Buttons",
    "Social Buttons",
    "Progress Bar",
    "Info Box",
    "Instagram",
    "Tabs",
    "Talks",
    "Accordion",
    "Blog Listing",
    "Products Grid Carousel",
    "Products With Banner",
    "Products Categories",
    "Image Gallery",
    "Recently Viewed Products",
    "Testimonials",
    "Counter",
    "Countdown Timer",
    "Hot Deal Products",
    "Products Widgets",
    "Portfolio Listing",
    "Portfolio Carousel",
    "Products Categories Thumbnail",
    "Team",
    "Tours",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">Elements</h1>
      <nav className="mt-5">
        <ul className="flex flex-wrap justify-center space-x-10">
          <li className="text-lg">
            <Link to="/home1" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/elements" className="text-gray-800 hover:text-blue-500">
              Elements
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl">
        {items.map((element) => (
          <div key={element} className="text-center">
            <Link
              to={`/elements/${element.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-lg text-gray-800 hover:text-blue-500"
            >
              {element}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elements;
