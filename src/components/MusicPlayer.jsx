import {
  FaMusic,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

export default function MusicPlayer({
  isAvailable,
  isMuted,
  isPlaying,
  onToggleMute,
  onTogglePlayback,
}) {
  return (
    <aside
      className={`music-player${isAvailable ? "" : " music-player-unavailable"}`}
      aria-live="polite"
    >
      <div className="music-player-copy">
        <p className="music-player-kicker">
          <FaMusic aria-hidden="true" />
          Wedding Music
        </p>

        <p className="music-player-status">
          {isAvailable
            ? isPlaying
              ? "Background music is playing."
              : "Use play if you pause the music."
            : "Add an MP3 at public/music/wedding-theme.mp3."}
        </p>
      </div>

      <div className="music-player-actions">
        <button
          type="button"
          className="music-toggle"
          onClick={onTogglePlayback}
          disabled={!isAvailable}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />}
        </button>

        <button
          type="button"
          className="music-toggle music-toggle-secondary"
          onClick={onToggleMute}
          disabled={!isAvailable}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
          aria-pressed={isMuted}
        >
          {isMuted ? (
            <FaVolumeMute aria-hidden="true" />
          ) : (
            <FaVolumeUp aria-hidden="true" />
          )}
        </button>
      </div>
    </aside>
  );
}
