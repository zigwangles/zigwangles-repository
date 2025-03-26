'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '../ui/theme-provider';

const Link = dynamic(() => import('next/link'), { ssr: false });

export default function Navbar() {
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    document.querySelector('.nav-links')?.classList.toggle('active');
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>
            <Link href="/">
              <span className="highlight">Zig</span>Wangles
            </Link>
          </h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
