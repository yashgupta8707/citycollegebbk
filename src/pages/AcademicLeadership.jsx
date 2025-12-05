import { GraduationCap, Users, BookOpen, Award } from 'lucide-react';

const AcademicLeadership = () => {
  const deans = [
    {
      name: '[Dean Name]',
      faculty: 'Faculty of Arts',
      email: 'deanarts@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      description: 'Leading academic programs in humanities and social sciences'
    },
    {
      name: '[Dean Name]',
      faculty: 'Faculty of Science',
      email: 'deanscience@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      description: 'Overseeing scientific research and innovation programs'
    },
    {
      name: '[Dean Name]',
      faculty: 'Faculty of Commerce',
      email: 'deancommerce@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      description: 'Managing business and commerce education initiatives'
    },
    {
      name: '[Dean Name]',
      faculty: 'Faculty of Education',
      email: 'deaneducation@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      description: 'Advancing teacher education and pedagogical research'
    }
  ];

  const responsibilities = [
    {
      icon: <BookOpen size={32} />,
      title: 'Curriculum Development',
      description: 'Design and update academic programs to meet evolving industry and research standards'
    },
    {
      icon: <Users size={32} />,
      title: 'Faculty Coordination',
      description: 'Lead faculty recruitment, development, and performance evaluation processes'
    },
    {
      icon: <Award size={32} />,
      title: 'Academic Standards',
      description: 'Ensure high-quality teaching, learning, and assessment practices across departments'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Student Success',
      description: 'Monitor student progress and implement strategies for academic excellence'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Academic Leadership
            </h1>
            <p className="text-xl md:text-2xl">
              Deans of Faculties - City College Barabanki
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Academic Leadership Team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Deans of Faculties at City College Barabanki provide strategic academic leadership,
              ensuring excellence in teaching, research, and student development across all disciplines.
              They work closely with department heads, faculty members, and administrative staff to
              maintain the highest standards of academic quality and institutional integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Deans Profiles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Deans of Faculties
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {deans.map((dean, index) => (
                <div key={index} className="card p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <GraduationCap size={40} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {dean.name}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-3">
                        {dean.faculty}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {dean.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-700">
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${dean.email}`} className="text-primary-600 hover:text-primary-700">
                        {dean.email}
                      </a>
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Phone:</strong>{' '}
                      <a href={`tel:${dean.phone}`} className="text-primary-600 hover:text-primary-700">
                        {dean.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Key Responsibilities
              </h2>
              <p className="text-lg text-gray-600">
                The Deans work collaboratively to ensure academic excellence and institutional growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {responsibilities.map((resp, index) => (
                <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-primary-600 flex justify-center mb-4">
                    {resp.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {resp.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {resp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Comprehensive Academic Leadership
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategic Planning</h3>
                  <p className="text-gray-700">
                    The Deans collaborate with the Principal and Academic Council to develop strategic plans
                    for academic programs, research initiatives, and institutional development.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
                  <p className="text-gray-700">
                    Working closely with IQAC, the Deans ensure that all academic activities meet regulatory
                    requirements and maintain high standards of quality and excellence.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Research & Innovation</h3>
                  <p className="text-gray-700">
                    The Deans promote research culture, facilitate faculty research projects, and encourage
                    interdisciplinary collaboration to drive innovation and academic excellence.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Student Engagement</h3>
                  <p className="text-gray-700">
                    They actively engage with students, address academic concerns, and implement initiatives
                    to enhance student learning experiences and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect with Academic Leadership
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For academic inquiries, program information, or faculty matters, please contact the respective Dean's office
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </a>
            <a href="/faculty" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Faculty
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicLeadership;
