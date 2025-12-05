import {
  Users,
  Mail,
  Phone,
  Building2,
  Award,
  Shield,
  FileText,
  UserCheck
} from 'lucide-react';

const Administration = () => {
  const administrativeTeam = [
    {
      designation: 'Chancellor',
      name: 'Dr. [Name]',
      email: 'chancellor@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      image: '/admin/chancellor.jpg',
      description: 'Leading the institution towards excellence in education'
    },
    {
      designation: 'Pro Chancellor',
      name: 'Prof. [Name]',
      email: 'prochancellor@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      image: '/admin/pro-chancellor.jpg',
      description: 'Supporting strategic initiatives and academic growth'
    },
    {
      designation: 'Vice-Chancellor',
      name: 'Dr. [Name]',
      email: 'vc@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      image: '/admin/vice-chancellor.jpg',
      description: 'Overseeing day-to-day academic and administrative operations'
    },
    {
      designation: 'Principal',
      name: 'Dr. [Name]',
      email: 'principal@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      image: '/admin/principal.jpg',
      description: 'Managing academic programs and student affairs'
    },
    {
      designation: 'Registrar',
      name: 'Mr./Ms. [Name]',
      email: 'registrar@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      image: '/admin/registrar.jpg',
      description: 'Handling admissions, examinations, and academic records'
    },
    {
      designation: 'Finance Officer',
      name: 'Mr./Ms. [Name]',
      email: 'finance@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      image: '/admin/finance.jpg',
      description: 'Managing financial operations and budget planning'
    },
    {
      designation: 'Controller of Examination',
      name: 'Dr. [Name]',
      email: 'coe@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      image: '/admin/coe.jpg',
      description: 'Conducting fair and transparent examination processes'
    },
    {
      designation: 'Chief Vigilance Officer',
      name: 'Mr./Ms. [Name]',
      email: 'vigilance@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      image: '/admin/cvo.jpg',
      description: 'Ensuring transparency and accountability'
    }
  ];

  const committees = [
    {
      title: 'Executive Council',
      icon: <Users size={32} />,
      description: 'The apex body responsible for policy-making and strategic planning',
      members: [
        'Chancellor (Chairperson)',
        'Vice-Chancellor',
        'Pro-Vice-Chancellor',
        'Nominated Members',
        'Faculty Representatives'
      ]
    },
    {
      title: 'Board of Management',
      icon: <Building2 size={32} />,
      description: 'Oversees administrative and financial management',
      members: [
        'Pro Chancellor (Chairperson)',
        'Principal',
        'Finance Officer',
        'External Experts',
        'Government Nominees'
      ]
    },
    {
      title: 'Academic Council',
      icon: <Award size={32} />,
      description: 'Responsible for academic standards and curriculum development',
      members: [
        'Vice-Chancellor (Chairperson)',
        'Dean of Schools',
        'Head of Departments',
        'Senior Faculty Members',
        'Subject Experts'
      ]
    },
    {
      title: 'Internal Complaints Committee',
      icon: <Shield size={32} />,
      description: 'Handles complaints and ensures a safe campus environment',
      members: [
        'Senior Faculty Member (Chairperson)',
        'Faculty Representatives',
        'Student Representatives',
        'External Legal Expert',
        'NGO Representative'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Administration
            </h1>
            <p className="text-xl md:text-2xl">
              Leadership Committed to Excellence in Education
            </p>
          </div>
        </div>
      </section>

      {/* Administrative Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to providing quality education and fostering academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrativeTeam.map((member, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200">
                  <img
                    src={member.image}
                    alt={member.designation}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Fallback icon if image not found */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserCheck size={80} className="text-primary-600 opacity-50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-700 mb-1">
                    {member.designation}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-3">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.description}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition"
                    >
                      <Mail size={16} className="mr-2 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition"
                    >
                      <Phone size={16} className="mr-2 flex-shrink-0" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees and Councils */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Committees & Councils
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Governance bodies ensuring quality, transparency, and accountability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start mb-4">
                  <div className="text-primary-600 mr-4 flex-shrink-0">
                    {committee.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {committee.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {committee.description}
                    </p>
                  </div>
                </div>
                <div className="pl-12">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Composition:</h4>
                  <ul className="space-y-2">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ombudsperson Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex items-start mb-6">
                <FileText size={48} className="text-primary-600 mr-6 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Ombudsperson
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The Ombudsperson serves as an independent and impartial officer to address grievances,
                    complaints, and concerns of students, staff, and faculty members. The office ensures fair
                    treatment and helps resolve disputes through mediation and investigation.
                  </p>
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Contact Information:</h4>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-700">
                        <Mail size={18} className="mr-3 text-primary-600" />
                        ombudsperson@citycollegebarabanki.edu
                      </p>
                      <p className="flex items-center text-gray-700">
                        <Phone size={18} className="mr-3 text-primary-600" />
                        +91 XXXXXXXXXX
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Office Hours: Monday to Friday, 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Administration;
