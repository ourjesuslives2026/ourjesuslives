import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export const allPhotos = [
  { cat: 'worship',  tall: true,  tag: 'Worship',  desc: 'Congregation hands raised, Sheffield Sunday worship',   img: '/assets/gallery/worship-1.jpg' },
  { cat: 'kids',                  tag: 'Children', desc: 'Children with nations flags, Sunday celebration',         img: '/assets/gallery/kids-1.jpg' },
  { cat: 'family',                tag: 'Family',   desc: 'Youth commissioning, full gathering',                     img: '/assets/gallery/family-1.jpg' },
  { cat: 'outreach', wide: true,  tag: 'Outreach', desc: 'Communion service — leaders on stage, Sheffield',         img: '/assets/gallery/outreach-1.jpg' },
  { cat: 'branches',              tag: 'Branch',   desc: 'Sheffield church interior — Sunday gathering',            img: '/assets/gallery/branches-1.jpg' },
  { cat: 'worship',  tall: true,  tag: 'Worship',  desc: 'Worship leader — hand raised in praise',                  img: '/assets/gallery/worship-2.jpg' },
  { cat: 'kids',                  tag: 'Children', desc: 'Youth in prayer at Sunday service',                       img: '/assets/gallery/kids-2.jpg' },
  { cat: 'family',                tag: 'Family',   desc: 'Mother and child worshipping together',                   img: '/assets/gallery/family-2.jpg' },
  { cat: 'branches',              tag: 'Branch',   desc: 'Church interior — congregation in worship',               img: '/assets/gallery/branches-2.jpg' },
];

const filters = [
  { key: 'all',      label: 'All' },
  { key: 'worship',  label: 'Worship' },
  { key: 'outreach', label: 'Outreach' },
  { key: 'branches', label: 'Branches' },
];

export function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const photo = photos[index];
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox__panel" onClick={e => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>
        <button className="lightbox__prev" onClick={onPrev} aria-label="Previous">‹</button>
        <div className="lightbox__img-wrap">
          <img src={photo.img} alt={photo.desc} />
        </div>
        <button className="lightbox__next" onClick={onNext} aria-label="Next">›</button>
        <div className="lightbox__caption">
          <span className="lightbox__tag">{photo.tag}</span>
          <span className="lightbox__desc">{photo.desc}</span>
        </div>
        <div className="lightbox__counter">{index + 1} / {photos.length}</div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [cat, setCat] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const headRef = useReveal();
  const masonryRef = useReveal();

  const visiblePhotos = allPhotos;

  const openLightbox = (i) => setLightboxIdx(i);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevPhoto = useCallback(() => setLightboxIdx(i => (i - 1 + visiblePhotos.length) % visiblePhotos.length), [visiblePhotos.length]);
  const nextPhoto = useCallback(() => setLightboxIdx(i => (i + 1) % visiblePhotos.length), [visiblePhotos.length]);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__head reveal" ref={headRef}>
          <div>
            <h2 className="h-display">Life at <em>our ministries.</em></h2>
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
          {allPhotos.map((c, i) => (
            <div
              key={i}
              className={`m-cell${c.tall ? ' m-cell--tall' : ''}${c.wide ? ' m-cell--wide' : ''}${cat !== 'all' && c.cat !== cat ? ' is-hidden' : ''}`}
              data-cat={c.cat}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openLightbox(i)}
              aria-label={`View: ${c.desc}`}
            >
              <img src={c.img} alt={c.desc} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="gallery__cta">
          <Link className="btn btn--ghost" to="/gallery">View Full Gallery →</Link>
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          photos={visiblePhotos}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  );
}
