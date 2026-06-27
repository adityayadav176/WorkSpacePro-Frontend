import React from 'react'
import "./Css/footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
      <footer className=
        "footer">
        <div className=
          "footer-container">

          <div className=
            "footer-brand">
            <h2 className=
              "logo">WorkSpace Pro</h2>
            <p>
              WorkSpace Pro is a modern productivity platform designed to help you organize tasks, manage notes, and stay productive. Thank you for choosing WorkSpace Pro to simplify your daily workflow.
            </p>

            <ul className=
              "contact">
              <li>📍 Agra, Uttar Pradesh, India</li>
              <li>📞 +91 9639761042</li>
              <li>✉️ support@WorkSpace.com</li>
            </ul>
          </div>

          <div className=
            "footer-links">
            <h4>Product</h4>
            <ul>
              <li><Link to="/about">Features</Link></li>
              <li><Link to="/task">Task Management</Link></li>
              <li><Link to="/notes">Notes Management</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="#">Documentation</Link></li>
            </ul>
          </div>

          <div className=
            "footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="#">Contact</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">Support</Link></li>
            </ul>
          </div>

          <div className=
            "footer-newsletter">
            <h4>Stay up to date</h4>
            <p>
              Stay informed with the latest product updates, new features, and productivity tips from WorkSpace Pro.
            </p>
          </div>

        </div>

        <div className=
          "footer-bottom">
          <p>© 2026 WorkSpace Pro. All Rights Reserved. Built with ❤️ using the MERN Stack.</p>

          <div className="social-icons">
            <a href="https://www.instagram.com/adityayadav568__/" target="_blank" 
            rel="noopener noreferrer"> <i className="fa-brands fa-instagram"></i></a>
            <a href="  https://www.linkedin.com/in/aditya-yadav-431675370/?skipRedirect=true" target="_blank" 
            rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" target="_blank" 
            rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" target="_blank" 
            rel="noopener noreferrer"></i></a>
            <a href="https://github.com/adityayadav176" target="_blank" 
            rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
            <a href="#" target="_blank" 
            rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
