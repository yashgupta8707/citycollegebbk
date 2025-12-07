import { Calendar, Download } from 'lucide-react';

const AcademicCalendar = () => {
  const calendars = [
    {
      id: 1,
      title: 'Academic Calendar - BSc Agriculture',
      path: '/calendar/Acadmic Calender Bsc AG.pdf',
      icon: Calendar,
    },
    {
      id: 2,
      title: 'Academic Calendar - BSc PCM',
      path: '/calendar/Acadmic Calender Bsc - PCM.pdf',
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Calendar
          </h1>
          <p className="text-xl text-primary-100">
            Download Academic Calendars for Different Programs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {calendars.map((calendar) => {
              const IconComponent = calendar.icon;
              return (
                <div
                  key={calendar.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                    <IconComponent className="text-white mb-3" size={40} />
                    <h3 className="text-2xl font-bold text-white">{calendar.title}</h3>
                  </div>

                  <div className="p-6">
                    <a
                      href={calendar.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 group-hover:shadow-lg"
                    >
                      <Download size={20} className="mr-2" />
                      View / Download PDF
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
