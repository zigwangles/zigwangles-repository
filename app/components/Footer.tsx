'use client';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              <span className="highlight">zig</span>wangles
            </h2>
            <p>Building the future, one line of code at a time.</p>
          </div>
          <div className="social-links">
            <a href="#" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="Discord">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} zigwangles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
