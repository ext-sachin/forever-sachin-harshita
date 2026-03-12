import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoldenRing from "./GoldenRing";
import Sparkles from "./Sparkles";
import PetalRain from "./PetalRain";

export default function Countdown() {

  const weddingDate = new Date("April 11, 2026 00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();
      const diff = weddingDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const FlipCard = ({ value, label }) => (

    <div className="flip-card">

      <AnimatePresence mode="wait">

        <motion.span
          key={value}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flip-number"
        >
          {value}
        </motion.span>

      </AnimatePresence>

      <p>{label}</p>

    </div>

  );

  return (

    <section className="countdown-section">
      <div className="count-overlay"></div>
      <GoldenRing />
      <Sparkles />
      <PetalRain className="rose-petal-rain--countdown" />

      <div className="count-content">
        <h2 className="count-title">
          Countdown to Our Wedding
        </h2>

        <div className="count-grid">
          <FlipCard value={timeLeft.days} label="Days" />
          <FlipCard value={timeLeft.hours} label="Hours" />
          <FlipCard value={timeLeft.minutes} label="Minutes" />
          <FlipCard value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>

  );
}
