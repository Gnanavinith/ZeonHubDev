import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Solutions from './Pages/Solutions';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import ScheduleMeeting from './Pages/ScheduleMeeting';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
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
      </Routes>
      <Footer />
    </Router>
  </>
  )
}

export default App
