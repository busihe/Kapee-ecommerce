import {
  HomeIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

function Footer() {
  return (
<div className="bg-gray-100 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/*  First Column */}
        <div>
             {/* Contact Information */}
      <div className="max-w-sm p-6 text-gray-700 font-sans">
      {/* Logo / Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">kapee.</h1>
      
      {/* Description */}
      <p className="text-sm mb-6 text-gray-500">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>

      {/* Address */}
      <div className="flex items-start mb-2">
        <HomeIcon className="h-5 w-5 text-gray-600 mt-1 mr-3" />
        <span>Lorem Ipsum, 2046 Lorem Ipsum</span>
      </div>

      {/* Phone */}
      <div className="flex items-start mb-2">
        <PhoneIcon className="h-5 w-5 text-gray-600 mt-1 mr-3" />
        <span>576-245-2478</span>
      </div>

      {/* Email */}
      <div className="flex items-start mb-2">
        <EnvelopeIcon className="h-5 w-5 text-gray-600 mt-1 mr-3" />
        <span>info@kapee.com</span>
      </div>

      {/* Hours */}
      <div className="flex items-start">
        <ClockIcon className="h-5 w-5 text-gray-600 mt-1 mr-3" />
        <span>Mon - Fri / 9:00 AM - 6:00 PM</span>
      </div>
    </div>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">INFORMATION</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-500">Store Location</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-yellow-500">Latest News</a></li>
            <li><a href="#" className="hover:text-yellow-500">Our Sitemap</a></li>
          </ul>
        </div>

        {/* Our Service Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">OUR SERVICE</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms of Sale</a></li>
            <li><a href="#" className="hover:text-yellow-500">Customer Service</a></li>
            <li><a href="#" className="hover:text-yellow-500">Payments</a></li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">MY ACCOUNT</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-500">My Account</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Shop</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Cart</a></li>
            <li><a href="#" className="hover:text-yellow-500">My Wishlist</a></li>
            <li><a href="#" className="hover:text-yellow-500">Tracking Order</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">NEWSLETTER</h3>
          <p className="mb-4">Subscribe to our mailing list to get the new updates!</p>
          <input
            type="email"
            placeholder="Your email address"
            className="border border-gray-300 p-2 w-full mb-2 rounded"
          />
          <button className="bg-yellow-500 text-white py-2 px-4 rounded">
            SIGN UP
          </button>
        </div>
      </div>
      <div>

      <div className="flex col-span-2 gap-6">
        <span className="">Kapee © 2025 by PressLayouts All Rights Reserved.</span>
        <span className="ml-auto"><img src="https://kapee.presslayouts.com/wp-content/themes/kapee/assets/images/payments-method.png" alt="" />
        </span>
    </div>
    </div>
    </div>
 )
}

export default Footer   