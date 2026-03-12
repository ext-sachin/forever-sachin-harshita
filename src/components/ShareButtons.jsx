import { useMemo, useState } from "react";
import { FaInstagram, FaLink, FaWhatsapp } from "react-icons/fa";

export default function ShareButtons() {
  const [statusMessage, setStatusMessage] = useState("");
  const inviteTitle = "Sachin & Harshitha | Wedding Invitation";
  const inviteMessage =
    "You're invited to Sachin & Harshitha's wedding on April 11-12, 2026.";

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "";
    }
    return window.location.href;
  }, []);

  const shareText = useMemo(
    () => `${inviteMessage}\n\n${shareUrl}`,
    [inviteMessage, shareUrl]
  );

  const copyToClipboard = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    return false;
  };

  const handleWhatsAppShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: inviteTitle,
          text: inviteMessage,
          url: shareUrl
        });
        setStatusMessage("Share sheet opened. Choose WhatsApp.");
        return;
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
      }
    }

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareUrl)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatusMessage("WhatsApp opened. Wait for the preview, then add your note.");
  };

  const handleInstagramShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: inviteTitle,
          text: inviteMessage,
          url: shareUrl
        });
        setStatusMessage("Share sheet opened. Choose Instagram.");
        return;
      }
    } catch {
      // Ignore cancel/failure and continue to fallback flow.
    }

    const copied = await copyToClipboard(shareText);
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    setStatusMessage(
      copied
        ? "Link copied. Paste it in your Instagram story or DM."
        : "Instagram opened. Please copy the invite link from the address bar."
    );
  };

  const handleCopyLink = async () => {
    const copied = await copyToClipboard(shareUrl);
    setStatusMessage(copied ? "Invite link copied." : "Unable to copy link.");
  };

  return (
    <section className="share-section">
      <div className="share-card">
        <h2 className="share-title">Share The Invite</h2>
        <p className="share-subtitle">
          Help us spread the love with your friends and family.
        </p>

        <div className="share-buttons">
          <button
            className="share-btn share-btn-whatsapp"
            onClick={handleWhatsAppShare}
            type="button"
          >
            <FaWhatsapp aria-hidden="true" /> Share on WhatsApp
          </button>

          <button
            className="share-btn share-btn-instagram"
            onClick={handleInstagramShare}
            type="button"
          >
            <FaInstagram aria-hidden="true" /> Share on Instagram
          </button>

          <button
            className="share-btn share-btn-copy"
            onClick={handleCopyLink}
            type="button"
          >
            <FaLink aria-hidden="true" /> Copy Link
          </button>
        </div>

        {statusMessage && (
          <p className="share-status" role="status" aria-live="polite">
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
}
