import { useReveal } from '../hooks/useReveal';

const cards = [
  { no: '01', title: 'When We Meet', body: 'Sunday services and weekly gatherings across our UK branches. Sheffield meets at 10:30am.' },
  { no: '02', title: 'What to Expect', body: 'Worship, prayer, Bible-based teaching, and friendly fellowship. Tea afterwards — always.' },
  { no: '03', title: 'Languages', body: 'Malayalam, Tamil, Hindi, and English services available across our ministry.' },
  { no: '04', title: 'Need Help?', body: "Contact us and we will guide you to the nearest branch — and meet you at the door if you'd like." },
];

export default function Visit() {
  const ref = useReveal();
  return (
    <section className="visit" id="visit">
      <div className="container">
        <div className="visit__grid reveal" ref={ref}>
          <div className="visit__lead">
            <span className="section-num section-num--light">06 — Plan Your Visit</span>
            <h2 className="h-display h-display--light">
              Visiting for the<br />first time?
            </h2>
            <p>
              We would love to welcome you. Whether you are coming alone, with family,
              or with friends, our church family is here to help you feel comfortable
              and connected from the moment you walk in.
            </p>
            <a className="btn btn--primary btn--lg" href="#contact">Get in touch ↗</a>
          </div>

          <div className="visit__cards">
            {cards.map(c => (
              <article className="visit-card" key={c.no}>
                <div className="visit-card__no">{c.no}</div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
