import { Newsletter } from './shared'

export default function About() {
  return (
    <section className="page-section">
      <div className="page-title">
        <p className="kicker">A note from us</p>
        <h1>
          Stay
          <br />
          <em>curious.</em>
        </h1>
      </div>
      <div className="about-layout">
        <div className="about-lead">
          <p>
            North is an independent editorial project about the ideas shaping a
            more considered life.
          </p>
          <p>
            We publish stories about technology, culture, design, and the quiet
            details that connect them. No hot takes. No noise for noise's sake.
            Just work with a point of view.
          </p>
        </div>
        <div className="about-facts">
          <div>
            <span>Founded</span>
            <strong>2026</strong>
          </div>
          <div>
            <span>Based in</span>
            <strong>Everywhere</strong>
          </div>
          <div>
            <span>Frequency</span>
            <strong>Weekly</strong>
          </div>
        </div>
      </div>

      <section className="about-beliefs">
        <div className="about-section-heading">
          <p className="kicker">What we believe</p>
          <p className="about-section-note">
            A few principles behind every story we publish.
          </p>
        </div>
        <div className="belief-grid">
          <article className="belief-item">
            <span>01</span>
            <h2>Curiosity over certainty.</h2>
            <p>Good questions keep a story open long after the final paragraph.</p>
          </article>
          <article className="belief-item">
            <span>02</span>
            <h2>Depth over volume.</h2>
            <p>We would rather publish one considered idea than ten forgettable ones.</p>
          </article>
          <article className="belief-item">
            <span>03</span>
            <h2>People before trends.</h2>
            <p>Every shift in culture starts with someone making, asking, or noticing.</p>
          </article>
        </div>
      </section>

      <section className="about-team">
        <div className="about-section-heading">
          <p className="kicker">The people</p>
          <a className="text-link" href="mailto:hello@north-journal.test">
            Say hello <span>↗</span>
          </a>
        </div>
        <div className="team-list">
          <div><strong>Maya Chen</strong><span>Editor in chief</span></div>
          <div><strong>Noah Williams</strong><span>Culture editor</span></div>
          <div><strong>Iris Okafor</strong><span>Design editor</span></div>
          <div><strong>Lena Ortiz</strong><span>Contributing editor</span></div>
        </div>
      </section>

      <Newsletter />
    </section>
  )
}
