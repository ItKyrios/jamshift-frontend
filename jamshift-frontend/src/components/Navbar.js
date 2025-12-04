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
          <NavLink to="/dashboard" style={({isActive}) => isActive ? { color: "#575757" } : undefined}><FaHome />
          </NavLink>
          <span>Home</span>
        </li>
        <li>
          <NavLink to="/shifts" style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}}><FaCalendar />
          </NavLink>
          <span>Schedule</span>
        </li>
        <li>
          <NavLink to="/messages" style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}}><MdMessage />
          </NavLink>
          <span>Messages</span>
        </li>
        <li>
          <NavLink to="/notifications" style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}}><FaBell />
          </NavLink>
          <span>Notifications</span>
        </li>
        <li>
          <NavLink to="/more" style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}}><TiThMenu />
          </NavLink>
          <span>More</span>
        </li>
      </ul>
    </nav>
  );
}