export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Me</h1>
          <p className="lead">Hi there! I'm a 15-year-old student and coding enthusiast</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>My Story</h2>
              <p>
                Hello! I'm a passionate 15-year-old with a love for sailing, web development, and anime.
              </p>
              <p>
                I've been diving into coding for a while now, focusing mainly on Python and web technologies.
                When I'm not coding, you can find me on the water with my sailing club or contemplating my
                next move in chess.
              </p>
              <p>
                Currently, I'm challenging myself by learning Assembly (yes, I might be a bit of a masochist),
                while continuing to build my skills in TypeScript and other web technologies.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="/assets/images/profile.jpg" 
                alt="Profile Image" 
                className="rounded-image"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <h2>Activities & Interests</h2>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Current</div>
              <div className="timeline-content">
                <h3>Sailing Club</h3>
                <p>Active member of the sailing club, improving my skills on the water.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Current</div>
              <div className="timeline-content">
                <h3>Chess</h3>
                <p>Enjoy strategic thinking and the mental challenge of chess.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Favorite Subjects</div>
              <div className="timeline-content">
                <h3>History & Math</h3>
                <p>Most enjoy studying history and mathematics at school.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="tech-stack">
        <div className="container">
          <h2>My Tech Skills</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>High Level</h3>
              <ul>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Medium Level</h3>
              <ul>
                <li>TypeScript</li>
                <li>Web Development</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Learning</h3>
              <ul>
                <li>Assembly (to hate myself)</li>
                <li>Advanced Web Frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="goals">
        <div className="container">
          <h2>Future Goals</h2>
          <p>I'm passionate about building a development team and fostering a community of like-minded coders. 
             My aim is to collaborate on meaningful projects and continue growing my technical skills.</p>
        </div>
      </section>
    </div>
  );
}
