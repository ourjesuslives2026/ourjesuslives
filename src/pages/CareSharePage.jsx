import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Nav />

      {/* Hero */}
      <section className="cs__hero">
        <div className="cs__hero-bg" aria-hidden="true">
          <img src="/assets/care-share-hero.jpg" alt="" />
        </div>
        <div className="cs__hero-overlay" aria-hidden="true" />
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

      {/* Donate */}
      <section className="cs__donate">
        <div className="container cs__donate-inner">
          <div className="cs__donate-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <p className="cs__section-label" style={{ textAlign: 'center' }}>Support Our Work</p>
          <h2 className="cs__donate-heading">Your gift brings <em>real change</em></h2>
          <p className="cs__donate-sub">
            Every donation — however small — helps us distribute food, school supplies, and essential care
            to communities in the UK, Kerala, Nepal, Chennai, and Mumbai. Give today and partner with us in
            bringing hope to those who need it most.
          </p>
          <a
            href="https://www.paypal.com/ncp/payment/4WH5UZQHM2WZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="cs__donate-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.099l-.23 1.487a.641.641 0 0 0 .633.74h4.429a.641.641 0 0 0 .633-.54l.026-.15.501-3.174.032-.174a.641.641 0 0 1 .633-.54h.398c2.587 0 4.614-.514 5.71-2.005.49-.663.822-1.492.982-2.65.181-1.298.073-2.334-.529-3.114z"/>
            </svg>
            Donate via PayPal
          </a>
          <p className="cs__donate-note">Secure payment via PayPal · All currencies accepted</p>
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
