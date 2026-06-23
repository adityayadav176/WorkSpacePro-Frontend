import React, { useState, useEffect } from 'react'
import "./Css/NavBar.css";
import { NavLink, useNavigate, useLocation  } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../axios/api.js"

function NavBar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {
    const getUser = async () => {
      try {
        const res = await api.get("/api/auth/me", {
          withCredentials: true,
        });

        setUser(res.data.data);
      } catch (error) {
        setUser(null);
        navigate("/");
      }
    };

    getUser();
  }, [location, navigate]);

  const handleLogout = async () => {
    try {
      await api.post("/api/auth/logout", {}, { withCredentials: true });

      setUser(null);
      toast.success("Logged out");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const [showConfirm, setShowConfirm] = useState(false)
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
            <li><NavLink to="/Dashboard" ><i className="fa-regular fa-user"></i><span>Dashboard</span></NavLink></li>
            <li><NavLink to="/Task" ><i className="fa-regular fa-square-check"></i><span>Tasks</span></NavLink></li>
            <li><NavLink to="/Notes" ><i className="fa-regular fa-file-lines"></i><span>Notes</span></NavLink></li>
            {user && (<div className="user-section">
              <p className='userName'>{user.name}</p>
              <p className='userEmail'>{user.email}</p>
            </div>
            )}
            <li onClick={() => { setShowConfirm(true) }} className='LogoutBtn'> <i className=
              "fa-solid fa-arrow-right-from-bracket"></i><span className='logout'>Logout</span></li>
          </ul>
        </div>
      </nav>
      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">

            <p>Are you sure you want to logout?</p>

            <div className="confirm-buttons">
              <button onClick={handleLogout} className="yes-btn">
                Yes
              </button>

              <button onClick={() => setShowConfirm(false)} className="no-btn">
                No
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
