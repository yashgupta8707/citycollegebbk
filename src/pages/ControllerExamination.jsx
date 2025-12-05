import { GraduationCap, Mail, Phone } from 'lucide-react';

const ControllerExamination = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Controller of Examination
            </h1>
            <p className="text-xl md:text-2xl">
              Office of the Controller of Examination - City College Barabanki
            </p>
          </div>
        </div>
      </section>

      {/* Controller of Examination Profile Section */}
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
                    [Controller Name]
                  </h2>
                  <p className="text-xl text-primary-600 mb-6">
                    Controller of Examination, City College Barabanki
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Mail size={20} className="mr-3 text-primary-600" />
                      <a href="mailto:examination@citycollegebarabanki.edu" className="hover:text-primary-600">
                        examination@citycollegebarabanki.edu
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Controller of Examination</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Controller of Examination is responsible for the overall management and administration
                  of all examination-related activities at City College Barabanki. This office ensures the
                  smooth conduct of examinations while maintaining academic integrity, fairness, and
                  transparency in the evaluation process.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Working in coordination with faculty and university authorities, the Controller of
                  Examination ensures timely completion of examination processes and maintains the highest
                  standards of confidentiality and accuracy in result compilation and publication.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Responsibilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Planning, organizing, and conducting all examinations
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ensuring fair and transparent evaluation processes
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Managing result compilation, verification, and publication
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maintaining confidentiality and security of examination materials
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Coordinating with university examination boards and regulatory bodies
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Handling examination-related grievances and appeals
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

export default ControllerExamination;
