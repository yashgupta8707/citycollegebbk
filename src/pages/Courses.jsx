import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Clock, 
  BookOpen, 
  CheckCircle,
  Users,
  Calendar,
  Award,
  FileText
} from 'lucide-react';

const Courses = () => {
  const courseHighlights = [
    'NCTE Approved Course',
    'Two Year Duration',
    'Practical Training Included',
    'Experienced Faculty',
    'Regular Assessments',
    'Industry Exposure',
    'Placement Assistance',
    'State Government Affiliated'
  ];

  const curriculum = [
    {
      semester: 'First Year',
      subjects: [
        'Childhood and Growing Up',
        'Contemporary Indian Society',
        'Education in Contemporary India',
        'Learning and Teaching',
        'Language across the Curriculum',
        'Understanding Disciplines and Subjects',
        'Pedagogy of Environmental Studies',
        'Pedagogy of Hindi/English'
      ]
    },
    {
      semester: 'Second Year',
      subjects: [
        'Knowledge and Curriculum',
        'Assessment for Learning',
        'Creating an Inclusive School',
        'Gender, School and Society',
        'Pedagogy of Mathematics',
        'Pedagogy of Science',
        'Pedagogy of Social Science',
        'Practice Teaching and School Internship'
      ]
    }
  ];

  const eligibility = [
    'Graduation in any discipline',
    'Minimum 50% marks in graduation (45% for reserved categories)',
    'Age limit as per state government norms',
    'Valid entrance test score (if applicable)'
  ];

  const careerOptions = [
    'Primary School Teacher',
    'Elementary School Teacher',
    'Educational Consultant',
    'Curriculum Designer',
    'Educational Content Writer',
    'Private Tutor',
    'NGO Education Officer',
    'Government School Teacher (through TET)'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <GraduationCap size={48} className="mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Our Courses</h1>
            </div>
            <p className="text-xl md:text-2xl">
              Quality Teacher Education Programs for Aspiring Educators
            </p>
          </div>
        </div>
      </section>

      {/* Main Course Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    D.El.Ed / BTC
                  </h2>
                  <p className="text-xl text-gray-600">
                    Diploma in Elementary Education / Basic Training Certificate
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link to="/contact" className="btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                  <Clock size={24} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Duration</h4>
                    <p className="text-gray-600">2 Years (4 Semesters)</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                  <Users size={24} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Eligibility</h4>
                    <p className="text-gray-600">Graduation in any discipline</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                  <Award size={24} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Recognition</h4>
                    <p className="text-gray-600">NCTE Approved</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The D.El.Ed (Diploma in Elementary Education), formerly known as BTC (Basic Training 
                  Certificate), is a professional teacher training course designed to prepare candidates 
                  for elementary level teaching (Classes I to VIII). This comprehensive two-year program 
                  combines theoretical knowledge with practical teaching experience to develop skilled 
                  and confident educators.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Currently, the college has well-equipped labs for D.El.Ed / BTC courses. Students are 
                  encouraged to undertake practice tutorials to gain proficiency and precision in drawing 
                  inferences. The course curriculum is designed to meet the evolving needs of the education 
                  sector and prepare teachers who can create engaging and effective learning environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Course Highlights
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {courseHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                <CheckCircle size={24} className="text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Curriculum Structure
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-6">
                  <BookOpen size={32} className="text-primary-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">{year.semester}</h3>
                </div>
                <ul className="space-y-3">
                  {year.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-primary-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> The curriculum includes both theoretical and practical components. 
              Students will undergo extensive practice teaching sessions and a mandatory school internship 
              program to gain hands-on experience in real classroom settings.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Eligibility Criteria
            </h2>
            <div className="card p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {eligibility.map((criteria, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{criteria}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  <strong>Important:</strong> Eligibility criteria may vary based on state government 
                  regulations. Please contact our admission office for the most current requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Career Opportunities
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {careerOptions.map((career, index) => (
                <div key={index} className="card p-6 hover:transform hover:scale-105">
                  <div className="flex items-start">
                    <Award size={24} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{career}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                After completing D.El.Ed/BTC, graduates are eligible to apply for the Teacher Eligibility 
                Test (TET) conducted by the state government. Clearing TET opens doors to permanent teaching 
                positions in government schools across the state.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our placement cell actively assists students in finding suitable teaching positions in 
                both government and private educational institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Admission Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">1</div>
                <FileText size={32} className="mx-auto mb-3" />
                <p className="font-semibold">Fill Application</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">2</div>
                <Users size={32} className="mx-auto mb-3" />
                <p className="font-semibold">Document Verification</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">3</div>
                <CheckCircle size={32} className="mx-auto mb-3" />
                <p className="font-semibold">Admission Confirmation</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">4</div>
                <Calendar size={32} className="mx-auto mb-3" />
                <p className="font-semibold">Join Classes</p>
              </div>
            </div>
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;