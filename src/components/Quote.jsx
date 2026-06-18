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
        <div className="quote__eyebrow">OJLM Core Verse</div>
        <p className="quote__text">
          If we claim to live by the Holy Spirit,<br />
          <em>
            <span className="qw qw--ml">we</span>{' '}
            <span className="qw qw--ta">must</span>{' '}
            <span className="qw qw--hi">also</span>{' '}
            <span className="qw qw--en">walk</span>{' '}
            <span className="qw qw--ml">by</span>{' '}
            <span className="qw qw--ta">the</span>{' '}
            <span className="qw qw--hi">Spirit.</span>
          </em>
        </p>
        <div className="quote__cite">— Galatians 5:25</div>
        <div className="quote__motto">Motto: <em>"Thy Kingdom come"</em></div>
        <figure className="quote__bible">
          <img src="/assets/bible.png" alt="Hands holding an open Bible" />
        </figure>
      </div>
    </section>
  );
}
