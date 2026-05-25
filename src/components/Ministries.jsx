import { useReveal } from '../hooks/useReveal';

const ministries = [
  {
    idx: '01', featured: true,
    icon: <svg viewBox="0 0 48 48"><path d="M24 40s-14-8-14-20a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 12-14 20-14 20z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/></svg>,
    title: 'Care & Share / Charity',
    body: 'Supporting people in need through compassion, generosity, and practical care.',
    tag: 'Year-round',
  },
  {
    idx: '02',
    icon: <svg viewBox="0 0 48 48"><path d="M8 36V20l16-10 16 10v16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/><path d="M18 36v-8h12v8" stroke="currentColor" strokeWidth="2" fill="none"/></svg>,
    title: 'Youth Ministry',
    body: 'Encouraging young people to build strong faith, purpose, and character.',
    tag: 'Ages 12–24',
  },
  {
    idx: '03',
    icon: <svg viewBox="0 0 48 48"><path d="M24 8v32M16 16v16M32 16v16M8 24h32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>,
    title: 'Prayer Ministry',
    body: 'Standing together in prayer for families, individuals, churches, and communities.',
    tag: 'Weekly + on-request',
  },
  {
    idx: '04',
    icon: <svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M20 38h8M18 42h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M20 18l8 4-8 4z" fill="currentColor"/></svg>,
    title: 'Social Media Ministry',
    body: 'Sharing the message of Jesus through digital platforms, teaching resources and online content.',
    tag: 'Online · Worldwide',
  },
];

export default function Ministries() {
  const headRef = useReveal();
  const gridRef = useReveal();
  return (
    <section className="ministries" id="ministries">
      <div className="container">
        <div className="ministries__head reveal" ref={headRef}>
          <h2 className="h-display">Ministries that serve <em>every generation.</em></h2>
          <p className="lead lead--tight">
            Our ministries help individuals, families, children, youth and communities
            grow in faith and experience the love of Christ in practical ways.
          </p>
        </div>

        <div className="ministry-grid reveal" ref={gridRef}>
          {ministries.map(m => (
            <article key={m.idx} className={`ministry-card${m.featured ? ' ministry-card--lg' : ''}`}>
              <div className="ministry-card__index">{m.idx}</div>
              <div className="ministry-card__icon" aria-hidden="true">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
              <span className="ministry-card__tag">{m.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
