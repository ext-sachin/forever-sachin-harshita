export default function Map() {
  return (
    <section className="location-section">

      <h2 className="location-title">
        📍 Wedding Location
      </h2>

      <div className="map-card">

        <iframe
          src="https://www.google.com/maps?q=Nanjamma+Channabasappa+Kalyana+Mantapa&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>

      </div>

    </section>
  );
}