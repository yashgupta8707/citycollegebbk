import { Shield, Users, Mail, Phone, Clock, MapPin, Quote } from 'lucide-react';

const Ombudsperson = () => {
  const responsibilities = [
    'Address student and staff grievances fairly, responsibly, and confidentially',
    'Promote ethical practices, transparency, and respectful communication within the institution',
    'Offer guidance on college policies, rights, responsibilities, and grievance procedures',
    'Facilitate informal resolution, mediation, and dialogue between parties',
    'Identify systemic issues affecting student welfare and recommend improvements to the administration'
  ];

  const whenToContact = [
    'You are facing an unresolved concern with faculty, staff, or peers',
    'You believe your complaint has not been adequately addressed',
    'You want an impartial listener to understand your situation',
    'You seek conflict resolution without immediately filing a formal complaint',
    'You need clarity on policies, rights, or institutional processes'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ombudsperson
            </h1>
            <p className="text-xl md:text-2xl">
              Your Voice for Fairness, Transparency, and Accountability
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex items-start mb-6">
                <Shield size={48} className="text-primary-600 mr-6 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    About the Ombudsperson
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At <strong>City College, Barabanki</strong>, we are committed to maintaining a campus environment grounded
                    in <strong>fairness, transparency, accountability, and student-centered governance</strong>. The
                    Ombudsperson serves as a neutral and independent authority to ensure that every member of the
                    college community—<strong>students, faculty, staff, and parents</strong>—feels respected, supported, and
                    heard.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Mr. Deshraj</strong>, Assistant Professor and appointed Ombudsperson of City College, plays a crucial
                    role in safeguarding these values. With his professional experience in higher education and
                    commitment to ethical conduct, he provides a confidential, unbiased platform for addressing
                    concerns and resolving disputes in a constructive and compassionate manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Responsibilities of the Ombudsperson
              </h2>
              <p className="text-lg text-gray-600">
                The Ombudsperson works to:
              </p>
            </div>

            <div className="card p-8 md:p-10">
              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                When Should You Contact the Ombudsperson?
              </h2>
              <p className="text-lg text-gray-600">
                You may reach out to the Ombudsperson if:
              </p>
            </div>

            <div className="card p-8 md:p-10">
              <div className="space-y-4">
                {whenToContact.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Users size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed text-center">
                  All conversations with the Ombudsperson are handled with <strong>confidentiality, empathy, and
                  integrity</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Contact Details
              </h2>
            </div>

            <div className="card p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Mr. Deshraj
                </h3>
                <p className="text-lg text-primary-600 font-semibold">
                  Ombudsperson, City College, Barabanki
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Mail size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a href="mailto:citycollegebbk@gmail.com" className="text-gray-800 font-semibold hover:text-primary-600">
                      citycollegebbk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Phone size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a href="tel:+918177001081" className="text-gray-800 font-semibold hover:text-primary-600">
                      +91-8177001081
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Clock size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Office Hours</p>
                    <p className="text-gray-800 font-semibold">Monday to Friday, 10:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <MapPin size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <p className="text-gray-800 font-semibold">Ombudsperson's Office, City College Campus, Barabanki</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <Quote size={48} className="mx-auto mb-6 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
                "Educational justice is not just about rules—it's about relationships, responsibility, and
                respectful resolution."
              </blockquote>
              <p className="text-xl">
                — Mr. Deshraj, Assistant Professor
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ombudsperson;
