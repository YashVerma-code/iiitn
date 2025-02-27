import Hostel from './pages/Hostel'
import Placement from './pages/Placement'
import Research from './pages/Research'

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty/Faculty";
import AboutUs from "./pages/About-us/About-us";
import Projects from "./pages/Projecs/Projects";
import Events from "./pages/Events/Events";
import { Pastevents, UpcomingEvents } from "./data/events/data";
import {
  Upcomingprojects as eceUpcomingProjects,
  Completedprojects as eceCompletedProjects,
  headerImg as eceHeaderImg,
} from "./data/ece/projects";
import {
  Upcomingprojects as cseUpcomingProjects,
  Completedprojects as cseCompletedProjects,
  headerImg as cseHeaderImg,
  consultancyProjects,
} from "./data/cse/projects";
import Navbar from "./components/navbar";
import Governance from "./pages/governance/Governance";
import DepartmentPage from "./pages/department-about/DeptAbout";
import Footer from './components/footer';
import ChairmanProfile from './components/Profile';
import Administration from './pages/administration/Administration';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/:dept/faculty" element={<Faculty />} />
          
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/cse/research" element={<Research />}/>

        {/* <Route path="/bs/faculty" element={<Faculty faculties={bsFaculties} hod={bsHod} header={bsHeader} />} />



        <Route path="/cse/faculty" element={<Faculty faculties={cseFaculties} hod={cseHod} header={cseHeader} />} />



        <Route path="/ece/faculty" element={<Faculty faculties={eceFaculties} hod={eceHod} header={eceHeader} />} /> */}

        <Route
          path="/ece/projects"
          element={
            <Projects
              Upcomingprojects={eceUpcomingProjects}
              Completedprojects={eceCompletedProjects}
              headerImg={eceHeaderImg}
            />
          }
        />

        <Route
          path="/cse/projects"
          element={
            <Projects
              Upcomingprojects={cseUpcomingProjects}
              Completedprojects={cseCompletedProjects}
              headerImg={cseHeaderImg}
              consultancyProjects={consultancyProjects}
            />
          }
        />

        <Route
          path="/events"
          element={
            <Events
              Pastevents={Pastevents}
              UpcomingEvents={UpcomingEvents}
              headerImg={eceHeaderImg}
            />
          }
        />

        <Route
          path="/governance/:committee"
          element={<Governance headerImg={eceHeaderImg} />}
        />

        <Route path="/:dept/about" element={<DepartmentPage />} />
        <Route path="/administration/:section" element={<Administration />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
