import { useEffect, useRef, useState } from 'react';

const MapPin = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14">
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M12 22s-7-7.58-7-13a7 7 0 0 1 14 0c0 5.42-7 13-7 13z"/>
    <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function Nav() {
  const [scrollPct, setScrollPct] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setScrollPct(Math.min(100, Math.max(0, pct * 100)));

      const heroFull = document.querySelector('.hero--full');
      const nav = document.getElementById('main-nav');
      if (heroFull && nav) {
        const threshold = heroFull.getBoundingClientRect().bottom - nav.offsetHeight;
        document.body.classList.toggle('nav-scrolled', threshold < 0);
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const navLinks = [
    { href: '/#story', label: 'Our Story' },
    { href: '/#branches', label: 'Branches' },
    { href: '/#ministries', label: 'Ministries' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="nav" id="main-nav" style={{ position: 'sticky' }}>
        <a className="nav__brand" href="#top" aria-label="Our Jesus Lives Ministry, home">
          <span className="nav__logo">
            <img src="/assets/logo.svg" alt="Our Jesus Lives Ministry logo" />
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__cta-wrap">
          <a className="btn btn--ghost-sm" href="tel:+447765450545">+44 7765 450545</a>
          <a className="btn btn--primary" href="/#visit">Plan Your Visit <span aria-hidden="true">↗</span></a>
          <button
            className="nav__menu-btn"
            onClick={() => setDrawerOpen(v => !v)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className="nav__scrollbar">
          <div className="nav__scrollbar-fill" style={{ width: `${scrollPct}%` }} />
        </div>
      </header>

      <div
        className={`drawer${drawerOpen ? ' is-open' : ''}`}
        aria-hidden={!drawerOpen}
        onClick={e => { if (e.target === e.currentTarget) setDrawerOpen(false); }}
      >
        <div className="drawer__panel">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn--primary" href="/#visit" onClick={() => setDrawerOpen(false)}>Plan Your Visit &rarr;</a>
        </div>
      </div>
    </>
  );
}
