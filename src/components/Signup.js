import React, { useState, useContext } from 'react'
import './Css/Login.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Css/Signup.css'
import progressContext from '../context/Progress/progressContext';

function Signup() {
  const ProgressContext = useContext(progressContext)
  const { setProgress } = ProgressContext;
  const navigate = useNavigate();
  return (
    <>
      <div className="SignupContainer">
        <div className="SignupLeft">
          <div className="brand">
            <h1>WorkSpace Pro</h1>
            <p>Organize. Track. Achieve.</p>
          </div>
          <div className="feature">
            <h3>✔ Manage Tasks</h3>
            <p>Create and organize tasks efficiently.</p>
          </div>
          <div className="feature">
            <h3>✔ Smart Notes</h3>
            <p>Store your important ideas securely.</p>
          </div>
          <div className="feature">
            <h3>✔ Productivity Insights</h3>
            <p>Track progress with smart analytics.</p>
          </div>
        </div>
        <div className="SignupRight">
          <div className="AuthenticationBtn">
            <button className='SignupBtn' onClick={() => {setProgress(); navigate("/") }}>Login</button>
          </div>
          <div className="SignupForm">
            <form>
              <h2>Create Account With WorkSpace Pro</h2>
              <div className="Signup-input-group">
                <input type="name" required name="name" spellCheck='false' autoComplete='off' />
                <label>Full Name</label>
              </div>
              <div className="Signup-input-group">
                <input type="email" required name="email" autoComplete='off' />
                <label>Email Address</label>
              </div>

              <div className="Signup-input-group">
                <input type="password" required minLength={8} name="password" autoComplete='off' />
                <label>Password</label>
              </div>
              <div className="Signup-input-group">
                <input type="tel" required maxLength={10} name="mobileNo" autoComplete='off' />
                <label>MobileNo</label>
              </div>
              <button className='primary-btn'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}


export default Signup
