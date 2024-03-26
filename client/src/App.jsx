import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Ourwork from './pages/Ourwork';
import Ourmember from './pages/Ourmember';
import Event from './pages/Event';
import Contactus from './pages/Contactus';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/OurWork" element={<Ourwork/>}/>
            <Route path="/Ourmember" element={<Ourmember/>}/>
            <Route path="/Event" element={<Event/>}/>
            <Route path="/Contactus" element={<Contactus/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
