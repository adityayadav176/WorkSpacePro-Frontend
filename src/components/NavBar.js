import React from 'react'
import "./Css/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
        <nav>
     <div className="left">
      <i className="fa-brands fa-square-dribbble"></i>
      <div className="title">
     <h2>WorkSpace Pro</h2>
        <h4>Manage Everything</h4>
      </div>
     </div>
     <div className="right">
      <ul>
        <li><NavLink to="/Dashboard"><i className="fa-regular fa-user"></i><span>Dashboard</span></NavLink></li>
        <li><NavLink to="/Task"><i className="fa-regular fa-square-check"></i><span>Tasks</span></NavLink></li>
        <li><NavLink to="/Notes"><i className="fa-regular fa-file-lines"></i><span>Notes</span></NavLink></li>
      </ul>
     </div>
     </nav>
    </>
  )
}

export default NavBar
