import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'COURSES', path: '/courses' },
    { name: 'FACILITIES', path: '/facilities' },
    { name: 'FACULTY', path: '/faculty' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results (you can implement a search page later)
      console.log('Searching for:', searchQuery);
      // For now, we'll just log it
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="mailto:citycollegebarabanki@gmail.com" className="flex items-center hover:text-primary-200 transition">
                <Mail size={16} className="mr-2" />
                citycollegebarabanki@gmail.com
              </a>
              <a href="tel:8400133333" className="flex items-center hover:text-primary-200 transition">
                <Phone size={16} className="mr-2" />
                8400133333
              </a>
            </div>
            <div className="text-sm">
              Regd. Office: MS-101 Sec-D, Aliganj Lucknow
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.jpeg" 
                alt="City College Logo" 
                className="h-16 w-16 object-contain"
              />
              <div className="hidden lg:block">
                <h1 className="text-xl font-bold text-primary-700">CITY COLLEGE BARABANKI</h1>
                <p className="text-xs text-gray-600">Through: Dr. Rajendra Prasad Educational Society</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-md ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="ml-2 p-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-gray-700 hover:text-primary-600"
              >
                <Search size={24} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary-600 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="pb-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search courses, facilities, faculty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border-2 border-primary-300 rounded-lg focus:outline-none focus:border-primary-500 transition"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white p-2 rounded-md hover:bg-primary-700 transition"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-semibold rounded-md mb-1 transition ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;