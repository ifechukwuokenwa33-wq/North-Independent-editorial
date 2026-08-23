import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <p className="kicker">North / 404</p>
      <h1>
        This page went
        <br />
        <em>somewhere else.</em>
      </h1>
      <p>The address does not point to a published story or issue.</p>
      <Link className="text-link" to="/">
        Return home <span>↗</span>
      </Link>
    </section>
  )
}
