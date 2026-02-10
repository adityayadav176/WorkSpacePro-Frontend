import React from 'react'
import "./Css/footer.css"

function Footer() {
  return (
    <div>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-brand">
        <h2 class="logo">Figma Make</h2>
        <p>
          Building the future of web development, one component at a time.
          Create beautiful, responsive applications with speed and precision.
        </p>

        <ul class="contact">
          <li>📍 123 Innovation Dr, Tech City, TC 94043</li>
          <li>📞 +1 (555) 123-4567</li>
          <li>✉️ support@figmamake.com</li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Product</h4>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Integrations</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Docs</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
      </div>

      <div class="footer-newsletter">
        <h4>Stay up to date</h4>
        <p>
          Subscribe to our newsletter for the latest updates,
          articles, and resources.
        </p>

        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">→</button>
        </form>

        <small>
          By subscribing, you agree to our
          <a href="#">Privacy Policy</a>.
        </small>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2026 Figma Make Inc. All rights reserved.</p>

      <div class="social-icons">
        <a href="#">🐦</a>
        <a href="#">🐙</a>
        <a href="#">📷</a>
        <a href="#">💼</a>
        <a href="#">📘</a>
      </div>
    </div>
  </footer>

    </div>
  )
}

export default Footer
