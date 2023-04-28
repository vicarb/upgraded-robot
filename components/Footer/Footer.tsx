import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>123 Main Street</p>
          <p>New York, NY 10001</p>
          <p>Email: info@gymwear.com</p>
          <p>Phone: 555-555-5555</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Social Media</h3>
          <ul className="mt-2">
            <li className="mt-1"><a href="#">Twitter</a></li>
            <li className="mt-1"><a href="#">Facebook</a></li>
            <li className="mt-1"><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;