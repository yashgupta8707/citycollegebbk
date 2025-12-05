import { 
  History, 
  Target, 
  Eye, 
  Award,
  CheckCircle,
  Users,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards in education and training'
    },
    {
      icon: <Users size={32} />,
      title: 'Integrity',
      description: 'Building trust through honest and ethical practices in all our endeavors'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Innovation',
      description: 'Embracing modern teaching methodologies and educational technologies'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Growth',
      description: 'Fostering continuous personal and professional development for all'
    }
  ];

  const achievements = [
    '20+ Years of Educational Excellence',
    'NCTE Recognized Institution',
    'State Government Affiliated',
    'Experienced and Qualified Faculty',
    'Modern Infrastructure',
    '500+ Successful Alumni',
    '100% Practical Training',
    'Strong Industry Connections'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About City College Barabanki
            </h1>
            <p className="text-xl md:text-2xl">
              Building Excellence in Teacher Education Since 2000
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <History size={40} className="text-primary-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our History</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="card p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Date of Establishment</h3>
                  <p className="text-3xl font-bold text-primary-600 mb-2">31st May 2000</p>
                  <p className="text-gray-700 leading-relaxed">
                    City College Barabanki was established on 31st May 2000 under the aegis of 
                    Dr. Rajendra Prasad Educational Society with a vision to contribute to the 
                    field of teacher education in Uttar Pradesh.
                  </p>
                </div>
              </div>
              <div>
                <div className="card p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Our Foundation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dr. Rajendra Prasad Educational Society was established in the year 2000. 
                    We registered our society in the year 2000 to give education for D.El.Ed / 
                    BTC course and other professional courses.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The society has been instrumental in shaping the careers of hundreds of 
                    aspiring teachers over the past two decades.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Philosophy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Literacy and Education are strong indicators of development in a society. It is an 
                  established fact that the quality of education is influenced by the quality of teachers, 
                  their commitment and motivation for the teaching profession, their understanding about 
                  children's learning, social expectations, classrooms practices and pedagogical alternatives.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Therefore, training of teachers becomes an important component in improving the quality 
                  of education. This understanding forms the core of our educational philosophy and guides 
                  every aspect of our institution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Target size={40} className="text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    City College Barabanki emphasizes the all-round development of its students. 
                    It aims at producing not only good professionals, teachers, but also good and 
                    worthy citizens of a great country, aiding in its overall progress and development.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    It endeavours to treat every student as an individual, to recognize their potential 
                    and to ensure that they receive the best preparation and training for achieving their 
                    career ambitions and life goals.
                  </p>
                  <div className="bg-primary-50 p-4 rounded-lg mt-6">
                    <h4 className="font-bold text-gray-800 mb-2">Core Focus Areas:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Individual student development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Professional excellence</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Social responsibility</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Career readiness</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Eye size={40} className="text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    To provide a clean and simple understanding of the complex, dynamic and rapidly 
                    growing situations of national and international environment and to give them a 
                    concept of skilful management in different situation of their area of learning.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    To create and to cater knowledge and to provide education for the next generation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    To develop the Leadership qualities, capability to motivate other towards the 
                    achievement of the organizational objectives and develop scope.
                  </p>
                  <div className="bg-primary-50 p-4 rounded-lg mt-6">
                    <h4 className="font-bold text-gray-800 mb-2">Vision Pillars:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Knowledge creation and dissemination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Leadership development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Global perspective</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Skill management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="card p-6 text-center hover:transform hover:scale-105"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Achievements
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card p-6 flex items-center hover:transform hover:scale-105">
                <CheckCircle size={24} className="text-green-600 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Why Choose City College Barabanki?
            </h2>
            <div className="card p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Excellence</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our rigorous curriculum, experienced faculty, and modern teaching methods ensure 
                    that our students receive the best possible education in teacher training.
                  </p>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Practical Focus</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We emphasize hands-on learning through practice teaching sessions, workshops, and 
                    real classroom experiences to prepare students for actual teaching scenarios.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Holistic Development</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Beyond academics, we focus on personality development, communication skills, and 
                    leadership qualities to create well-rounded educators.
                  </p>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Career Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our placement cell and alumni network provide continuous support to help our 
                    graduates launch successful teaching careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Legacy of Excellence
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a community dedicated to shaping the future of education
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