import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Solutions from './Pages/Solutions';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contacts';
import ScheduleMeeting from './Pages/ScheduleMeeting';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Team from './Pages/Team';
import Preloader from './Components/Preloader';
import WhatsAppButton from './Components/Whatsup';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <WhatsAppButton/>
          <Footer />

        </Router>
      )}
    </>
  );
}

export default App;
