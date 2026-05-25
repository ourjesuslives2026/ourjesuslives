import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Lightbox } from '../components/Gallery';

const allGalleryPhotos = [
  { cat: 'worship',  tag: 'Worship',  desc: 'Congregation hands raised, Sheffield Sunday worship',   img: '/assets/gallery/worship-1.jpg' },
  { cat: 'worship',  tag: 'Worship',  desc: 'Worship leader — hand raised in praise',                  img: '/assets/gallery/worship-2.jpg' },
  { cat: 'worship',  tag: 'Worship',  desc: 'Shofar and worship — Sunday service',                    img: '/assets/gallery/worship-3.jpg' },
  { cat: 'worship',  tag: 'Worship',  desc: 'Worship team leading in song',                           img: '/assets/gallery/worship-4.jpg' },
  { cat: 'worship',  tag: 'Worship',  desc: 'Congregation in worship, hands raised',                  img: '/assets/gallery/worship-5.jpg' },
  { cat: 'worship',  tag: 'Worship',  desc: 'Women worshipping in prayer',                            img: '/assets/gallery/worship-6.jpg' },
  { cat: 'worship',  tag: 'Worship',  desc: 'Pastor preaching at Sunday service',                     img: '/assets/gallery/worship-7.jpg' },
  { cat: 'outreach', tag: 'Outreach', desc: 'Communion service — leaders on stage, Sheffield',         img: '/assets/gallery/outreach-1.jpg' },
  { cat: 'outreach', tag: 'Outreach', desc: 'Pastor in prayer and ministry',                          img: '/assets/gallery/outreach-2.jpg' },
  { cat: 'branches', tag: 'Branch',   desc: 'Sheffield church interior — Sunday gathering',            img: '/assets/gallery/branches-1.jpg' },
  { cat: 'branches', tag: 'Branch',   desc: 'Church interior — congregation in worship',               img: '/assets/gallery/branches-2.jpg' },
  { cat: 'branches', tag: 'Branch',   desc: 'Branch Sunday service — praise and worship',              img: '/assets/gallery/branches-3.jpg' },
  { cat: 'branches', tag: 'Branch',   desc: 'Full congregation gathered for worship',                  img: '/assets/gallery/branches-4.jpg' },
  { cat: 'family',   tag: 'Family',   desc: 'Youth commissioning, full gathering',                     img: '/assets/gallery/family-1.jpg' },
  { cat: 'family',   tag: 'Family',   desc: 'Mother and child worshipping together',                   img: '/assets/gallery/family-2.jpg' },
  { cat: 'kids',     tag: 'Children', desc: 'Children with nations flags, Sunday celebration',         img: '/assets/gallery/kids-1.jpg' },
  { cat: 'kids',     tag: 'Children', desc: 'Youth in prayer at Sunday service',                       img: '/assets/gallery/kids-2.jpg' },
];

const filters = [
  { key: 'all',      label: 'All' },
  { key: 'worship',  label: 'Worship' },
  { key: 'outreach', label: 'Outreach' },
  { key: 'branches', label: 'Branches' },
];

export default function GalleryPage() {
  const [cat, setCat] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const visible = cat === 'all' ? allGalleryPhotos : allGalleryPhotos.filter(p => p.cat === cat);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevPhoto = useCallback(() => setLightboxIdx(i => (i - 1 + visible.length) % visible.length), [visible.length]);
  const nextPhoto = useCallback(() => setLightboxIdx(i => (i + 1) % visible.length), [visible.length]);

  useEffect(() => {
    document.body.classList.add('nav-solid', 'nav-scrolled');
    return () => document.body.classList.remove('nav-solid', 'nav-scrolled');
  }, []);

  return (
    <div className="gp">
      <TopBar />
      <Nav />

      <div className="gp__hero">
        <div className="container">
          <Link to="/#gallery" className="gp__back">← Back</Link>
          <h1 className="h-display gp__title">Full <em>Gallery</em></h1>
          <p className="lead">Moments from worship, outreach, and fellowship across our branches.</p>
        </div>
      </div>

      <div className="container gp__body">
        <div className="gp__filters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`chip${cat === f.key ? ' chip--active' : ''}`}
              onClick={() => { setCat(f.key); setLightboxIdx(null); }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gp__grid">
          {visible.map((p, i) => (
            <div
              key={i}
              className="gp__cell"
              onClick={() => setLightboxIdx(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setLightboxIdx(i)}
              aria-label={`View: ${p.desc}`}
            >
              <img src={p.img} alt={p.desc} loading="lazy" />
              <div className="gp__cell-overlay">
                <span className="gp__cell-tag">{p.tag}</span>
                <span className="gp__cell-desc">{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {lightboxIdx !== null && (
        <Lightbox
          photos={visible}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </div>
  );
}
