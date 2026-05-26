import { useEffect, useRef, useState } from 'react';

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
    { href: '/#story',      label: 'Our Story' },
    { href: '/#branches',   label: 'Branches' },
    { href: '/#ministries', label: 'Ministries' },
    { href: '/#gallery',    label: 'Gallery' },
    { href: '/contact',     label: 'Contact Us' },
  ];

  return (
    <>
      <header className="nav" id="main-nav" style={{ position: 'sticky' }}>

        {/* Brand / logo */}
        <a className="nav__brand" href="#top" aria-label="Our Jesus Lives Ministry, home">
          <span className="nav__logo">
            <img src="/assets/logo.svg" alt="Our Jesus Lives Ministry logo" />
          </span>
        </a>

        {/* Centre links */}
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        {/* Right side — secondary logo + hamburger */}
        <div className="nav__cta-wrap">
          <span className="nav__secondary-logo">
            <img src="/assets/logo.svg" alt="" aria-hidden="true" />
          </span>
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
        </div>
      </div>
    </>
  );
}
