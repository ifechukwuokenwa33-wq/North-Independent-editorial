import { useState } from 'react'
import { StoryCard } from './shared'
import { stories } from './storyData'

export default function Stories() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Technology', 'Culture', 'Design', 'Lifestyle']
  const visibleStories =
    filter === 'All'
      ? stories
      : stories.filter((story) => story.category === filter)

  return (
    <section className="page-section">
      <div className="page-title">
        <p className="kicker">The archive</p>
        <h1>All stories</h1>
        <p>
          Long reads, sharp observations, and good questions from the world around
          us.
        </p>
      </div>
      <div className="filter-row">
        {categories.map((category) => (
          <button
            className={filter === category ? 'filter active' : 'filter'}
            onClick={() => setFilter(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="archive-grid">
        {visibleStories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </section>
  )
}
