import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Stories', to: '/stories' },
  { label: 'Dispatch', to: '/dispatch' },
  { label: 'About', to: '/about' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="North home">
          N<span>/</span>ORTH
        </Link>

        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              end={item.to === '/'}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="north-index"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Close' : 'Menu'} <span>{isMenuOpen ? '−' : '+'}</span>
        </button>
      </header>

      {isMenuOpen && (
        <div
          className="index-overlay"
          id="north-index"
          role="dialog"
          aria-modal="true"
          aria-label="North index menu"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeMenu()
          }}
        >
          <div className="index-heading">
            <p className="kicker">The North index</p>
            <p>Issue 04 / August 2026</p>
          </div>
          <div className="index-content">
            <div className="index-mark" aria-hidden="true">
              <span>N</span>
              <i />
              <small>LOOK<br />CLOSER</small>
            </div>
            <div className="index-links">
              <p className="kicker">Go somewhere thoughtful</p>
              {navItems.map((item, index) => (
                <Link to={item.to} onClick={closeMenu} key={item.to}>
                  <span>0{index + 1}</span>
                  {item.label}
                  <b>↗</b>
                </Link>
              ))}
            </div>
            <div className="index-note">
              <p className="kicker">Inside this issue</p>
              <p>8 stories<br />4 perspectives<br />1 good question</p>
              <button className="text-link" type="button" onClick={closeMenu}>
                Keep exploring <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
