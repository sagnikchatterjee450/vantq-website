import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The VANTQ Framework — Our Five-Phase Brand Building Methodology',
  description:
    'Discover the VANTQ Framework: a rigorous five-phase methodology that transforms emerging businesses into structured, growth-ready brands through research, strategy, identity, amplification, and iteration.',
};

/* ── Inline SVG Icons ── */
const IconArrowLeft = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    style={{
      stroke: 'currentColor',
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const IconSearch = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    style={{
      stroke: 'currentColor',
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconPanelsTopLeft = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    style={{
      stroke: 'currentColor',
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const IconTarget = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    style={{
      stroke: 'currentColor',
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconTrendingUp = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    style={{
      stroke: 'currentColor',
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const IconShieldCheck = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    style={{
      stroke: 'currentColor',
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6v7z" />
    <polyline points="9 11 11 13 15 9" />
  </svg>
);

const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    style={{
      stroke: 'currentColor',
      fill: 'none',
      strokeWidth: 2.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── Framework steps data ── */
const steps = [
  {
    number: '01',
    Icon: IconSearch,
    title: 'Strategic Brand Audit',
    description:
      'A comprehensive evaluation of your brand’s current position across identity, communication, market perception, and digital execution.',
    items: [
      'Visual coherence & brand consistency → ensures your audience instantly recognizes and trusts your brand.',
      'Messaging clarity & value articulation → makes your value crystal clear to customers.',
      'Audience alignment & positioning gaps → identifies who you truly serve and where you’re missing.',
      'Competitive landscape & differentiation → finds your unique edge in the market.',
      'Digital presence performance → measures impact, engagement, and reach.',
    ],
    outcome:
      'A structured diagnostic report identifying weaknesses, leverage points, and actionable growth opportunities.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    number: '02',
    Icon: IconPanelsTopLeft,
    title: 'Identity Architecture',
    description:
      'We rebuild your brand from its foundation — aligning visuals, tone, structure, and strategic intent into one cohesive system.',
    items: [
      'Refined brand positioning statement',
      'Visual direction & aesthetic system',
      'Messaging framework & tone alignment',
      'Brand guidelines to ensure consistency across all touchpoints',
    ],
    outcome:
      'A cohesive, premium identity built for scalability — not just short-term appeal.',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
  },
  {
    number: '03',
    Icon: IconTarget,
    title: 'Market Repositioning',
    description:
      'We redefine how your brand is perceived — shifting it from ordinary to intentional.',
    items: [
      'Audience refinement & targeting precision → ensures your campaigns reach the right people.',
      'Value proposition restructuring → communicates why customers should choose you.',
      'Authority positioning → builds trust and credibility in your industry.',
      'Strategic differentiation → makes your brand stand out in a crowded market.',
    ],
    outcome:
      'Clear market relevance and a compelling reason for customers to choose you.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    number: '04',
    Icon: IconTrendingUp,
    title: 'Growth Integration',
    description:
      'A brand without growth systems is mere decoration. We align your brand identity with structured growth channels and scalable marketing infrastructure.',
    items: [
      'Content ecosystem strategy',
      'Funnel alignment',
      'Conversion optimization',
      'Platform prioritization',
      'Long-term growth roadmap',
    ],
    outcome:
      'A brand that doesn’t just look premium — it performs and grows consistently.',
    image: 'https://picsum.photos/seed/growth/800/800',
  },
  {
    number: '05',
    Icon: IconShieldCheck,
    title: 'Ongoing Brand Management',
    description:
      'Brands evolve. We ensure yours does — intentionally and strategically.',
    items: [
      'Strategic oversight → keeping your brand aligned with goals',
      'Performance evaluation → measuring impact and optimizing continuously',
      'Adaptive positioning → responding to market shifts without losing identity',
      'Long-term brand continuity → maintaining authority and consistency',
    ],
    outcome:
      'Sustained authority, structured growth, and disciplined brand evolution.',
    image: 'https://picsum.photos/seed/management/800/800',
  },
];

export default function FrameworkPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="fw-hero">
        <div className="container">
          <Link
            href="/"
            className="btn back-link"
            style={{ display: 'inline-flex', marginBottom: '2.5rem' }}
          >
            <IconArrowLeft /> Back to Home
          </Link>

          <span className="badge badge-mint">Our Methodology</span>
          <h1>The VANTQ Framework</h1>
          <p>
            A disciplined approach to brand evolution. We don't just design;
            we architect systems of presence and performance.
          </p>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="fw-steps">
        <div className="container">
          {steps.map(
            ({ number, Icon, title, description, items, outcome, image }) => (
              <div className="fw-step" key={number}>
                {/* Text column */}
                <div className="fw-desc">
                  <div className="fw-step-head">
                    <span className="fw-num mono">{number}</span>
                    <div className="fw-icon">
                      <Icon />
                    </div>
                  </div>

                  <h2>{title}</h2>
                  <p className="fw-summary">{description}</p>

                  <ul className="fw-focus">
                    {items.map((item) => (
                      <li key={item}>
                        <IconCheck />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="fw-outcome">
                    <h4>Primary Outcome</h4>
                    <p>{outcome}</p>
                  </div>
                </div>

                {/* Image column */}
                <div className="fw-img-col" style={{ direction: 'ltr' }}>
                  <div className="fw-img-frame">
                    <img
                      src={image}
                      alt={title}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to evolve?</h2>
            <p>
              Let's apply the VANTQ system to your brand and build a presence
              that lasts.
            </p>
            <Link href="/#contact" className="btn btn-accent">
              Initiate Contact →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
