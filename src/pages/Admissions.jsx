import {
  Calendar,
  FileText,
  CheckCircle,
  DollarSign,
  Download,
  AlertCircle,
  Users,
  ClipboardList,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const admissionProcess = [
    {
      step: '1',
      title: 'Check Eligibility',
      description: 'Review program requirements and ensure you meet the eligibility criteria',
      icon: <ClipboardList size={32} />
    },
    {
      step: '2',
      title: 'Fill Application Form',
      description: 'Complete the online or offline application form with accurate information',
      icon: <FileText size={32} />
    },
    {
      step: '3',
      title: 'Submit Documents',
      description: 'Upload/submit required documents including certificates and ID proof',
      icon: <Upload size={32} />
    },
    {
      step: '4',
      title: 'Pay Application Fee',
      description: 'Pay the non-refundable application fee through available payment methods',
      icon: <DollarSign size={32} />
    },
    {
      step: '5',
      title: 'Entrance Test (if applicable)',
      description: 'Appear for entrance examination as per program requirements',
      icon: <BookOpen size={32} />
    },
    {
      step: '6',
      title: 'Merit List & Counseling',
      description: 'Check merit list and attend counseling session for seat allocation',
      icon: <Users size={32} />
    },
    {
      step: '7',
      title: 'Complete Admission',
      description: 'Pay fees, complete formalities, and confirm your admission',
      icon: <CheckCircle size={32} />
    }
  ];

  const documents = [
    'Class 10th Mark Sheet & Certificate',
    'Class 12th Mark Sheet & Certificate',
    'Bachelor\'s Degree Certificate (for PG programs)',
    'Transfer Certificate from previous institution',
    'Migration Certificate (if applicable)',
    'Character Certificate',
    'Caste Certificate (if applicable)',
    'Aadhaar Card',
    'Recent Passport Size Photographs',
    'Income Certificate (for scholarship applicants)'
  ];

  const feeStructure = [
    {
      program: 'Undergraduate Programs',
      tuitionFee: '₹ XX,XXX per year',
      admissionFee: '₹ X,XXX (one-time)',
      developmentFee: '₹ X,XXX per year',
      examFee: '₹ X,XXX per semester',
      total: '₹ XX,XXX per year'
    },
    {
      program: 'Postgraduate Programs',
      tuitionFee: '₹ XX,XXX per year',
      admissionFee: '₹ X,XXX (one-time)',
      developmentFee: '₹ X,XXX per year',
      examFee: '₹ X,XXX per semester',
      total: '₹ XX,XXX per year'
    },
    {
      program: 'Diploma Programs',
      tuitionFee: '₹ XX,XXX per year',
      admissionFee: '₹ X,XXX (one-time)',
      developmentFee: '₹ X,XXX per year',
      examFee: '₹ X,XXX per year',
      total: '₹ XX,XXX per year'
    }
  ];

  const importantDates = [
    { event: 'Application Form Release', date: 'Month XX, 20XX' },
    { event: 'Last Date for Application', date: 'Month XX, 20XX' },
    { event: 'Entrance Test (if applicable)', date: 'Month XX, 20XX' },
    { event: 'Merit List Announcement', date: 'Month XX, 20XX' },
    { event: 'Counseling Schedule', date: 'Month XX, 20XX' },
    { event: 'Last Date for Fee Payment', date: 'Month XX, 20XX' },
    { event: 'Commencement of Classes', date: 'Month XX, 20XX' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Admissions & Fee
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Start Your Journey to Academic Excellence
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                <Download size={20} className="mr-2" />
                Download Prospectus
              </button>
              <Link to="/contact" className="btn-secondary border-2 border-white text-black hover:bg-white hover:text-primary-600">
                Contact Admissions Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to secure your admission
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admissionProcess.map((process, index) => (
                <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {process.step}
                  </div>
                  <div className="text-primary-600 mb-4 mt-2">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calendar size={48} className="text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Academic Calendar
              </h2>
              <p className="text-lg text-gray-600">
                Important dates for the admission cycle
              </p>
            </div>

            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Event</th>
                      <th className="px-6 py-4 text-left font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importantDates.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-gray-800">{item.event}</td>
                        <td className="px-6 py-4 text-gray-600">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Fee Structure */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fee Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent and competitive fee structure for all programs
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {feeStructure.map((fee, index) => (
                <div key={index} className="card overflow-hidden">
                  <div className="bg-primary-600 text-white p-6 text-center">
                    <h3 className="text-xl font-bold">{fee.program}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between pb-3 border-b border-gray-200">
                        <span className="text-gray-600">Tuition Fee</span>
                        <span className="font-semibold text-gray-800">{fee.tuitionFee}</span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-gray-200">
                        <span className="text-gray-600">Admission Fee</span>
                        <span className="font-semibold text-gray-800">{fee.admissionFee}</span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-gray-200">
                        <span className="text-gray-600">Development Fee</span>
                        <span className="font-semibold text-gray-800">{fee.developmentFee}</span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-gray-200">
                        <span className="text-gray-600">Exam Fee</span>
                        <span className="font-semibold text-gray-800">{fee.examFee}</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="font-bold text-gray-800">Total</span>
                        <span className="font-bold text-primary-600 text-lg">{fee.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle size={24} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Note:</strong> Fees are subject to revision. Additional charges may apply for hostel,
                    transport, and other facilities. Scholarships and financial assistance available for eligible students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Required Documents
              </h2>
              <p className="text-lg text-gray-600">
                Documents needed for the admission process
              </p>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Important:</strong> All documents must be attested/self-attested as per requirements.
                  Original documents will be verified during the admission process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Refund Policy */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Fee Refund Policy
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Withdrawal Before Course Commencement</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="text-gray-700 list-disc">100% refund (excluding application fee) if withdrawal is made 30 days before course start</li>
                    <li className="text-gray-700 list-disc">75% refund if withdrawal is made 15-30 days before course start</li>
                    <li className="text-gray-700 list-disc">50% refund if withdrawal is made 7-15 days before course start</li>
                    <li className="text-gray-700 list-disc">No refund if withdrawal is made within 7 days of course start</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Withdrawal After Course Commencement</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="text-gray-700 list-disc">No refund of tuition fee after classes have commenced</li>
                    <li className="text-gray-700 list-disc">Caution deposit (if applicable) will be refunded after deducting any dues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Processing Time</h3>
                  <p className="text-gray-700">
                    Refund requests will be processed within 30-45 working days from the date of receiving
                    the written request along with required documents.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Application fee and registration fee are non-refundable under any circumstances.
                    The institution reserves the right to modify the refund policy as per regulatory guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your future. Apply now and join our community of learners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Apply Online
            </button>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Assistance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Upload icon component (simple implementation)
const Upload = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export default Admissions;
