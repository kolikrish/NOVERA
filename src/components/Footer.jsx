import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'

const PRODUCTS = ['Over-Ear Headphones', 'True Wireless Earbuds', 'Studio Reference Series', 'Sports & Endurance', 'Audio Accessories']
const TECH = ['Active Noise Cancellation', '40mm Titanium Drivers', '360° Spatial Audio', 'Custom EQ Sound App', 'Hi-Fi DAC Cables']
const SUPPORT = ['30-Day Risk-Free Trial', '2-Year Warranty', 'Track Your Order', 'Express Shipping & Returns', 'Help Center']

const CONTACT = [
  { label: 'Write to us', value: 'support@novera-audio.com', href: 'mailto:support@novera-audio.com' },
  { label: 'Call support', value: '+91 1800 890 9000', href: 'tel:+9118008909000' },
  { label: 'Sound Lab', value: 'Novera Acoustic Center, Bengaluru', href: '#' },
]

function Social({ label, children }) {
  return (
    <a className="footer__social" href="#" aria-label={label}>
      {children}
    </a>
  )
}

export default function Footer() {
  const [sent, setSent] = useState(false)

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* ---- Newsletter & Quick Contact Banner (No Image) ---- */}
        <div className="fcard fcard--simple">
          <div className="fcard__info">
            <p className="fcard__eyebrow">Novera Sound Letter</p>
            <h3 className="fcard__title">Stay connected to the sound</h3>
            <p className="fcard__copy">
              Subscribe for new product drops, acoustic engineering insights, and exclusive member invitations.
            </p>
          </div>

          <div className="fcard__action">
            {sent ? (
              <p className="fcard__sent" role="status">
                ✓ Thank you for subscribing to Novera Sound Updates.
              </p>
            ) : (
              <form
                className="fcard__form"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <input type="email" required placeholder="Enter your email address" aria-label="Email address" />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight width="17" height="17" />
                </button>
              </form>
            )}

            <div className="fcard__quick-contact">
              {CONTACT.map((c) => (
                <div className="fcard__c-item" key={c.label}>
                  <span className="fcard__c-label">{c.label}</span>
                  <a className="fcard__c-val" href={c.href}>{c.value}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Multi-Column Footer Navigation ---- */}
        <div className="footer__cols">
          {/* Brand Info */}
          <div className="footer__col footer__col--brand">
            <span className="brand__logo-text" style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '0.25em', color: 'var(--cream)', textTransform: 'uppercase' }}>
              NOVERA
            </span>
            <span className="brand__tag" style={{ color: 'var(--gerua-300)', marginTop: '4px', display: 'block' }}>
              Pure Sound · Pure Experience
            </span>
            <p className="footer__brand-desc">
              Novera is a premium audio brand dedicated to creating headphones and earbuds that combine exceptional sound, elegant design, and cutting-edge technology.
            </p>
          </div>

          {/* Product Columns */}
          <div className="footer__col">
            <h4 className="footer__col-title">Audio Lineup</h4>
            <ul className="footer__col-links">
              {PRODUCTS.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Technology</h4>
            <ul className="footer__col-links">
              {TECH.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Customer Care</h4>
            <ul className="footer__col-links">
              {SUPPORT.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---- Bottom Bar ---- */}
        <div className="footer__bottom">
          <div className="footer__legal-group">
            <span>© 2026 Novera Audio Inc. All rights reserved.</span>
            <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>

          <div className="footer__socials">
            <Social label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="3.9" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </Social>
            <Social label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8Z" />
              </svg>
            </Social>
            <Social label="Pinterest">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 3a9 9 0 0 0-3.3 17.36c-.08-.72-.15-1.83.03-2.62.16-.7 1.06-4.5 1.06-4.5s-.27-.54-.27-1.34c0-1.26.73-2.2 1.63-2.2.77 0 1.14.58 1.14 1.27 0 .78-.49 1.94-.75 3.02-.21.9.46 1.64 1.35 1.64 1.62 0 2.87-1.71 2.87-4.18 0-2.19-1.57-3.72-3.82-3.72-2.6 0-4.13 1.95-4.13 3.97 0 .79.3 1.63.68 2.09.08.09.09.17.06.26l-.25 1.02c-.4.17-.13.2-.3.12-1.11-.52-1.8-2.14-1.8-3.44 0-2.8 2.03-5.37 5.87-5.37 3.08 0 5.47 2.2 5.47 5.13 0 3.06-1.93 5.52-4.6 5.52-.9 0-1.75-.47-2.04-1.02l-.55 2.12c-.2.77-.74 1.73-1.1 2.32A9 9 0 1 0 12 3Z" />
              </svg>
            </Social>
            <Social label="YouTube">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M21.5 8.2a2.5 2.5 0 0 0-1.76-1.77C18.16 6 12 6 12 6s-6.16 0-7.74.43A2.5 2.5 0 0 0 2.5 8.2 26 26 0 0 0 2.07 12c0 1.3.14 2.6.43 3.8a2.5 2.5 0 0 0 1.76 1.77C5.84 18 12 18 12 18s6.16 0 7.74-.43a2.5 2.5 0 0 0 1.76-1.77c.29-1.2.43-2.5.43-3.8s-.14-2.6-.43-3.8ZM10.1 14.6V9.4l5.1 2.6Z" />
              </svg>
            </Social>
          </div>
        </div>
      </div>
    </footer>
  )
}
