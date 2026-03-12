import { useState } from "react";
import {
  FaBookmark,
  FaCalendarAlt,
  FaDirections,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Map() {
  const [statusMessage, setStatusMessage] = useState("");

  const venueName = "Nanjamma Channabasappa Kalyana Mantapa";
  const venueAddress = "C9PM+Q9Q, 7th Road, Krishnarajanagara, Karnataka 571602";
  const eventLocation = "Krishnarajanagara, Karnataka";
  const venueCoordinates = "12.4369642,76.3834692";
  const mapDirectionsUrl =
    "https://www.google.com/maps/place/Nanjamma+Channabasappa+Kalyana+Mantapa/@12.4369694,76.3808943,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba581eb05d402cd:0x503c4475e1187cb0!8m2!3d12.4369642!4d76.3834692!16s%2Fg%2F1263xf28c?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D";
  const mapEmbedUrl = `https://www.google.com/maps?q=${venueCoordinates}&z=17&output=embed`;

  const showStatus = (message) => {
    setStatusMessage(message);
    window.setTimeout(() => setStatusMessage(""), 2400);
  };

  const handleSaveLocation = async () => {
    const savePayload = {
      title: venueName,
      text: venueAddress,
      url: mapDirectionsUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(savePayload);
        showStatus("Location ready to save or share.");
        return;
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(
        `${venueName}\n${venueAddress}\n${mapDirectionsUrl}`
      );
      showStatus("Location copied for quick saving.");
    } catch {
      window.open(mapDirectionsUrl, "_blank", "noopener,noreferrer");
      showStatus("Directions opened. Save the venue inside Google Maps.");
    }
  };

  return (
    <section className="location-section">
      <div className="location-shell">
        <div className="location-header">
          <p className="location-kicker">Venue</p>
          <h2 className="location-title">
            <FaMapMarkerAlt aria-hidden="true" /> Wedding Location
          </h2>
          <p className="location-subtitle">
            Reach the venue faster with one-tap directions and a quick save
            shortcut for your phone.
          </p>
        </div>

        <div className="location-layout">
          <div className="location-info-card">
            <h3 className="venue-name">{venueName}</h3>
            <p className="venue-address">{venueAddress}</p>

            <div className="location-meta">
              <span className="meta-pill">
                <FaCalendarAlt aria-hidden="true" /> 11-12 April 2026
              </span>
              <span className="meta-pill">
                <FaMapMarkerAlt aria-hidden="true" /> {eventLocation}
              </span>
            </div>

            <div className="location-actions">
              <a
                className="map-action map-action-primary"
                href={mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaDirections aria-hidden="true" />
                Directions
              </a>

              <button
                className="map-action map-action-tertiary"
                type="button"
                onClick={handleSaveLocation}
              >
                <FaBookmark aria-hidden="true" />
                Save Location
              </button>
            </div>

            {statusMessage && (
              <p className="location-status" role="status" aria-live="polite">
                {statusMessage}
              </p>
            )}
          </div>

          <div className="map-card map-card-enhanced">
            <iframe
              src={mapEmbedUrl}
              loading="lazy"
              allowFullScreen
              title="Wedding Venue Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
