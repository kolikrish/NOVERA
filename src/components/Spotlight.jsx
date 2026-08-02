import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

/* Heritage spotlight — centred heading over a model cutout with floating stats */

export default function Spotlight() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // The arc orbits the circle as the section scrolls through the viewport.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.spotlight__arc circle',
          { rotation: -250, svgOrigin: '50 50' },
          {
            rotation: 110,
            svgOrigin: '50 50',
            ease: 'none',
            scrollTrigger: {
              trigger: '.spotlight__stage',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          },
        )
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.spotlight__arc circle', { rotation: -118, svgOrigin: '50 50' })
      })
    },
    { scope: root },
  )

  return (
    <section className="section container spotlight" id="heritage" ref={root}>
      {/* ---- centred heading ---- */}
      <div className="spotlight__head" data-reveal>
        <p className="eyebrow">Acoustic Engineering &amp; Innovation</p>

        <h2 className="spotlight__title">
          <span className="spotlight__line">
            Acoustic excellence
            <span className="spotlight__chip">
              <img src="https://images.pexels.com/photos/15394136/pexels-photo-15394136.jpeg" alt="" loading="lazy" />
            </span>
            redefined
          </span>
          <span className="spotlight__line">
            <span className="spotlight__chip">
              <img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg" alt="" loading="lazy" />
            </span>
            through precision sound
          </span>
        </h2>
      </div>

      {/* ---- copy top-left ---- */}
      <div className="spotlight__split" data-reveal>
        <p className="spotlight__copy">
          Novera merges studio-fidelity acoustics with sleek, minimalist ergonomics—a refined audio experience that connects you deeply to every note.
        </p>
      </div>

      {/* ---- model over circle with floating stats ---- */}
      <div className="spotlight__stage" data-reveal>
        <span className="spotlight__circle" aria-hidden="true" />

        <svg className="spotlight__arc" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="48.5" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="82 223" />
        </svg>

        <p className="spotlight__ghost" aria-hidden="true">
          100%
          <span>Studio Sound</span>
        </p>

        <img
          className="spotlight__model"
          src="https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg"
          alt="Novera Flagship Over-Ear Noise-Cancelling Headphones"
          loading="lazy"
        />

        <div className="spotlight__stat spotlight__stat--women">
          <strong>40mm</strong>
          <span>Titanium Acoustic Drivers</span>
        </div>

        <div className="spotlight__stat spotlight__stat--crafts">
          <strong>-38dB</strong>
          <span>Active Hybrid Noise Isolation</span>
        </div>

        <p className="spotlight__note">Engineered for crystal-clear audio &amp; deep bass</p>

        {/* two small plates balancing the circle */}
        <figure className="spotlight__plate spotlight__plate--tr" aria-hidden="true">
          <img src="https://images.pexels.com/photos/5269759/pexels-photo-5269759.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="spotlight__plate spotlight__plate--bl" aria-hidden="true">
          <img src="https://images.pexels.com/photos/5269691/pexels-photo-5269691.jpeg" alt="" loading="lazy" />
        </figure>

        <div className="spotlight__stat spotlight__stat--villages">
          <strong>50 Hours</strong>
          <span>Extended Battery Life</span>
        </div>
      </div>

      {/* ---- closing copy, bottom-right ---- */}
      <div className="spotlight__outro" data-reveal>
        <p>
          Precision-tuned acoustic chambers, ultra-soft memory foam cushions, and seamless Bluetooth 5.3 multipoint connectivity—crafted to empower your everyday listening.
        </p>
      </div>
    </section>
  )
}
