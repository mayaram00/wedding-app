import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { useAppSelector } from "./app/hooks";
import { OurJourney } from "./components/our-journey";
import { Photos } from "./components/photos";
import { WeddingParty } from "./components/wedding-party/wedding-party";
import { Schedule } from "./components/schedule";
import { RSVP } from "./components/rsvp";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const selectedPage = useAppSelector((state) => state.pages?.selectedPage);
  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="body">
          {selectedPage === "Home" && <Home />}
          {selectedPage === "Our Journey" && <OurJourney />}
          {selectedPage === "Photos" && <Photos />}
          {selectedPage === "Wedding Party" && <WeddingParty />}
          {selectedPage === "Schedule" && <Schedule />}
          {selectedPage === "RSVP" && <RSVP />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
