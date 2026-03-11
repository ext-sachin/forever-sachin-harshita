import { FaHeart } from "react-icons/fa";

export default function WeddingDetails() {
  return (
    <section className="ceremony-section">

      <div className="ceremony-card">

        <h2 className="ceremony-title">
          <FaHeart className="heart-icon" /> Wedding Ceremony
        </h2>

        <p className="ceremony-text">
          Together with their families,
          <br />
          <strong>Sachinkumar.P</strong> ❤️ <strong>Harshitha.P</strong>
          <br />
          invite you to celebrate their wedding.
        </p>

        <div className="ceremony-date">
          📅 11 – 12 April 2026
        </div>

      </div>

    </section>
  );
}