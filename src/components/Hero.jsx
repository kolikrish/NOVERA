import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from './Icons.jsx'

const IMG = {
  model: 'https://images.unsplash.com/photo-1625786682948-2168238883d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  season: 'https://images.unsplash.com/photo-1730343464315-a9ca01f9f1c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  thread: 'https://images.unsplash.com/photo-1713863574532-aea8fab1e4a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  accessories: 'https://images.unsplash.com/photo-1620578077783-33e254311182?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  story: 'https://images.unsplash.com/photo-1557173135-7336e73d53d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

/* Line-art mandala for the ivory message panel */
function Mandala({ size = 64, ...props }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30)
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      {petals.map((deg) => (
        <ellipse key={deg} cx="32" cy="14" rx="5.5" ry="12" transform={`rotate(${deg} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="5" />
    </svg>
  )
}

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out', duration: 0.9 },
        })

        tl.fromTo(
          '[data-hero="cell"]',
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 },
          0,
        )
          .fromTo(
            '.hero-message__title .line > span',
            { yPercent: 110 },
            { yPercent: 0, duration: 1, stagger: 0.12, ease: 'power4.out' },
            0.35,
          )
          .fromTo(
            '[data-hero="rule"]',
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.6 },
            0.8,
          )
          .fromTo('[data-hero="copy"]', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0 }, 0.9)
          .fromTo('[data-hero="cta"]', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0 }, 1.02)
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('[data-hero], .hero-message__title .line > span', { clearProps: 'all', autoAlpha: 1 })
      })
    },
    { scope: root },
  )

  return (
    <section className="hero" ref={root} aria-label="Pure Sound, Pure Experience">
      {/* ---- 1 · model ---- */}
      <a className="hero-cell hero-cell--model" href="#" data-hero="cell">
        <img
          src={IMG.model}
          alt="Premium Novera headphones with sleek ergonomic design"
          fetchpriority="high"
        />
        <span className="hero-cell__label">
          <i className="hero-cell__dash" aria-hidden="true" />
          Acoustic
          <br />
          Precision.
          <br />
          Modern
          <br />
          Design.
        </span>
      </a>

      {/* ---- 2 · message panel ---- */}
      <div className="hero-cell hero-cell--message" data-hero="cell">
        <span className="hero-message__ornament" aria-hidden="true">
          <Mandala size={58} />
        </span>
        <h1 className="hero-message__title">
          <span className="line">
            <span className="t-ink">Pure Sound,</span>
          </span>
          <span className="line">
            <span className="t-red">Pure</span>
          </span>
          <span className="line">
            <span className="t-red">Experience</span>
          </span>
        </h1>
        <span className="hero-message__rule" data-hero="rule" aria-hidden="true" />
        <p className="hero-message__copy" data-hero="copy">
          Every Novera product is crafted to deliver crystal-clear audio, deep bass, lasting comfort, and reliable performance for everyday life.
        </p>
        <a className="hero-message__cta" href="#categories" data-hero="cta">
          Explore Audio Collection <ArrowRight width="17" height="17" />
        </a>
      </div>

      {/* ---- 3 · new season ---- */}
      <a className="hero-cell hero-cell--season" href="#" data-hero="cell">
        <img src={IMG.season} alt="Novera Flagship Over-Ear Headphones" />
        <span className="hero-cell__scrim" aria-hidden="true" />
        <span className="hero-cell__label hero-cell__label--bottom">
          <em>New Generation</em>
          Studio Headphones
          <ArrowRight width="16" height="16" />
        </span>
      </a>

      {/* ---- 4 · acoustic precision ---- */}
      <a className="hero-cell hero-cell--thread" href="#" data-hero="cell">
        <img src={IMG.thread} alt="Detail of acoustic driver and metallic finish" />
        <span className="hero-cell__scrim" aria-hidden="true" />
        <span className="hero-cell__label hero-cell__label--bottom">
          <em>Precision Audio</em>
          In Every Frequency
          <ArrowRight width="16" height="16" />
        </span>
      </a>

      {/* ---- 5 · story panel ---- */}
      <div className="hero-cell hero-cell--story" data-hero="cell">
        <img src={IMG.story} alt="" aria-hidden="true" />
        <span className="hero-cell__scrim hero-cell__scrim--story" aria-hidden="true" />
        <p className="hero-story__title">
          Music is more than sound.
          <br />
          It is an experience.
        </p>
        <p className="hero-story__copy">
          Inspires clarity.
          <br />
          Connects deeply.
          <br />
          Empowers every moment.
        </p>
        <a className="hero-story__link" href="#craft">
          Explore Technology <ArrowRight width="15" height="15" />
        </a>
      </div>

      {/* ---- 6 · earbuds & accessories ---- */}
      <a className="hero-cell hero-cell--accessories" href="#" data-hero="cell">
        <img src={IMG.accessories} alt="Novera Wireless Earbuds with charging case" />
        <span className="hero-cell__scrim" aria-hidden="true" />
        <span className="hero-cell__label hero-cell__label--bottom">
          True Wireless Earbuds &amp;
          <br />
          Audiophile Gear
          <ArrowRight width="16" height="16" />
        </span>
      </a>

      {/* ---- 7 · sound engineering ---- */}
      <a className="hero-cell hero-cell--india" href="#craft" data-hero="cell">
        <span className="hero-india__map" aria-hidden="true" />
        <span className="hero-cell__label hero-cell__label--bottom hero-cell__label--ink">
          <em>Engineered</em>
          For Perfection
          <ArrowRight width="16" height="16" />
        </span>
      </a>
    </section>
  )
}
