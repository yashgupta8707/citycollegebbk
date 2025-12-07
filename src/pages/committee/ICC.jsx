import { Shield, Users, FileCheck, AlertTriangle, Clock } from 'lucide-react';

const ICC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Internal Complaint Committee (ICC)
          </h1>
          <p className="text-xl text-primary-100">
            Prevention, Prohibition & Redressal of Sexual Harassment
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start mb-6">
              <Shield className="text-primary-600 mr-4 flex-shrink-0" size={32} />
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As per the guidelines of UGC, NAAC and the Supreme Court, an Internal Complaint Committee has been established by City College to provide a healthy and congenial atmosphere for the staff and students of the College. The cell has well-developed guidelines and norms for a policy to uphold zero tolerance towards sexual harassment. The college has entrusted the task of developing principles and procedures for combating sexual harassment to this cell. Cell promotes measures aimed at achieving gender equality, removal of gender bias or discrimination, sexual harassment, and other acts of gender-based violence by organizing awareness programmes and campaigns for the benefit of all members of the College.
                </p>
              </div>
            </div>
          </div>

          {/* Committee Formation */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Committee Formation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In accordance with the provisions of the <strong>Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013 (POSH Act, 2013)</strong>, an Internal Complaint Committee (ICC) is hereby constituted at City College.
            </p>
          </div>

          {/* Important Legal Points */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileCheck className="mr-2 text-primary-600" size={28} />
              Important Legal Points Regarding ICC
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">This committee is formed under the provisions of the POSH Act, 2013.</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">The main purpose of the committee is to ensure prevention, prohibition, and redressal of sexual harassment of women at the workplace.</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">Any woman student/employee experiencing harassment can file a written complaint within 3 months of the incident.</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">The committee shall complete its inquiry within 90 days and submit its report.</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">The committee shall maintain strict confidentiality and the identity of the complainant will not be disclosed.</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">The committee may recommend administrative or disciplinary action if required.</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">The recommendations/decisions of the committee shall be binding on the college administration.</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">The committee will organize awareness programs, workshops, and training sessions from time to time.</p>
              </div>
            </div>
          </div>

          {/* ICC Policy */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Internal Complaint Committee Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As per the guidelines of UGC, NAAC and the Supreme Court, the college has established the Internal Complaint Committee for effective enforcement of basic human rights of gender equality and assurance of an environment free of sexual harassment and abuse. The Objective of the ICC is to develop healthy and safe atmosphere for the faculty and students of the College and to prevent sexual harassment or exploitation of any kind. Policy measures and procedures are laid down to combat sexual harassment, if any arises, and the students are made aware of these proactive measures through seminars and outreach programmes. The college's Internal Complaints Committee addresses the grievances filed in a confidential and sensitive manner.
            </p>
          </div>

          {/* Procedure Roles and Responsibilities */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Procedure, Roles and Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed">
              If any staff or student approaches a committee member either through the complaint box placed in front of the college office or by telephone, necessary action will be taken through counseling and conciliatory methods. If it requires an inquiry, it will be conducted, and the matter will be sorted within one week from the date of complaint. The Committee will take the responsibility to ensure that no such incident happens in the campus.
            </p>
          </div>

          {/* Procedure to Register Grievance */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Clock className="mr-2 text-primary-600" size={28} />
              Procedure to Register Grievance
            </h2>

            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">1</div>
                <p className="text-gray-700 pt-1">Meeting will be held if a complaint is received by any member.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">2</div>
                <p className="text-gray-700 pt-1">The written complaint is taken and the committee prepares and submits the detailed statement of the incidents within two days.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">3</div>
                <p className="text-gray-700 pt-1">An enquiry will be held with the members of Internal Complaint Committee.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">4</div>
                <p className="text-gray-700 pt-1">The issue will be discussed and finalized within seven days.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3 mt-1">5</div>
                <p className="text-gray-700 pt-1">File the minutes of the inquiry.</p>
              </div>
            </div>
          </div>

          {/* Action Plan */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <AlertTriangle className="mr-2" size={28} />
              Action Plan
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1">•</div>
                <span>Counsel the affected students to overcome the trauma</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">•</div>
                <span>Display current laws and affairs about sexual harassment and gender discrimination in key places in the campus</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">•</div>
                <span>Conduct awareness programs and campaigns for the benefit of the students and staff community</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">•</div>
                <span>The issue will be discussed and finalized within seven days</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">•</div>
                <span>File the minutes of the inquiry</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICC;
