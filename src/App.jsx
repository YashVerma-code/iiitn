import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import Hostel from './pages/Hostel'
import Placement from './pages/Placement'
import Research from './pages/Research'


function App() {

  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/cse/research" element={<Research />}/>
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />
        <Route path="/eventdetail" element={<EventDetail />} />
        <Route path="/terms" element={<Terms />} /> */}
      </Routes>
    </div>
  )
}

export default App
