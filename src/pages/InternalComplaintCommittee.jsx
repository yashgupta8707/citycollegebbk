import { Shield, Users, FileText, AlertCircle, CheckCircle, Scale, BookOpen, Phone, Mail } from 'lucide-react';

const InternalComplaintCommittee = () => {
  const committeeMembers = [
    {
      role: 'Chairperson (Presiding Officer)',
      name: 'Mrs. Meeta Srivastava',
      designation: 'Assistant Professor',
      description: '(Senior Woman Faculty Member)'
    },
    {
      role: 'Member',
      name: 'Mrs. Devanshi Tripathi',
      designation: 'Assistant Professor',
      description: '(Woman Faculty Member)'
    },
    {
      role: 'Member',
      name: 'Mr. Ram Prakash Maurya',
      designation: 'Assistant Professor – Chemistry',
      description: '(Male Faculty Member)'
    },
    {
      role: 'Member',
      name: 'Mr. Mrityunjay Nath Garg',
      designation: 'Administrative Staff',
      description: '(Non-teaching Staff Member)'
    },
    {
      role: 'Member',
      name: 'Mr. Huzaifa Afzal',
      designation: 'Finance & Compliance Officer',
      description: '(Non-teaching Staff Member)'
    },
    {
      role: 'Member',
      name: 'Ms. Shivangi',
      designation: 'B.Sc Student',
      description: ''
    },
    {
      role: 'Member',
      name: 'Mr. Akash Rai',
      designation: 'B.Sc Agriculture Student',
      description: ''
    }
  ];

  const legalPoints = [
    'The ICC is formed under the provisions of the POSH Act, 2013.',
    'Its primary purpose is the prevention, prohibition, and redressal of sexual harassment of women at the workplace.',
    'Any woman student or employee experiencing sexual harassment may file a written complaint within 3 months of the incident.',
    'The ICC must complete the inquiry within 90 days and submit its report promptly.',
    'The Committee maintains strict confidentiality, and the identity of the complainant will not be disclosed.',
    'The ICC may recommend disciplinary, administrative, or corrective action if required.',
    'Recommendations of the ICC are binding on the college administration.',
    'Awareness sessions, training workshops, and sensitization programs will be organized regularly.'
  ];

  const objectives = [
    'To create a healthy, safe, and gender-sensitive environment for students and staff.',
    'To prevent any form of gender-based violence, exploitation, or harassment.',
    'To develop policy measures and procedures to address sexual harassment cases effectively.',
    'To handle grievances with confidentiality, sensitivity, and fairness.',
    'To promote awareness through seminars, outreach programs, and sensitization sessions.'
  ];

  const procedureSteps = [
    'If any student or staff member submits a complaint through the complaint box, by telephone, or directly to any ICC member, the Committee will take immediate action.',
    'Counseling or conciliatory measures will be attempted first, wherever possible.',
    'If a formal inquiry is required, it will be conducted promptly, and the matter will be resolved within one week from the date of the complaint.',
    'The Committee will ensure that no such incidents occur on campus and that preventive measures are enforced.'
  ];

  const grievanceProcedure = [
    { step: 1, description: 'A meeting of the ICC will be convened upon receiving a complaint.' },
    { step: 2, description: 'A written complaint is recorded, and a detailed statement of incidents is prepared within two days.' },
    { step: 3, description: 'An official inquiry is conducted with all ICC members.' },
    { step: 4, description: 'The issue is discussed, investigated, and resolved within seven days.' },
    { step: 5, description: 'Final minutes of the inquiry are documented and filed.' }
  ];

  const actionPlan = [
    'Provide counseling to the affected student or staff to overcome trauma.',
    'Display laws and information regarding sexual harassment and gender discrimination at key locations on campus.',
    'Conduct awareness programs, workshops, and campaigns for students and staff.',
    'Ensure timely documentation and reporting of all complaints and actions taken.'
  ];

  const pdfDocuments = [
    { title: 'UGC Regulations 2015 Harassment', link: '#' },
    { title: 'Sexual Harassment Handbook', link: '#' },
    { title: 'Vishaka Guidelines', link: '#' },
    { title: 'Sexual Harassment Electronic Box', link: '#' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Internal Complaint Committee (ICC)
            </h1>
            <p className="text-xl md:text-2xl">
              Ensuring a Safe, Respectful, and Gender-Sensitive Environment
            </p>
          </div>
        </div>
      </section>

      {/* About ICC */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex items-start mb-6">
                <Shield size={48} className="text-primary-600 mr-6 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    About the Internal Complaint Committee
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    As per the guidelines of <strong>UGC, NAAC, and the Supreme Court</strong>, City College, Barabanki has
                    established an <strong>Internal Complaint Committee (ICC)</strong> to ensure a safe, respectful, and gender-sensitive
                    learning and working environment. The ICC upholds a <strong>zero-tolerance policy</strong> towards sexual
                    harassment and is committed to protecting the dignity and rights of <strong>women students, faculty, and
                    staff</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Committee functions as a statutory body under the <strong>Sexual Harassment of Women at Workplace
                    (Prevention, Prohibition & Redressal) Act, 2013 (POSH Act, 2013)</strong> and is entrusted with drafting
                    principles, procedures, and preventive measures to address and eliminate all forms of sexual harassment
                    on campus.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    To promote gender equality and awareness, the ICC regularly organizes <strong>workshops, orientation
                    programs, and sensitization campaigns</strong> for the benefit of the entire college community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Committee Members
              </h2>
              <p className="text-lg text-gray-600">
                In accordance with the provisions of the POSH Act, 2013
              </p>
            </div>

            <div className="space-y-4">
              {committeeMembers.map((member, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start">
                    <Users size={32} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-primary-600 font-semibold mb-1">{member.role}</p>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-700 font-medium">
                        {member.designation}
                      </p>
                      {member.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {member.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Legal Points */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Important Legal Points Regarding ICC
              </h2>
            </div>

            <div className="card p-8 md:p-10">
              <div className="space-y-4">
                {legalPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <Scale size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICC Policy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Internal Complaint Committee Policy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                City College, Barabanki follows UGC, NAAC, and Supreme Court directives in establishing a safe
                environment that protects the human rights of gender equality and ensures freedom from sexual
                harassment.
              </p>
            </div>

            <div className="card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">The objectives of the ICC are:</h3>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-green-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure & Roles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Procedure, Roles & Responsibilities
              </h2>
            </div>

            <div className="card p-8 md:p-10 mb-8">
              <div className="space-y-4">
                {procedureSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <AlertCircle size={24} className="text-primary-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Procedure to Register a Grievance</h3>
              <div className="space-y-4">
                {grievanceProcedure.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Action Plan
              </h2>
            </div>

            <div className="card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                {actionPlan.map((action, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <CheckCircle size={24} className="text-green-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {action}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Important Documents & Guidelines
              </h2>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {pdfDocuments.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.link}
                    className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-300"
                  >
                    <FileText size={24} className="text-primary-600 mr-3" />
                    <span className="text-gray-800 font-semibold">{doc.title}</span>
                  </a>
                ))}
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
              Need to Report a Concern?
            </h2>
            <p className="text-xl mb-8">
              Your safety and dignity are our priority. The ICC is here to help you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-left">
                <div className="flex items-center mb-2">
                  <Mail size={20} className="mr-2" />
                  <p className="text-sm">Email</p>
                </div>
                <p className="font-semibold text-lg">citycollegebbk@gmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-left">
                <div className="flex items-center mb-2">
                  <Phone size={20} className="mr-2" />
                  <p className="text-sm">Phone</p>
                </div>
                <p className="font-semibold text-lg">+91-8177001081</p>
              </div>
            </div>
            <p className="mt-8 text-lg opacity-90">
              All complaints are handled with strict confidentiality and sensitivity
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternalComplaintCommittee;
