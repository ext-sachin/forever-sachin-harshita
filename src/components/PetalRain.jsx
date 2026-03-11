import { motion } from "framer-motion";
import { useMemo } from "react";

export default function PetalRain({ className = "", count = 18 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        delay: Math.random() * 6,
        duration: 9 + Math.random() * 7,
        drift: (Math.random() - 0.5) * 140,
        endRotate: 220 + Math.random() * 300,
        left: `${Math.random() * 100}%`,
        opacity: 0.45 + Math.random() * 0.45,
        size: 10 + Math.random() * 12,
        startRotate: Math.random() * 180
      })),
    [count]
  );

  return (
    <div className={`rose-petal-rain ${className}`.trim()}>
      {petals.map((petal, index) => (
        <motion.span
          key={index}
          className="rose-petal"
          style={{
            height: petal.size * 0.72,
            left: petal.left,
            opacity: petal.opacity,
            width: petal.size
          }}
          initial={{ rotate: petal.startRotate, x: 0, y: "-12vh" }}
          animate={{
            rotate: petal.endRotate,
            x: [0, petal.drift, petal.drift * -0.35],
            y: "112vh"
          }}
          transition={{
            delay: petal.delay,
            duration: petal.duration,
            ease: "linear",
            repeat: Infinity
          }}
        />
      ))}
    </div>
  );
}
