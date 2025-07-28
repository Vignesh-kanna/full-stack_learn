import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReportProvider } from './context/ReportContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <ReportProvider>
      <Router>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ReportProvider>
  );
}

export default App;
