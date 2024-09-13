import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-5 border-t shadow-md">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Our Company</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Corporate Social Responsibility</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Rewards Program</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Order & Pickup</a></li>
              <li><a href="#" className="hover:underline">Delivery</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Help Center</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Customer Service</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.72 17.52 2.27 12 2.27S2 6.72 2 12.07c0 4.82 3.66 8.83 8.44 9.65v-6.82h-2.54v-2.83h2.54v-2.13c0-2.51 1.52-3.9 3.76-3.9 1.07 0 2.11.19 2.11.19v2.37h-1.19c-1.17 0-1.54.73-1.54 1.48v1.99h2.71l-.43 2.83h-2.29V21.7c4.78-.82 8.44-4.83 8.44-9.63z" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56a9.92 9.92 0 01-2.82.77A4.93 4.93 0 0023.34 3c-.95.57-2 .97-3.12 1.2a4.92 4.92 0 00-8.4 4.48A13.94 13.94 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.88 4.88 0 01-2.23-.62v.06c0 2.37 1.69 4.34 3.93 4.78a4.93 4.93 0 01-2.22.08 4.92 4.92 0 004.6 3.42A9.86 9.86 0 010 21.54a13.92 13.92 0 007.55 2.21c9.05 0 14-7.5 14-14v-.63A10.06 10.06 0 0024 4.56z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600">&copy; 2024 Your Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
