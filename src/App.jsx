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
import AdmissionProcess from './pages/AdmissionProcess';
import FeeRefundPolicy from './pages/FeeRefundPolicy';
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
// Committee Pages
import SexualHarassment from './pages/committee/SexualHarassment';
import ICC from './pages/committee/ICC';
import GrievanceRedressal from './pages/committee/GrievanceRedressal';
import AntiRagging from './pages/committee/AntiRagging';
import Gallery from './pages/Gallery';
import Acts from './pages/Acts';

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
            <Route path="/acts" element={<Acts />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/iqac" element={<IQAC />} />
            <Route path="/statutes" element={<Statutes />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admission-process" element={<AdmissionProcess />} />
            <Route path="/fee-refund-policy" element={<FeeRefundPolicy />} />
            <Route path="/search" element={<Search />} />
            <Route path="/administration" element={<Administration />} />
            {/* Administration Internal Pages (external links redirect to rmlau.ac.in) */}
            <Route path="/ombudsperson" element={<Ombudsperson />} />
            <Route path="/executive-council" element={<ExecutiveCouncil />} />
            <Route path="/internal-complaint-committee" element={<InternalComplaintCommittee />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            {/* Committee Pages */}
            <Route path="/committee/sexual-harassment" element={<SexualHarassment />} />
            <Route path="/committee/icc" element={<ICC />} />
            <Route path="/committee/grievance-redressal" element={<GrievanceRedressal />} />
            <Route path="/committee/anti-ragging" element={<AntiRagging />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;