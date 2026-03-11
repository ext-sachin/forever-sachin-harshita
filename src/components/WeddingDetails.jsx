import {
  FaCalendarAlt,
  FaClock,
  FaHeart,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function WeddingDetails() {
  const calendarEventTitle = "Sachin & Harshitha Wedding";
  const calendarEventDates = "20260411T090000/20260412T220000";
  const calendarEventDetails =
    "Join us to celebrate our wedding. We are excited to share this special day with you.";
  const calendarEventLocation =
    "Nanjamma Channabasappa Kalyana Mantapa, Bengaluru, Karnataka";

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    calendarEventTitle
  )}&dates=${calendarEventDates}&details=${encodeURIComponent(
    calendarEventDetails
  )}&location=${encodeURIComponent(
    calendarEventLocation
  )}&ctz=Asia%2FKolkata`;

  return (
    <section className="ceremony-section">
      <div className="ceremony-layout">
        <svg
          className="ceremony-flow-path"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="ceremony-flow-glow"
            d="M70 145 C 280 48, 450 48, 600 118 C 750 188, 920 188, 1130 145"
          />
          <path
            className="ceremony-flow-dash"
            d="M70 145 C 280 48, 450 48, 600 118 C 750 188, 920 188, 1130 145"
          />
          <circle className="ceremony-flow-dot" cx="70" cy="145" r="9" />
          <circle
            className="ceremony-flow-dot ceremony-flow-dot-center"
            cx="600"
            cy="118"
            r="10"
          />
          <circle className="ceremony-flow-dot" cx="1130" cy="145" r="9" />
        </svg>

        <aside className="ceremony-side-card ceremony-side-card-left">
          <h3 className="ceremony-side-title">Before Ceremony</h3>
          <ul className="ceremony-points">
            <li>
              <FaClock className="ceremony-point-icon" aria-hidden="true" />
              Muhurtham at 9:00 AM
            </li>
            <li>
              <FaCalendarAlt
                className="ceremony-point-icon"
                aria-hidden="true"
              />
              Saturday, 11 April 2026
            </li>
            <li>
              <FaMapMarkerAlt
                className="ceremony-point-icon"
                aria-hidden="true"
              />
              Bengaluru, Karnataka
            </li>
          </ul>
        </aside>

        <div className="ceremony-card ceremony-card-main">
          <h2 className="ceremony-title">
            <FaHeart className="heart-icon" /> Wedding Ceremony
          </h2>

          <p className="ceremony-text">
            Together with their families,
            <br />
            <strong>Sachinkumar.P</strong> <span>&hearts;</span>{" "}
            <strong>Harshitha.P</strong>
            <br />
            invite you to celebrate their wedding.
          </p>

          <div className="ceremony-actions">
            <div className="ceremony-date">
              <FaCalendarAlt aria-hidden="true" /> 11 - 12 April 2026
            </div>

            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noreferrer"
              className="calendar-btn"
            >
              Google Calendar
            </a>
          </div>
        </div>

        <aside className="ceremony-side-card ceremony-side-card-right">
          <h3 className="ceremony-side-title">After Ceremony</h3>
          <ul className="ceremony-points">
            <li>
              <FaHeart className="ceremony-point-icon" aria-hidden="true" />
              Couple Blessings & Photos
            </li>
            <li>
              <FaHeart className="ceremony-point-icon" aria-hidden="true" />
              Family Dinner Gathering
            </li>
            <li>
              <FaHeart className="ceremony-point-icon" aria-hidden="true" />
              Music, Smiles, and Memories
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
