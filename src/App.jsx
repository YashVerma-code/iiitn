import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty/Faculty";
import AboutUs from "./pages/About-us/About-us";
import Projects from "./pages/Projecs/Projects";
import Events from './pages/Events/Events'
import { Pastevents, UpcomingEvents } from "./data/events/data";
import {Upcomingprojects as eceUpcomingProjects,Completedprojects as eceCompletedProjects,headerImg as eceHeaderImg} from "./data/ece/projects";
import {Upcomingprojects as cseUpcomingProjects,Completedprojects as cseCompletedProjects,headerImg as cseHeaderImg,consultancyProjects} from "./data/cse/projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/:dept/faculty" element={<Faculty />} />

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
      </Routes>
    </div>
  );
}

export default App;
