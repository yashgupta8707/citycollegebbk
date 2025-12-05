import {
  MapPin,
  Target,
  Eye,
  Award,
  CheckCircle,
  Users,
  BookOpen,
  GraduationCap,
  Building2,
  Microscope,
  Globe,
  Heart,
  Shield
} from 'lucide-react';

const About = () => {
  const visionPoints = [
    'To provide a clean and simple understanding of the complex, dynamic and rapidly growing situations of national and international environment and to give them a concept of skilful management in different situation of their area of learning.',
    'To create and to cater knowledge and to provide education for the next generation.',
    'To develop the Leadership qualities, capability to motivate other towards the achievement of the organizational objectives and develop scope.',
    'To foster critical thinking, innovation, and research capabilities among students.',
    'To promote ethical values, social responsibility, and community engagement.'
  ];

  const programs = [
    {
      name: 'B.Sc Agriculture',
      duration: '4 Years',
      icon: <BookOpen size={24} />
    },
    {
      name: 'B.Sc (Biology)',
      duration: '3 Years',
      icon: <Microscope size={24} />
    },
    {
      name: 'B.Sc (Mathematics)',
      duration: '3 Years',
      icon: <GraduationCap size={24} />
    }
  ];

  const keyFeatures = [
    {
      icon: <Award size={32} />,
      title: 'UGC Recognized',
      description: 'Approved by University Grants Commission'
    },
    {
      icon: <Users size={32} />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Modern Infrastructure',
      description: 'Well-equipped labs and facilities'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Rich Library',
      description: 'Extensive collection of books and journals'
    },
    {
      icon: <Microscope size={32} />,
      title: 'Research Facilities',
      description: 'Advanced laboratories for practical learning'
    },
    {
      icon: <Globe size={32} />,
      title: 'Industry Exposure',
      description: 'Regular workshops and seminars'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Career Guidance',
      description: 'Placement support and counseling'
    },
    {
      icon: <Heart size={32} />,
      title: 'Student Welfare',
      description: 'Supportive learning environment'
    }
  ];

  const parentsTrust = [
    'Safe and secure campus environment with dedicated security measures',
    'Individual attention to each student for holistic development',
    'Regular parent-teacher meetings and communication',
    'Focus on discipline, values, and character building',
    'Transparent administration and academic processes'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About City College Barabanki
            </h1>
            <p className="text-xl md:text-2xl">
              Excellence in Higher Education Since 2020
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <MapPin size={40} className="text-primary-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h2>
            </div>

            <div className="card p-8">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                City College is an institution of higher learning located in Barabanki, Uttar Pradesh.
                Established in 2020 under the visionary leadership of <strong>Dr. Mamta Srivastava</strong>,
                the college has rapidly emerged as a center of academic excellence in the region.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Our institution is dedicated to providing quality education and fostering holistic
                development of students. We believe in nurturing not just academic excellence but
                also character, values, and practical skills that prepare our students for successful
                careers and meaningful lives.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                With state-of-the-art facilities, experienced faculty, and a student-centric approach,
                City College Barabanki is committed to shaping the future leaders and professionals
                of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <Target size={40} className="text-primary-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  City College Barabanki emphasizes the all-round development of its students.
                  It aims at producing not only good professionals and competent graduates, but also
                  good and worthy citizens of a great country, aiding in its overall progress and development.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We endeavour to treat every student as an individual, to recognize their potential
                  and to ensure that they receive the best preparation and training for achieving their
                  career ambitions and life goals.
                </p>
                <div className="bg-primary-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">Core Focus Areas:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-primary-600 mr-3 mt-1 shrink-0" />
                      <span className="text-gray-700">Individual student development and personalized attention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-primary-600 mr-3 mt-1 shrink-0" />
                      <span className="text-gray-700">Professional excellence and academic rigor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-primary-600 mr-3 mt-1 shrink-0" />
                      <span className="text-gray-700">Social responsibility and ethical values</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-primary-600 mr-3 mt-1 shrink-0" />
                      <span className="text-gray-700">Career readiness and practical skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <Eye size={40} className="text-primary-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <div className="space-y-6">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 shrink-0 font-bold mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg flex-1">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Affiliation
            </h2>
            <div className="card p-8 text-center">
              <Award size={64} className="text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Dr. Ram Manohar Lohia Avadh University
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
                City College Barabanki is proudly affiliated with Dr. Ram Manohar Lohia Avadh University,
                Ayodhya. This affiliation ensures that our programs meet the highest standards of academic
                excellence and are recognized by leading institutions and employers across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Programs Offered
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-primary-600 flex justify-center mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
                  <p className="text-primary-600 font-semibold">{program.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Key Features
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Trust Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Shield size={40} className="text-primary-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                Why Parents Trust Us
              </h2>
            </div>
            <div className="card p-8">
              <div className="space-y-4">
                {parentsTrust.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-green-600 mr-4 shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed text-lg flex-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Legacy of Excellence
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a community dedicated to shaping the future through quality education
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
