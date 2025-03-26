export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2>My Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>Creating responsive and interactive web applications</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Mobile Development</h3>
            <p>Building cross-platform mobile experiences</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-database"></i>
            <h3>Backend Systems</h3>
            <p>Designing robust and scalable server-side solutions</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-cloud"></i>
            <h3>Cloud Services</h3>
            <p>Deploying and managing cloud infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
}
