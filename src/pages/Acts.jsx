import { FileText, Download, Scale, BookOpen } from 'lucide-react';

const Acts = () => {
  const documents = [
    {
      id: 1,
      title: 'Statutes',
      description: 'College statutes and regulations governing academic and administrative policies.',
      path: '/ordinance/statutes.pdf',
      icon: BookOpen,
    },
    {
      id: 2,
      title: 'UP State Universities Act',
      description: 'Uttar Pradesh State Universities Act governing higher education institutions in the state.',
      path: '/ordinance/UpStateUniversitiesACT.pdf',
      icon: Scale,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Important Notices & Acts
          </h1>
          <p className="text-xl text-primary-100">
            Official Documents, Regulations, and Legal Framework
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start mb-6">
              <FileText className="text-primary-600 mr-4 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  This section provides access to important statutory documents, acts, and regulations that govern the functioning of City College Barabanki. These documents outline the legal framework, academic policies, and administrative guidelines that ensure quality education and institutional accountability.
                </p>
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {documents.map((doc) => {
              const IconComponent = doc.icon;
              return (
                <div
                  key={doc.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                    <IconComponent className="text-white mb-3" size={40} />
                    <h3 className="text-2xl font-bold text-white">{doc.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{doc.description}</p>

                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 group-hover:shadow-lg"
                    >
                      <Download size={20} className="mr-2" />
                      View / Download PDF
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Information */}
          {/* <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <FileText className="mr-2 text-blue-600" size={24} />
              Important Notes
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>All documents are available in PDF format and can be viewed in your browser or downloaded for offline access.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>These documents are official and legally binding for the institution and its stakeholders.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>For any queries or clarifications regarding these documents, please contact the administration office.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Documents are updated periodically to reflect the latest amendments and regulations.</span>
              </li>
            </ul>
          </div> */}

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Need Assistance?</h3>
            <p className="text-gray-700 mb-4">
              If you require any clarification regarding the statutes, acts, or regulations, please feel free to contact our administration office.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="mailto:citycollegebarabanki@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                Email Us
              </a>
              <a
                href="tel:8400133333"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Call: 8400133333
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acts;
