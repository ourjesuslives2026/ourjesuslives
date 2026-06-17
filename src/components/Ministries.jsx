import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const ministries = [
  {
    idx: '01', featured: true,
    icon: <svg viewBox="0 0 48 48"><path d="M24 40s-14-8-14-20a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 12-14 20-14 20z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/></svg>,
    title: 'Care & Share / Charity',
    body: 'Supporting people in need through compassion, generosity, and practical care across our communities.',
    tag: 'Year-round',
    images: [
      { src: '/assets/sheffield-fellowship.jpg', alt: 'Sheffield fellowship gathering' },
      { src: '/assets/hero.jpg',                 alt: 'Sunday worship service' },
      { src: '/assets/hero2.jpg',                alt: 'Community outreach' },
    ],
  },
  {
    idx: '02', fullWidth: true,
    icon: <svg viewBox="0 0 48 48"><path d="M8 36V20l16-10 16 10v16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/><path d="M18 36v-8h12v8" stroke="currentColor" strokeWidth="2" fill="none"/></svg>,
    title: 'Youth Ministry',
    body: 'We are a church praying for Revival to happen again in this land. We know it\'s our young generation who will lead the church tomorrow. At OJLM, we have our dedicated youth ministry team to encourage, support and build our youngsters to take over the baton and win souls to Jesus. Why not join us? Last Saturday of every month, we gather together with worship, word, activities, discussions and lot more!',
    verse: { text: 'And it shall come to pass afterward That I will pour out My Spirit on all flesh; Your sons and your daughters shall prophesy, Your old men shall dream dreams, Your young men shall see visions.', ref: 'Joel 2:28' },
    tag: 'Last Saturday of every month',
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
          {ministries.map(m => {
            if (m.featured) return (
              <article key={m.idx} className="ministry-card ministry-card--lg">
                <div className="ministry-card__content">
                  <div className="ministry-card__index">{m.idx}</div>
                  <div className="ministry-card__icon" aria-hidden="true">{m.icon}</div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                  <div className="ministry-card__cta-row">
                    <Link to="/care-share" className="ministry-card__cta-btn">Learn More →</Link>
                  </div>
                </div>
                <div className="ministry-card__photos" aria-hidden="true">
                  {m.images.map((img, i) => (
                    <div key={i} className={`ministry-card__photo ministry-card__photo--${i + 1}`}>
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </div>
              </article>
            );
            if (m.fullWidth) return (
              <article key={m.idx} className="ministry-card ministry-card--fw">
                <div className="ministry-card__fw-left">
                  <div className="ministry-card__index">{m.idx}</div>
                  <div className="ministry-card__icon" aria-hidden="true">{m.icon}</div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                  <div className="ministry-card__cta-row">
                    <Link to="/youth" className="ministry-card__cta-btn">Learn More →</Link>
                  </div>
                </div>
                <div className="ministry-card__fw-right">
                  {m.verse && (
                    <blockquote className="ministry-card__verse">
                      <p>"{m.verse.text}"</p>
                      <cite>— {m.verse.ref}</cite>
                    </blockquote>
                  )}
                  <span className="ministry-card__tag">{m.tag}</span>
                </div>
              </article>
            );
            return (
              <article key={m.idx} className="ministry-card">
                <div className="ministry-card__index">{m.idx}</div>
                <div className="ministry-card__icon" aria-hidden="true">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                <span className="ministry-card__tag">{m.tag}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
