const dispatchItems = [
  {
    title: 'The Sunday read: a field guide to noticing',
    description: 'A walk through the overlooked details that make a familiar place feel new.',
    time: '08 min',
  },
  {
    title: 'Five objects with excellent manners',
    description: 'Small, beautifully considered things that know how to be useful without shouting.',
    time: '05 min',
  },
  {
    title: 'A playlist for the in-between hour',
    description: 'Nine songs for the soft edges of a day, selected by our culture desk.',
    time: '03 min',
  },
]

export default function Dispatch() {
  return (
    <section className="page-section">
      <div className="page-title">
        <p className="kicker">From the desk</p>
        <h1>Dispatch</h1>
        <p>A short weekly letter for people who like to look twice.</p>
      </div>
      <div className="dispatch-feature">
        <div>
          <p className="kicker">This week / 019</p>
          <h2>
            On making room for
            <br />
            <em>better questions.</em>
          </h2>
          <p>
            We are surrounded by answers. This week, a small case for lingering
            with the question a little longer.
          </p>
          <p className="dispatch-body">
            There is a particular kind of clarity that arrives when we stop trying
            to solve everything at once. The best ideas often begin as a pause: a
            walk without a destination, a notebook left open, a conversation that
            is allowed to wander.
          </p>
          <button className="gold-button">
            Read the dispatch <span>↗</span>
          </button>
        </div>
        <div className="dispatch-mark">
          N
          <br />
          <small>04</small>
        </div>
      </div>
      <div className="dispatch-list">
        {dispatchItems.map((item, index) => (
          <div className="dispatch-row" key={item.title}>
            <span>0{index + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <span className="dispatch-time">{item.time}</span>
          </div>
        ))}
      </div>
      <section className="dispatch-archive">
        <div className="about-section-heading">
          <p className="kicker">From the archive</p>
          <p className="about-section-note">A few notes worth returning to.</p>
        </div>
        <div className="archive-notes">
          <article><span>018 / July 2026</span><h3>The case for looking longer</h3><p>On patience as a creative practice.</p></article>
          <article><span>017 / July 2026</span><h3>In praise of the unfinished</h3><p>Why every good idea needs some air around it.</p></article>
          <article><span>016 / June 2026</span><h3>How to make a little room</h3><p>A field note on editing your attention.</p></article>
        </div>
      </section>
    </section>
  )
}
