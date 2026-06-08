import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
// import Rating from "./components/Rating"; // Hidden for now

function App() {
  const [visitorInfo, setVisitorInfo] = useState({
    ip: "Fetching...",
    location: "Fetching...",
    latitude: "N/A",
    longitude: "N/A"
  });

  useEffect(() => {
    // 1. Fetch IP Address
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        setVisitorInfo(prev => ({ ...prev, ip: data.ip }));
      })
      .catch(err => console.error("Failed to fetch IP", err));

    // 2. Ask for Geolocation on load
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          
          try {
            // Optional: reverse geocoding to get City, Country
            // Since we can't reliably use an external API without keys, we just use lat/lon
            setVisitorInfo(prev => ({
              ...prev,
              latitude: lat,
              longitude: lon,
              location: `Lat: ${lat}, Lon: ${lon}`
            }));
          } catch (error) {
            console.error("Geocoding failed", error);
          }
        },
        (error) => {
          console.warn("Geolocation denied or failed", error);
          setVisitorInfo(prev => ({ ...prev, location: "Permission Denied/Unavailable" }));
        }
      );
    } else {
      setVisitorInfo(prev => ({ ...prev, location: "Geolocation not supported" }));
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume visitorInfo={visitorInfo} />
      {/* <Rating /> */}
      <Contact />
    </div>
  );
}

export default App;
