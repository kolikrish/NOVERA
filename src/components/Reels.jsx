import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ChevronLeft, ChevronRight } from './Icons.jsx'

gsap.registerPlugin(ScrollTrigger)

const INSTAGRAM = 'https://www.instagram.com/'

const REELS = [
  {
    cat: 'ANC Demos',
    src: 'https://www.pexels.com/download/video/35332008/',
    poster: 'https://images.pexels.com/photos/8100068/pexels-photo-8100068.jpeg',
    title: 'Active Noise Cancellation in Action',
    meta: '0:27',
    views: '240K views',
  },
  {
    cat: 'Studio Lab',
    src: 'https://www.pexels.com/download/video/7976326/',
    poster: 'https://images.pexels.com/photos/6686276/pexels-photo-6686276.jpeg',
    title: 'Studio Acoustic Driver Tuning',
    meta: '0:33',
    views: '185K views',
  },
  {
    cat: 'Ergonomic Testing',
    src: 'https://www.pexels.com/download/video/8003613/',
    poster: 'https://images.pexels.com/photos/4468000/pexels-photo-4468000.jpeg',
    title: 'Ergonomic All-Day Comfort Test',
    meta: '0:32',
    views: '120K views',
  },
  {
    cat: 'Studio Lab',
    src: 'https://www.pexels.com/download/video/6868333/',
    poster: 'https://images.pexels.com/photos/7896557/pexels-photo-7896557.jpeg',
    title: 'Novera Audio Engineering',
    meta: '0:15',
    views: '310K views',
  },
  {
    cat: 'ANC Demos',
    src: 'https://www.pexels.com/download/video/6948592/',
    poster: 'https://images.pexels.com/photos/7862656/pexels-photo-7862656.jpeg',
    title: 'Immersive Spatial Soundstage',
    meta: '0:30',
    views: '215K views',
  },
]

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function SoundWaveIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 3v18M8 6v12M4 9v6M16 6v12M20 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Reels() {
  const root = useRef(null)
  const railRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All Motion')
  const [playingState, setPlayingState] = useState({})
  const [mutedState, setMutedState] = useState({})

  const filteredReels = activeFilter === 'All Motion'
    ? REELS
    : REELS.filter((r) => r.cat === activeFilter)

  // IntersectionObserver for autoplay when visible
  useEffect(() => {
    const vids = railRef.current?.querySelectorAll('video') ?? []
    if (!('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target
          if (entry.isIntersecting) v.play().catch(() => {})
          else v.pause()
        })
      },
      { threshold: 0.35 },
    )

    vids.forEach((v) => io.observe(v))
    return () => io.disconnect()
  }, [activeFilter])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.reels__seal',
          { rotation: -60 },
          {
            rotation: 120,
            ease: 'none',
            scrollTrigger: { trigger: '.reels', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          },
        )
      })
    },
    { scope: root },
  )

  const scrollRail = (dir) => {
    if (!railRef.current) return
    railRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  const toggleMute = (src, e) => {
    e.preventDefault()
    e.stopPropagation()
    const video = e.currentTarget.closest('.reel')?.querySelector('video')
    if (video) {
      video.muted = !video.muted
      setMutedState((prev) => ({ ...prev, [src]: video.muted }))
    }
  }

  return (
    <section className="section reels" id="reels" ref={root} aria-label="Novera in motion">
      <div className="container">
        <div className="reels__head">
          <div className="reels__titles" data-reveal>
            <p className="eyebrow">Novera in Motion</p>
            <h2 className="section-title">
              Experience the sound
              <br />
              <em>come alive</em>
            </h2>
          </div>

          <a
            className="reels__seal-link"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Novera videos on Instagram"
          >
            <span className="reels__seal" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="reel-arc" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text>
                  <textPath href="#reel-arc" startOffset="0">
                    EXPERIENCE THE SOUND · NOVERA IN MOTION ·
                  </textPath>
                </text>
              </svg>
            </span>
            <span className="reels__seal-badge" aria-hidden="true">
              <InstagramGlyph />
            </span>
          </a>

          <div className="reels__note" data-reveal>
            <p>
              Inside the Novera acoustic lab: precision driver balancing, active noise-cancelling calibration, and studio sound testing.
            </p>

            {/* Navigation Arrows for Video Rail */}
            <div className="carousel-arrows" style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
              <button type="button" aria-label="Scroll left" onClick={() => scrollRail(-1)}>
                <ChevronLeft />
              </button>
              <button type="button" aria-label="Scroll right" onClick={() => scrollRail(1)}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Reel Category Filter Pills */}
        <div className="faq__filters" data-reveal style={{ justifyContent: 'flex-start', marginTop: '24px' }}>
          {['All Motion', 'ANC Demos', 'Studio Lab', 'Ergonomic Testing'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`faq__filter${activeFilter === cat ? ' is-active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="reels__rail-wrap">
        <div className="reels__rail" data-reveal-child ref={railRef} key={activeFilter}>
          {filteredReels.map((r) => (
            <div className="reel" key={r.src}>
              <div className="reel__media">
                <video
                  src={r.src}
                  poster={r.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label={r.title}
                />
                <span className="reel__scrim" aria-hidden="true" />
                <span className="reel__meta">{r.meta}</span>
                <span className="journal-pill journal-pill--glass" style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2, fontSize: '10.5px' }}>
                  👁 {r.views}
                </span>

                <button
                  type="button"
                  className="reel__sound-btn"
                  onClick={(e) => toggleMute(r.src, e)}
                  aria-label="Toggle audio"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    zIndex: 3,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(24, 26, 56, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    display: 'grid',
                    placeItems: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <SoundWaveIcon />
                </button>
              </div>
              <p className="reel__title">{r.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
