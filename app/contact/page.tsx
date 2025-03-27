'use client';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Connect With Me</h1>
          <p className="lead">Find me on these platforms</p>
        </div>
      </section>

      <section className="social-links-section">
        <div className="container">
          <div className="social-links-grid">
            <a href="https://discord.gg/5Zsu5kubnp" className="social-link-card" aria-label="Discord">
              <div className="social-icon">
                <i className="fab fa-discord"></i>
              </div>
              <div className="social-name">Discord</div>
            </a>
            
            <a href="https://tiktok.com/zigwangles" className="social-link-card" aria-label="TikTok">
              <div className="social-icon">
                <i className="fab fa-tiktok"></i>
              </div>
              <div className="social-name">TikTok</div>
            </a>
            
            <a href="https://github.com/zigwangles" className="social-link-card" aria-label="GitHub">
              <div className="social-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="social-name">GitHub</div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
