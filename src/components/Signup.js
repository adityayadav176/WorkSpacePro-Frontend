import React from 'react'
import { NavLink } from "react-router-dom";
import img from "../assest/image.png"
import "./Css/Signup.css";




function Signup() {
  return (
    <div className="signup-page">
    <div className="Login-Container">
      <div className="Signup-left">
        <img src={img} alt="" />
      </div>
      <div className="Signup-right">
        <h1>Create an account</h1>
        <p>Already have an account <NavLink to="/Login" className="login">Log in</NavLink></p>
        <input type="text" spellCheck="false" placeholder='First Name'required/>
        <input type="text" spellCheck="false" placeholder='Last Name'required/>
        <input type="Email" pattern=".+@gmail\.com" placeholder='Email'required/>
        <input type="password"minLength={8} placeholder='Enter Your Password'required/>
        <input type="tel" maxLength={10} placeholder='Enter Your MobileNo'required/> 
        <button className='SignupBtn'>Create account</button>
      </div>
    </div>
    </div>
  )
}


export default Signup
