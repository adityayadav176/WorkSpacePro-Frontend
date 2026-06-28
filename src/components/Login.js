import React, { useState } from 'react';
import './Css/Login.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "", mobileNo: "" });
    
    const [isForgotMode, setIsForgotMode] = useState(false);
    const [forgotStep, setForgotStep] = useState(1);
    const [forgotEmail, setForgotEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

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
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            );

            toast.success(response.data.message || "Login Successful");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Login Failed");
        }
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        if (!forgotEmail) return toast.error("Please enter your email address");

        setLoading(true);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/auth/forgot-password`,
                { email: forgotEmail }
            );
            toast.success(response.data.message || "OTP sent successfully!");
            setForgotStep(2);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to send OTP");
        } finally {
            setLoading(false);
        }
    };
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!otp || !newPassword) return toast.error("All fields are required");

        setLoading(true);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/auth/reset-password`,
                { email: forgotEmail, otp, password: newPassword } // Uses email from step 1
            );
            toast.success(response.data.message || "Password changed successfully!");
            setIsForgotMode(false);
            setForgotStep(1);
            setForgotEmail("");
            setOtp("");
            setNewPassword("");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to reset password");
        } finally {
            setLoading(false);
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
                        
                        {/* --- CASE 1: STANDARD LOGIN VIEW --- */}
                        {!isForgotMode && (
                            <form onSubmit={handleLogin}>
                                <h2>Welcome Back 👋</h2>
                                <div className="input-group">
                                    <input type="email" required onChange={onChange} name="email" value={credentials.email} autoComplete='off' />
                                    <label>Email Address</label>
                                </div>

                                <div className="input-group">
                                    <input type="password" required minLength={8} onChange={onChange} name="password" value={credentials.password} autoComplete='off' />
                                    <label>Password</label>
                                </div>
                                
                                {/* Creative Forgot Link Positioned Underneath Password Input */}
                                <div className="forgot-link-wrapper">
                                    <span className="forgot-password-link" onClick={() => setIsForgotMode(true)}>
                                        Forgot Password?
                                    </span>
                                </div>

                                <div className="input-group">
                                    <input type="tel" required maxLength={10} onChange={onChange} name="mobileNo" value={credentials.mobileNo} autoComplete='off' />
                                    <label>MobileNo</label>
                                </div>
                                <button type="submit" className='primary-btn'>Login</button>
                            </form>
                        )}

                        {/* --- CASE 2: FORGOT PASSWORD STEP 1 (Email Input) --- */}
                        {isForgotMode && forgotStep === 1 && (
                            <form onSubmit={handleSendOTP} className="animated-fade">
                                <h2>Trouble Logging In? 🔒</h2>
                                <p className="form-subtitle">Enter your registered email and we'll send you a verification security OTP.</p>
                                
                                <div className="input-group">
                                    <input type="email" required value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} autoComplete='off' />
                                    <label>Email Address</label>
                                </div>

                                <button type="submit" className='primary-btn' disabled={loading}>
                                    {loading ? "Sending..." : "Send Reset OTP"}
                                </button>
                                
                                <span className="back-to-login-btn" onClick={() => setIsForgotMode(false)}>
                                    ← Back to Login
                                </span>
                            </form>
                        )}

                        {/* --- CASE 3: RESET PASSWORD STEP 2 (OTP & New Password Input) --- */}
                        {isForgotMode && forgotStep === 2 && (
                            <form onSubmit={handleResetPassword} className="animated-fade">
                                <h2>Reset Password 🛠</h2>
                                <p className="form-subtitle">Verification code sent to <strong>{forgotEmail}</strong></p>
                                
                                <div className="input-group">
                                    <input type="text" inputMode="numeric" autoComplete="one-time-code" required value={otp} onChange={(e) => setOtp(e.target.value)} />
                                    <label>Enter 6-Digit OTP</label>
                                </div>

                                <div className="input-group">
                                    <input type="password" required minLength={8} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} autoComplete='off' />
                                    <label>New Password</label>
                                </div>

                                <button type="submit" className='primary-btn' disabled={loading}>
                                    {loading ? "Updating..." : "Verify & Save Password"}
                                </button>

                                <span className="back-to-login-btn" onClick={() => { setForgotStep(1); setIsForgotMode(false); }}>
                                    Cancel
                                </span>
                            </form>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;