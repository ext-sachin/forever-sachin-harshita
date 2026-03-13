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
      <div className="ceremony-layout ceremony-layout-compact">
        <div className="ceremony-card ceremony-card-main ceremony-card-main-compact">
          <p className="ceremony-kicker">Wedding Celebration</p>

          <h2 className="ceremony-title">
            <FaHeart className="heart-icon" /> Wedding Ceremony
          </h2>

          <p className="ceremony-text">
            Together with their families,
            <br />
            <strong>Sachinkumar.P</strong> <span>&hearts;</span>{" "}
            <strong>Harshitha.P</strong>
            <br />
            warmly invite you to celebrate their wedding and bless the
            beginning of their forever.
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

        <aside className="ceremony-side-card ceremony-info-card">
          <h3 className="ceremony-side-title">At A Glance</h3>

          <ul className="ceremony-detail-list">
            <li className="ceremony-detail-item">
              <FaClock className="ceremony-point-icon" aria-hidden="true" />
              <span className="ceremony-detail-copy">
                <span className="ceremony-detail-label">Muhurtham</span>
                <strong className="ceremony-detail-value">10:20 AM</strong>
              </span>
            </li>

            <li className="ceremony-detail-item">
              <FaCalendarAlt
                className="ceremony-point-icon"
                aria-hidden="true"
              />
              <span className="ceremony-detail-copy">
                <span className="ceremony-detail-label">Date</span>
                <strong className="ceremony-detail-value">
                  Sunday, 12 April 2026
                </strong>
              </span>
            </li>

            <li className="ceremony-detail-item">
              <FaMapMarkerAlt
                className="ceremony-point-icon"
                aria-hidden="true"
              />
              <span className="ceremony-detail-copy">
                <span className="ceremony-detail-label">Place</span>
                <strong className="ceremony-detail-value">
                  KR-Nagar, Mysore
                </strong>
              </span>
            </li>
          </ul>

          <p className="ceremony-detail-note">
            We would love to celebrate this special day with your presence and
            blessings.
          </p>
        </aside>
      </div>
    </section>
  );
}
