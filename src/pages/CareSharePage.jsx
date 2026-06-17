import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { careSharePrograms } from '../data/careSharePrograms';

const programs = careSharePrograms.map(p => ({
  id: p.id,
  name: p.name,
  location: p.location,
  img: p.img,
  desc: p.about[0],
}));

export default function CareSharePage() {
  useEffect(() => {
    document.body.classList.add('nav-solid', 'nav-scrolled');
    return () => document.body.classList.remove('nav-solid', 'nav-scrolled');
  }, []);

  return (
    <div className="cs">
      <TopBar />
      <Nav />

      {/* Hero */}
      <section className="cs__hero">
        <div className="container cs__hero-inner">
          <img src="/assets/care-share-logo.png" alt="Care & Share logo" className="cs__logo" />
          <div>
            <p className="cs__eyebrow">Our Charity</p>
            <h1 className="h-display cs__heading">Care <em>&amp; Share</em></h1>
            <p className="lead cs__sub">
              A non-profit organisation run by Our Jesus Lives Ministries, committed to
              helping communities deprived of basic needs since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="cs__about">
        <div className="container cs__about-grid">
          <div>
            <p className="cs__section-label">About Our Charity</p>
            <h2 className="cs__about-heading">Making a difference <em>since 2012</em></h2>
          </div>
          <div className="cs__about-body">
            <p>
              Care and Share is a non-profit organisation run by Our Jesus Lives Ministries
              that is committed to helping countries that are deprived of basic needs and
              socio-economic challenges. Through our charity, we have assisted in a lot of
              challenging areas since 2012.
            </p>
            <p>
              Driven by the love of Jesus Christ, we believe every person deserves dignity,
              compassion, and practical support. Our teams across the UK and Asia work
              tirelessly to bring relief, restoration, and hope to those who need it most.
            </p>
            <div className="cs__stats">
              <div className="cs__stat">
                <div className="cs__stat-num">2012</div>
                <div className="cs__stat-label">Founded</div>
              </div>
              <div className="cs__stat">
                <div className="cs__stat-num">5</div>
                <div className="cs__stat-label">Regional Programmes</div>
              </div>
              <div className="cs__stat">
                <div className="cs__stat-num">4+</div>
                <div className="cs__stat-label">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="cs__programs">
        <div className="container">
          <p className="cs__section-label">Our Programmes</p>
          <h2 className="cs__programs-heading">Where we <em>have served</em></h2>

          <div className="cs__programs-grid">
            {programs.map((p, i) => (
              <article key={p.id} className="cs__program-card">
                <div className="cs__program-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="cs__program-body">
                  <div className="cs__program-num">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="cs__program-name">{p.name}</h3>
                  <p className="cs__program-location">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                      <path d="M8 14s-5-5.1-5-9a5 5 0 0 1 10 0c0 3.9-5 9-5 9z"/><circle cx="8" cy="5" r="1.5"/>
                    </svg>
                    {p.location}
                  </p>
                  <p className="cs__program-desc">{p.desc}</p>
                  <Link to={`/care-share/${p.id}`} className="cs__program-link">
                    View Programme →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cs__cta">
        <div className="container cs__cta-inner">
          <h2 className="cs__cta-heading">Want to get <em>involved?</em></h2>
          <p className="cs__cta-sub">Partner with us in bringing hope and help to communities in need.</p>
          <a href="/contact" className="btn btn--primary btn--lg">Get in Touch →</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
