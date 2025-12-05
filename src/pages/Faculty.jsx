import { GraduationCap, Mail, Phone, Award, BookOpen } from 'lucide-react';

const Faculty = () => {
  // Sample faculty data - replace with actual data
  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Principal & Head of Department',
      qualification: 'Ph.D. in Education, M.Ed., B.Ed.',
      specialization: 'Educational Psychology',
      experience: '20+ Years',
      email: 'principal@citycollegebbk.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
    },
    {
      name: 'Prof. Sunita Sharma',
      designation: 'Senior Lecturer',
      qualification: 'M.Ed., B.Ed., M.A. (Education)',
      specialization: 'Pedagogy & Teaching Methods',
      experience: '15+ Years',
      email: 'sunita.sharma@citycollegebbk.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
    },
    {
      name: 'Dr. Amit Verma',
      designation: 'Assistant Professor',
      qualification: 'Ph.D. in Child Psychology, M.Ed.',
      specialization: 'Child Development',
      experience: '12+ Years',
      email: 'amit.verma@citycollegebbk.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      name: 'Mrs. Priya Singh',
      designation: 'Lecturer',
      qualification: 'M.Ed., B.Ed., M.A. (Hindi)',
      specialization: 'Language Pedagogy',
      experience: '10+ Years',
      email: 'priya.singh@citycollegebbk.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    },
    {
      name: 'Prof. Ramesh Gupta',
      designation: 'Senior Lecturer',
      qualification: 'M.Ed., B.Ed., M.Sc. (Mathematics)',
      specialization: 'Mathematics Education',
      experience: '18+ Years',
      email: 'ramesh.gupta@citycollegebbk.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
    },
    {
      name: 'Dr. Neha Agarwal',
      designation: 'Assistant Professor',
      qualification: 'Ph.D. in Science Education, M.Ed.',
      specialization: 'Science & Environmental Studies',
      experience: '8+ Years',
      email: 'neha.agarwal@citycollegebbk.com',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400'
    }
  ];

  const departments = [
    {
      title: 'Pedagogy Department',
      description: 'Focuses on teaching methods, curriculum design, and instructional strategies'
    },
    {
      title: 'Psychology Department',
      description: 'Covers child psychology, learning theories, and educational psychology'
    },
    {
      title: 'Subject Specialization',
      description: 'Expert faculty for Mathematics, Science, Social Science, and Languages'
    },
    {
      title: 'Practice Teaching',
      description: 'Experienced mentors guiding practical teaching sessions and internships'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <GraduationCap size={48} className="mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Our Faculty</h1>
            </div>
            <p className="text-xl md:text-2xl">
              Learn from Experienced and Dedicated Educators
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Excellence in Teaching
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our faculty members are highly qualified, experienced professionals who are passionate 
              about teacher education. They bring years of practical teaching experience, academic 
              excellence, and a commitment to nurturing the next generation of educators. Each faculty 
              member is dedicated to providing personalized attention and mentorship to help students 
              achieve their full potential.
            </p>
          </div>

          {/* Departments */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6 text-center">
                <BookOpen size={32} className="text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{dept.title}</h3>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div key={index} className="card overflow-hidden hover:transform hover:scale-105">
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-200 text-sm">{member.designation}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-start mb-2">
                      <Award size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Qualification</p>
                        <p className="text-sm text-gray-600">{member.qualification}</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-2">
                      <BookOpen size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Specialization</p>
                        <p className="text-sm text-gray-600">{member.specialization}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <GraduationCap size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Experience</p>
                        <p className="text-sm text-gray-600">{member.experience}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center text-sm text-primary-600 hover:text-primary-700"
                    >
                      <Mail size={16} className="mr-2" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Qualifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Faculty Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Credentials</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Ph.D. holders in Education and related fields</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">M.Ed. and B.Ed. qualified professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Subject matter experts in their domains</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Regular participation in faculty development programs</span>
                  </li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Teaching Excellence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Extensive practical teaching experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Modern pedagogical approaches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Student-centered teaching methods</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Continuous professional development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Development */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Professional Development
            </h2>
            <div className="card p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Our faculty members are committed to continuous learning and professional growth. 
                They regularly attend workshops, seminars, and conferences to stay updated with the 
                latest developments in teacher education and pedagogical practices.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary-600 mb-2">20+</p>
                  <p className="text-gray-700 font-medium">Workshops Annually</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary-600 mb-2">15+</p>
                  <p className="text-gray-700 font-medium">Years Avg. Experience</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary-600 mb-2">100%</p>
                  <p className="text-gray-700 font-medium">Qualified Faculty</p>
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
            Learn from the Best
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join City College Barabanki and experience quality education from experienced faculty
          </p>
          <a 
            href="/contact" 
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Faculty;