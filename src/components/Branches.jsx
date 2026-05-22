import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const MapPin = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14">
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M12 22s-7-7.58-7-13a7 7 0 0 1 14 0c0 5.42-7 13-7 13z" />
    <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const branches = [
  {
    id: 'sheffield-main',
    feature: true,
    langs: ['ml', 'en'],
    flag: 'Main Branch',
    name: 'Sheffield Christian\nFellowship',
    desc: 'The main Sheffield branch — worship, teaching, prayer and fellowship for the whole family. Where this ministry began, and where it returns home each Sunday.',
    meta: [
      { k: 'Sunday', v: '10:30am' },
      { k: 'Address', v: 'A6135, Sheffield S5 7AF' },
    ],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sheffield+Christian+Fellowship+S5+7AF',
    photo: '/assets/sheffield-fellowship.jpg',
    photoAlt: 'Pastor Renjit, Anu and their daughter at Sheffield Christian Fellowship',
  },
  {
    id: 'sheffield-tamil',
    langs: ['ta'],
    stripe: 'var(--c-red)',
    name: 'Sheffield Tamil Church',
    desc: 'Tamil worship and fellowship in Sheffield, for families seeking a Tamil-speaking church community.',
    addr: 'Sheffield, South Yorkshire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sheffield+Tamil+Church+Sheffield+UK',
  },
  {
    id: 'sheffield-hindi',
    langs: ['hi'],
    stripe: 'var(--c-yellow)',
    name: 'Sheffield Hindi Church',
    desc: 'Hindi worship and fellowship in Sheffield for the Hindi-speaking community.',
    addr: 'Sheffield, South Yorkshire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sheffield+Hindi+Church+Sheffield+UK',
  },
  {
    id: 'scunthorpe',
    langs: ['en', 'ml'],
    stripe: 'var(--c-gold)',
    name: 'Scunthorpe Christian Fellowship',
    desc: 'Serving the Scunthorpe community through worship, prayer and Christian fellowship.',
    addr: 'Scunthorpe, North Lincolnshire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Scunthorpe+Christian+Fellowship+Scunthorpe+UK',
  },
  {
    id: 'tipton',
    langs: ['en', 'ml'],
    stripe: 'var(--c-green)',
    name: 'Tipton Christian Fellowship',
    desc: 'Serving the Tipton and West Midlands community through worship, prayer and fellowship.',
    addr: 'Tipton, West Midlands',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tipton+Christian+Fellowship+Tipton+West+Midlands+UK',
  },
  {
    id: 'barnsley',
    langs: ['en'],
    stripe: 'var(--c-green)',
    name: 'Barnsley Christian Church',
    desc: 'Serving the Barnsley community through local worship and fellowship.',
    addr: 'Barnsley, South Yorkshire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Barnsley+Christian+Church+Barnsley+UK',
  },
  {
    id: 'chesterfield',
    langs: ['en'],
    stripe: 'var(--c-blue)',
    name: 'Chesterfield Christian Church',
    desc: 'Serving the Chesterfield community through worship, prayer, and fellowship.',
    addr: 'Chesterfield, Derbyshire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chesterfield+Christian+Church+Chesterfield+UK',
  },
  {
    id: 'doncaster',
    langs: ['en'],
    stripe: 'var(--c-red)',
    name: 'Doncaster Christian Church',
    desc: 'Serving the Doncaster community through local worship and fellowship.',
    addr: 'Doncaster, South Yorkshire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Doncaster+Christian+Church+Doncaster+UK',
  },
  {
    id: 'mansfield',
    langs: ['en', 'ml'],
    stripe: 'var(--c-blue)',
    name: 'Mansfield Christian Fellowship',
    desc: 'Serving the Mansfield community with worship, teaching, and local fellowship.',
    addr: 'Mansfield, Nottinghamshire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mansfield+Christian+Fellowship+Mansfield+UK',
  },
];

const langLabel = { ml: 'Malayalam', ta: 'Tamil', hi: 'Hindi', en: 'English' };

function getEmbedSrc(mapUrl) {
  try {
    const q = new URL(mapUrl).searchParams.get('query');
    return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed&z=15`;
  } catch {
    return '';
  }
}

function MapModal({ branch, onClose }) {
  const embedSrc = getEmbedSrc(branch.mapUrl);
  const displayName = branch.name.replace('\n', ' ');

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="map-modal" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="map-modal__panel">
        <div className="map-modal__head">
          <span className="map-modal__title">{displayName}</span>
          <button className="map-modal__close" onClick={onClose} aria-label="Close map">✕</button>
        </div>
        <div className="map-modal__frame">
          <iframe
            src={embedSrc}
            title={`Map — ${displayName}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="map-modal__foot">
          <a href={branch.mapUrl} target="_blank" rel="noopener" className="btn btn--ghost">
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}

function LangPills({ langs }) {
  return (
    <div className="branch-card__langs">
      {langs.map(l => (
        <span key={l} className={`lang-pill lang-pill--${l}`}>{langLabel[l]}</span>
      ))}
    </div>
  );
}

function FeatureCard({ b, hidden, onOpenMap }) {
  return (
    <article className={`branch-card branch-card--feature${hidden ? ' is-hidden' : ''}`} data-langs={b.langs.join(' ')}>
      <div className="branch-card__photo">
        <img src={b.photo} alt={b.photoAlt} />
      </div>
      <div className="branch-card__body">
        <div className="branch-card__head">
          <span className="branch-card__flag">{b.flag}</span>
          <LangPills langs={b.langs} />
        </div>
        <h3>{b.name.split('\n').map((line, i) => i === 0 ? line : [<br key={i}/>, line])}</h3>
        <p>{b.desc}</p>
        {b.meta && (
          <div className="branch-card__meta">
            {b.meta.map(m => (
              <div key={m.k}><span className="k">{m.k}</span><span className="v">{m.v}</span></div>
            ))}
          </div>
        )}
        <div className="branch-card__actions">
          <a className="link-arrow" href="#">View Details <span>→</span></a>
          <button className="map-link" onClick={() => onOpenMap(b)}>
            <MapPin /> Open in Maps
          </button>
        </div>
      </div>
    </article>
  );
}

function BranchCard({ b, hidden, onOpenMap }) {
  return (
    <article className={`branch-card${hidden ? ' is-hidden' : ''}`} data-langs={b.langs.join(' ')}>
      {b.stripe && <div className="branch-card__stripe" style={{ background: b.stripe }} />}
      <div className="branch-card__body" style={{ display: 'contents' }}>
        <LangPills langs={b.langs} />
        <h3>{b.name}</h3>
        <p>{b.desc}</p>
        {b.addr && (
          <div className="branch-card__addr">
            <span className="k">Address</span>
            <span className="v">{b.addr}</span>
          </div>
        )}
        <div className="branch-card__actions">
          <a className="link-arrow" href="#">Details <span>→</span></a>
          <button className="map-link" onClick={() => onOpenMap(b)}>
            <MapPin /> Maps
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Branches() {
  const [filter, setFilter] = useState('all');
  const [mapBranch, setMapBranch] = useState(null);
  const headRef = useReveal();
  const gridRef = useReveal();
  const mapRef = useReveal();

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'ml', label: 'Malayalam' },
    { key: 'ta', label: 'Tamil' },
    { key: 'hi', label: 'Hindi' },
    { key: 'en', label: 'English' },
  ];

  return (
    <section className="branches" id="branches">
      <div className="container">
        <div className="branches__head reveal" ref={headRef}>
          <div>
            <h2 className="h-display">Find a branch <em>near you.</em></h2>
            <p className="lead lead--tight">
              We gather in nine communities across the UK — each one a local family,
              worshipping in the language of its neighbourhood.
            </p>
          </div>
          <div className="branches__filter" role="tablist" aria-label="Filter by language">
            {filters.map(f => (
              <button
                key={f.key}
                className={`chip${filter === f.key ? ' chip--active' : ''}`}
                data-filter={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="branch-grid reveal" ref={gridRef}>
          {branches.map(b => {
            const hidden = filter !== 'all' && !b.langs.includes(filter);
            return b.feature
              ? <FeatureCard key={b.id} b={b} hidden={hidden} onOpenMap={setMapBranch} />
              : <BranchCard key={b.id} b={b} hidden={hidden} onOpenMap={setMapBranch} />;
          })}
        </div>

        <div className="branches__map reveal" ref={mapRef}>
          <div className="branches__map-card">
            <div className="branches__map-text">
              <strong>Nine branches.</strong> One family. One hope in Jesus —
              from Sheffield down to Tipton and across the Midlands &amp; North.
            </div>
            <a className="btn btn--ghost" href="https://www.google.com/maps/d/viewer?mid=18w3ataCOELqtchRuXAhoVwobovtd0Gk" target="_blank" rel="noopener">See all locations on a map →</a>
          </div>
        </div>
      </div>

      {mapBranch && <MapModal branch={mapBranch} onClose={() => setMapBranch(null)} />}
    </section>
  );
}
