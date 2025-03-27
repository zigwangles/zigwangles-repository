export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Me</h1>
          <p className="lead">Get to know more about my journey and expertise</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>My Story</h2>
              <p>
                Hello! I'm zigwangles, a passionate software developer with a keen interest in
                building elegant and efficient solutions to complex problems.
              </p>
              <p>
                With over 5 years of experience in the industry, I've worked on a variety of
                projects ranging from web applications to mobile apps and backend systems.
              </p>
              <p>
                My journey in software development began when I built my first website at the
                age of 16. Since then, I've been constantly learning and adapting to new
                technologies and methodologies.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2022 - Present</div>
              <div className="timeline-content">
                <h3>Senior Developer - Tech Innovations Inc.</h3>
                <p>Leading development of cloud-based solutions and mentoring junior developers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2019 - 2022</div>
              <div className="timeline-content">
                <h3>Full Stack Developer - Digital Solutions LLC</h3>
                <p>Developed and maintained web applications using modern JavaScript frameworks.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2017 - 2019</div>
              <div className="timeline-content">
                <h3>Junior Developer - CodeCraft Studios</h3>
                <p>Started my professional journey building responsive websites and applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="tech-stack">
        <div className="container">
          <h2>Technologies I Use</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Figma</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
