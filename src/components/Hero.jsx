import { Parallax } from "react-parallax";
import PetalRain from "./PetalRain";

export default function Hero() {
  return (
    <Parallax bgImage="/images/couple.jpg" strength={300}>
      <div className="hero">
        <PetalRain className="rose-petal-rain--front" count={24} />

        <div className="hero-content">
          <h1 className="hero-couple-name">
            <span className="hero-name">Sachin</span>
            <span className="hero-heart" aria-hidden="true">
              &hearts;
            </span>
            <span className="hero-name">Harshitha</span>
          </h1>
          <p>
            We&apos;re getting married, and with joyful hearts we invite you to
            celebrate the beginning of our forever.
          </p>
        </div>
      </div>
    </Parallax>
  );
}
