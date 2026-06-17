import { useReveal } from '../hooks/useReveal';

export default function Story() {
  const topRef  = useReveal();
  const vmRef   = useReveal();

  return (
    <section className="story" id="story">
      <div className="container">

        {/* ── TOP: photo + intro ── */}
        <div className="story__top reveal" ref={topRef}>
          <div className="story__media">
            <div className="story__photo--real">
              <img src="/assets/pastors.jpg" alt="Rev. Renjit and Anu Ambanattu, Founding Pastors" />
            </div>
            <div className="story__caption"><span>—</span> Rev. Renjit &amp; Anu Ambanattu, Founding Pastors</div>
          </div>
          <div className="story__intro">
            <h2 className="h-display h-display--light">
              From a single<br />fellowship to<br />a family of <em>nine.</em>
            </h2>
            <p>
              Our Jesus Lives Ministries was founded with a clear mission: to share
              the message of Jesus Christ and build strong, faith-filled communities.
              What began as a vision to serve people through worship, teaching, prayer,
              and outreach has grown into a family of fellowships across the UK.
            </p>
            <p>
              Led by <strong>Rev. Renjit and Anu Ambanattu</strong>, the ministries continue
              to encourage believers, support families, and reach people with the hope of the Gospel.
            </p>
          </div>
        </div>

        {/* ── VISION & MISSION ── */}
        <div className="story__vm reveal" ref={vmRef}>
          <div className="story__vm-item">
            <div className="story__vm-left">
              <span className="story__vm-num">01</span>
              <span className="story__vm-label">Our Vision</span>
            </div>
            <div className="story__vm-right">
              <p className="story__vm-pull">
                To stay on the same page of the Holy Spirit — sharing the Good News
                of Jesus Christ to every soul in Sheffield and across the United Kingdom.
              </p>
              <p className="story__vm-body">
                Our aim is to bring many souls into God's kingdom for healing, deliverance,
                and salvation. Our heart is to raise young generations for Christ and to
                function as a lighthouse in these end times.
              </p>
            </div>
          </div>
          <div className="story__vm-divider" />
          <div className="story__vm-item">
            <div className="story__vm-left">
              <span className="story__vm-num">02</span>
              <span className="story__vm-label">Our Mission</span>
            </div>
            <div className="story__vm-right">
              <p className="story__vm-pull">
                To bring this nation back to Jesus — revival is the heartbeat of
                every minute we spend in prayer.
              </p>
              <p className="story__vm-body">
                We believe our intercessory prayers are powerful enough to bring salvation
                and freedom to every soul. Only Jesus and our prayers to Him can make this
                nation great again. <em>We foresee this nation rise up once again for the glory of God.</em>
              </p>
            </div>
          </div>
          <div className="story__vm-divider" />
          <div className="story__vm-motto">
            <span className="story__vm-motto-label">OJLM Motto</span>
            <span className="story__vm-motto-text">"Thy Kingdom come"</span>
            <span className="story__vm-motto-ref">Galatians 5:25</span>
          </div>
        </div>

      </div>

    </section>
  );
}
