import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Copyright Section */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Equipment Store. All rights
              reserved.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <p>Email: info@equipmentstore.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 1234 Equipment St, Sports City, SC 12345</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://facebook.com"
              className="text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
