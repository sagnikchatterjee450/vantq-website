import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VANTQ — Building Brands, Architecting Futures',
  description:
    'VANTQ is a strategic brand management firm helping emerging businesses evolve into structured, growth-ready brands through aesthetic precision and disciplined execution.',
};

/* ── SVG icons (inlined to avoid extra deps) ── */
const IconBrush = () => (
  <svg viewBox="0 0 24 24"><path d="M3 17 L18 2 L22 6 L7 21 Q4 22 2 22 Z" /><path d="M15 5 L19 9" /></svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconLayers = () => (
  <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
const IconZap = () => (
  <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24"><path d="M4 4 L20 20 M20 4 L4 20" strokeLinecap="round"/></svg>
);
const IconInstagram = () => (
  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

const services = [
  { Icon: IconBrush, title: 'Brand Identity Architecture', text: 'Crafting cohesive visual systems — logo, palette, typography — that communicate authority and create lasting emotional impressions.' },
  { Icon: IconTarget, title: 'Strategic Positioning', text: 'Identifying and owning a defensible market position so your brand resonates clearly and commands premium trust.' },
  { Icon: IconLayers, title: 'Content & Narrative', text: 'Building the storylines, tone guides, and editorial calendars that keep audiences engaged and conversions compounding.' },
  { Icon: IconZap, title: 'Growth Integration', text: 'Deploying data-informed tactics — paid, organic, partnerships — aligned to brand fundamentals for sustainable scale.' },
];

const systemPillars = [
  { num: '01', title: 'Foundation Audit', text: 'We map your brand reality: audience data, competitive whitespace, and brand perception gaps that reveal the highest-leverage opportunities.' },
  { num: '02', title: 'Strategic Design', text: 'Every visual and verbal asset is built from your unique positioning, not templates. Authenticity is the output; rigour is the process.' },
  { num: '03', title: 'Execution & Amplification', text: 'Flawless delivery across channels, with real-time measurement that feeds back into the strategy loop, accelerating results.' },
];

const whyUs = [
  {
    title: 'RESEARCH-FIRST',
    body: 'Every recommendation is anchored in category intelligence, audience psychology, and market dynamics — not gut instinct alone.',
  },
  {
    title: 'AESTHETIC PRECISION',
    body: 'Beauty is not decoration. Rigorous visual thinking converts audience attention into business outcomes, consistently.',
  },
  {
    title: 'OUTCOME-OBSESSED',
    body: 'We track brand equity, sentiment, and commercial performance — because if it cannot be measured, it cannot be scaled.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <span className="badge">Brand Architecture Firm</span>
            </div>
            <h1 className="hero-title">
              Building<br />Brands,<br />Architecting<br />Futures.
            </h1>
            <p className="hero-desc">
              VANTQ transforms emerging businesses into structured, growth-ready brands —
              where aesthetic precision meets disciplined commercial execution.
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">Partner With Us</a>
              <Link href="/framework" className="btn">Our Framework →</Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────── */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {['Brand Identity', 'Strategic Design', 'Growth Consulting', 'Content Strategy', 'Market Positioning', 'Visual Systems', 'Brand Architecture', 'Audience Intelligence'].map((t) => (
            <span key={t} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-mint">What We Do</span>
            <h2 className="section-title">Core Services</h2>
            <p style={{ maxWidth: 640, color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1.5rem' }}>
              A focused suite of offerings, each engineered to drive compounding brand value.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ Icon, title, text }) => (
              <article key={title} className="card svc-card">
                <div className="svc-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM ──────────────────────────────────────── */}
      <section className="section section-white" id="system">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-purple">How We Work</span>
            <h2 className="section-title">The VANTQ System</h2>
            <p style={{ maxWidth: 640, color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1.5rem' }}>
              Our three-pillar operating model ensures every engagement delivers measurable brand equity, not just deliverables.
            </p>
          </div>
          <div className="system-grid">
            {systemPillars.map(({ num, title, text }) => (
              <article key={num} className="card sys-card">
                <div className="sys-num mono">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="sys-cta">
            <Link href="/framework" className="btn btn-primary">
              Explore Full Framework →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────── */}
      <section className="section" id="why-us">
        <div className="container">
          <div className="why-header section-header">
            <span className="badge">Our Advantage</span>
            <h2 className="section-title">Why VANTQ?</h2>
          </div>
          <div className="why-grid">
            {whyUs.map(({ title, body }) => (
              <div key={title} className="why-col">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIONARY ───────────────────────────────────── */}
      <section className="section section-white" id="visionary">
        <div className="container">
          <div className="visionary-grid">
            <div className="vis-image-wrap">
              <div className="vis-img">
                {/* Placeholder gradient image */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '500px',
                }}>
                  <div style={{ textAlign: 'center', color: '#fff', fontFamily: 'var(--font-header)', textTransform: 'uppercase' }}>
                    <div style={{ fontSize: '5rem', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}>VQ</div>
                    <div style={{ fontSize: '0.85rem', letterSpacing: '0.2em', marginTop: '0.75rem', opacity: 0.6 }}>FOUNDER</div>
                  </div>
                </div>
              </div>
              <div className="vis-quote">
                <p className="qt">"Great brands aren't built on logos. They're built on conviction, consistency, and the courage to occupy space."</p>
                <span className="qa">— The VANTQ Vision</span>
              </div>
            </div>

            <div className="vis-content">
              <span className="badge badge-purple" style={{ marginBottom: '2rem' }}>The Visionary</span>
              <h2>Driving Purpose-Led Brand Building</h2>
              <p className="lead">VANTQ was founded on a simple truth: most brands are under-invested and over-commodified.</p>
              <p className="body">
                We exist to change that equation. Our approach blends the rigour of brand strategy with the empathy of human-centred design — creating brands that don&apos;t just look good, but genuinely perform across every commercial touchpoint.
              </p>
              <div className="social-row">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                  <IconLinkedIn />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="X / Twitter">
                  <IconX />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                  <IconInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-header section-header">
            <span className="badge badge-mint">Work With Us</span>
            <h2 className="section-title">Get In Touch</h2>
            <p style={{ maxWidth: 560, color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1.5rem', margin: '1.5rem auto 0' }}>
              Ready to build something exceptional? Reach us on any of these platforms.
            </p>
          </div>
          <div className="contact-grid">
            {[
              { cls: 'cc-linkedin', Icon: IconLinkedIn, name: 'LinkedIn', handle: '@VANTQ', href: 'https://linkedin.com' },
              { cls: 'cc-x',       Icon: IconX,        name: 'X / Twitter', handle: '@vantq_co', href: 'https://x.com' },
              { cls: 'cc-ig',      Icon: IconInstagram,name: 'Instagram', handle: '@vantq', href: 'https://instagram.com' },
              { cls: 'cc-email',   Icon: IconMail,     name: 'Email', handle: 'hello@vantq.co', href: 'mailto:hello@vantq.co' },
            ].map(({ cls, Icon, name, handle, href }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className={`contact-card ${cls}`}>
                <div className="contact-left">
                  <div className="contact-icon"><Icon /></div>
                  <div className="contact-info">
                    <h3>{name}</h3>
                    <p>{handle}</p>
                  </div>
                </div>
                <div className="contact-arrow"><IconArrow /></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
