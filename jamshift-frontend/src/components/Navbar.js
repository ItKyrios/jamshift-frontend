import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaCalendar, FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/dashboard" activeStyle = {{ color: "#575757" }}><FaHome />
          </NavLink>
          <span>Home</span>
        </li>
        <li>
          <NavLink to="/shifts" activeStyle = {{ color: "#575757" }}><FaCalendar />
          </NavLink>
          <span>Schedule</span>
        </li>
        <li>
          <NavLink to="/messages" activeStyle = {{ color: "#575757" }}><MdMessage />
          </NavLink>
          <span>Messages</span>
        </li>
        <li>
          <NavLink to="/notifications" activeStyle = {{ color: "#575757" }}><FaBell />
          </NavLink>
          <span>Notifications</span>
        </li>
        <li>
          <NavLink to="/more" activeStyle = {{ color: "#575757" }}><TiThMenu />
          </NavLink>
          <span>More</span>
        </li>
      </ul>
    </nav>
  );
}