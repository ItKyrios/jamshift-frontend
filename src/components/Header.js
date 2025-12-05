import { CgProfile, CgMenuGridR } from "react-icons/cg";
import "./Header.css";

export default function Header({ currentPage }) {
  return (
    <header className="header-container">
      <div className="header-left-content">JamShift</div>
      <div className="header-center-content">{currentPage}</div>
      <div className="header-right-content">
        <a href="/"><CgMenuGridR /></a>
        <a href="/"><CgProfile /></a>
      </div>
    </header>
  );
}