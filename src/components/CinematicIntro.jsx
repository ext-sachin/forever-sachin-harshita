import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CinematicIntro({ setOpen }) {

  const [showHeart, setShowHeart] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {

    // show heart after couple meets
    setTimeout(() => {
      setShowHeart(true);
    }, 3000);

    // show invite card after heart
    setTimeout(() => {
      setShowCard(true);
    }, 4500);

  }, []);

  return (

    <div className="cinema-container">

      {/* Groom */}
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

      {/* Heart */}
   {showHeart && (
  <motion.div
    className="invite-card"
    initial={{ scale: 0.6, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  >

    <p className="invite-small">You are invited</p>

    <h1 className="invite-title">
      Sachin <span>❤</span> Harshitha
    </h1>

    <p className="invite-date">
      April 11–12 2026
    </p>

    <button
      className="invite-btn"
      onClick={() => setOpen(true)}
    >
      Open Invitation
    </button>

  </motion.div>
)}

     
      {/* {showCard && (
        <motion.div
          className="invite-card"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <p>You are invited</p>

          <h1>
            Sachin ❤️ Harshitha
          </h1>

          <p>April 11–12 2026</p>

          <button onClick={() => setOpen(true)}>
            Open Invitation
          </button>

        </motion.div>
      )} */}

    </div>

  );
}