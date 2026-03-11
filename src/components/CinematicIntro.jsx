import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PetalRain from "./PetalRain";

export default function CinematicIntro({ setOpen }) {
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const heartTimer = setTimeout(() => {
      setShowHeart(true);
    }, 3000);

    return () => clearTimeout(heartTimer);
  }, []);

  return (
    <div className="cinema-container">
      <PetalRain className="rose-petal-rain--front" count={22} />

      <div className="corner-ornament corner-ornament-left" aria-hidden="true">
        <span className="corner-ring"></span>
        <span className="corner-ring-inner"></span>
        <span className="corner-flower-strand"></span>
        <span className="corner-drop corner-drop-a"></span>
        <span className="corner-drop corner-drop-b"></span>
      </div>

      <div className="corner-ornament corner-ornament-right" aria-hidden="true">
        <span className="corner-ring"></span>
        <span className="corner-ring-inner"></span>
        <span className="corner-flower-strand"></span>
        <span className="corner-drop corner-drop-a"></span>
        <span className="corner-drop corner-drop-b"></span>
      </div>

      <div
        className="ornamental-gateway ornamental-gateway-left"
        aria-hidden="true"
      >
        <span className="gateway-crown"></span>
        <span className="gateway-floral-garland"></span>
        <span className="gateway-flower-cluster gateway-flower-cluster-left"></span>
        <span className="gateway-flower-cluster gateway-flower-cluster-right"></span>
        <span className="gateway-hanging gateway-hanging-left"></span>
        <span className="gateway-hanging gateway-hanging-right"></span>
        <span className="gateway-arch"></span>
        <span className="gateway-pillar gateway-pillar-left"></span>
        <span className="gateway-pillar gateway-pillar-right"></span>
        <span className="gateway-base"></span>
      </div>

      <div
        className="ornamental-gateway ornamental-gateway-right"
        aria-hidden="true"
      >
        <span className="gateway-crown"></span>
        <span className="gateway-floral-garland"></span>
        <span className="gateway-flower-cluster gateway-flower-cluster-left"></span>
        <span className="gateway-flower-cluster gateway-flower-cluster-right"></span>
        <span className="gateway-hanging gateway-hanging-left"></span>
        <span className="gateway-hanging gateway-hanging-right"></span>
        <span className="gateway-arch"></span>
        <span className="gateway-pillar gateway-pillar-left"></span>
        <span className="gateway-pillar gateway-pillar-right"></span>
        <span className="gateway-base"></span>
      </div>

      <motion.img
        src="/images/groom.png"
        className="groom-img"
        initial={{ x: "-20vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 3 }}
      />

      <motion.img
        src="/images/bride.png"
        className="bride-img"
        initial={{ x: "20vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 3 }}
      />

      {showHeart && (
        <div className="invite-heart-wrap">
          <motion.div
            className="invite-card"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="invite-heart-shape" aria-hidden="true"></div>

            <div className="invite-card-content">
              <p className="invite-small">You are invited</p>

              <h1 className="invite-title">
                Sachin <span>&hearts;</span> Harshitha
              </h1>

              <p className="invite-date">April 11-12 2026</p>

              <button
                className="invite-btn open-invite-btn"
                onClick={() => setOpen(true)}
              >
                Open Invitation
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
