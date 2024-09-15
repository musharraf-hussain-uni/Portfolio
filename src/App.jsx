import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/loadingScreen"; // Import the loading screen
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Hide the loading screen after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen /> // Show loading screen if loading is true
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
