import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Facilities from './pages/Facilities';
import About from './pages/About';
import DirectorMessage from './pages/DirectorMessage';
import VisionMission from './pages/VisionMission';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import Administration from './pages/Administration';
import Admissions from './pages/Admissions';
import Research from './pages/Research';
import AcademicCalendar from './pages/AcademicCalendar';
import Departments from './pages/Departments';
import IQAC from './pages/IQAC';
import Statutes from './pages/Statutes';
// Administration Pages (internal only - external links handled in Navbar)
import Ombudsperson from './pages/Ombudsperson';
import ExecutiveCouncil from './pages/ExecutiveCouncil';
import InternalComplaintCommittee from './pages/InternalComplaintCommittee';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/director-message" element={<DirectorMessage />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/iqac" element={<IQAC />} />
            <Route path="/statutes" element={<Statutes />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/search" element={<Search />} />
            <Route path="/administration" element={<Administration />} />
            {/* Administration Internal Pages (external links redirect to rmlau.ac.in) */}
            <Route path="/ombudsperson" element={<Ombudsperson />} />
            <Route path="/executive-council" element={<ExecutiveCouncil />} />
            <Route path="/internal-complaint-committee" element={<InternalComplaintCommittee />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;