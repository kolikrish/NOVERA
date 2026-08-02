import { useState, useEffect } from 'react'
import {
  UserIcon,
  HeartIcon,
  BagIcon,
  ChevronDown,
  MenuIcon,
  CloseIcon,
  SearchIcon,
} from './Icons.jsx'

const NAV = [
  { label: 'Headphones', href: '#bestsellers' },
  { label: 'Earbuds', href: '#categories' },
  { label: 'Curated Edit', href: '#curated' },
  { label: 'Technology', href: '#spotlight' },
  { label: 'Sound Journal', href: '#journal' },
  { label: 'Support', href: '#support' },
]

const ANNOUNCEMENTS = [
  'Complimentary express shipping & 30-day risk-free audio trial',
  '2-Year Full Manufacturer Warranty on all Novera headphones',
  'Use code NOVERASOUND for 10% off your first audio order',
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [announcementIdx, setAnnouncementIdx] = useState(0)
  const [bagCount] = useState(2)

  // Rotate topbar announcements
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="site-header">
      {/* Topbar Announcement */}
      <div className="topbar">
        <div className="topbar__inner">
          <button className="topbar__region" type="button" aria-label="Change region and currency">
            India&nbsp;|&nbsp;INR ₹ <ChevronDown />
          </button>
          <span className="topbar__note" key={announcementIdx} style={{ transition: 'opacity 0.4s ease' }}>
            ✦ {ANNOUNCEMENTS[announcementIdx]}
          </span>
        </div>
      </div>

      <div className="site-header__inner">
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Central Brand Mark */}
        <a className="brand" href="#" aria-label="Novera Home">
          <span className="brand__logo-text" style={{ fontSize: '26px', fontWeight: '700', letterSpacing: '0.25em', color: 'var(--ink)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>NOVERA</span>
          <span className="brand__tag">Pure Sound · Pure Experience</span>
        </a>

        {/* Utility Actions */}
        <div className="header-utils">
          <button
            type="button"
            className="utility-link"
            aria-label="Search equipment"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </button>

          <a className="utility-link" href="#" aria-label="Account">
            <span>Account</span> <UserIcon />
          </a>

          <a className="utility-link" href="#" aria-label="Wishlist">
            <span>Wishlist</span> <HeartIcon />
          </a>

          <a className="utility-link" href="#" aria-label={`Shopping bag, ${bagCount} items`}>
            <span>Bag&nbsp;({bagCount})</span> <BagIcon />
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile">
        {NAV.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Glassmorphic Search Overlay Modal */}
      {searchOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(24, 26, 56, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'grid',
          placeItems: 'center',
          padding: '24px',
        }} onClick={() => setSearchOpen(false)}>
          <div style={{
            background: 'var(--ivory)',
            borderRadius: 'var(--radius)',
            padding: '32px',
            maxWidth: '560px',
            width: '100%',
            boxShadow: 'var(--shadow-glow)',
            border: '1px solid var(--hairline-strong)',
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--ink)' }}>Search Novera Audio</h3>
              <button type="button" onClick={() => setSearchOpen(false)} style={{ cursor: 'pointer', opacity: 0.7 }}>
                <CloseIcon />
              </button>
            </div>

            <div className="fcard__form" style={{ width: '100%', maxWidth: 'none', background: 'var(--sand)', border: '1px solid var(--hairline-strong)' }}>
              <input
                type="text"
                placeholder="Search headphones, ANC earbuds, DAC cables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{ color: 'var(--ink)' }}
              />
              <button type="button" aria-label="Perform search">
                <SearchIcon />
              </button>
            </div>

            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gerua)', marginBottom: '10px' }}>
                Popular Searches
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Over-Ear ANC', 'True Wireless', 'Studio Reference', 'Rapid Charge Case', 'DAC Cable'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="faq__filter"
                    onClick={() => setSearchQuery(tag)}
                    style={{ fontSize: '11px', padding: '6px 14px' }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
