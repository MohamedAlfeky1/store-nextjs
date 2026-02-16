export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
 
        <div>
          <h2 className="text-white text-xl font-bold mb-3">MyStore</h2>
          <p className="text-sm text-gray-400">
            High quality products with the best prices.  
            Shop smart, live better.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get updates about new products and offers.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}
