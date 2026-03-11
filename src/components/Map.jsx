import { useState } from "react";
import { FaCalendarAlt, FaCopy, FaDirections, FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
  const [copied, setCopied] = useState(false);

  const venueName = "Nanjamma Channabasappa Kalyana Mantapa";
  const venueAddress =
    "Nanjamma Channabasappa Kalyana Mantapa, Bengaluru, Karnataka";
  const mapQuery = encodeURIComponent(`${venueName}, Bengaluru`);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(venueAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
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
            Celebrate with us at our wedding venue. Open directions or copy the
            address for easy travel planning.
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
                <FaMapMarkerAlt aria-hidden="true" /> Bengaluru, Karnataka
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
                Open in Google Maps
              </a>

              <button
                className="map-action map-action-secondary"
                type="button"
                onClick={handleCopyAddress}
              >
                <FaCopy aria-hidden="true" />
                {copied ? "Address Copied" : "Copy Address"}
              </button>
            </div>
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
