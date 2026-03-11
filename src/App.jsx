import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Map from "./components/Map";
import Music from "./components/Music";

/* Animation components */

import Background3D from "./components/Background3D";
import FloatingHearts from "./components/FloatingHearts";
import Petals from "./components/Petals";
// import CinematicHero from "./components/CinematicHero";
import WeddingDetails from "./components/WeddingDetails";
import MomentsSlider from "./components/MomentsSlider";
import CinematicIntro from "./components/CinematicIntro";
import WeddingLoader from "./components/WeddingLoader";
import ShareButtons from "./components/ShareButtons";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [inviteOpen, setInviteOpen] = useState(false);

  useEffect(() => {
    let minimumDelayDone = false;
    let pageLoaded = document.readyState === "complete";

    const finishLoading = () => {
      if (minimumDelayDone && pageLoaded) {
        setIsLoading(false);
      }
    };

    const minimumDelayTimer = setTimeout(() => {
      minimumDelayDone = true;
      finishLoading();
    }, 2200);

    const handlePageLoad = () => {
      pageLoaded = true;
      finishLoading();
    };

    if (!pageLoaded) {
      window.addEventListener("load", handlePageLoad);
    } else {
      handlePageLoad();
    }

    return () => {
      clearTimeout(minimumDelayTimer);
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (isLoading) {
    return <WeddingLoader />;
  }

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

          <ShareButtons />
        </>
      )}
    </>
  );
}

export default App;
