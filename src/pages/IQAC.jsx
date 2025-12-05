import {
  Target,
  Users,
  FileText,
  Award,
  TrendingUp,
  CheckCircle,
  BookOpen,
  BarChart,
  ClipboardCheck
} from 'lucide-react';

const IQAC = () => {
  const objectives = [
    {
      icon: <Target size={32} />,
      title: 'Quality Enhancement',
      description: 'Develop and apply quality benchmarks for various academic and administrative activities'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Continuous Improvement',
      description: 'Facilitate creation of a learner-centric environment conducive to quality education'
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Institutional Integration',
      description: 'Arrange for feedback response from all stakeholders on quality-related institutional processes'
    },
    {
      icon: <FileText size={32} />,
      title: 'Documentation',
      description: 'Disseminate information on various quality parameters to all stakeholders'
    }
  ];

  const functions = [
    'Development and application of quality benchmarks/parameters for various academic and administrative activities',
    'Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation',
    'Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes',
    'Dissemination of information on various quality parameters of higher education',
    'Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles',
    'Documentation of various programmes/activities leading to quality improvement',
    'Acting as a nodal agency for coordinating quality-related activities, including adoption and dissemination of best practices',
    'Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing institutional quality',
    'Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC',
    'Bi-annual preparation of quality initiatives and submission of AQAR to NAAC'
  ];

  const composition = [
    { role: 'Chairperson', name: 'Principal', description: 'Head of the Institution' },
    { role: 'Coordinator', name: 'Senior Faculty Member', description: 'Appointed by the Principal' },
    { role: 'Members', name: 'Faculty Representatives', description: 'From various departments' },
    { role: 'Member', name: 'Administrative Officer', description: 'Registrar/Administrative Head' },
    { role: 'Member', name: 'External Expert', description: 'Quality assurance specialist' },
    { role: 'Member', name: 'Stakeholder Representative', description: 'Alumni/Industry representative' }
  ];

  const initiatives = [
    {
      title: 'Academic Excellence Programs',
      items: [
        'Faculty Development Programs',
        'Student Mentoring System',
        'Peer Learning Initiatives',
        'Research Support Programs'
      ]
    },
    {
      title: 'Infrastructure Development',
      items: [
        'Library Resource Enhancement',
        'Laboratory Modernization',
        'ICT Infrastructure Upgrade',
        'Campus Facility Improvements'
      ]
    },
    {
      title: 'Stakeholder Engagement',
      items: [
        'Student Feedback Mechanism',
        'Parent-Teacher Meetings',
        'Alumni Interaction Programs',
        'Industry-Academia Interface'
      ]
    },
    {
      title: 'Best Practices',
      items: [
        'Green Campus Initiatives',
        'Student Support Services',
        'Community Outreach Programs',
        'Inclusive Education Practices'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Internal Quality Assurance Cell (IQAC)
            </h1>
            <p className="text-xl md:text-2xl">
              Ensuring Excellence Through Continuous Quality Enhancement
            </p>
          </div>
        </div>
      </section>

      {/* About IQAC */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex items-start mb-6">
                <Award size={48} className="text-primary-600 mr-6 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    About IQAC
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Internal Quality Assurance Cell (IQAC) was established as per the guidelines of
                    the National Assessment and Accreditation Council (NAAC) to develop a system for conscious,
                    consistent, and catalytic action to improve the academic and administrative performance of the institution.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    IQAC acts as a nodal agency for coordinating quality-related activities and serves as a
                    dynamic system for quality enhancement by promoting measures for institutional functioning
                    towards quality enhancement through internalization of quality culture and institutionalization
                    of best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Primary Objectives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              IQAC aims to promote quality culture in all institutional activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {objectives.map((objective, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-primary-600 flex justify-center mb-4">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {objective.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Functions of IQAC
              </h2>
            </div>

            <div className="card p-8 md:p-10">
              <div className="space-y-4">
                {functions.map((func, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {func}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Composition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                IQAC Composition
              </h2>
              <p className="text-lg text-gray-600">
                Members representing various stakeholders of the institution
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {composition.map((member, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start">
                    <Users size={32} className="text-primary-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {member.role}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-2">
                        {member.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Quality Enhancement Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic initiatives for continuous improvement and excellence
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <BarChart size={28} className="text-primary-600 mr-3" />
                  {initiative.title}
                </h3>
                <ul className="space-y-3">
                  {initiative.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle size={20} className="text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AQAR Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex items-start mb-6">
                <FileText size={48} className="text-primary-600 mr-6 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Annual Quality Assurance Report (AQAR)
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    IQAC is responsible for preparing the Annual Quality Assurance Report (AQAR) based on the
                    quality indicators and parameters prescribed by NAAC. The AQAR is a comprehensive document
                    that reflects the institution's efforts towards quality enhancement during the academic year.
                  </p>

                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">AQAR Documents</h3>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                        <BookOpen size={20} className="mr-2" />
                        AQAR 2023-24 (PDF)
                      </a>
                      <a href="#" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                        <BookOpen size={20} className="mr-2" />
                        AQAR 2022-23 (PDF)
                      </a>
                      <a href="#" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                        <BookOpen size={20} className="mr-2" />
                        AQAR 2021-22 (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact IQAC
            </h2>
            <p className="text-xl mb-8">
              For suggestions, feedback, or quality-related queries, please reach out to our IQAC coordinator
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-sm mb-2">IQAC Coordinator</p>
                <p className="font-semibold text-lg">Dr. [Name]</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-sm mb-2">Email</p>
                <p className="font-semibold text-lg">iqac@citycollegebarabanki.edu</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-sm mb-2">Phone</p>
                <p className="font-semibold text-lg">+91 XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IQAC;
