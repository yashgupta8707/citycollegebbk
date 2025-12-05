import { 
  Library, 
  Laptop, 
  Microscope, 
  Building2,
  BookOpen,
  Wifi,
  Users,
  Coffee
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: <Library size={48} />,
      title: 'Modern Library',
      image: '/library.jpg',
      description: 'Our extensive library is the heart of academic excellence at City College Barabanki.',
      features: [
        '78 Reference Books for comprehensive study',
        'Approximately 1,050 textbooks covering all subjects',
        '11 Journals for current educational research',
        'Computer system with Internet connectivity',
        'Multimedia resources and digital materials',
        'Newspaper and magazine subscriptions',
        'Quiet study areas and reading rooms',
        'Library membership for all students and faculty'
      ],
      details: 'The City College Barabanki Library collectively supports the teaching, research and extension programmes of the Institute. All students and faculty members of the Institute are entitled to make use of the Library facilities on taking library membership. The Library, besides having a huge collection of books and offers library services through its various Divisions.'
    },
    {
      icon: <Microscope size={48} />,
      title: 'Well-Equipped Labs',
      image: '/lab.jpg',
      description: 'Practical learning facilities designed for hands-on teacher training experience.',
      features: [
        'Dedicated practice teaching labs',
        'Educational psychology lab',
        'Teaching aid preparation room',
        'Demonstration classroom setup',
        'Audio-visual equipment',
        'Educational models and charts',
        'Practice tutorial sessions',
        'Supervised practical training'
      ],
      details: 'Currently college has well equipped labs for D.El.Ed / BTC course. Students are encouraged to undertake practice tutorials to gain proficiency and precision in drawing inferences. Our laboratories provide students with the practical skills necessary to become effective educators.'
    },
    {
      icon: <Laptop size={48} />,
      title: 'Computer Lab',
      image: '/computer-lab.jpg',
      description: 'State-of-the-art computing facility for digital learning and technology integration.',
      features: [
        'Modern, sophisticated computer systems',
        'Latest hardware and software',
        'High-speed Internet connectivity',
        'Local Area Network (LAN)',
        'Centralized server infrastructure',
        'Educational software and applications',
        'Individual workstations for students',
        'Qualified technical support staff'
      ],
      details: 'The fully air conditioned, sophisticated and spacious computer centre is a matter of tremendous pride for the college. Extensively equipped with the latest hardware and software, the systems are interconnected through a Local Area Network to the centralized server. Students have access to modern computing facilities essential for contemporary education.'
    },
    {
      icon: <Building2 size={48} />,
      title: 'Hostel Facility',
      image: '/hostel.jpg',
      description: 'Comfortable residential accommodation for outstation students in a scholarly atmosphere.',
      features: [
        'Separate wings for male and female students',
        'Clean and comfortable rooms',
        'Nutritious mess facilities',
        'Study rooms and common areas',
        '24/7 security arrangements',
        'Water and electricity backup',
        'Recreation facilities',
        'Home-like environment'
      ],
      details: 'The hostel facility at City College Barabanki will enable you to experience the fully residential way of learning even though you are away from your home. This is to enable you to focus on overall self development in the scholarly atmosphere that is the characteristic of a high quality professional training college.'
    }
  ];

  const additionalFacilities = [
    {
      icon: <BookOpen size={32} />,
      title: 'Reading Rooms',
      description: 'Quiet spaces dedicated for focused study and research work'
    },
    {
      icon: <Wifi size={32} />,
      title: 'Wi-Fi Campus',
      description: 'High-speed internet connectivity across the entire campus'
    },
    {
      icon: <Users size={32} />,
      title: 'Seminar Hall',
      description: 'Modern auditorium for workshops, seminars, and cultural events'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Cafeteria',
      description: 'Hygienic dining facility with variety of healthy food options'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl md:text-2xl">
              Infrastructure Designed to Nurture Future Educators
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-start`}
              >
                <div className="md:w-1/3">
                  <div className="card overflow-hidden h-full flex flex-col sticky top-24">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-8 flex flex-col items-center text-center">
                      <div className="text-primary-600 mb-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="prose max-w-none mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {facility.details}
                    </p>
                  </div>
                  <div className="card p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Additional Amenities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFacilities.map((facility, index) => (
              <div key={index} className="card p-6 text-center hover:transform hover:scale-105">
                <div className="text-primary-600 flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{facility.title}</h4>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Infrastructure Highlights
            </h2>
            <div className="card p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Campus Area</h4>
                  <p className="text-gray-700">Spacious campus with green surroundings providing a peaceful learning environment</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Smart Classrooms</h4>
                  <p className="text-gray-700">Modern classrooms equipped with projectors and audio-visual aids</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Sports Facilities</h4>
                  <p className="text-gray-700">Indoor and outdoor sports facilities for physical development</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Medical Room</h4>
                  <p className="text-gray-700">First aid and basic medical facilities available on campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Campus
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us to see our world-class facilities and vibrant learning environment firsthand
          </p>
          <a 
            href="/contact" 
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Schedule a Campus Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Facilities;