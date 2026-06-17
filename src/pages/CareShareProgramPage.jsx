import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { getProgramById } from '../data/careSharePrograms';

export default function CareShareProgramPage() {
  const { programId } = useParams();
  const program = getProgramById(programId);

  useEffect(() => {
    document.body.classList.add('nav-solid', 'nav-scrolled');
    return () => document.body.classList.remove('nav-solid', 'nav-scrolled');
  }, []);

  if (!program) return <Navigate to="/care-share" replace />;

  return (
    <div className="csp">
      <TopBar />
      <Nav />

      {/* Hero */}
      <section className="csp__hero" style={{ backgroundImage: `url(${program.img})` }}>
        <div className="csp__hero-overlay" />
        <div className="container csp__hero-inner">
          <Link to="/care-share" className="csp__back">← Back to Care &amp; Share</Link>
          <div className="csp__hero-badge">
            <img src="/assets/care-share-logo.png" alt="Care & Share" className="csp__hero-logo" />
          </div>
          <h1 className="csp__hero-heading">{program.name}</h1>
          <p className="csp__hero-loc">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path d="M8 14s-5-5.1-5-9a5 5 0 0 1 10 0c0 3.9-5 9-5 9z"/><circle cx="8" cy="5" r="1.5"/>
            </svg>
            {program.location}
          </p>
          <p className="csp__hero-desc">{program.heroDesc}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="csp__stats-bar">
        <div className="container csp__stats-row">
          {program.stats.map((s, i) => (
            <div key={i} className="csp__stat-item">
              <div className="csp__stat-num">{s.num}</div>
              <div className="csp__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="csp__about">
        <div className="container csp__about-grid">
          <div className="csp__about-label-col">
            <p className="csp__section-label">About This Programme</p>
          </div>
          <div className="csp__about-body">
            {program.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Log */}
      <section className="csp__activities">
        <div className="container">
          <p className="csp__section-label">Activities &amp; Help Distribution</p>
          <h2 className="csp__activities-heading">What we have <em>done</em></h2>

          <div className="csp__timeline">
            {program.activities.map((act, i) => (
              <div key={i} className="csp__timeline-item">
                <div className="csp__timeline-left">
                  <div className="csp__timeline-dot" />
                  <div className="csp__timeline-month">{act.month}</div>
                </div>
                <div className="csp__timeline-right">
                  <h3 className="csp__timeline-title">{act.title}</h3>
                  <ul className="csp__timeline-list">
                    {act.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verse */}
      {program.verse && (
        <section className="csp__verse">
          <div className="container csp__verse-inner">
            <blockquote>
              <p className="csp__verse-text">"{program.verse.text}"</p>
              <cite className="csp__verse-ref">— {program.verse.ref}</cite>
            </blockquote>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="csp__cta">
        <div className="container csp__cta-inner">
          <h2 className="csp__cta-heading">Want to <em>support</em> this programme?</h2>
          <p className="csp__cta-sub">Partner with us in bringing hope and help to communities in need.</p>
          <div className="csp__cta-btns">
            <a href="/contact" className="btn btn--primary btn--lg">Get in Touch →</a>
            <Link to="/care-share" className="btn btn--ghost btn--lg">← All Programmes</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
