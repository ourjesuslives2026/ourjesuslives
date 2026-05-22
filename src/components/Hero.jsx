const marqueeItems = [
  'Worship', 'Prayer', 'Teaching', 'Fellowship', 'Community Outreach', "Children & Youth", 'Media Ministry',
  'Worship', 'Prayer', 'Teaching', 'Fellowship', 'Community Outreach', "Children & Youth", 'Media Ministry',
];

export default function Hero() {
  return (
    <section className="hero--full">
      <div className="hero__bg">
        <img src="/assets/hero.jpg" alt="Worship gathering — congregation in a sunlit church hall" />
      </div>

      <div className="hero__grid-full">
        <div className="hero__topline">
          <div className="hero__chips-inline" aria-label="Service languages">
            <span>Malayalam</span><span className="sep">/</span>
            <span>Tamil</span><span className="sep">/</span>
            <span>Hindi</span><span className="sep">/</span>
            <span>English</span>
          </div>
        </div>

        <div className="hero__copy-full">
          <h1 className="display">
            A church family where <em>Jesus</em> is lifted high.
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

          <div className="hero__stat">
            <div className="hero__stat-num">9</div>
            <div>
              <div className="hero__stat-k">Branches</div>
              <div className="hero__stat-v">across the UK</div>
            </div>
          </div>
        </div>
      </div>

      <span className="hero__scroll">Scroll · Our Story</span>

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
