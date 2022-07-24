import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"
function App() {
  
  return (
    <div className="app">
      <Navbar/>
      <AboutUs/>
      <Skills />
      <Footer/>
    </div>
  );
}

export default App;
