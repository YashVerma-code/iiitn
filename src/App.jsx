import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Faculty from './pages/Faculty/Faculty'
import { faculties as eceFaculties,hod as eceHod, header as eceHeader } from "./data/ece/faculty"
import { faculties as cseFaculties,hod as cseHod, header as cseHeader } from "./data/cse/faculty"
import { faculties as bsFaculties,hod as bsHod, header as bsHeader } from "./data/bs/faculty"
import AboutUs from './pages/About-us/About-us'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/about" element={<AboutUs/>} />


        <Route path="/bs/faculty" element={<Faculty faculties={bsFaculties} hod={bsHod} header={bsHeader} />} />



        <Route path="/cse/faculty" element={<Faculty faculties={cseFaculties} hod={cseHod} header={cseHeader} />} />



        <Route path="/ece/faculty" element={<Faculty faculties={eceFaculties} hod={eceHod} header={eceHeader} />} />
        
      </Routes>
    </div>
  )
}

export default App
