import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Clock,
  BookOpen,
  CheckCircle,
  Users,
  Download,
  Award,
  Microscope,
  Leaf,
  Calculator
} from 'lucide-react';

const Courses = () => {
  const programs = [
    {
      title: 'Bachelor of Science in Agriculture (B.Sc. Agriculture)',
      duration: '4 Years',
      description: 'Professional degree program focused on agricultural sciences, modern farming techniques, and rural development',
      icon: <Leaf size={48} className="text-green-600" />,
      subjects: [
        'Agronomy',
        'Soil Science',
        'Plant Pathology',
        'Agricultural Economics',
        'Horticulture',
        'Animal Husbandry',
        'Agricultural Engineering',
        'Crop Production',
        'Plant Breeding',
        'Agricultural Extension'
      ],
      eligibility: 'Passed 10+2 or equivalent examination with Science subjects (Physics, Chemistry, Biology/Agriculture)',
      careerOptions: [
        'Agricultural Officer',
        'Farm Manager',
        'Agricultural Consultant',
        'Soil Scientist',
        'Horticulturist',
        'Research & Development',
        'Banking (Agricultural Sector)',
        'Agribusiness Management',
        'Food Processing Industry',
        'Government Agricultural Services'
      ],
      highlights: [
        'Practical farm training',
        'Modern agricultural techniques',
        'Government job opportunities',
        'Entrepreneurship opportunities',
        'Rural development focus',
        'Industry exposure'
      ],
      calendarPdf: '/bsc-ag.pdf'
    },
    {
      title: 'Bachelor of Science (B.Sc.) - Biology',
      duration: '3 Years',
      description: 'Comprehensive undergraduate program in biological sciences with specialization in Botany, Zoology, and Chemistry',
      icon: <Microscope size={48} className="text-primary-600" />,
      subjects: [
        'Botany',
        'Zoology',
        'Chemistry',
        'Biochemistry',
        'Microbiology',
        'Genetics',
        'Ecology',
        'Molecular Biology'
      ],
      eligibility: 'Passed 10+2 or equivalent examination with Science subjects (Physics, Chemistry, Biology)',
      careerOptions: [
        'Research Scientist',
        'Laboratory Technician',
        'Quality Control Analyst',
        'Environmental Consultant',
        'Biotechnology Professional',
        'Healthcare & Pharmaceuticals',
        'Teaching & Academia',
        'Higher Studies (M.Sc., Ph.D.)',
        'Wildlife Conservation',
        'Forensic Science'
      ],
      highlights: [
        'Well-equipped laboratories',
        'Experienced faculty',
        'Research opportunities',
        'Industry exposure',
        'Hands-on practical training',
        'Career guidance'
      ],
      calendarPdf: '/bsc.pdf'
    },
    {
      title: 'Bachelor of Science (B.Sc.) - Mathematics',
      duration: '3 Years',
      description: 'Rigorous program in mathematics with focus on analytical thinking, problem-solving, and computational skills',
      icon: <Calculator size={48} className="text-blue-600" />,
      subjects: [
        'Algebra',
        'Calculus',
        'Real Analysis',
        'Linear Algebra',
        'Differential Equations',
        'Numerical Methods',
        'Statistics',
        'Computer Programming',
        'Mathematical Modeling',
        'Discrete Mathematics'
      ],
      eligibility: 'Passed 10+2 or equivalent examination with Science subjects (Physics, Chemistry, Mathematics)',
      careerOptions: [
        'Data Analyst',
        'Statistician',
        'Actuary',
        'Operations Research Analyst',
        'Teaching & Academia',
        'Banking & Finance',
        'Software Development',
        'Research & Development',
        'Higher Studies (M.Sc., Ph.D.)',
        'Government Services'
      ],
      highlights: [
        'Strong mathematical foundation',
        'Computational skills development',
        'Problem-solving focus',
        'Industry-relevant curriculum',
        'Career versatility',
        'Research opportunities'
      ],
      calendarPdf: '/bsc-math.pdf'
    }
  ];

  const whyChooseUs = [
    {
      icon: <BookOpen size={32} />,
      title: 'UGC Approved',
      description: 'Programs recognized by UGC and affiliated with Dr. Ram Manohar Lohia Avadh University'
    },
    {
      icon: <Users size={32} />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced faculty members with industry expertise'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Infrastructure',
      description: 'Modern laboratories, library, and facilities for comprehensive learning'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Placement Support',
      description: 'Career guidance and placement assistance for better opportunities'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <GraduationCap size={48} className="mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Our Programs</h1>
            </div>
            <p className="text-xl md:text-2xl mb-6">
              Quality Education in Science, Agriculture & Mathematics
            </p>
            <Link to="/admissions" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Undergraduate Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              City College Barabanki offers three comprehensive undergraduate programs designed to prepare students for successful careers in their chosen fields
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div key={index} className="card p-8 md:p-10 hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-[120px_1fr] gap-6 mb-8">
                  <div className="flex justify-center md:justify-start">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {program.title}
                    </h3>
                    <div className="flex items-center text-primary-600 mb-4">
                      <Clock size={18} className="mr-2" />
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Core Subjects</h4>
                  <div className="flex flex-wrap gap-3">
                    {program.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Eligibility Criteria</h4>
                  <p className="text-gray-700">{program.eligibility}</p>
                </div>

                {/* Career Options */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Career Opportunities</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {program.careerOptions.map((career, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle size={20} className="text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Highlights */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Program Highlights</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-primary-50 rounded-lg">
                        <CheckCircle size={18} className="text-primary-600 mr-2 shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Calendar Download */}
                <div className="pt-6 border-t border-gray-200">
                  <a
                    href={program.calendarPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Download size={20} className="mr-2" />
                    Download Academic Calendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose City College Barabanki?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-primary-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12 bg-linear-to-r from-primary-50 to-blue-50">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Admission Process
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Check Eligibility</h4>
                    <p className="text-gray-700 text-sm">Ensure you meet the eligibility criteria for your chosen program</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Submit Application</h4>
                    <p className="text-gray-700 text-sm">Fill out the admission form with required documents</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Document Verification</h4>
                    <p className="text-gray-700 text-sm">Attend document verification at the college office</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fee Payment</h4>
                    <p className="text-gray-700 text-sm">Pay the admission fee to confirm your seat</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/admissions"
                  className="inline-block bg-primary-600 text-white hover:bg-primary-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Detailed Admission Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Join City College Barabanki and build a successful career in Science, Agriculture, or Mathematics
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply Now
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
