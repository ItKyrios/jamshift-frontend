import { CgProfile, CgMenuGridR } from "react-icons/cg";
import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    setCurrentPage(location.pathname.replace("/", "") || "Home");
    setCurrentPage(prevPage => prevPage.charAt(0).toUpperCase() + prevPage.slice(1).toLowerCase());
    console.log("Current Page:", currentPage);
  }, [location, currentPage]);

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