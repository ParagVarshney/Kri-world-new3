// Footer.jsx
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#eaf2ff] pt-12 pb-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <img
            src="/krilogo.png" 
            alt="Kriworld Logo"
            className="h-36 mb-4"
          />
          <p className="text-gray-600 text-2xl leading-relaxed">
            Transforming businesses with strategic digital marketing solutions –
            <span className="font-semibold"> Kriworld</span>, your partner in
            growth.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-2xl mb-4 text-gray-800">Our Link</h3>
          <ul className="space-y-2 text-gray-600 text-lg">
            <li className="hover:text-blue-500 transition-colors">About Us</li>
            <li className="hover:text-blue-500 transition-colors">
              Website Development
            </li>
            <li className="hover:text-blue-500 transition-colors">
              Digital Marketing
            </li>
            <li className="hover:text-blue-500 transition-colors">
              App Development
            </li>
            <li className="hover:text-blue-500 transition-colors">
              Video Development
            </li>
            <li className="hover:text-blue-500 transition-colors">Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-2xl mb-4 text-gray-800">
            Get in touch
          </h3>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-center gap-3 hover:text-blue-500 transition-colors">
              <Mail size={18} /> harishgupta@kriworld.com
            </li>
            <li className="flex items-center gap-3 hover:text-blue-500 transition-colors">
              <MapPin size={18} /> Sarai Khawaja, Faridabad, Haryana, 121003
            </li>
            <li className="flex items-center gap-3 hover:text-blue-500 transition-colors">
              <Phone size={18} /> +91 870-066-1267
            </li>
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-300 mt-10 pt-4 pb-12 text-center text-2xl text-gray-600">
        © Copyright 2024 <span className="font-semibold">Kriworld</span>. All
        rights reserved
      </div>
    </footer>
  );
}

