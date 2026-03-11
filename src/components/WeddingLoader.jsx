import { motion } from "framer-motion";

export default function WeddingLoader() {
  return (
    <div
      className="wedding-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading our love story"
    >
      <div className="wedding-loader-rings" aria-hidden="true">
        <motion.span
          className="loader-ring loader-ring-left"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
        >
          💍
        </motion.span>

        <motion.span
          className="loader-ring loader-ring-right"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
        >
          💍
        </motion.span>
      </div>

      <motion.p
        className="wedding-loader-text"
        animate={{ opacity: [0.55, 1, 0.55], y: [0, -2, 0] }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
      >
        Loading our love story...
      </motion.p>
    </div>
  );
}
