import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import StudentProfile from './components/StudentProfile';
function App() {
  return (
  <Router>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<About />} />
        <Route path="/contacts" element={<NavBar />} />
        <Route path="/contacts" element={<StudentProfile />} />
        
      </Routes>
    </Router> 
  );
}

export default App;
