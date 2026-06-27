import React from 'react';
import './Css/About.css';
import profileImage from "../assests/Profileimage.jpeg"

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <span className="badge">Ultimate Productivity Hub</span>
          <h1>Elevate Your Workflow with <span className="gradient-text">WorkSpace Pro</span></h1>
          <p>
            WorkSpace Pro is a next-generation task and note-taking ecosystem designed to eliminate digital clutter. 
            We seamlessly combine speed, elegant design, and powerful features so you can focus on what truly matters.
          </p>
        </div>
        <div className="hero-glow"></div>
      </section>

      {/* Stats / Impact Bar */}
      <section className="about-stats">
        <div className="stat-card">
          <h3>100%</h3>
          <p>Privacy Focused</p>
        </div>
        <div className="stat-card">
          <h3>No Limits</h3>
          <p>Notes & Tasks</p>
        </div>
        <div className="stat-card">
          <h3>Lightning</h3>
          <p>Fast Performance</p>
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="about-mission">
        <div className="mission-text">
          <h2>Why Built WorkSpace Pro?</h2>
          <p>
            Most tools are either too complicated or too bare-bones. WorkSpace Pro bridges that gap. 
            Whether you are capturing fleeting ideas in our dark-mode rich notes editor or organizing 
            your daily schedule through our streamlined task dashboard, everything is exactly where you expect it to be.
          </p>
        </div>
        <div className="mission-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
        </div>
      </section>

      {/* Team / Creator Showcase Section */}
      <section className="about-team">
        <div className="section-header">
          <h2>Meet the Mind Behind the Code</h2>
          <p>The visionaries building the future of clean workspaces.</p>
        </div>

        <div className="team-grid">
          {/* Creator Profile Card */}
          <div className="team-card">
            <div className="image-container">
              {/* Replace the src URL with your actual photo path later */}
              <img 
                src={profileImage} 
                alt="Creator Profile" 
                className="profile-img"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="member-info">
              <h3>Aditya Yadav</h3>
              <span className="role">Lead Developer & UI Designer</span>
              <p>Passionate about building highly responsive React applications with beautiful, pixel-perfect user interfaces.</p>
              <div className="social-links">
                <a href="https://github.com/adityayadav176" target="_blank" 
            rel="noopener noreferrer" className="social-btn"><i className="fab fa-github"></i> GitHub</a>
                <a href="https://www.linkedin.com/in/aditya-yadav-431675370/" target="_blank" 
            rel="noopener noreferrer" className="social-btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;