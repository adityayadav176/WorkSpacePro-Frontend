import React, { useState, useContext } from 'react'
import './Css/Login.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import progressContext from '../context/Progress/progressContext';

function Login() {
    const ProgressContext = useContext(progressContext)
    const { setProgress } = ProgressContext;
    const host = "http://localhost:8000";
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "", mobileNo: "" })
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!credentials.email || !credentials.password || !credentials.mobileNo) {
            toast.error("All Fields Are Required");
            return;
        }
        try {
            const response = await fetch(`${host}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials),
            })
            const json = await response.json()
            console.log(json);
            if (response.ok) {
                localStorage.setItem("token", json.authtoken);
                navigate('/dashboard')
            } else {
                toast.error("Invalid Credentials");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Server not running or CORS issue")
        }
    }

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
                        <button className='LoginBtn' onClick={() => {setProgress(); navigate("/signup") }}>Signup</button>
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
                            <button className='primary-btn' onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
