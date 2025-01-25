export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              BKBCK is committed to providing quality education and fostering
              academic excellence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent">
                  Campus Life
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Education Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@bkbck.edu</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-accent">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-accent">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 BKBCK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};