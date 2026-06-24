import React, { useState } from 'react'
import './Css/Login.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "", mobileNo: "" })
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
const handleLogin = async (e) => {
    e.preventDefault();

    if (!credentials.password) {
        toast.error("Password is required");
        return;
    }

    if (!credentials.email && !credentials.mobileNo) {
        toast.error("Email or Mobile Number is required");
        return;
    }
    
    try {
    const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        credentials,
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        }
    );

    toast.success(response.data.message || "Login Successful");
    navigate("/Dashboard");

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            error.message ||
            "Login Failed"
        );
    }
};

    return (
        <>
            <div className="LoginContainer">
                <div className="LoginLeft">
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
                <div className="LoginRight">
                    <div className="AuthenticationBtn">
                        <button className='LoginBtn' onClick={() => { navigate("/signup") }}>Signup</button>
                    </div>
                    <div className="LoginForm">
                        <form>
                            <h2>Welcome Back 👋</h2>
                            <div className="input-group">
                                <input type="email" required onChange={onChange} name="email" value={credentials.email} autoComplete='off' />
                                <label>Email Address</label>
                            </div>

                            <div className="input-group">
                                <input type="password" required minLength={8} onChange={onChange} name="password" value={credentials.password} autoComplete='off' />
                                <label>Password</label>
                            </div>
                            <div className="input-group">
                                <input type="tel" required maxLength={10} onChange={onChange} name="mobileNo" value={credentials.mobileNo} autoComplete='off' />
                                <label>MobileNo</label>
                            </div>
                            <button type="submit" className='primary-btn' onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
