import { FaRing } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <FaRing className="ring" />
        <span>S&H</span>
      </div>
    </nav>
  );
}