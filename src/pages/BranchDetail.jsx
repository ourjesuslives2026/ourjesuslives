import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBranchById, branches, langLabel } from '../data/branches';
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';

function getEmbedSrc(mapUrl) {
  try {
    const q = new URL(mapUrl).searchParams.get('query');
    return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed&z=15`;
  } catch {
    return '';
  }
}

export default function BranchDetail() {
  const { id } = useParams();
  const branch = getBranchById(id);

  if (!branch) {
    return (
      <div className="bd-notfound">
        <h1>Branch not found</h1>
        <Link to="/" className="btn btn--primary">← Back to Home</Link>
      </div>
    );
  }

  const otherBranches = branches.filter(b => b.id !== branch.id);
  const embedSrc = getEmbedSrc(branch.mapUrl);

  // Keep nav in solid (non-transparent) state on detail pages
  useEffect(() => {
    document.body.classList.add('nav-solid', 'nav-scrolled');
    return () => document.body.classList.remove('nav-solid', 'nav-scrolled');
  }, []);

  return (
    <div className="bd">
      <TopBar />
      <Nav />


      {/* ── Hero ── */}
      <section className="bd__hero">
        <div className="bd__hero-img">
          <img src={branch.churchPhoto} alt={branch.shortName} style={branch.heroPos ? { objectPosition: branch.heroPos } : undefined} />
          <div className="bd__hero-overlay" />
        </div>
        <div className="bd__hero-content">
          <div className="bd__lang-pills">
            {branch.langs.map(l => (
              <span key={l} className={`lang-pill lang-pill--${l}`}>{langLabel[l]}</span>
            ))}
          </div>
          <h1 className="bd__hero-title">{branch.shortName}</h1>
          <p className="bd__hero-city">{branch.city}, United Kingdom</p>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="bd__body">

        {/* Welcome message */}
        <section className="bd__section bd__welcome">
          <div className="bd__section-label">Welcome</div>
          <blockquote className="bd__welcome-text">
            "{branch.welcome}"
          </blockquote>
          {branch.about && (
            <div className="bd__about">
              {branch.about.map((para, i) => (
                <p key={i} className="bd__about-para">{para}</p>
              ))}
            </div>
          )}
          {branch.verse && (
            <blockquote className="bd__verse">
              <p className="bd__verse-text">"{branch.verse.text}"</p>
              <cite className="bd__verse-ref">— {branch.verse.ref}</cite>
            </blockquote>
          )}
          {branch.welcomeHindi && (
            <p className="bd__welcome-hindi">{branch.welcomeHindi}</p>
          )}
        </section>

        {/* Pastor */}
        <section className="bd__section bd__pastor">
          <div className="bd__section-label">Leadership</div>
          <div className="bd__pastor-card">
            <div className="bd__pastor-photo">
              <img src={branch.pastoralPhoto} alt={branch.pastor} />
            </div>
            <div className="bd__pastor-info">
              <div className="bd__pastor-name">{branch.pastor}</div>
              <div className="bd__pastor-role">{branch.pastoralRole}</div>
              {branch.pastoralPhone && (
                <div className="bd__pastor-phone">Phone: {branch.pastoralPhone}</div>
              )}
              <p className="bd__pastor-desc">
                {branch.pastoralDesc || `Dedicated to serving the ${branch.city} community through worship, teaching and pastoral care — building a church where every person is known, valued, and loved.`}
              </p>
            </div>
          </div>
        </section>

        {/* Details meta */}
        {branch.addr && (
          <section className="bd__section bd__details">
            <div className="bd__section-label">Service Info</div>
            <div className="bd__meta-grid">
              {branch.meta ? branch.meta.map(m => (
                <div key={m.k} className="bd__meta-item">
                  <span className="bd__meta-k">{m.k}</span>
                  <span className="bd__meta-v">{m.v}</span>
                </div>
              )) : (
                <div className="bd__meta-item">
                  <span className="bd__meta-k">Address</span>
                  <span className="bd__meta-v">{branch.addr}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Directions */}
        {(branch.directionsCar || branch.directionsBus) && (
          <section className="bd__section bd__directions">
            <div className="bd__section-label">Getting Here</div>
            {branch.directionsCar && (
              <div className="bd__dir-block">
                <h4 className="bd__dir-heading">By Car</h4>
                {branch.directionsCar.map((d, i) => (
                  <p key={i} className="bd__dir-para">{d}</p>
                ))}
              </div>
            )}
            {branch.directionsBus && (
              <div className="bd__dir-block">
                <h4 className="bd__dir-heading">By Bus</h4>
                {branch.directionsBus.map((d, i) => (
                  <p key={i} className="bd__dir-para">{d}</p>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Map */}
        <section className="bd__section bd__map-section">
          <div className="bd__section-label">Location</div>
          <div className="bd__map-wrap">
            <iframe
              src={embedSrc}
              title={`Map — ${branch.shortName}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={branch.mapUrl}
            target="_blank"
            rel="noopener"
            className="btn btn--ghost bd__map-open"
          >
            Open in Google Maps →
          </a>
        </section>
      </div>

      {/* ── Other branches ── */}
      <section className="bd__other">
        <div className="bd__other-inner">
          <h2 className="bd__other-title">Other Branches</h2>
          <div className="bd__other-grid">
            {otherBranches.map(b => (
              <Link key={b.id} to={`/branch/${b.id}`} className="bd__other-card">
                {b.stripe && <div className="bd__other-stripe" style={{ background: b.stripe }} />}
                <div className="bd__other-langs">
                  {b.langs.map(l => (
                    <span key={l} className={`lang-pill lang-pill--${l} lang-pill--sm`}>{langLabel[l]}</span>
                  ))}
                </div>
                <div className="bd__other-name">{b.shortName}</div>
                <div className="bd__other-city">{b.city}</div>
                <span className="bd__other-link">View Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
