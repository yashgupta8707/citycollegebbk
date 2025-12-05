import { Users, Award, Briefcase, TrendingUp, DollarSign, UserCheck } from 'lucide-react';

const ExecutiveCouncil = () => {
  const leadershipTeam = [
    {
      name: 'Dr. Meeta Srivastava',
      position: 'Principal, City College Barabanki',
      icon: <Award size={40} />,
      description: 'Dr. Meeta Srivastava provides visionary academic leadership and oversees all educational and administrative activities of the college. With her deep experience in higher education and commitment to quality teaching, she ensures that City College maintains high academic standards, fosters innovation in learning, and nurtures a student-centric educational environment.'
    },
    {
      name: 'Mr. Mrityunjay Nath Garg',
      position: 'Administrative Head',
      icon: <Briefcase size={40} />,
      description: 'As the Administrative Head, Mr. Mrityunjay Nath Garg manages the operational and infrastructural functions of the institution. His responsibility includes overseeing campus administration, coordinating departmental activities, and ensuring smooth day-to-day functioning to support both faculty and students effectively.'
    },
    {
      name: 'Mr. Huzaifa Afzal',
      position: 'Finance & Compliance Officer',
      icon: <DollarSign size={40} />,
      description: 'Mr. Huzaifa Afzal is responsible for managing the financial operations of the college, including budgeting, audits, financial planning, and regulatory compliance. His commitment to transparency and systematic financial management supports the long-term stability and growth of the institution.'
    },
    {
      name: 'Mr. Deshraj',
      position: 'HR Officer',
      icon: <UserCheck size={40} />,
      description: 'As the HR Officer, Mr. Deshraj oversees human-resource management, staff coordination, and faculty support systems. He plays a key role in recruitment, professional development, workplace communication, and maintaining a positive and productive institutional culture.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Executive Council
            </h1>
            <p className="text-xl md:text-2xl">
              Leadership for Academic Excellence and Institutional Integrity
            </p>
          </div>
        </div>
      </section>

      {/* About Executive Council */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex items-start mb-6">
                <Users size={48} className="text-primary-600 mr-6 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Executive Council – City College, Barabanki
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    At <strong>City College, Barabanki</strong>, our Executive Council embodies the institution's commitment to
                    academic excellence, ethical leadership, and progressive educational values. The Council is
                    composed of dedicated leaders who provide strategic direction, uphold institutional integrity, and
                    ensure that the college continues to serve students and the community with distinction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders guiding our institution towards excellence
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="card p-8 md:p-10 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                      {member.icon}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl font-semibold text-gray-800 mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide our Executive Council
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Academic Excellence
                </h3>
                <p className="text-gray-600">
                  Maintaining the highest standards in teaching and learning
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Ethical Leadership
                </h3>
                <p className="text-gray-600">
                  Leading with integrity, transparency, and accountability
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Student-Centric Approach
                </h3>
                <p className="text-gray-600">
                  Prioritizing student welfare and holistic development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Working Together for Excellence
            </h2>
            <p className="text-xl">
              The Executive Council remains committed to fostering an environment of continuous improvement,
              innovation, and student success at City College, Barabanki.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveCouncil;
