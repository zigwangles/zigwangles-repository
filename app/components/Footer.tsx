'use client';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              <span className="highlight">Zig</span>Wangles
            </h2>
            <p>Building the future, one line of code at a time.</p>
          </div>
          <div className="social-links">
            <a href="#" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} ZigWangles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
