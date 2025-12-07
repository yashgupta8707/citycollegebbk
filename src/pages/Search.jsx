import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, FileText, ExternalLink } from 'lucide-react';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Define searchable content
  const searchablePages = [
    { title: 'Home', path: '/', keywords: 'home college city barabanki education excellence' },
    { title: 'About Us', path: '/about', keywords: 'about us history mission vision values established 2020 dr mamta srivastava' },
    { title: "Director's Message", path: '/director-message', keywords: 'director founder message dr mamta srivastava desk' },
    { title: 'Vision & Mission', path: '/vision-mission', keywords: 'vision mission values goals objectives' },
    { title: 'Academic Programs', path: '/courses', keywords: 'programs courses undergraduate bsc agriculture biology mathematics science' },
    { title: 'Academic Calendar', path: '/academic-calendar', keywords: 'calendar semester dates holidays examination' },
    { title: 'Departments', path: '/departments', keywords: 'departments arts science commerce education faculty' },
    { title: 'IQAC', path: '/iqac', keywords: 'iqac quality assurance naac accreditation aqar' },
    { title: 'Statutes & Ordinances', path: '/statutes', keywords: 'statutes ordinances regulations rules policies governance' },
    { title: 'Admissions', path: '/admissions', keywords: 'admissions admission fee structure eligibility apply enrollment' },
    { title: 'Admission Process & Guidelines', path: '/admission-process', keywords: 'admission process guidelines online form entrance examination merit counselling' },
    { title: 'Fee Refund Policy', path: '/fee-refund-policy', keywords: 'fee refund policy payment charges no refund' },
    { title: 'Chancellor', path: '/chancellor', keywords: 'chancellor administration leadership' },
    { title: 'Pro Chancellor', path: '/pro-chancellor', keywords: 'pro chancellor vice administration leadership' },
    { title: 'Registrar', path: '/registrar', keywords: 'registrar administration records documentation' },
    { title: 'Finance Officer', path: '/finance-officer', keywords: 'finance officer accounts budget financial huzaifa afzal' },
    { title: 'Controller of Examination', path: '/controller-examination', keywords: 'controller examination exams results evaluation' },
    { title: 'Chief Vigilance Officer', path: '/chief-vigilance-officer', keywords: 'chief vigilance officer cvo ethics transparency' },
    { title: 'Ombudsperson', path: '/ombudsperson', keywords: 'ombudsperson grievance complaints deshraj' },
    { title: 'Executive Council', path: '/executive-council', keywords: 'executive council leadership meeta srivastava mrityunjay garg' },
    { title: 'Internal Complaint Committee', path: '/internal-complaint-committee', keywords: 'internal complaint committee icc harassment posh women safety' },
    { title: 'Academic Leadership', path: '/academic-leadership', keywords: 'academic leadership deans faculties faculty' },
    { title: 'Facilities', path: '/facilities', keywords: 'facilities library laboratory computer hostel infrastructure' },
    { title: 'Faculty', path: '/faculty', keywords: 'faculty teachers professors staff teaching' },
    { title: 'Research & Development', path: '/research', keywords: 'research development rnd innovation incubation startup' },
    { title: 'Contact Us', path: '/contact', keywords: 'contact us location address phone email' },
  ];

  useEffect(() => {
    if (query.trim()) {
      setIsSearching(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        const searchTerm = query.toLowerCase();
        const filteredResults = searchablePages.filter(page =>
          page.title.toLowerCase().includes(searchTerm) ||
          page.keywords.toLowerCase().includes(searchTerm)
        );
        setResults(filteredResults);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Search Results
            </h1>
            {query && (
              <p className="text-xl md:text-2xl">
                Showing results for "{query}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!query ? (
              <div className="text-center py-12">
                <SearchIcon size={64} className="text-gray-300 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Start Your Search
                </h2>
                <p className="text-gray-600">
                  Enter a search term to find pages, programs, and information
                </p>
              </div>
            ) : isSearching ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
                <p className="text-gray-600 mt-4">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-600">
                    Found <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      to={result.path}
                      className="block card p-6 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="grow">
                          <div className="flex items-center mb-2">
                            <FileText size={20} className="text-primary-600 mr-2" />
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition">
                              {result.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {result.path}
                          </p>
                          <p className="text-gray-700">
                            {result.keywords.split(' ').slice(0, 15).join(' ')}...
                          </p>
                        </div>
                        <ExternalLink size={20} className="text-gray-400 group-hover:text-primary-600 transition shrink-0 ml-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <SearchIcon size={64} className="text-gray-300 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  No Results Found
                </h2>
                <p className="text-gray-600 mb-6">
                  We couldn't find any pages matching "{query}"
                </p>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <p className="text-sm text-gray-700">Try:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Using different keywords</li>
                    <li>Checking your spelling</li>
                    <li>Using more general terms</li>
                    <li>Browsing our main sections instead</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Quick Links */}
            {(!query || results.length === 0) && (
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Quick Links
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/courses" className="card p-4 text-center hover:shadow-lg transition">
                    <p className="font-semibold text-gray-800">Programs</p>
                  </Link>
                  <Link to="/admissions" className="card p-4 text-center hover:shadow-lg transition">
                    <p className="font-semibold text-gray-800">Admissions</p>
                  </Link>
                  <Link to="/faculty" className="card p-4 text-center hover:shadow-lg transition">
                    <p className="font-semibold text-gray-800">Faculty</p>
                  </Link>
                  <Link to="/facilities" className="card p-4 text-center hover:shadow-lg transition">
                    <p className="font-semibold text-gray-800">Facilities</p>
                  </Link>
                  <Link to="/research" className="card p-4 text-center hover:shadow-lg transition">
                    <p className="font-semibold text-gray-800">Research</p>
                  </Link>
                  <Link to="/contact" className="card p-4 text-center hover:shadow-lg transition">
                    <p className="font-semibold text-gray-800">Contact</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
