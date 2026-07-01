import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const ministries = [
  {
    idx: '01',
    title: 'Care & Share',
    sub: 'Charity & Outreach',
    body: 'Supporting people in need through compassion, generosity, and practical care — across the UK and beyond.',
    tag: 'Year-round',
    bg: '/assets/care-share-nepal.jpg',
    to: '/care-share',
  },
  {
    idx: '02',
    title: 'Youth Ministry',
    sub: 'A Generation 4 Jesus',
    body: 'Raising the next generation for Christ through worship, the Word, and real community. Last Saturday of every month.',
    tag: 'Last Saturday of every month',
    bg: '/assets/gallery/worship-1.jpg',
    to: '/youth',
  },
];

export default function Ministries() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="ministries" id="ministries">
      <div className="container">
        <div className="ministries__head reveal" ref={headRef}>
          <p className="ministries__eyebrow">Our Ministries</p>
          <h2 className="ministries__title">Ministries that serve <em>every generation.</em></h2>
          <p className="ministries__sub">
            Our ministries help individuals, families, children, youth and communities
            grow in faith and experience the love of Christ in practical ways.
          </p>
        </div>
      </div>

      {/* Full-bleed billboard grid */}
      <div className="min-billboard reveal" ref={gridRef}>
        {ministries.map((m, i) => (
          <article key={m.idx} className="min-bill">
            {/* Background photo */}
            <div className="min-bill__bg">
              <img src={m.bg} alt="" aria-hidden="true" />
            </div>
            <div className="min-bill__overlay" />

            {/* Content */}
            <div className="min-bill__inner">
              <div className="min-bill__top">
                <span className="min-bill__num">{m.idx}</span>
                <span className="min-bill__tag">{m.tag}</span>
              </div>
              <div className="min-bill__body">
                <p className="min-bill__sub">{m.sub}</p>
                <h3 className="min-bill__title">{m.title}</h3>
                <p className="min-bill__desc">{m.body}</p>
                <Link to={m.to} className="btn btn--cream">
                  Learn More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
