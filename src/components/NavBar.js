import React, {useState, useEffect} from 'react'
import "./Css/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:8000/api/auth/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const data = await response.json();
      setUser(data);
    };

    if (localStorage.getItem("token")) {
      getUser();
    }
  }, []);
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
          {user && (  <div className="user-section">
              <p className='userName'>{user.name}</p>
              <p className='userEmail'>{user.email}</p>
            </div>
          )}
            <li><NavLink to="/"><i className=
              "fa-solid fa-arrow-right-from-bracket"></i><span className='logout'>Logout</span></NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
