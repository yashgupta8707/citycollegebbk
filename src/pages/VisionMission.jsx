import {
  Eye,
  Target,
  Lightbulb,
  CheckCircle
} from 'lucide-react';

const VisionMission = () => {
  const visionPoints = [
    {
      title: 'Global Understanding',
      description: 'To provide a clean and simple understanding of the complex, dynamic and rapidly growing situations of national and international environment and to give them a concept of skilful management in different situation of their area of learning.'
    },
    {
      title: 'Knowledge Creation',
      description: 'To create and to cater knowledge and to provide education for the next generation.'
    },
    {
      title: 'Leadership Development',
      description: 'To develop the Leadership qualities, capability to motivate other towards the achievement of the organizational objectives and develop scope.'
    },
    {
      title: 'Critical Thinking',
      description: 'To foster critical thinking, innovation, and research capabilities among students.'
    },
    {
      title: 'Values & Ethics',
      description: 'To promote ethical values, social responsibility, and community engagement.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Lightbulb size={48} className="mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Vision & Mission
              </h1>
            </div>
            <p className="text-xl md:text-2xl">
              Guiding Principles That Shape Our Future
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Eye size={48} className="text-primary-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                Our Vision
              </h2>
            </div>

            <div className="mb-8 text-center">
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                City College Barabanki envisions becoming a leading institution of higher learning that
                empowers students with knowledge, skills, and values to excel in a rapidly changing world.
              </p>
            </div>

            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {point.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Target size={48} className="text-primary-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                Our Mission
              </h2>
            </div>

            <div className="card p-8 md:p-12">
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  City College Barabanki emphasizes the all-round development of its students.
                  It aims at producing not only good professionals and competent graduates, but also
                  good and worthy citizens of a great country, aiding in its overall progress and development.
                </p>

                <p>
                  We endeavour to treat every student as an individual, to recognize their potential
                  and to ensure that they receive the best preparation and training for achieving their
                  career ambitions and life goals.
                </p>

                <div className="bg-primary-50 p-6 rounded-lg mt-8">
                  <h4 className="font-bold text-gray-800 mb-4 text-xl">Core Mission Objectives:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle size={24} className="text-primary-600 mr-3 shrink-0 mt-1" />
                      <p className="flex-1">
                        <strong>Individual Development:</strong> Treating every student as unique and
                        recognizing their individual potential and learning needs.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={24} className="text-primary-600 mr-3 shrink-0 mt-1" />
                      <p className="flex-1">
                        <strong>Professional Excellence:</strong> Providing rigorous academic training
                        and practical skills for career success.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={24} className="text-primary-600 mr-3 shrink-0 mt-1" />
                      <p className="flex-1">
                        <strong>Character Building:</strong> Developing ethical values, integrity,
                        and social responsibility in our students.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={24} className="text-primary-600 mr-3 shrink-0 mt-1" />
                      <p className="flex-1">
                        <strong>National Development:</strong> Contributing to the progress of our
                        nation by producing responsible and capable citizens.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={24} className="text-primary-600 mr-3 shrink-0 mt-1" />
                      <p className="flex-1">
                        <strong>Career Preparation:</strong> Ensuring comprehensive training that
                        aligns with students' career goals and aspirations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Committed to the highest standards in education and training
                </p>
              </div>

              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Building trust through honest and ethical practices
                </p>
              </div>

              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Embracing modern teaching methodologies and technologies
                </p>
              </div>

              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  Creating an environment where every student belongs
                </p>
              </div>

              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Empowerment</h3>
                <p className="text-gray-600">
                  Enabling students to reach their full potential
                </p>
              </div>

              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">
                  Fostering collaboration and social responsibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Our Vision
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in building a future of excellence, innovation, and social impact
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

export default VisionMission;
