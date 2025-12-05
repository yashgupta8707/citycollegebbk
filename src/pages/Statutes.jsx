import {
  BookOpen,
  FileText,
  Scale,
  Users,
  GraduationCap,
  Building,
  ClipboardCheck,
  Download
} from 'lucide-react';

const Statutes = () => {
  const documents = [
    {
      title: 'College Act',
      description: 'Fundamental legislation governing the establishment and administration of the college',
      icon: <Scale size={40} />,
      sections: [
        'Establishment and Incorporation',
        'Powers and Functions',
        'Governance Structure',
        'Financial Provisions'
      ]
    },
    {
      title: 'Statutes',
      description: 'Rules and regulations for the management and academic operations',
      icon: <BookOpen size={40} />,
      sections: [
        'Academic Council',
        'Board of Management',
        'Admission Regulations',
        'Examination Rules'
      ]
    },
    {
      title: 'Ordinances',
      description: 'Detailed procedures for academic programs and administrative processes',
      icon: <FileText size={40} />,
      sections: [
        'Course Curriculum',
        'Assessment & Evaluation',
        'Student Conduct',
        'Faculty Regulations'
      ]
    },
    {
      title: 'Regulations',
      description: 'Specific guidelines for various institutional activities',
      icon: <ClipboardCheck size={40} />,
      sections: [
        'Fee Structure',
        'Scholarships & Aid',
        'Attendance Policy',
        'Disciplinary Procedures'
      ]
    }
  ];

  const governanceStructure = [
    {
      title: 'Board of Governors',
      icon: <Users size={32} />,
      description: 'Supreme governing body responsible for overall policy and strategic direction',
      responsibilities: [
        'Approval of academic programs',
        'Financial oversight and budget approval',
        'Appointment of key administrative positions',
        'Strategic planning and institutional development'
      ]
    },
    {
      title: 'Academic Council',
      icon: <GraduationCap size={32} />,
      description: 'Principal academic body for curriculum development and quality assurance',
      responsibilities: [
        'Curriculum design and revision',
        'Academic regulations and standards',
        'Examination and assessment policies',
        'Research and innovation initiatives'
      ]
    },
    {
      title: 'Executive Council',
      icon: <Building size={32} />,
      description: 'Executive body for day-to-day administration and implementation',
      responsibilities: [
        'Implementation of policies',
        'Administrative decisions',
        'Resource allocation',
        'Monitoring institutional activities'
      ]
    }
  ];

  const keyStatutes = [
    {
      category: 'Academic Matters',
      items: [
        { title: 'Admission Policy', description: 'Guidelines for student admissions and eligibility criteria' },
        { title: 'Examination Conduct', description: 'Rules for conduct of examinations and evaluation' },
        { title: 'Academic Calendar', description: 'Schedule of academic activities and holidays' },
        { title: 'Degree Requirements', description: 'Credit requirements and graduation criteria' }
      ]
    },
    {
      category: 'Administrative Matters',
      items: [
        { title: 'Service Rules', description: 'Terms and conditions of service for faculty and staff' },
        { title: 'Financial Management', description: 'Procedures for financial transactions and audits' },
        { title: 'Procurement Policy', description: 'Guidelines for purchase and procurement' },
        { title: 'Infrastructure Development', description: 'Regulations for campus development and maintenance' }
      ]
    },
    {
      category: 'Student Affairs',
      items: [
        { title: 'Code of Conduct', description: 'Expected behavior and disciplinary guidelines for students' },
        { title: 'Grievance Redressal', description: 'Mechanism for addressing student complaints' },
        { title: 'Anti-Ragging Policy', description: 'Strict measures against ragging and harassment' },
        { title: 'Scholarship Rules', description: 'Eligibility and procedures for scholarships' }
      ]
    }
  ];

  const downloadableDocuments = [
    { name: 'City College Act 2020', size: '2.5 MB', year: '2020' },
    { name: 'College Statutes', size: '3.8 MB', year: '2022' },
    { name: 'Academic Ordinances', size: '4.2 MB', year: '2023' },
    { name: 'Service Rules & Regulations', size: '1.9 MB', year: '2023' },
    { name: 'Student Code of Conduct', size: '850 KB', year: '2024' },
    { name: 'Examination Regulations', size: '2.1 MB', year: '2024' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Statutes & Ordinances
            </h1>
            <p className="text-xl md:text-2xl">
              Governing Framework and Regulatory Guidelines
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex items-start mb-6">
                <Scale size={48} className="text-primary-600 mr-6 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    About Statutes & Ordinances
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Statutes and Ordinances of City College Barabanki constitute the legal and regulatory
                    framework that governs all aspects of the institution's functioning. These documents define
                    the powers, responsibilities, and procedures for academic, administrative, and financial matters.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All activities of the college are conducted in accordance with these statutes and ordinances,
                    ensuring transparency, accountability, and adherence to regulatory requirements set by UGC,
                    state government, and other regulatory bodies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Governance Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key documents defining institutional structure and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {documents.map((doc, index) => (
              <div key={index} className="card p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {doc.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {doc.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {doc.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">Key Sections:</h4>
                  <ul className="space-y-2">
                    {doc.sections.map((section, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {section}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Governance Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bodies responsible for institutional governance and decision-making
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {governanceStructure.map((body, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start mb-4">
                  <div className="text-primary-600 mr-4 flex-shrink-0">
                    {body.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {body.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {body.description}
                    </p>
                  </div>
                </div>
                <div className="pl-12">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Responsibilities:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {body.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <ClipboardCheck size={16} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statutes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Key Statutes & Regulations
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {keyStatutes.map((category, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FileText size={28} className="text-primary-600 mr-3" />
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Download Documents
              </h2>
              <p className="text-lg text-gray-600">
                Access official statutes, ordinances, and regulatory documents
              </p>
            </div>

            <div className="card p-8">
              <div className="space-y-4">
                {downloadableDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-all">
                    <div className="flex items-center flex-grow">
                      <FileText size={24} className="text-primary-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {doc.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {doc.size} • Updated {doc.year}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                      <Download size={20} className="mr-2" />
                      Download
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Note:</strong> These documents are provided for informational purposes. For official use,
                  please contact the Administration Office to obtain certified copies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need More Information?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For queries regarding statutes, ordinances, or regulatory matters, please contact our Administration Office
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Administration
            </a>
            <a href="/administration" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Administration
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statutes;
