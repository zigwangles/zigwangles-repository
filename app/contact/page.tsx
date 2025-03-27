'use client';

export default function ContactPage() {
  // Using local state variables without React hooks
  let name = '';
  let email = '';
  let subject = '';
  let message = '';
  let isSubmitted = false;
  let error = false;

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') name = value;
    if (id === 'email') email = value;
    if (id === 'subject') subject = value;
    if (id === 'message') message = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    let isValid = true;
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
    }
    
    if (isValid) {
      console.log('Form data: ', { name, email, subject, message });
      isSubmitted = true;
      error = false;
    } else {
      isSubmitted = false;
      error = true;
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="lead">Have a question or want to work together?</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Connect With Me</h2>
              <div className="social-links">
                <a href="https://discord.gg/5Zsu5kubnp" aria-label="Discord" className="social-link-large">
                  <i className="fab fa-discord"></i>
                  <span>Discord</span>
                </a>
                <a href="https://tiktok.com/zigwangles" aria-label="TikTok" className="social-link-large">
                  <i className="fab fa-tiktok"></i>
                  <span>TikTok</span>
                </a>
                <a href="https://github.com/zigwangles" aria-label="GitHub" className="social-link-large">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="contact-form">
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Thank you for your message!</h3>
                  <p>I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <div>
                  <h2>Send Me a Message</h2>
                  {error && (
                    <div className="error-message">
                      <p>Please fill all fields correctly</p>
                    </div>
                  )}
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        className={error && !name ? 'error' : ''}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        className={error && (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? 'error' : ''}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleChange}
                        className={error && !subject ? 'error' : ''}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        onChange={handleChange}
                        className={error && !message ? 'error' : ''}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
