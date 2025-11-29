import React from "react";
import "./Navbar.css";
import { FaHome, FaCalendar, FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/dashboard"><FaHome /></a></li>
        <li><a href="/shifts"><FaCalendar /></a></li>
        <li><a href="/messages"><MdMessage /></a></li>
        <li><a href="/notifications"><FaBell /></a></li>
        <li><a href="/profile"><TiThMenu /></a></li>
      </ul>
    </nav>
  );
}