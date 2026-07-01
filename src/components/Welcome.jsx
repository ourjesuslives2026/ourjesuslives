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
              We believe we are that light that shines on top of this beautiful city of Sheffield.
              We are a non-denominational multicultural Church that welcomes every person
              created in the image of God — beyond every barrier of culture, race, and tradition.
            </p>
            <p>
              We stand on the Kingdom values of Heaven and preach every believer to
              practise the values Jesus taught in Matthew chapter 5. We are a friendly church
              that promotes Kingdom principles and values to work in the same attitude of Christ.
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
