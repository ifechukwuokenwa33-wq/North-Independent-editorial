import { Link } from 'react-router-dom'
import { Newsletter, StoryCard } from './shared'
import { stories } from './storyData'

export default function Home() {
  return (
    <>
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">Issue 04 / The attention edition</p>
          <h1>
            Ideas worth
            <br />
            <em>keeping.</em>
          </h1>
          <p className="hero-intro">
            A magazine for the endlessly curious. We look closely at the people,
            objects, and ideas reshaping how we live now.
          </p>
          <Link className="text-link" to="/stories">
            Explore the issue <span>↗</span>
          </Link>
        </div>
        <div className="hero-image">
          <img src={stories[0].image} alt="A close-up of a circuit board" />
          <span className="image-label">Cover story / 01</span>
        </div>
      </section>

      <section className="latest-section">
        <div className="section-heading">
          <p className="kicker">The latest</p>
          <Link className="text-link" to="/stories">
            View all stories <span>↗</span>
          </Link>
        </div>
        <div className="story-grid">
          {stories.slice(1).map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  )
}
