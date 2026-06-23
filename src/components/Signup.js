import React, { useState } from "react";
import "./Css/Login.css";
import "./Css/Signup.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
  });

  const onChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const { name, email, password, mobileNo } = credentials;

    // Validation
    if (!name || !email || !password || !mobileNo) {
      toast.error("All fields are required");
      return;
    }

    if (name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (!/^\d{10}$/.test(mobileNo)) {
      toast.error("Mobile number must be exactly 10 digits");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const json = await response.json();

      if (response.ok) {
        toast.success("Signup Successful");

        setCredentials({
          name: "",
          email: "",
          password: "",
          mobileNo: "",
        });

        navigate("/");
      } else {
        toast.error(json.message || "Signup Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error or CORS Issue");
    } finally {
      setLoading(false);
    }
  };

  return (
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
          <button
            className="SignupBtn"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </div>

        <div className="SignupForm">
          <form onSubmit={handleClick}>
            <h2>Create Account With WorkSpace Pro</h2>

            <div className="Signup-input-group">
              <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={onChange}
                autoComplete="off"
                spellCheck="false"
                required
              />
              <label>Full Name</label>
            </div>

            <div className="Signup-input-group">
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                autoComplete="off"
                required
              />
              <label>Email Address</label>
            </div>

            <div className="Signup-input-group">
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                autoComplete="off"
                minLength={8}
                required
              />
              <label>Password</label>
            </div>

            <div className="Signup-input-group">
              <input
                type="tel"
                name="mobileNo"
                value={credentials.mobileNo}
                onChange={onChange}
                autoComplete="off"
                maxLength={10}
                required
              />
              <label>Mobile Number</label>
            </div>

            <button
              type="submit"
              className="primary-btn"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;