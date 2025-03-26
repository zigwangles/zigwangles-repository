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
              <i className="fas fa-code"></i>
            </div>
            <h3>Project Alpha</h3>
            <p>A full-stack web application with real-time features</p>
            <Link href="/projects#project1" className="btn btn-small">
              Learn More
            </Link>
          </div>
          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Project Beta</h3>
            <p>Mobile app with cross-platform compatibility</p>
            <Link href="/projects#project2" className="btn btn-small">
              Learn More
            </Link>
          </div>
          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-server"></i>
            </div>
            <h3>Project Gamma</h3>
            <p>Cloud-based data processing pipeline</p>
            <Link href="/projects#project3" className="btn btn-small">
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
