import { useReveal } from '../hooks/useReveal';

const pillars = [
  { num: 'i.', title: 'Our Mission', body: 'To represent Christ and share His message with love, truth, and commitment.' },
  { num: 'ii.', title: 'Our Vision', body: 'To build Christ-centred fellowships that worship, grow, serve, and reach communities.' },
  { num: 'iii.', title: 'Our Heart', body: 'To support people spiritually, emotionally, and practically — through prayer, teaching, fellowship and charity.' },
];

export default function Story() {
  const ref = useReveal();
  return (
    <section className="story" id="story">
      <div className="container">
        <div className="story__grid reveal" ref={ref}>
          <div className="story__media">
            <div className="story__photo--real">
              <img src="/assets/pastors.jpg" alt="Rev. Renjit and Anu Ambanattu, Founding Pastors" />
            </div>
            <div className="story__caption">
              <span>—</span> Rev. Renjit &amp; Anu Ambanattu, Founding Pastors
            </div>
          </div>

          <div className="story__copy">
            <h2 className="h-display h-display--light">
              From a single<br />fellowship to<br />
              a family of <em>nine.</em>
            </h2>

            <p>
              Our Jesus Lives Ministries was founded with a clear mission: to share
              the message of Jesus Christ and build strong, faith-filled communities.
              What began as a vision to serve people through worship, teaching, media,
              and outreach has grown into a ministries serving different communities
              across the UK.
            </p>
            <p>
              Led by <strong>Rev. Renjit and Anu Ambanattu</strong>, the ministries continue
              to encourage believers, support families, and reach people with the hope
              of the Gospel.
            </p>

            <div className="pillars">
              {pillars.map(p => (
                <div className="pillar" key={p.num}>
                  <div className="pillar__num">{p.num}</div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
