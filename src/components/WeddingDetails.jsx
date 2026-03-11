import { FaHeart } from "react-icons/fa";

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

        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noreferrer"
          className="calendar-btn"
        >
          Google Calendar
        </a>

      </div>

    </section>
  );
}
