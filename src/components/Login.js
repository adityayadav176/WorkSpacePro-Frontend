import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../assest/image.png";
import "./Css/Login.css";
import bg from "../assest/Fimage3.jpg"
import { toast } from "react-toastify";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    mobileNo: ""
  });

  const [isEmail, setIsEmail] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();


      if (response.ok) {
        localStorage.setItem("token", json.authtoken);
        toast.success("Login Successful");
        navigate("/Dashboard");
      }
      else {
        toast.error("Invalid Credentials");
      }

    } catch (error) {
      console.error("Error:", error);
      toast.error("Server not running or CORS issue")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="Login-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="Login-Signup-Container">
        <div className="Login-left">
          <img src={img} alt="login" />
        </div>

        <div className="Login-right">
          <h1>Login</h1>
          <p>
            Create A New Account
            <NavLink to="/Signup" className="login"> Sign Up</NavLink>
          </p>

          <form onSubmit={handleSubmit}>
            {isEmail ? (<input
              type="email"
              name="email"
              autoComplete="off"
              value={credentials.email}
              onChange={onChange}
              placeholder="Email address"
              required
            />
            ) : (

              <input
                type="Number"
                name="mobileNo"
                maxLength={10}
                autoComplete="off"
                value={credentials.mobileNo}
                onChange={onChange}
                placeholder="Enter Your mobileNo"
                required
              />)}

            <input
              type="password"
              name="password"
              minLength={8}
              autoComplete="off"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter Your Password"
              required
            />

            <button className="LogInBtn" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;