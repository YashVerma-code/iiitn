
import {Upcomingprojects as eceUpcomingProjects,Completedprojects as eceCompletedProjects,headerImg as eceHeaderImg} from "./data/ece/projects";
import {Upcomingprojects as cseUpcomingProjects,Completedprojects as cseCompletedProjects,headerImg as cseHeaderImg,consultancyProjects} from "./data/cse/projects";
import { faculties as bsFaculties,hod as bsHod, header as bsHeader } from "./data/bs/faculty"
import AboutUs from './pages/About-us/About-us'
import Projects from './pages/Projecs/Projects'
import Events from './pages/Events/Events'
import { Pastevents, UpcomingEvents } from './data/events/data'

function f(){
    return<>
<Route path="/ece/faculty" element={<Faculty faculties={eceFaculties} hod={eceHod} header={eceHeader} />} />

<Route path='/ece/projects' element={<Projects Upcomingprojects={eceUpcomingProjects} Completedprojects={eceCompletedProjects} headerImg={eceHeaderImg}/>}/>

<Route path='/cse/projects' element={<Projects Upcomingprojects={cseUpcomingProjects} Completedprojects={cseCompletedProjects} headerImg={cseHeaderImg} consultancyProjects={consultancyProjects}/>}/>

<Route path="/events" element={<Events Pastevents={Pastevents} UpcomingEvents={UpcomingEvents} headerImg={eceHeaderImg}/>}/>
    </>
}