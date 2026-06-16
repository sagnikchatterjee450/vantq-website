'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Theme is fixed to dark only; no theme icons required.

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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Initialise theme from localStorage / system preference
  useEffect(() => {
    // Force dark theme for the whole app (no light mode available)
    try { document.documentElement.setAttribute('data-theme', 'dark'); } catch (e) {}
  }, []);

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
