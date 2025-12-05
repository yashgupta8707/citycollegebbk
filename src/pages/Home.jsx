import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Library,
  Laptop,
  Building2,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import EnquiryForm from '../components/EnquiryForm';

const Home = () => {
  const heroSlides = [
    {
      image: '/hero1.jpg',
      title: 'Welcome to City College Barabanki',
      subtitle: 'Empowering Future Teachers Through Quality Education',
      description: 'Affiliated with Dr. Rajendra Prasad Educational Society, offering D.El.Ed/BTC courses with modern facilities and experienced faculty.',
      buttons: (
        <>
          <Link to="/courses" className="btn-primary inline-flex items-center">
            Explore Courses
            <ChevronRight size={20} className="ml-2" />
          </Link>
          <Link to="/contact" className="btn-secondary bg-white hover:bg-gray-100">
            Contact Us
          </Link>
        </>
      )
    },
    {
      image: '/hero2.jpg',
      title: 'Shape Young Minds, Build the Future',
      subtitle: 'Professional Teacher Training Programs',
      description: 'Join our D.El.Ed and BTC programs designed to prepare you for a rewarding career in education.',
      buttons: (
        <>
          <Link to="/courses" className="btn-primary inline-flex items-center">
            View Programs
            <ChevronRight size={20} className="ml-2" />
          </Link>
          <Link to="/facilities" className="btn-secondary bg-white hover:bg-gray-100">
            Our Facilities
          </Link>
        </>
      )
    },
    {
      image: '/hero3.jpg',
      title: 'Excellence in Teacher Education',
      subtitle: '20+ Years of Educational Excellence',
      description: 'NCTE recognized institution with experienced faculty, modern infrastructure, and 100% placement assistance.',
      buttons: (
        <>
          <Link to="/about" className="btn-primary inline-flex items-center">
            About Us
            <ChevronRight size={20} className="ml-2" />
          </Link>
          <Link to="/faculty" className="btn-secondary bg-white hover:bg-gray-100">
            Meet Our Faculty
          </Link>
        </>
      )
    }
  ];

  const stats = [
    { icon: <GraduationCap size={32} />, number: '500+', label: 'Students' },
    { icon: <Users size={32} />, number: '25+', label: 'Faculty Members' },
    { icon: <BookOpen size={32} />, number: '20+', label: 'Years Experience' },
    { icon: <Award size={32} />, number: '100%', label: 'Success Rate' },
  ];

  const features = [
    {
      icon: <Library size={40} />,
      title: 'Modern Library',
      description: 'Well-stocked library with over 1,000 books, journals, and digital resources'
    },
    {
      icon: <Laptop size={40} />,
      title: 'Computer Lab',
      description: 'State-of-the-art computer facilities with internet connectivity'
    },
    {
      icon: <Building2 size={40} />,
      title: 'Hostel Facility',
      description: 'Comfortable accommodation for outstation students'
    },
    {
      icon: <Award size={40} />,
      title: 'Experienced Faculty',
      description: 'Qualified and dedicated teachers with years of expertise'
    }
  ];

  const highlights = [
    'Recognized by NCTE (National Council for Teacher Education)',
    'Affiliated with State Government',
    'Well-equipped laboratories for practical training',
    'Regular workshops and seminars',
    'Placement assistance for graduates',
    'Student-centric learning environment'
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Enquiry Form - Mobile/Tablet Only */}
      <section className="lg:hidden py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Building Tomorrow's Educators
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Literacy and Education are strong indicators of development in a society. It is an 
                established fact that the quality of education is influenced by the quality of teachers, 
                their commitment and motivation for the teaching profession, their understanding about 
                children's learning, social expectations, classrooms practices and pedagogical alternatives.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dr. Rajendra Prasad Educational Society was established in the year 2000. We registered 
                our society in the year 2000. Our society was established to give education for D.El.Ed / 
                BTC course and other professional courses.
              </p>
              <Link to="/about" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                Learn More About Us
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" 
                alt="Students learning" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400" 
                alt="College building" 
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400" 
                alt="Library" 
                className="rounded-lg shadow-lg w-full h-48 object-cover -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400" 
                alt="Computer lab" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose City College?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive facilities and support to ensure the best learning experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card p-6 text-center hover:transform hover:scale-105"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              College Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={24} className="mr-3 flex-shrink-0 text-green-300" />
                  <p className="text-lg">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                City College Barabanki emphasizes the all-round development of its students. It aims
                at producing not only good professionals, teachers, but also good and worthy citizens
                of a great country, aiding in its overall progress and development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It endeavours to treat every student as an individual, to recognize their potential
                and to ensure that they receive the best preparation and training for achieving their
                career ambitions and life goals.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To provide a clean and simple understanding of the complex, dynamic and rapidly
                growing situations of national and international environment and to give them a
                concept of skilful management in different situation of their area of learning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                To create and to cater knowledge and to provide education for the next generation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To develop the Leadership qualities, capability to motivate other towards the
                achievement of the organizational objectives and develop scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Teaching Career?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join City College Barabanki and become part of a community dedicated to excellence in education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/courses" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                View Courses
              </Link>
              <Link to="/contact" className="bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
