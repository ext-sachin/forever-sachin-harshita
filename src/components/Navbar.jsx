import { FaRing } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <FaRing className="ring" />
        <span className="nav-initials">
          <span className="nav-initial">S</span>
          <span className="nav-heart" aria-hidden="true">
            &hearts;
          </span>
          <span className="nav-initial">H</span>
        </span>
      </div>
    </nav>
  );
}
