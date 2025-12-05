import { GraduationCap, Mail, Phone } from 'lucide-react';

const FinanceOfficer = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Finance Officer
            </h1>
            <p className="text-xl md:text-2xl">
              Office of the Finance Officer - City College Barabanki
            </p>
          </div>
        </div>
      </section>

      {/* Finance Officer Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-48 h-48 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center">
                    <GraduationCap size={80} className="text-gray-400" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Mr. Huzaifa Afzal
                  </h2>
                  <p className="text-xl text-primary-600 mb-6">
                    Finance & Compliance Officer, City College Barabanki
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Mail size={20} className="mr-3 text-primary-600" />
                      <a href="mailto:finance@citycollegebarabanki.edu" className="hover:text-primary-600">
                        finance@citycollegebarabanki.edu
                      </a>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone size={20} className="mr-3 text-primary-600" />
                      <a href="tel:+918400133333" className="hover:text-primary-600">
                        +91 8400133333
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Finance Officer</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mr. Huzaifa Afzal is responsible for managing the financial operations of the college,
                  including budgeting, audits, financial planning, and regulatory compliance. His commitment
                  to transparency and systematic financial management supports the long-term stability and
                  growth of the institution.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With expertise in financial administration and compliance, the Finance Officer ensures
                  that all financial transactions are conducted with integrity and in accordance with
                  institutional policies and government regulations.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Responsibilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Managing the financial operations of the college including budgeting and audits
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Overseeing financial planning and resource allocation
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ensuring regulatory compliance and financial transparency
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maintaining accurate financial records and reporting
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Coordinating with external auditors and financial authorities
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Supporting the long-term financial stability and growth of the institution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceOfficer;
