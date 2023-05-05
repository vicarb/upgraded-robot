import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-pink-500 to-red-500 text-white py-4">
  <div className="container mx-auto flex justify-between">
    <div>
      <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
      <p className="mb-1">123 Main Street</p>
      <p className="mb-1">New York, NY 10001</p>
      <p className="mb-1">Email: info@gymwear.com</p>
      <p className="mb-1">Phone: 555-555-5555</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Social Media</h3>
      <ul className="mt-2">
        <li className="mt-1"><a href="#" className="text-white hover:text-gray-200">Twitter</a></li>
        <li className="mt-1"><a href="#" className="text-white hover:text-gray-200">Facebook</a></li>
        <li className="mt-1"><a href="#" className="text-white hover:text-gray-200">Instagram</a></li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;