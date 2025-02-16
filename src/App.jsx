import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Faculty from './pages/Faculty/Faculty'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
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
