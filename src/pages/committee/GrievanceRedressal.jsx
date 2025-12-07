import { Users, Scale, FileText, AlertCircle, Target } from 'lucide-react';

const GrievanceRedressal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Students Grievance Redressal Committee
          </h1>
          <p className="text-xl text-primary-100">
            Ensuring Fairness, Justice, and Accountability
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Objective */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start mb-6">
              <Target className="text-primary-600 mr-4 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Objective</h2>
                <p className="text-gray-700 leading-relaxed">
                  To establish a structured and transparent mechanism for addressing and resolving grievances of students—both enrolled and prospective—ensuring fairness, justice, and accountability within the institution.
                </p>
              </div>
            </div>
          </div>

          {/* Committee Members */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="mr-2 text-primary-600" size={28} />
              Committee Members
            </h2>

            {/* Chairman */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-primary-700 mb-3">Chairman</h3>
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4">
                <p className="font-bold text-lg">Mr. Deshraj Verma</p>
                <p className="text-primary-100">Assistant Professor</p>
                <p className="text-sm text-primary-100 mt-1">(Chairman – SGRC)</p>
              </div>
            </div>

            {/* Members */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-primary-700 mb-3">Members</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="font-bold text-gray-800">Mr. Awdhesh Kumar Verma</p>
                  <p className="text-gray-600 text-sm">Senior Faculty Member</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="font-bold text-gray-800">Mr. Vikas Verma</p>
                  <p className="text-gray-600 text-sm">Assistant Professor</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="font-bold text-gray-800">Mr. Huzaifa Afzal</p>
                  <p className="text-gray-600 text-sm">Committee Member</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="font-bold text-gray-800">Ms. Devanshi Tripathi</p>
                  <p className="text-gray-600 text-sm">Assistant Professor</p>
                </div>
              </div>
            </div>

            {/* Student Representatives */}
            <div>
              <h3 className="text-lg font-bold text-primary-700 mb-3">Student Representatives (Special Invitees)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="font-bold text-gray-800">Vimlesh Yadav</p>
                  <p className="text-gray-600 text-sm">BSc Agriculture, Semester 5 – Special Invitee</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="font-bold text-gray-800">Anil Kumar Maurya</p>
                  <p className="text-gray-600 text-sm">BSc Mathematics, Semester 5 – Special Invitee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Structure and Functioning */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Structure and Functioning</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-gray-700 font-semibold">
                All grievances must be submitted to the Chairman, SGRC.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              City College Barabanki has formed the committee as per guidelines. The composition includes:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
              <li>One Professor / Senior Faculty – Chairman</li>
              <li>Four Professors / Senior Faculty Members – Members</li>
              <li>One Student Representative (Special Invitee) based on merit, sports achievements, or co-curricular performance</li>
            </ul>

            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 mb-3">Mandatory Requirements:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>At least one woman as member or chairperson</li>
                <li>At least one member from SC/ST/OBC</li>
                <li>Tenure of chairperson & members: 2 years</li>
                <li>Tenure of student invitee: 1 year</li>
                <li>Quorum: Minimum 3 members including Chairman (excluding student invitee)</li>
              </ul>
            </div>
          </div>

          {/* Process & Principles */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Scale className="mr-2 text-primary-600" size={28} />
              Process & Principles
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The SGRC functions on the principles of natural justice and ensures impartial, transparent handling of student grievances.
            </p>

            {/* Complaint Handling */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-primary-700 mb-3">Complaint Handling</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">• Complaints must be filed in writing to the Chairman, SGRC</p>
                <p className="text-gray-700">• SGRC reviews, investigates, and prepares a report</p>
                <p className="text-gray-700">• Report must be forwarded to the competent authority and a copy shared with the complainant within 15 working days</p>
              </div>
            </div>

            {/* Appeal to Ombudsman */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Appeal to Ombudsman</h3>
              <p className="text-gray-700">
                If not satisfied with the SGRC decision, the student may appeal to the Ombudsman within 15 days.
              </p>
            </div>
          </div>

          {/* Role of Ombudsman */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="mr-2 text-primary-600" size={28} />
              Role of Ombudsman
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-700">Considers appeals only after institutional remedies are exhausted</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-700 mb-2">May examine cases of:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                  <li>Examination irregularities</li>
                  <li>Evaluation-related issues</li>
                  <li>Discrimination affecting academic results</li>
                </ul>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-700">Re-evaluation requests not allowed unless a specific irregularity is shown</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-700">May seek help of amicus curiae for discrimination cases</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-700">Decision expected within 30 days</p>
              </div>
            </div>
          </div>

          {/* Institutional Commitment */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <AlertCircle className="mr-2" size={28} />
              Institutional Commitment
            </h2>
            <p className="leading-relaxed mb-4">
              City College Barabanki affirms its dedication to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ensuring a fair, respectful, and student-friendly environment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Maintaining transparency in grievance redressal</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Protecting students' rights and dignity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Promptly implementing committee recommendations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrievanceRedressal;
