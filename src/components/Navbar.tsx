'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SunIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Initialise theme from localStorage / system preference
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = saved ?? sys;
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="logo">VANTQ</Link>

          {/* Desktop links */}
          <div className="nav-links">
            {isHome ? (
              <>
                <a href="#services" className="nav-link">Services</a>
                <a href="#system"   className="nav-link">System</a>
                <a href="#why-us"   className="nav-link">Why Us</a>
              </>
            ) : (
              <Link href="/" className="nav-link">Home</Link>
            )}
            <Link href="/framework" className={`nav-link${pathname === '/framework' ? ' active' : ''}`}>
              Framework
            </Link>
            <a href={isHome ? '#contact' : '/#contact'} className="btn btn-secondary mono" style={{ padding: '0.45rem 1rem', boxShadow: '3px 3px 0 0 var(--border-color)' }}>
              Get Started
            </a>
          </div>

          <div className="nav-actions">
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`}>
        {isHome ? (
          <>
            <a href="#services" className="mobile-nav-link" onClick={closeMenu}>Services</a>
            <a href="#system"   className="mobile-nav-link" onClick={closeMenu}>System</a>
            <a href="#why-us"   className="mobile-nav-link" onClick={closeMenu}>Why Us</a>
          </>
        ) : (
          <Link href="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
        )}
        <Link href="/framework" className="mobile-nav-link" onClick={closeMenu}>Framework</Link>
        <a href={isHome ? '#contact' : '/#contact'} className="mobile-nav-link" style={{ color: 'var(--primary)' }} onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
