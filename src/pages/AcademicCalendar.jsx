import { Calendar, Clock, BookOpen, FileText, Download } from 'lucide-react';

const AcademicCalendar = () => {
  const academicSessions = [
    {
      semester: 'Odd Semester (July - December)',
      events: [
        { event: 'Session Commencement', date: 'First week of July' },
        { event: 'Last Date for Admission', date: 'End of July' },
        { event: 'Mid-Semester Exams', date: 'September' },
        { event: 'Last Date for Course Withdrawal', date: 'Mid-October' },
        { event: 'End-Semester Exams', date: 'November - December' },
        { event: 'Winter Break', date: 'Mid-December onwards' },
      ]
    },
    {
      semester: 'Even Semester (January - June)',
      events: [
        { event: 'Session Commencement', date: 'First week of January' },
        { event: 'Last Date for Admission', date: 'End of January' },
        { event: 'Mid-Semester Exams', date: 'March' },
        { event: 'Last Date for Course Withdrawal', date: 'Mid-April' },
        { event: 'End-Semester Exams', date: 'May - June' },
        { event: 'Summer Break', date: 'Mid-June onwards' },
      ]
    }
  ];

  const holidays = [
    { occasion: 'Republic Day', date: 'January 26' },
    { occasion: 'Holi', date: 'March (as per lunar calendar)' },
    { occasion: 'Independence Day', date: 'August 15' },
    { occasion: 'Gandhi Jayanti', date: 'October 2' },
    { occasion: 'Diwali Break', date: 'October/November (3-5 days)' },
    { occasion: 'Christmas', date: 'December 25' },
    { occasion: 'Other Festivals', date: 'As per Government notification' },
  ];

  const importantDates = [
    {
      icon: <BookOpen size={32} />,
      title: 'Registration',
      description: 'Course registration for continuing students',
      date: 'First 2 weeks of semester'
    },
    {
      icon: <FileText size={32} />,
      title: 'Add/Drop Period',
      description: 'Period to add or drop courses',
      date: 'Within 2 weeks of semester start'
    },
    {
      icon: <Clock size={32} />,
      title: 'Attendance Requirement',
      description: 'Minimum 75% attendance mandatory',
      date: 'Throughout semester'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Result Declaration',
      description: 'Semester results announced',
      date: 'Within 30 days of exam completion'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Calendar size={48} className="mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Academic Calendar</h1>
            </div>
            <p className="text-xl md:text-2xl mb-6">
              Important Academic Dates and Events
            </p>
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center">
              <Download size={20} className="mr-2" />
              Download Full Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Academic Year Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Year 2024-25
            </h2>
            <p className="text-lg text-gray-600">
              The academic year is divided into two semesters
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {academicSessions.map((session, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-2xl font-bold text-primary-600 mb-6">
                  {session.semester}
                </h3>
                <div className="space-y-4">
                  {session.events.map((item, idx) => (
                    <div key={idx} className="flex items-start pb-4 border-b border-gray-200 last:border-0">
                      <Clock size={18} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800">{item.event}</h4>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Important Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {importantDates.map((item, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-all">
                <div className="text-primary-600 flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {item.description}
                </p>
                <p className="text-xs font-semibold text-primary-600">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holidays */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Academic Holidays
              </h2>
              <p className="text-lg text-gray-600">
                Scheduled holidays and breaks during the academic year
              </p>
            </div>

            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Occasion</th>
                      <th className="px-6 py-4 text-left font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holidays.map((holiday, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-gray-800">{holiday.occasion}</td>
                        <td className="px-6 py-4 text-gray-600">{holiday.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-yellow-50 border-t border-yellow-200">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> The college observes all national and state government declared
                  holidays. The calendar is subject to change as per university notifications and
                  government directives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Examination Schedule
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Internal Assessments</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="text-gray-700 list-disc">
                      <strong>Mid-Semester Exam:</strong> Conducted in the middle of each semester (20% weightage)
                    </li>
                    <li className="text-gray-700 list-disc">
                      <strong>Internal Assessment:</strong> Continuous evaluation through assignments, quizzes, and class participation (10% weightage)
                    </li>
                    <li className="text-gray-700 list-disc">
                      <strong>Practical/Lab Exams:</strong> Conducted as per course requirements (10-20% weightage)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">End-Semester Examinations</h3>
                  <ul className="space-y-2 pl-6">
                    <li className="text-gray-700 list-disc">
                      <strong>Theory Papers:</strong> 3-hour duration (60-70% weightage)
                    </li>
                    <li className="text-gray-700 list-disc">
                      <strong>Practical Exams:</strong> As per department schedule
                    </li>
                    <li className="text-gray-700 list-disc">
                      <strong>Project/Dissertation:</strong> For final year students (as applicable)
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Examination Rules:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Minimum 75% attendance required to appear in end-semester exams
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Students must carry their admit cards and ID cards
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Re-evaluation and reappear options available as per university rules
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Check our notice board regularly for updates and changes to the academic calendar
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe to Updates
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Notice Board
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;
