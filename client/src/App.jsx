import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Ourwork from './pages/Ourwork';
import Ourmember from './pages/Ourmember';
import Event from './pages/Event';
import Contactus from './pages/Contactus';
import Topbar from './components/Topbar';
import { useState } from 'react';
function App() {
  const [selected, setselected] = useState("home");
  return (
    <div className="App">
      <Topbar selected={selected}/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home setselected={setselected}/>}/>
            <Route path="/About" element={<About setselected={setselected}/>}/>
            <Route path="/OurWork" element={<Ourwork setselected={setselected}/>}/>
            <Route path="/Ourmember" element={<Ourmember setselected={setselected}/>}/>
            <Route path="/Event" element={<Event setselected={setselected}/>}/>
            <Route path="/Contactus" element={<Contactus setselected={setselected}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
