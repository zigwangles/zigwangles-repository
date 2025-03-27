'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hello, I'm <span className="highlight">zigwangles</span>
          </h1>
          <h2>Software Developer & Problem Solver</h2>
          <p>Crafting elegant solutions through code</p>
          <div className="cta-buttons">
            <Link href="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
