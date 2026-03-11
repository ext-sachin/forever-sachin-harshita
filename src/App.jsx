import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Map from "./components/Map";
import WhatsAppRSVP from "./components/WhatsAppRSVP";
import Footer from "./components/Footer";
import Music from "./components/Music";

/* Animation components */

import Background3D from "./components/Background3D";
import FloatingHearts from "./components/FloatingHearts";
import Petals from "./components/Petals";
// import CinematicHero from "./components/CinematicHero";
import WeddingDetails from "./components/WeddingDetails";
import MomentsSlider from "./components/MomentsSlider";
import CinematicIntro from "./components/CinematicIntro";

function App() {

  const [inviteOpen, setInviteOpen] = useState(false);

  return (
    <>
      {/* Cinematic Intro */}
      {!inviteOpen && (
        <CinematicIntro setOpen={setInviteOpen} />
      )}

      {/* Main Website */}
      {inviteOpen && (
        <>
          {/* Animated Background */}
          <Background3D />

          {/* Floating animations */}
          <FloatingHearts />
          <Petals />

          {/* Music */}
          <Music />

          {/* Navigation */}
          <Navbar />

          {/* Sections */}
          <Hero />

          <Countdown />

          <MomentsSlider />

          <WeddingDetails />

          <Map />

          <WhatsAppRSVP />

          <Footer />
        </>
      )}
    </>
  );
}

export default App;