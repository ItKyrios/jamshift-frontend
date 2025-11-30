import React from "react";
import "./Navbar.css";
import { FaHome, FaCalendar, FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/dashboard"><FaHome /></a><span>Home</span></li>
        <li><a href="/shifts"><FaCalendar /></a><span>Schedule</span></li>
        <li><a href="/messages"><MdMessage /></a><span>Messages</span></li>
        <li><a href="/notifications"><FaBell /></a><span>Notifications</span></li>
        <li><a href="/more"><TiThMenu /></a><span>More</span></li>
      </ul>
    </nav>
  );
}