import { useReveal } from '../hooks/useReveal';

const kingdomValues = [
  ['K', 'indness'],
  ['I', 'ntegrity'],
  ['N', 'on judgemental approach'],
  ['G', 'odliness'],
  ['D', 'ynamism (Pro-active)'],
  ['O', 'bedience'],
  ['M', 'eekness'],
];

const principles = [
  { title: 'Abide', sub: 'Rooted in Christ & His Kingdom — John 15:4' },
  { title: 'Affirm', sub: 'The work of the Holy Spirit' },
  { title: 'Compliment', sub: 'Honour each other' },
  { title: 'Be Constructive', sub: null },
  { title: 'Ownership', sub: 'Of responsibilities' },
  { title: 'Be Transparent', sub: null },
  { title: 'Volunteer & Be a Host', sub: null },
];

export default function Values() {
  const ref = useReveal();
  return (
    <section className="values">
      <div className="container">
        <div className="values__grid reveal" ref={ref}>

          {/* KINGDOM Values */}
          <div className="values__col">
            <p className="values__label">Our Values</p>
            <h2 className="values__heading"><em>KINGDOM</em> Values</h2>
            <ul className="values__list">
              {kingdomValues.map(([letter, rest], i) => (
                <li key={i} className="values__item">
                  <span className="values__letter">{letter}</span>
                  <span className="values__rest">{rest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kingdom Principles */}
          <div className="values__col">
            <p className="values__label">Our Principles</p>
            <h2 className="values__heading">Kingdom <em>Principles</em></h2>
            <ul className="values__principles">
              {principles.map((p, i) => (
                <li key={i} className="values__principle">
                  <span className="values__principle-title">{p.title}</span>
                  {p.sub && <span className="values__principle-sub">{p.sub}</span>}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
