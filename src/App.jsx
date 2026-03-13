import { useEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Map from "./components/Map";

/* Animation components */

import Background3D from "./components/Background3D";
import FloatingHearts from "./components/FloatingHearts";
import Petals from "./components/Petals";
// import CinematicHero from "./components/CinematicHero";
import WeddingDetails from "./components/WeddingDetails";
import MomentsSlider from "./components/MomentsSlider";
import CinematicIntro from "./components/CinematicIntro";
import MusicPlayer from "./components/MusicPlayer";
import WeddingLoader from "./components/WeddingLoader";
import ShareButtons from "./components/ShareButtons";

const MUSIC_SOURCE = `${import.meta.env.BASE_URL}music/wedding-theme.mp3`;
const MUSIC_VOLUME = 0.34;

function App() {
  const audioRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [showDeferredSections, setShowDeferredSections] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);

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

  useEffect(() => {
    // Preload only above-the-fold images for smoother first paint after opening invite.
    const criticalImages = ["/images/couple.jpg", "/images/countdown-bg.jpg"];
    const imageRefs = criticalImages.map((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      return image;
    });

    return () => {
      imageRefs.forEach((image) => {
        image.src = "";
      });
    };
  }, []);

  useEffect(() => {
    if (!inviteOpen) {
      setShowDeferredSections(false);
      return;
    }

    // Defer heavier, below-the-fold sections to keep the transition smooth.
    const deferredTimer = window.setTimeout(() => {
      setShowDeferredSections(true);
    }, 260);

    return () => window.clearTimeout(deferredTimer);
  }, [inviteOpen]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = MUSIC_VOLUME;
    audio.muted = false;
  }, []);

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio || !musicAvailable) {
      return false;
    }

    try {
      await audio.play();
      setMusicPlaying(true);
      return true;
    } catch {
      if (audio.error) {
        setMusicAvailable(false);
      }
      setMusicPlaying(false);
      return false;
    }
  };

  const handleOpenInvitation = () => {
    setInviteOpen(true);
    void playMusic();
  };

  const handleTogglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || !musicAvailable) {
      return;
    }

    if (audio.paused) {
      await playMusic();
      return;
    }

    audio.pause();
    setMusicPlaying(false);
  };

  const handleToggleMute = () => {
    const audio = audioRef.current;

    if (!audio || !musicAvailable) {
      return;
    }

    const nextMuted = !audio.muted;
    audio.muted = nextMuted;
    setMusicMuted(nextMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_SOURCE}
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setMusicAvailable(true)}
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
        onVolumeChange={() => setMusicMuted(Boolean(audioRef.current?.muted))}
        onError={() => {
          setMusicAvailable(false);
          setMusicPlaying(false);
          setMusicMuted(false);
        }}
      />

      {isLoading ? (
        <WeddingLoader />
      ) : (
        <>
          {/* Cinematic Intro */}
          {!inviteOpen && (
            <CinematicIntro onOpenInvitation={handleOpenInvitation} />
          )}

          {/* Main Website */}
          {inviteOpen && (
            <>
              {/* Animated Background */}
              <Background3D />

              {/* Floating animations */}
              <FloatingHearts />
              <Petals />

              {/* Navigation */}
              <Navbar />
              <MusicPlayer
                isAvailable={musicAvailable}
                isMuted={musicMuted}
                isPlaying={musicPlaying}
                onToggleMute={handleToggleMute}
                onTogglePlayback={handleTogglePlayback}
              />

              {/* Sections */}
              <Hero />

              <Countdown />

              {showDeferredSections && (
                <>
                  <MomentsSlider />

                  <WeddingDetails />

                  <Map />

                  <ShareButtons />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
