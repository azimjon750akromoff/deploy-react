import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks";
import About_us from "./pages/About_us";
import Services from "./pages/Services";
import More from "./pages/More";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/home" element = {<Home/>}/>

        </Routes>


        
        <Routes>
          <Route path="/about" element={<About_us />} />
        </Routes>

        <Routes>
          <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>

        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>

        <Routes>
          <Route path="/more" element={<More />} />
        </Routes>

        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
