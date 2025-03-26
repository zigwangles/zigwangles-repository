'use client';

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1>My Projects</h1>
          <p className="lead">A showcase of my work and contributions</p>
        </div>
      </section>

      <section className="project-filters">
        <div className="container">
          <div className="filter-buttons">
            <button className="filter-btn active" data-filter="all">All</button>
            <button className="filter-btn" data-filter="web">Web</button>
            <button className="filter-btn" data-filter="mobile">Mobile</button>
            <button className="filter-btn" data-filter="backend">Backend</button>
          </div>
        </div>
      </section>

      <section className="projects-grid-container">
        <div className="container">
          <div className="projects-grid">
            <div className="project-item" data-category="web" id="project1">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="project-details">
                  <h3>Project Alpha</h3>
                  <p>A full-stack web application with real-time features using React, Node.js, and Socket.io.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">Socket.io</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-small">View Demo</a>
                    <a href="#" className="btn btn-outline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item" data-category="mobile" id="project2">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="project-details">
                  <h3>Project Beta</h3>
                  <p>Cross-platform mobile application built with React Native that helps users track their daily habits.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Redux</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-small">View Demo</a>
                    <a href="#" className="btn btn-outline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item" data-category="backend" id="project3">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-server"></i>
                </div>
                <div className="project-details">
                  <h3>Project Gamma</h3>
                  <p>Scalable cloud-based data processing pipeline built with AWS Lambda, S3, and DynamoDB.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">DynamoDB</span>
                    <span className="tech-tag">Serverless</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-small">View Demo</a>
                    <a href="#" className="btn btn-outline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item" data-category="web">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="project-details">
                  <h3>Project Delta</h3>
                  <p>Interactive dashboard for visualizing and analyzing complex datasets with React and D3.js.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">D3.js</span>
                    <span className="tech-tag">Styled Components</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-small">View Demo</a>
                    <a href="#" className="btn btn-outline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item" data-category="backend">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="project-details">
                  <h3>Project Epsilon</h3>
                  <p>RESTful API service built with Express.js and MongoDB for a content management system.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">JWT</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-small">View Demo</a>
                    <a href="#" className="btn btn-outline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item" data-category="mobile">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="project-details">
                  <h3>Project Zeta</h3>
                  <p>Location-based mobile app that helps users discover local events and attractions.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Google Maps API</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-small">View Demo</a>
                    <a href="#" className="btn btn-outline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
