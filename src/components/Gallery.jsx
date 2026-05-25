import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const cells = [
  { cat: 'worship',  tall: true, tag: 'Worship',  desc: 'Congregation hands raised, Sheffield Sunday worship', img: '/assets/gallery/worship-1.jpg' },
  { cat: 'kids',               tag: 'Children', desc: 'Children with nations flags, Sunday celebration',     img: '/assets/gallery/kids-1.jpg' },
  { cat: 'family',             tag: 'Family',   desc: 'Youth commissioning, full gathering',                 img: '/assets/gallery/family-1.jpg' },
  { cat: 'outreach', wide: true, tag: 'Outreach', desc: 'Communion service — leaders on stage, Sheffield',   img: '/assets/gallery/outreach-1.jpg' },
  { cat: 'branches',           tag: 'Branch',   desc: 'Sheffield church interior — Sunday gathering',        img: '/assets/gallery/branches-1.jpg' },
  { cat: 'worship',  tall: true, tag: 'Worship',  desc: 'Worship leader — hand raised in praise',            img: '/assets/gallery/worship-2.jpg' },
  { cat: 'kids',               tag: 'Children', desc: 'Youth in prayer at Sunday service',                   img: '/assets/gallery/kids-2.jpg' },
  { cat: 'family',             tag: 'Family',   desc: 'Mother and child worshipping together',               img: '/assets/gallery/family-2.jpg' },
  { cat: 'branches',           tag: 'Branch',   desc: 'Church interior — congregation in worship',           img: '/assets/gallery/branches-2.jpg' },
];

const filters = [
  { key: 'all',      label: 'All' },
  { key: 'worship',  label: 'Worship' },
  { key: 'outreach', label: 'Outreach' },
  { key: 'branches', label: 'Branches' },
];

export default function Gallery() {
  const [cat, setCat] = useState('all');
  const headRef = useReveal();
  const masonryRef = useReveal();

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__head reveal" ref={headRef}>
          <div>
            <h2 className="h-display">Life at our ministry.</h2>
          </div>
          <div className="gallery__filter">
            {filters.map(f => (
              <button
                key={f.key}
                className={`chip${cat === f.key ? ' chip--active' : ''}`}
                onClick={() => setCat(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="masonry reveal" ref={masonryRef}>
          {cells.map((c, i) => (
            <div
              key={i}
              className={`m-cell${c.tall ? ' m-cell--tall' : ''}${c.wide ? ' m-cell--wide' : ''}${cat !== 'all' && c.cat !== cat ? ' is-hidden' : ''}`}
              data-cat={c.cat}
            >
              <img src={c.img} alt={c.desc} loading="lazy" />
              <div className="m-cell__inner">
                <span className="m-cell__tag">{c.tag}</span>
                <span className="m-cell__desc">{c.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery__cta">
          <a className="btn btn--ghost" href="#">View Full Gallery →</a>
        </div>
      </div>
    </section>
  );
}
