import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About City College</h3>
            <p className="text-sm leading-relaxed mb-4">
              City College Barabanki is committed to providing quality education through 
              Dr. Rajendra Prasad Educational Society, offering D.El.Ed/BTC courses with 
              excellent facilities and experienced faculty.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition text-sm">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary-400 transition text-sm">Our Courses</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-primary-400 transition text-sm">Facilities</Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-primary-400 transition text-sm">Our Faculty</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">•</span>
                <span>D.El.Ed (Diploma in Elementary Education)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">•</span>
                <span>BTC (Basic Training Certificate)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">•</span>
                <span>Duration: 2 Years</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">•</span>
                <span>Eligibility: Graduation</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Regd. Office:</p>
                  <p>MS-101 Sec-D, Aliganj Lucknow</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">College:</p>
                  <p>Lakshbar Bajha Paratapganj, Faizabad Road, Barabanki</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-400" />
                <a href="tel:8400133333" className="hover:text-primary-400 transition">
                  8400133333
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-400" />
                <a href="tel:8177001081" className="hover:text-primary-400 transition">
                  8177001081
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary-400" />
                <a href="mailto:citycollegebarabanki@gmail.com" className="hover:text-primary-400 transition break-all">
                  citycollegebarabanki@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {currentYear} City College Barabanki. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary-400 transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-400 transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;