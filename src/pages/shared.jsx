import { useState } from 'react'

export function Meta({ category, date }) {
  return (
    <p className="meta">
      <span>{category}</span>
      <i />
      {date}
    </p>
  )
}

export function StoryCard({ story }) {
  return (
    <article className="story-card">
      <img
        src={story.image}
        alt=""
        loading="lazy"
        decoding="async"
        onError={(event) => {
          event.currentTarget.classList.add('image-failed')
        }}
      />
      <div className="story-copy">
        <Meta category={story.category} date={story.date} />
        <h3>{story.title}</h3>
        <p>{story.excerpt}</p>
        <span className="byline">Words by {story.author}</span>
      </div>
    </article>
  )
}

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function submit(event) {
    event.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <section className="newsletter">
      <div>
        <p className="kicker">The North letter</p>
        <h2>
          Leave the noise.
          <br />
          <em>Keep the good stuff.</em>
        </h2>
      </div>
      {subscribed ? (
        <p className="success">You're on the list. See you Sunday.</p>
      ) : (
        <form onSubmit={submit}>
          <label htmlFor="email">One thoughtful email, once a week.</label>
          <div className="email-row">
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button aria-label="Subscribe">↗</button>
          </div>
        </form>
      )}
    </section>
  )
}
