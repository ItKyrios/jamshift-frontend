import React from "react";
import { CgProfile, CgMenuGridR } from "react-icons/cg";
import "./Header.css";

export default function Header({ currentPage }) {
  return (
    <header className="header-container">
      <div className="page-title">{currentPage}</div>
      <div className="top-menu">
        <div className="dropdown">
            <button className="dropbtn"><CgMenuGridR /></button>
            <div className="dropdown-content">
                <a href="/profile">Profile</a>
                <a href="/settings">Settings</a>
                <a href="/logout">Logout</a>
            </div>
        </div>
        <button className="profile"><CgProfile /></button>
      </div>
    </header>
  );
}