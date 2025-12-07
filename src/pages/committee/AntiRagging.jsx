import { Shield, Users, AlertTriangle, BookOpen } from 'lucide-react';

const AntiRagging = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Anti Ragging Committee
          </h1>
          <p className="text-xl text-primary-100">
            Creating a Safe and Harmonious Campus Environment
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Zero Tolerance Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ragging is a <strong>heinous crime and a criminal offence</strong> as declared by the Supreme Court of India. CITY COLLEGE has been successful in creating a ragging-free campus. Our College believes in fostering a harmonious relationship amongst its students and strictly condemns ragging.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We have an anti-ragging cell which comprises of the Principal and other staff members. The students are sensitized on the ill effects of ragging and the legal proceedings in curbing the practice.
                </p>
              </div>
            </div>
          </div>

          {/* Awareness and Prevention */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="mr-2 text-primary-600" size={28} />
              Awareness and Prevention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Awareness is created via orientation programmes in the first semester as well as before the commencement of each academic year. The hostel too is under strict vigilance and we ensure that students learn to respect and accept peers beyond their cultural and regional differences.
            </p>
          </div>

          {/* Committee Members */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="mr-2 text-primary-600" size={28} />
              Committee Members
            </h2>

            <div className="space-y-4">
              {/* Chairperson */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4">
                <p className="font-bold text-lg">Dr. Meeta Srivastava</p>
                <p className="text-primary-100">Chairperson - Senior Female Teaching Staff</p>
              </div>

              {/* Faculty Members */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="font-bold text-gray-800">Ms. Shivani Mishra</p>
                  <p className="text-gray-600 text-sm">Assistant Professor</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="font-bold text-gray-800">Rekha Verma</p>
                  <p className="text-gray-600 text-sm">Assistant Professor</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="font-bold text-gray-800">Mr. Harikesh</p>
                  <p className="text-gray-600 text-sm">Assistant Professor</p>
                </div>
              </div>

              {/* Non-Teaching Staff */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">Non-Teaching Staff</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="font-bold text-gray-800">Mr. Ravindra Srivastava</p>
                    <p className="text-gray-600 text-sm">Non Teaching Staff</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="font-bold text-gray-800">Mr. Huzaifa Afzal</p>
                    <p className="text-gray-600 text-sm">Non Teaching Staff</p>
                  </div>
                </div>
              </div>

              {/* Student Representatives */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">Student Representatives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="font-bold text-gray-800">Akhilesh Singh</p>
                    <p className="text-gray-600 text-sm">BSc Agriculture Student</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="font-bold text-gray-800">Ram Pratap Yadav</p>
                    <p className="text-gray-600 text-sm">BSc Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <AlertTriangle className="mr-2" size={28} />
              Our Commitment to a Ragging-Free Campus
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                City College Barabanki is committed to maintaining a safe, secure, and ragging-free environment for all students. We take strict action against any form of ragging and ensure that:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>All students are made aware of anti-ragging laws and consequences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regular orientation and awareness programs are conducted</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The campus and hostels are under constant vigilance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Students feel safe to report any incidents without fear</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Swift and strict action is taken against offenders</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How to Report */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Report Ragging</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you or anyone you know experiences ragging, please report it immediately to:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>• Any member of the Anti-Ragging Committee</li>
                <li>• The Principal's office</li>
                <li>• Through the complaint box at the college office</li>
                <li>• Via phone: 8400133333</li>
                <li>• Via email: citycollegebarabanki@gmail.com</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                All complaints will be handled with strict confidentiality and immediate action will be taken.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;
