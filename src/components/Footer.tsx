import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">VANTQ</div>
        <div className="footer-links">
          <Link href="/framework" className="footer-link">Framework</Link>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
        <div className="footer-copy">
          © 2026 VANTQ Consulting Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
