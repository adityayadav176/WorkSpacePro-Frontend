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
              This Notes & Task App For You, you Can Explore The app Right Now I Hope This App Help You Thanks For Visit WorkSpace Pro!
            </p>

            <ul className=
              "contact">
              <li>📍 123 Town Agra Sector 12</li>
              <li>📞 +91 9639761042</li>
              <li>✉️ support@WorkSpace.com</li>
            </ul>
          </div>

          <div className=
            "footer-links">
            <h4>Product</h4>
            <ul>
              <li><Link to="/">Features</Link></li>
              <li><Link to="/">Integrations</Link></li>
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/">Changelog</Link></li>
              <li><Link to="/">Docs</Link></li>
            </ul>
          </div>

          <div className=
            "footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Contact</Link></li>
              <li><Link to="#">Partners</Link></li>
            </ul>
          </div>

          <div className=
            "footer-newsletter">
            <h4>Stay up to date</h4>
            <p>
              Subscribe to our newsletter for the latest updates,
              articles, and resources.
            </p>
          </div>

        </div>

        <div className=
          "footer-bottom">
          <p>© 2026 WorkSpace Pro Inc. All rights reserved.</p>

          <div className="social-icons">
            <Link to="www.instagram.com"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="www.linkedin.com"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to="www.whatsapp.com"><i className="fa-brands fa-whatsapp"></i></Link>
            <Link to="www.github.com"><i className="fa-brands fa-github"></i></Link>
            <Link to="www.youtube.com"><i className="fa-brands fa-youtube"></i></Link>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
