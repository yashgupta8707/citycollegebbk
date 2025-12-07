import { useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  // Hover timeout for desktop dropdowns
  const hoverTimeoutRef = useRef(null);

  const navLinks = [
    { name: 'HOME', path: '/' },
    {
      name: 'ABOUT',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: "Director's Message", path: '/director-message' },
        { name: 'Vision & Mission', path: '/vision-mission' },
      ]
    },
    {
      name: 'ADMINISTRATION',
      dropdown: [
        { name: 'Chancellor', path: 'https://www.rmlau.ac.in/New/chancellor.aspx', external: true },
        { name: 'Pro Chancellor', path: 'https://www.rmlau.ac.in/New/vicechancellor.aspx', external: true },
        { name: 'Registrar', path: 'https://www.rmlau.ac.in/New/registrar.aspx', external: true },
        { name: 'Finance Officer', path: 'https://www.rmlau.ac.in/New/financeofficer.aspx', external: true },
        { name: 'Controller of Examination', path: 'https://www.rmlau.ac.in/New/ControllerofExaminaton.aspx', external: true },
        { name: 'Chief Vigilance Officer', path: 'https://www.rmlau.ac.in/New/DeansofFaculties.aspx', external: true },
        { name: 'Ombudsperson', path: '/ombudsperson' },
        { name: 'Executive Council', path: '/executive-council' },
        { name: 'Internal Complaint Committee', path: '/internal-complaint-committee' },
        { name: 'Academic Leadership', path: 'https://www.rmlau.ac.in/New/DeansofFaculties.aspx', external: true },
      ]
    },
    {
      name: 'COMMITTEE',
      dropdown: [
        { name: 'Sexual Harassment Committee', path: '/committee/sexual-harassment' },
        { name: 'Internal Complaint Committee (ICC)', path: '/committee/icc' },
        { name: 'Students Grievance Redressal Committee', path: '/committee/grievance-redressal' },
        { name: 'Anti Ragging Committee', path: '/committee/anti-ragging' },
      ]
    },
    {
      name: 'ACADEMICS',
      dropdown: [
        { name: 'Programs', path: '/courses' },
        { name: 'Academic Calendar', path: '/academic-calendar' },
        { name: 'Departments', path: '/departments' },
        { name: 'Library', path: '/facilities' },
        { name: 'IQAC', path: '/iqac' },
        { name: 'Statutes & Ordinances', path: '/statutes' },
      ]
    },
    {
      name: 'ADMISSIONS',
      dropdown: [
        { name: 'Admission Process & Guidelines', path: '/admission-process' },
        { name: 'Fee Refund Policy', path: '/fee-refund-policy' },
        { name: 'Prospectus', path: '/#', external: true },
      ]
    },
    {
      name: 'FACILITIES',
      dropdown: [
        { name: 'Facilities', path: '/facilities' },
        { name: 'Central Facilities (Gallery)', path: '/gallery' },
      ]
    },
    { name: 'FACULTY', path: '/faculty' },
    {
      name: 'RESEARCH',
      dropdown: [
        { name: 'R&D Cell', path: '/research' },
        { name: 'Incubation Centre', path: '/research#incubation' },
        { name: 'Publications', path: '/research#publications' },
      ]
    },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Desktop hover handlers
  const handleDesktopEnter = (name) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenDropdown(name);
  };

  const handleDesktopLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // adjust delay if you want
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
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
              <a
                href="mailto:citycollegebarabanki@gmail.com"
                className="flex items-center hover:text-primary-200 transition"
              >
                <Mail size={16} className="mr-2" />
                citycollegebarabanki@gmail.com
              </a>
              <a
                href="tel:8400133333"
                className="flex items-center hover:text-primary-200 transition"
              >
                <Phone size={16} className="mr-2" />
                8400133333
              </a>
            </div>
            <div className="text-sm">
              Address: Lakshbar Bajaha, Pratapganj, Barabanki.
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
                <h1 className="text-xl font-bold text-primary-700">
                  CITY COLLEGE BARABANKI
                </h1>
                <p className="text-xs text-gray-600">
                  Part Of Dr. Rajendra Prasad Educational Society
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => handleDesktopEnter(link.name)}
                    onMouseLeave={handleDesktopLeave}
                  >
                    <button className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 flex items-center">
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 pt-2 w-56 z-50">
                        <div className="bg-white rounded-md shadow-lg border border-gray-200 py-2">
                          {link.dropdown.map((item) =>
                            item.external ? (
                              <a
                                key={item.path}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {item.name}
                              </a>
                            ) : (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
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
                )
              )}

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
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="mb-1">
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className="w-full text-left px-4 py-3 text-base font-semibold rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 flex items-center justify-between"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 mt-1">
                        {link.dropdown.map((item) =>
                          item.external ? (
                            <a
                              key={item.path}
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
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
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
