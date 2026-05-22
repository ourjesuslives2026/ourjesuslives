import { useReveal } from '../hooks/useReveal';

export default function Footer() {
  const topRef = useReveal();
  const colsRef = useReveal();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__top reveal" ref={topRef}>
          <div className="footer__head">
            <h2 className="h-display h-display--xl">We'll be happy<br />to <em>help.</em></h2>
          </div>
          <div className="footer__contact">
            <a className="footer__big-link" href="mailto:ourjesuslives@gmail.com">
              ourjesuslives@gmail.com <span>↗</span>
            </a>
            <a className="footer__big-link" href="tel:+447765450545">
              +44 7765 450545 <span>↗</span>
            </a>
            <div className="footer__addr">
              <div className="footer__addr-k">Main Sheffield Address</div>
              <div>A6135, Sheffield S5 7AF</div>
              <div>United Kingdom</div>
            </div>
          </div>
        </div>

        <hr className="footer__rule" />

        <div className="footer__cols reveal" ref={colsRef}>
          <div className="footer__col footer__col--brand">
            <div className="footer__brand">
              <span className="footer__logo">
                <img src="/assets/logo.svg" alt="" aria-hidden="true" />
              </span>
              <div>
                <div className="footer__brand-top">Our Jesus Lives Ministry</div>
                <div className="footer__brand-bot">Sheffield · United Kingdom</div>
              </div>
            </div>
            <p className="footer__mission">
              A Christ-centred church family serving communities across the UK
              through worship, prayer, teaching, fellowship and compassionate
              outreach — in multiple languages.
            </p>
          </div>

          <div className="footer__col">
            <h5>Visit</h5>
            <a href="#">Home</a>
            <a href="#story">Our Story</a>
            <a href="#branches">Branches</a>
            <a href="#ministries">Ministries</a>
          </div>

          <div className="footer__col">
            <h5>Connect</h5>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <a href="#">Donations</a>
            <a href="#visit">Plan Your Visit</a>
          </div>

          <div className="footer__col">
            <h5>Follow</h5>
            <a href="#">Facebook ↗</a>
            <a href="#">YouTube ↗</a>
            <a href="#">Instagram ↗</a>
            <a href="#">WhatsApp ↗</a>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2026 Our Jesus Lives Ministry. All rights reserved.</div>
          <div className="footer__verse">"Jesus Christ is the same yesterday and today and forever." — Hebrews 13:8</div>
        </div>

        <div className="footer__giant" aria-hidden="true">JESUS LIVES</div>
      </div>
    </footer>
  );
}
