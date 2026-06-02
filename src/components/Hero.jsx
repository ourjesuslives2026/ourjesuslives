import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/assets/hero.jpg',
    alt: 'Worship gathering — congregation in a sunlit church hall',
  },
  {
    src: '/assets/hero2.jpg',
    alt: 'Congregation with hands raised in worship before a glowing cross',
  },
];

const marqueeItems = [
  'Inheritance', 'Inheritance', 'Inheritance', 'Inheritance', 'Inheritance', 'Inheritance', 'Inheritance',
  'Inheritance', 'Inheritance', 'Inheritance', 'Inheritance', 'Inheritance', 'Inheritance', 'Inheritance',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent(c => (c + 1) % slides.length);
      setTimeout(() => {
        setPrev(null);
        setFading(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const goTo = (idx) => {
    if (idx === current) return;
    setPrev(current);
    setFading(true);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setFading(false); }, 1000);
  };

  return (
    <section className="hero--full">
      {/* Background slideshow */}
      <div className="hero__bg" aria-hidden="true">
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={slides[prev].src}
            alt=""
            className="hero__slide hero__slide--out"
          />
        )}
        <img
          key={`cur-${current}`}
          src={slides[current].src}
          alt={slides[current].alt}
          className={`hero__slide hero__slide--in${fading ? ' hero__slide--entering' : ''}`}
        />
      </div>

      <div className="hero__grid-full">
        <div className="hero__copy-full">
          <h1 className="display">
            <span className="hero__heading-top">Possessing Our</span>
            <span className="hero__inherit-word" aria-label="Inheritance.">
              <em>I</em><b>NHE</b><em>R</em><b>ITANCE.</b>
            </span>
          </h1>
          <p className="hero__sub-full">
            Worship, prayer, teaching and fellowship across our UK branches.
            Whether you are new to church, new to the UK, or simply looking for
            a spiritual family — you are welcome here.
          </p>
        </div>

        <div className="hero__bottom">
          <div className="hero__cta-full">
            <a className="btn btn--primary btn--lg" href="#visit">Plan Your Visit <span aria-hidden="true">↗</span></a>
            <a className="btn btn--ghost btn--lg" href="#branches">Find a Branch</a>
          </div>

          <div className="hero__langs">
            <div className="hero__chips-inline" aria-label="Service languages">
              <span>Malayalam</span><span className="sep">/</span>
              <span>Tamil</span><span className="sep">/</span>
              <span>Hindi</span><span className="sep">/</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="hero__dots" aria-label="Slideshow navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>


      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {marqueeItems.map((item, i) => (
            <span key={i}>{item}<span className="dot"> ●</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
