import {
  Microscope,
  Lightbulb,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Target,
  Briefcase,
  Globe,
  FileText
} from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: <BookOpen size={40} />,
      title: 'Educational Research',
      description: 'Innovative studies in pedagogy, curriculum development, and teaching methodologies'
    },
    {
      icon: <Microscope size={40} />,
      title: 'Scientific Research',
      description: 'Cutting-edge research in various scientific disciplines and interdisciplinary studies'
    },
    {
      icon: <Users size={40} />,
      title: 'Social Sciences',
      description: 'Research in sociology, psychology, and behavioral sciences'
    },
    {
      icon: <Globe size={40} />,
      title: 'Environmental Studies',
      description: 'Sustainability research and environmental conservation initiatives'
    }
  ];

  const rndFeatures = [
    {
      icon: <Target size={32} />,
      title: 'Research Projects',
      description: 'Faculty and student-led research projects addressing real-world challenges',
      details: [
        'Funded research programs',
        'Collaborative research initiatives',
        'Industry-sponsored projects',
        'Government-funded schemes'
      ]
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Consultancy Services',
      description: 'Expert consultancy services leveraging our academic expertise',
      details: [
        'Educational consultancy',
        'Policy advisory services',
        'Training and development programs',
        'Institutional development support'
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'International Collaborations',
      description: 'Partnerships with global institutions for research excellence',
      details: [
        'Student exchange programs',
        'Joint research projects',
        'International conferences',
        'Faculty collaboration'
      ]
    },
    {
      icon: <Award size={32} />,
      title: 'Industry Partnerships',
      description: 'Strong ties with industry for practical research applications',
      details: [
        'Corporate tie-ups',
        'Internship opportunities',
        'Skill development programs',
        'Placement assistance'
      ]
    }
  ];

  const incubationFeatures = [
    {
      title: 'Entrepreneurship Development',
      description: 'Supporting students and faculty in transforming innovative ideas into successful ventures',
      icon: <Lightbulb size={32} />
    },
    {
      title: 'Mentorship Programs',
      description: 'Guidance from experienced entrepreneurs and industry experts',
      icon: <Users size={32} />
    },
    {
      title: 'Funding Support',
      description: 'Access to seed funding and connections with investors',
      icon: <TrendingUp size={32} />
    },
    {
      title: 'Infrastructure Facilities',
      description: 'Co-working spaces, laboratories, and technical resources',
      icon: <Briefcase size={32} />
    }
  ];

  const centralFacilities = [
    {
      name: 'Central Library',
      description: 'Extensive collection of books, journals, and digital resources'
    },
    {
      name: 'Computer Center',
      description: 'High-performance computing facilities with latest software'
    },
    {
      name: 'Research Labs',
      description: 'Well-equipped laboratories for experimental research'
    },
    {
      name: 'Seminar Halls',
      description: 'Modern venues for conferences, workshops, and presentations'
    },
    {
      name: 'Digital Resource Center',
      description: 'Access to online databases, e-journals, and research tools'
    },
    {
      name: 'Innovation Hub',
      description: 'Collaborative space for brainstorming and prototype development'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research & Development
            </h1>
            <p className="text-xl md:text-2xl">
              Fostering Innovation, Collaboration, and Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Research & Development Cell */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Research & Development Cell
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our R&D Cell promotes research culture and facilitates collaborative projects
              with academic institutions, research organizations, and industries
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {researchAreas.map((area, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-primary-600 flex justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* R&D Features */}
          <div className="grid md:grid-cols-2 gap-8">
            {rndFeatures.map((feature, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start mb-4">
                  <div className="text-primary-600 mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="pl-12">
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Centre */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Lightbulb size={48} className="text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Incubation Centre & Start-up Support
            </h2>
            <p className="text-lg text-gray-600">
              Nurturing entrepreneurial spirit and supporting innovative ventures from ideation to implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {incubationFeatures.map((feature, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-primary-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="card p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Entrepreneurship Cell Initiatives
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <FileText size={20} className="mr-2 text-primary-600" />
                  Programs & Workshops
                </h4>
                <ul className="space-y-2 pl-8">
                  <li className="text-gray-700 list-disc">Ideation and brainstorming sessions</li>
                  <li className="text-gray-700 list-disc">Business plan development workshops</li>
                  <li className="text-gray-700 list-disc">Pitch practice and presentation skills</li>
                  <li className="text-gray-700 list-disc">Legal and regulatory compliance training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Award size={20} className="mr-2 text-primary-600" />
                  Support Services
                </h4>
                <ul className="space-y-2 pl-8">
                  <li className="text-gray-700 list-disc">Access to industry mentors</li>
                  <li className="text-gray-700 list-disc">Networking with investors</li>
                  <li className="text-gray-700 list-disc">Prototype development support</li>
                  <li className="text-gray-700 list-disc">Market research assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Central Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Central Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure supporting research and innovation
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {centralFacilities.map((facility, index) => (
                <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Briefcase size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {facility.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Research Publications & Achievements
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">XX+</div>
                  <div className="text-gray-700">Research Papers Published</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">XX+</div>
                  <div className="text-gray-700">Ongoing Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">XX+</div>
                  <div className="text-gray-700">Industry Collaborations</div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-gray-700 text-center">
                  Our faculty and students regularly contribute to peer-reviewed journals, present at national
                  and international conferences, and collaborate with leading institutions worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Collaborate With Us
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in research collaboration, consultancy, or starting your venture?
            Get in touch with our R&D Cell.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Submit Research Proposal
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Contact R&D Cell
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
