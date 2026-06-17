import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    num: 'i.',
    title: 'Our Vision',
    body: 'To stay on the same page of the Holy Spirit who began this wonderful ministry — sharing the Good News of Jesus Christ to every soul in Sheffield and across the United Kingdom. To bring many souls into God\'s kingdom for healing, deliverance, and salvation, and to raise young generations for Christ as a lighthouse in these end times.',
  },
  {
    num: 'ii.',
    title: 'Our Mission',
    body: 'To bring this nation back to Jesus, who once brought light to this nation. Revival is the heartbeat of every minute we spend in prayer. We believe our intercessory prayers are powerful enough to bring salvation and freedom to every soul. Only Jesus and our prayers to Him can make this nation great again — we foresee this nation rise up once again for the glory of God.',
  },
  {
    num: 'iii.',
    title: 'Our Motto',
    body: '"Thy Kingdom come." — Rooted in Galatians 5:25: If we claim to live by the Holy Spirit, we must also walk by the Spirit with personal integrity, godly character, and moral courage — our conduct empowered by the Holy Spirit.',
  },
];

const kingdomValues = [
  { letter: 'K', word: 'Kindness' },
  { letter: 'I', word: 'Integrity' },
  { letter: 'N', word: 'Non-judgemental approach' },
  { letter: 'G', word: 'Godliness' },
  { letter: 'D', word: 'Dynamism (Pro-active)' },
  { letter: 'O', word: 'Obedience' },
  { letter: 'M', word: 'Meekness' },
];

const principles = [
  { word: 'ABIDE', desc: 'Rooted in Christ & His Kingdom (John 15:4)' },
  { word: 'AFFIRM', desc: 'The work of the Holy Spirit' },
  { word: 'COMPLIMENT', desc: 'Honour each other' },
  { word: 'BE CONSTRUCTIVE', desc: 'Build up, never tear down' },
  { word: 'OWNERSHIP', desc: 'Take responsibility' },
  { word: 'BE TRANSPARENT', desc: 'Walk in honesty and openness' },
  { word: 'VOLUNTEER', desc: 'Give of yourself and be a host' },
];

export default function Story() {
  const ref = useReveal();
  const valRef = useReveal();
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
              What began as a vision to serve people through worship, teaching, prayer,
              and outreach has grown into a family of fellowships serving communities
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

        {/* KINGDOM Values + Principles */}
        <div className="kingdom reveal" ref={valRef}>
          <div className="kingdom__values">
            <p className="kingdom__label">OJLM (KINGDOM) Values</p>
            <div className="kingdom__acrostic">
              {kingdomValues.map(v => (
                <div key={v.letter} className="kingdom__row">
                  <span className="kingdom__letter">{v.letter}</span>
                  <span className="kingdom__word">{v.word.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="kingdom__principles">
            <p className="kingdom__label">OJLM (KINGDOM) Principles</p>
            <ul className="kingdom__list">
              {principles.map(p => (
                <li key={p.word} className="kingdom__item">
                  <span className="kingdom__item-word">{p.word}</span>
                  <span className="kingdom__item-desc">{p.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
