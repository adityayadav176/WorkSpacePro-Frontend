import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import img from "../assest/image.png"
import "./Css/Login.css";



function Login() {
 const [isEmail, setIsEmail] = useState(true)
  const toggleLogin = () => {
    setIsEmail(!isEmail);
  };
  return (
    <>
    <div className="Login-page">
    <div className="Login-Container">
      <div className="Login-left">
        <img src={img} alt="" />
      </div>
      <div className="Login-right">
        <h1>Login</h1>
        <p>Create A New Account<NavLink to="/Signup" className="login"> Sign Up</NavLink></p>
        <button onClick={toggleLogin}>  {isEmail ? "Use Mobile Instead" : "Use Email Instead"}</button>
        {/*Condition to toggle */}
        {isEmail ?( <input type="Email" pattern=".+@gmail\.com" placeholder='Enter Your Email'required/>):(<input type="tel" maxLength={10} placeholder='Enter Your MobileNo'required/>)}
        <input type="password"minLength={8} placeholder='Enter Your Password'required/>
        <button className='LogInBtn'>Log In</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login
