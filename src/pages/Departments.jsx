import { BookOpen, Users, Award, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const departments = [
    {
      name: 'Arts & Humanities',
      description: 'Exploring human culture, thought, and creative expression',
      hod: 'Dr. [Name]',
      email: 'arts@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      programs: ['BA', 'MA'],
      subjects: ['English', 'Hindi', 'History', 'Political Science', 'Sociology', 'Philosophy'],
      icon: <BookOpen size={48} />
    },
    {
      name: 'Science & Technology',
      description: 'Advancing knowledge through scientific inquiry and innovation',
      hod: 'Dr. [Name]',
      email: 'science@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      programs: ['BSc', 'MSc'],
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Biotechnology'],
      icon: <BookOpen size={48} />
    },
    {
      name: 'Commerce & Management',
      description: 'Preparing future business leaders and entrepreneurs',
      hod: 'Dr. [Name]',
      email: 'commerce@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      programs: ['BCom', 'MCom', 'MBA'],
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Finance', 'Marketing', 'Management'],
      icon: <BookOpen size={48} />
    },
    {
      name: 'Education',
      description: 'Shaping the educators of tomorrow',
      hod: 'Dr. [Name]',
      email: 'education@citycollegebarabanki.edu',
      phone: '+91 XXXXXXXXXX',
      programs: ['BEd', 'MEd'],
      subjects: ['Educational Psychology', 'Pedagogy', 'Curriculum Development', 'Assessment', 'Educational Technology'],
      icon: <BookOpen size={48} />
    }
  ];

  const facilities = [
    {
      icon: <Users size={32} />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Modern Curriculum',
      description: 'Updated syllabus aligned with industry needs'
    },
    {
      icon: <Award size={32} />,
      title: 'Research Opportunities',
      description: 'Encourage research and innovation'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Academic Departments
            </h1>
            <p className="text-xl md:text-2xl">
              Excellence Across Diverse Disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive academic programs across multiple disciplines
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <div key={index} className="card p-8 md:p-10">
                <div className="grid md:grid-cols-[100px_1fr] gap-6">
                  <div className="text-primary-600 flex justify-center md:justify-start">
                    {dept.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {dept.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Programs Offered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {dept.programs.map((program, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Subjects/Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {dept.subjects.slice(0, 4).map((subject, idx) => (
                            <span key={idx} className="text-sm text-gray-700">
                              {subject}{idx < 3 ? ',' : '...'}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Head of Department</p>
                        <p className="font-semibold text-gray-800">{dept.hod}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Email</p>
                        <a href={`mailto:${dept.email}`} className="text-primary-600 hover:text-primary-700 flex items-center text-sm">
                          <Mail size={14} className="mr-1" />
                          {dept.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Contact</p>
                        <a href={`tel:${dept.phone}`} className="text-primary-600 hover:text-primary-700 flex items-center text-sm">
                          <Phone size={14} className="mr-1" />
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Department Features
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-all">
                <div className="text-primary-600 flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interdisciplinary Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interdisciplinary Programs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                City College Barabanki encourages interdisciplinary learning by offering courses
                that combine multiple disciplines. Students can pursue minor courses from different
                departments and participate in cross-departmental research projects.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Minor Programs</h3>
                  <p className="text-sm text-gray-700">
                    Students can opt for minor programs from departments other than their major,
                    allowing them to explore diverse subjects and broaden their knowledge base.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Research Collaborations</h3>
                  <p className="text-sm text-gray-700">
                    Departments collaborate on research projects, encouraging students to work
                    across disciplines and develop a holistic understanding of complex problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore Our Programs
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find the right program for your academic and career goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Programs
            </Link>
            <Link to="/admissions" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
