'use client';

import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-users"></i>
            </div>
            <h3>aiio.dev</h3>
            <p>A development team project focused on innovative solutions</p>
            <Link href="/projects#aiio" className="btn btn-small">
              Learn More
            </Link>
          </div>
          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-headphones"></i>
            </div>
            <h3>tokydl</h3>
            <p>Open source Tokybook python audiobook download script</p>
            <Link href="/projects#tokydl" className="btn btn-small">
              Learn More
            </Link>
          </div>
        </div>
        <div className="center-align">
          <Link href="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
