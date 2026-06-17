import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const whatWeDo = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M24 8c0 0-12 6-12 16a12 12 0 0 0 24 0C36 14 24 8 24 8z"/>
        <path d="M24 20v8M20 24h8"/>
      </svg>
    ),
    title: 'Worship',
    body: 'We open every gathering with passionate, Spirit-led worship. Music, prayer, and praise that prepares our hearts to encounter the living God.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <rect x="8" y="8" width="32" height="32" rx="3"/>
        <path d="M16 18h16M16 24h12M16 30h8"/>
      </svg>
    ),
    title: 'The Word',
    body: 'Bold, relevant teaching from God\'s Word that speaks to real life. We believe the Bible has answers to every question the next generation is asking.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <circle cx="24" cy="18" r="8"/>
        <path d="M10 40c0-7.7 6.3-14 14-14s14 6.3 14 14"/>
        <path d="M34 18c2.2 0 4 1.8 4 4s-1.8 4-4 4"/>
      </svg>
    ),
    title: 'Community',
    body: 'A safe, welcoming space where young people can be themselves, build real friendships, and find a church family that truly cares.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M8 36l8-8 6 6 10-12 8 10"/>
        <rect x="8" y="8" width="32" height="28" rx="2"/>
      </svg>
    ),
    title: 'Activities & Discussions',
    body: 'Interactive sessions, group discussions, and activities designed to help youth explore faith, ask hard questions, and grow in their walk with Christ.',
  },
];

const photos = [
  { src: '/assets/gallery/family-1.jpg',   alt: 'Youth commissioning gathering' },
  { src: '/assets/gallery/kids-1.jpg',     alt: 'Young people celebrating with nations flags' },
  { src: '/assets/gallery/worship-4.jpg',  alt: 'Worship team leading youth in song' },
  { src: '/assets/gallery/family-2.jpg',   alt: 'Families worshipping together' },
  { src: '/assets/gallery/kids-2.jpg',     alt: 'Youth in prayer at Sunday service' },
  { src: '/assets/gallery/worship-5.jpg',  alt: 'Congregation hands raised in worship' },
];

export default function YouthPage() {
  useEffect(() => {
    document.body.classList.add('nav-solid', 'nav-scrolled');
    return () => document.body.classList.remove('nav-solid', 'nav-scrolled');
  }, []);

  return (
    <div className="yp">
      <TopBar />
      <Nav />

      {/* Hero */}
      <section className="yp__hero">
        <div className="yp__hero-bg" aria-hidden="true">
          <img src="/assets/gallery/worship-1.jpg" alt="" />
        </div>
        <div className="yp__hero-overlay" />
        <div className="container yp__hero-inner">
          <Link to="/#ministries" className="yp__back">← Back to Ministries</Link>
          <p className="yp__eyebrow">Youth Ministry</p>
          <h1 className="yp__hero-heading">
            A Generation<br /><em>4 Jesus</em>
          </h1>
          <p className="yp__hero-desc">
            We believe these are the end times and the time of the great harvest.
            Our heart goes out to the youth of today — we stand together in the gap
            and intercede for this generation.
          </p>
          <div className="yp__hero-meta">
            <div className="yp__hero-badge">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                <rect x="2" y="3" width="12" height="11" rx="1.5"/><path d="M5 1v4M11 1v4M2 8h12"/>
              </svg>
              Last Saturday of every month
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="yp__mission">
        <div className="container yp__mission-grid">
          <div>
            <p className="yp__section-label">Who We Are</p>
            <h2 className="yp__mission-heading">
              Youth's 4 Him have<br />decided to <em>follow Jesus</em>
            </h2>
          </div>
          <div className="yp__mission-body">
            <p>
              We are a church praying for Revival to happen again in this land. We know
              it's our young generation who will lead the church tomorrow. At OJLM, we
              have our dedicated youth ministry team to encourage, support and build our
              youngsters to take over the baton and win souls to Jesus.
            </p>
            <p>
              Youth's 4 Him has decided to follow Jesus. <strong>Are you in?</strong> If you
              are in, then come and experience the life-changing God. Why not join us —
              last Saturday of every month, we gather together with worship, word,
              activities, discussions and lot more!
            </p>
            <div className="yp__cta-inline">
              <a href="#meet" className="btn btn--primary">Find Out When We Meet ↓</a>
              <Link to="/contact" className="btn btn--ghost">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo mosaic */}
      <section className="yp__photos" aria-label="Youth ministry photos">
        <div className="yp__photo-grid">
          {photos.map((p, i) => (
            <div key={i} className={`yp__photo-cell yp__photo-cell--${i + 1}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="yp__what">
        <div className="container">
          <p className="yp__section-label">Every Gathering</p>
          <h2 className="yp__what-heading">What we <em>do together</em></h2>
          <div className="yp__what-grid">
            {whatWeDo.map((w, i) => (
              <div key={i} className="yp__what-card">
                <div className="yp__what-icon" aria-hidden="true">{w.icon}</div>
                <h3 className="yp__what-title">{w.title}</h3>
                <p className="yp__what-body">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verse */}
      <section className="yp__verse">
        <div className="container yp__verse-inner">
          <div className="yp__verse-mark">&ldquo;</div>
          <blockquote>
            <p className="yp__verse-text">
              And it shall come to pass afterward that I will pour out My Spirit on all flesh;
              Your sons and your daughters shall prophesy, Your old men shall dream dreams,
              Your young men shall see visions.
            </p>
            <cite className="yp__verse-ref">— Joel 2:28</cite>
          </blockquote>
        </div>
      </section>

      {/* When we meet */}
      <section className="yp__meet" id="meet">
        <div className="container yp__meet-inner">
          <p className="yp__section-label">When We Meet</p>
          <h2 className="yp__meet-heading">Last Saturday <em>of every month</em></h2>
          <p className="yp__meet-sub">
            We gather on the last Saturday of every month across our Sheffield fellowship.
            All young people are welcome — whether you've grown up in church or this is
            your very first time.
          </p>
          <div className="yp__meet-cards">
            <div className="yp__meet-card">
              <div className="yp__meet-card-icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                  <rect x="3" y="5" width="26" height="24" rx="2"/><path d="M3 12h26M10 3v4M22 3v4"/>
                </svg>
              </div>
              <div className="yp__meet-card-label">When</div>
              <div className="yp__meet-card-value">Last Saturday of every month</div>
            </div>
            <div className="yp__meet-card">
              <div className="yp__meet-card-icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                  <circle cx="16" cy="16" r="13"/><path d="M16 8v8l5 3"/>
                </svg>
              </div>
              <div className="yp__meet-card-label">Time</div>
              <div className="yp__meet-card-value">Contact us for service times</div>
            </div>
            <div className="yp__meet-card">
              <div className="yp__meet-card-icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                  <path d="M16 28s-11-9.1-11-16a11 11 0 0 1 22 0c0 6.9-11 16-11 16z"/><circle cx="16" cy="12" r="3"/>
                </svg>
              </div>
              <div className="yp__meet-card-label">Location</div>
              <div className="yp__meet-card-value">Sheffield — Our Jesus Lives Ministries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="yp__cta">
        <div className="container yp__cta-inner">
          <h2 className="yp__cta-heading">Are you <em>in?</em></h2>
          <p className="yp__cta-sub">
            Come and experience the life-changing God with a generation rising up for Jesus.
          </p>
          <div className="yp__cta-btns">
            <Link to="/contact" className="btn btn--primary btn--lg">Get in Touch →</Link>
            <Link to="/#ministries" className="btn btn--ghost btn--lg">← Back to Ministries</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
