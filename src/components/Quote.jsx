import { useReveal } from '../hooks/useReveal';

export default function Quote() {
  const ref = useReveal();
  return (
    <section className="quote reveal" ref={ref}>
      <span className="quote__blob quote__blob--ml" aria-hidden="true" />
      <span className="quote__blob quote__blob--ta" aria-hidden="true" />
      <span className="quote__blob quote__blob--hi" aria-hidden="true" />
      <span className="quote__blob quote__blob--en" aria-hidden="true" />
      <div className="container">
        <div className="quote__mark">&ldquo;</div>
        <p className="quote__text">
          For where two or three gather in my name,<br />
          <em>
            <span className="qw qw--ml">there</span>{' '}
            <span className="qw qw--ta">am</span>{' '}
            <span className="qw qw--hi">I</span>{' '}
            <span className="qw qw--en">with</span>{' '}
            <span className="qw qw--ml">them.</span>
          </em>
        </p>
        <div className="quote__cite">— Matthew 18:20</div>
        <figure className="quote__bible">
          <img src="/assets/bible.png" alt="Hands holding an open Bible" />
        </figure>
      </div>
    </section>
  );
}
