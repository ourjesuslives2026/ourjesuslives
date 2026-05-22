import { useReveal } from '../hooks/useReveal';

export default function Welcome() {
  const ref = useReveal();
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome__grid reveal" ref={ref}>
          <div className="welcome__left">
            <h2 className="h-display">
              A place to <em>worship,</em><br />
              grow, and <em>belong.</em>
            </h2>
          </div>
          <div className="welcome__right">
            <p className="lead">
              At Our Jesus Lives Ministry, we believe Jesus is the answer to the deepest
              needs of this world. Our heart is to represent Christ with sincerity, compassion,
              and clarity — helping individuals and families experience God's love through
              worship, teaching, prayer, and fellowship.
            </p>
            <p>
              Whether you are new to church, new to the UK, or looking for a spiritual
              family, we warmly welcome you. Come as you are — there is a seat saved
              for you on Sunday.
            </p>
            <div className="welcome__sig">
              <div className="welcome__sig-line" />
              <div>
                <div className="welcome__sig-name">Rev. Renjit &amp; Anu Ambanattu</div>
                <div className="welcome__sig-role">Founding Pastors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
