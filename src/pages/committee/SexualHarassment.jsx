import { Shield, Users, AlertCircle, FileText } from 'lucide-react';

const SexualHarassment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sexual Harassment Committee
          </h1>
          <p className="text-xl text-primary-100">
            Ensuring a Safe and Respectful Environment for All
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At City College Barabanki, we are dedicated to fostering an environment that supports respect, safety, and dignity for all students, faculty, and staff. As part of our commitment, the Sexual Harassment Committee plays a crucial role in upholding these values and ensuring that all members of the college community feel secure and supported.
                </p>
              </div>
            </div>
          </div>

          {/* Committee Formation */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Committee Formation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In compliance with the <strong>Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013 (POSH Act, 2013)</strong>, City College Barabanki has constituted the Sexual Harassment Committee. This committee is responsible for addressing and resolving incidents of sexual harassment, thereby ensuring a safe, respectful, and gender-sensitive environment within the college.
            </p>

            {/* Committee Members */}
            <div className="bg-primary-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="mr-2 text-primary-600" size={24} />
                Composition of the Committee
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-primary-600">
                  <h4 className="font-bold text-gray-800 mb-2">Chairperson (Presiding Officer)</h4>
                  <p className="text-gray-700"><strong>Dr. Meeta Srivastava</strong></p>
                  <p className="text-gray-600 text-sm">Assistant Professor (Senior Woman Faculty Member)</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-3">Members:</h4>
                  <ul className="space-y-3">
                    <li className="text-gray-700">
                      <strong>Mrs. Kumkum Singh</strong>
                      <p className="text-gray-600 text-sm">Assistant Professor (Woman Faculty Member)</p>
                    </li>
                    <li className="text-gray-700">
                      <strong>Mr. Awdhesh Kumar Verma</strong>
                      <p className="text-gray-600 text-sm">Assistant Professor (Senior Male Faculty Member)</p>
                    </li>
                    <li className="text-gray-700">
                      <strong>Ms. Rani Rai</strong>
                      <p className="text-gray-600 text-sm">Non-Teaching Woman Staff</p>
                    </li>
                    <li className="text-gray-700">
                      <strong>Mr. Mrityunjay Nath Garg</strong>
                      <p className="text-gray-600 text-sm">Non-Teaching Male Staff</p>
                    </li>
                    <li className="text-gray-700">
                      <strong>Ms. Aarti Bhardwaj</strong>
                      <p className="text-gray-600 text-sm">External NGO/Social Worker Representative (with experience in women's issues and legal knowledge)</p>
                    </li>
                    <li className="text-gray-700">
                      <strong>Ms. Savita Pandey</strong>
                      <p className="text-gray-600 text-sm">BSc Zoology Student</p>
                    </li>
                    <li className="text-gray-700">
                      <strong>Mr. Rakesh Awasthi</strong>
                      <p className="text-gray-600 text-sm">BSc Agriculture Student</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Functions and Responsibilities */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Functions and Responsibilities of the Committee</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Complaint Handling:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>To receive written complaints of sexual harassment from any woman student, staff, or faculty member.</li>
                  <li>To acknowledge the complaint and initiate proceedings within a reasonable time frame.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Investigation & Inquiry:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>To conduct a thorough, unbiased, and time-bound inquiry into the complaints.</li>
                  <li>To maintain confidentiality and ensure sensitivity to the complainant's needs.</li>
                  <li>To complete the inquiry and submit the final report within 90 days.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Recommendations & Action:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>To recommend appropriate disciplinary or corrective action to the college administration.</li>
                  <li>To suggest interim relief to the complainant (such as transfer, leave, or protection from retaliation, if necessary).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Awareness & Capacity Building:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>To organize orientation programs, workshops, and training sessions to raise awareness about gender sensitivity and workplace ethics.</li>
                  <li>To disseminate information about rights, complaint procedures, and safety measures.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Prevention & Policy Implementation:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>To create and maintain a safe and secure campus environment free from harassment and discrimination.</li>
                  <li>To review and update college policies related to harassment and workplace behavior regularly.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Guidelines */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="mr-2 text-primary-600" size={28} />
              Key Guidelines for Complainants
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Eligibility:</h3>
                <p className="text-gray-700">Any woman student, staff, or faculty member of the college can approach the committee.</p>
              </div>

              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Time Limit:</h3>
                <p className="text-gray-700">Complaints must be filed within 3 months of the incident (extendable by the committee in special circumstances).</p>
              </div>

              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Confidentiality:</h3>
                <p className="text-gray-700">The identities of the complainant, respondent, and witnesses will remain strictly confidential throughout the process.</p>
              </div>

              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Fair Hearing:</h3>
                <p className="text-gray-700">Both the complainant and respondent will be given an equal opportunity to present their case.</p>
              </div>

              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Protection from Retaliation:</h3>
                <p className="text-gray-700">No complainant will face victimization or adverse consequences for filing a complaint.</p>
              </div>
            </div>
          </div>

          {/* College's Commitment */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AlertCircle className="mr-2" size={28} />
              College's Commitment
            </h2>
            <p className="leading-relaxed">
              City College Barabanki is fully committed to ensuring a learning and working environment free from sexual harassment, intimidation, and exploitation. The college adopts a strict <strong>zero-tolerance policy</strong> toward any incidents of sexual harassment and pledges to act promptly on the recommendations of the Sexual Harassment Committee. Full support will be provided to the complainant throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexualHarassment;
