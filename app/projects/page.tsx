'use client';

export default function ProjectsPage() {
  // Handle filter click on the client side
  const handleFilterClick = (filter: string) => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    document.querySelector(`[data-filter="${filter}"]`)?.classList.add('active');
    
    // Filter the projects based on the selected category
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach((item) => {
      const element = item as HTMLElement;
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  };

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
            <button 
              className="filter-btn active" 
              data-filter="all"
              onClick={() => handleFilterClick('all')}
            >All</button>
            <button 
              className="filter-btn" 
              data-filter="web"
              onClick={() => handleFilterClick('web')}
            >Web</button>
            <button 
              className="filter-btn" 
              data-filter="script"
              onClick={() => handleFilterClick('script')}
            >Script</button>
            <button 
              className="filter-btn" 
              data-filter="team"
              onClick={() => handleFilterClick('team')}
            >Team</button>
          </div>
        </div>
      </section>

      <section className="projects-grid-container">
        <div className="container">
          <div className="projects-grid">
            <div className="project-item" data-category="web" id="pirating">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="project-details">
                  <h3>pirating.xyz</h3>
                  <p>Open source pirating website providing access to digital content.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">Storj</span>
                  </div>
                  <div className="project-links">
                    <a href="https://pirating.xyz" className="btn btn-small">View Site</a>
                    <a href="https://github.com/yourusername/pirating.xyz" className="btn btn-outline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item" data-category="team" id="aiio">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-users"></i>
                </div>
                <div className="project-details">
                  <h3>aiio.dev</h3>
                  <p>A development team project (not started yet) focused on innovative solutions.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">TypeScript</span>
                  </div>
                  <div className="project-links">
                    <a href="https://aiio.dev" className="btn btn-small">View Site</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item" data-category="script" id="tokydl">
              <div className="project-card">
                <div className="project-image">
                  <i className="fas fa-headphones"></i>
                </div>
                <div className="project-details">
                  <h3>tokydl</h3>
                  <p>Open source Tokybook python audiobook download script for easily downloading audiobooks.</p>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">re</span>
                    <span className="tech-tag">json5</span>
                    <span className="tech-tag">requests</span>
                    <span className="tech-tag">pathlib</span>
                    <span className="tech-tag">tqdm</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/yourusername/tokydl" className="btn btn-small">View Demo</a>
                    <a href="https://github.com/yourusername/tokydl" className="btn btn-outline">Source Code</a>
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

