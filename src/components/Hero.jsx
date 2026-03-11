import { Parallax } from "react-parallax";
import PetalRain from "./PetalRain";

export default function Hero() {
  return (
    <Parallax bgImage="/images/couple.jpg" strength={300}>
      <div className="hero">
        <PetalRain className="rose-petal-rain--front" count={24} />

        <div className="hero-content">
          <h1>Sachin &hearts; Harshitha</h1>
          <p>We're getting married</p>
        </div>
      </div>
    </Parallax>
  );
}
