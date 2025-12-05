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
          <NavLink to="/" exact style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}} className={'nav-link'}>
            <FaHome />
            <span className="nav-label">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/shifts" style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}} className={'nav-link'}>
            <FaCalendar />
            <span className="nav-label">Schedule</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}} className={'nav-link'}>
            <MdMessage />
            <span className="nav-label">Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}} className={'nav-link'}>
            <FaBell />
            <span className="nav-label">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/more" style={({isActive}) => isActive ? { color: "#575757" } : {color: "lightgray"}} className={'nav-link'}>
            <TiThMenu />
            <span className="nav-label">More</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}