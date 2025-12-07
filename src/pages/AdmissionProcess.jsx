import { CheckCircle, FileText, Users, ClipboardCheck, School, UserCheck } from 'lucide-react';

const AdmissionProcess = () => {
  const steps = [
    {
      icon: <FileText size={40} />,
      title: 'Filling of Online Form',
      description: 'Complete the application form available on the university\'s official website.'
    },
    {
      icon: <ClipboardCheck size={40} />,
      title: 'Entrance Examination',
      description: 'Appear for the entrance examination as per the scheduled date announced by the university.'
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Merit List',
      description: 'Check the merit list published by the university, listing candidates eligible based on their examination scores.'
    },
    {
      icon: <Users size={40} />,
      title: 'Counselling',
      description: 'Participate in the counselling process to select your preferred course and college based on merit and availability.'
    },
    {
      icon: <School size={40} />,
      title: 'Report to the College',
      description: 'Report to the allotted college after selection to proceed with the admission formalities.'
    },
    {
      icon: <UserCheck size={40} />,
      title: 'Student Admitted',
      description: 'Complete the admission formalities and become officially enrolled as a student.'
    }
  ];

  const feeStructure = [
    {
      course: 'BSC AG (4-Year)',
      duration: '4 Years',
      fees: '₹6,000'
    },
    {
      course: 'BSC (Zoology, Math, Physics, Botany, Chemistry)',
      duration: '3 Years',
      fees: '₹3,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Process & Guidelines</h1>
          <p className="text-xl text-primary-100">Your pathway to joining City College Barabanki</p>
        </div>
      </div>

      {/* Admission Process Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admission Process</h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="shrink-0 bg-primary-100 text-primary-600 p-4 rounded-full">
                    {step.icon}
                  </div>
                  <div className="grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary-600 font-bold text-xl">{index + 1}.</span>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admission Fees Guidelines Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Admission Fees Guidelines</h2>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Specific details regarding admission fees are typically provided on the university's official website
                or during the application process. Fees may vary based on the course and specific requirements,
                including tuition and additional charges.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-600 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-yellow-800 mb-2">Note:</p>
                    <p className="text-yellow-900">
                      Always refer to the official university guidelines for the most accurate and updated information
                      regarding fee structures and admission requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fee Structure Table */}
              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-primary-600 text-white">
                      <th className="py-4 px-6 text-left font-bold">Course</th>
                      <th className="py-4 px-6 text-left font-bold">Duration</th>
                      <th className="py-4 px-6 text-left font-bold">Fees (Per Semester)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((item, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}>
                        <td className="py-4 px-6 text-gray-800">{item.course}</td>
                        <td className="py-4 px-6 text-gray-700">{item.duration}</td>
                        <td className="py-4 px-6 text-gray-800 font-semibold">{item.fees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
