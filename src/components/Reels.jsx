import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const INSTAGRAM = 'https://www.instagram.com/shrujanindia/reels/'

const REELS = [
  {
    src: 'https://www.pexels.com/download/video/35332008/',
    poster: 'https://images.pexels.com/photos/8100068/pexels-photo-8100068.jpeg',
    title: 'Active Noise Cancellation in Action',
    meta: '0:27',
  },
  {
    src: 'https://www.pexels.com/download/video/7976326/',
    poster: 'https://images.pexels.com/photos/6686276/pexels-photo-6686276.jpeg',
    title: 'Studio Acoustic Driver Tuning',
    meta: '0:33',
  },
  {
    src: 'https://www.pexels.com/download/video/8003613/',
    poster: 'https://images.pexels.com/photos/4468000/pexels-photo-4468000.jpeg',
    title: 'Ergonomic All-Day Comfort Test',
    meta: '0:32',
  },
  {
    src: 'https://www.pexels.com/download/video/6868333/',
    poster: 'https://images.pexels.com/photos/7896557/pexels-photo-7896557.jpeg',
    title: 'Novera Audio Engineering',
    meta: '0:15',
  },
  {
    src: 'https://www.pexels.com/download/video/6948592/',
    poster: 'https://images.pexels.com/photos/7862656/pexels-photo-7862656.jpeg',
    title: 'Immersive Spatial Soundstage',
    meta: '0:30',
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

export default function Reels() {
  const root = useRef(null)
  const railRef = useRef(null)

  // Play only what's on screen — five autoplaying videos at once is wasteful.
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
  }, [])

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
          </div>
        </div>
      </div>

      <div className="reels__rail-wrap">
        <div className="reels__rail" data-reveal-child ref={railRef}>
          {REELS.map((r) => (
            <a
              className="reel"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              key={r.src}
            >
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
              </div>
              <p className="reel__title">{r.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
