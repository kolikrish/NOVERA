import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'

const PRINCIPLES = [
  {
    no: '01',
    title: 'Exceptional Sound',
    copy: 'Precision titanium drivers tuned for studio-fidelity acoustics, punchy sub-bass, and zero harmonic distortion.',
    spec: '24-Bit / 96kHz Lossless',
    highlight: '40mm Titanium Diaphragm',
    img: 'https://images.pexels.com/photos/12266869/pexels-photo-12266869.jpeg',
    alt: 'Novera high-resolution audio driver engineering',
  },
  {
    no: '02',
    title: 'Elegant Design',
    copy: 'Minimalist aesthetics crafted from premium aerospace-grade aluminum, tactile knurled dials, and soft protein leather.',
    spec: 'Aerospace-Grade Alloy',
    highlight: 'Tactile Knurled Controls',
    img: 'https://images.pexels.com/photos/24602113/pexels-photo-24602113.jpeg',
    alt: 'Sleek metallic finish of Novera flagship headphones',
  },
  {
    no: '03',
    title: 'Cutting-Edge Tech',
    copy: 'Adaptive Hybrid Active Noise Cancellation up to -38dB, Bluetooth 5.3 multipoint pairing, and 360° spatial audio.',
    spec: '-38dB Adaptive ANC',
    highlight: 'Bluetooth 5.3 Multipoint',
    img: 'https://images.pexels.com/photos/5382359/pexels-photo-5382359.jpeg',
    alt: 'Advanced acoustic sensor integration',
  },
  {
    no: '04',
    title: 'Lasting Comfort',
    copy: 'Ergonomic pressure-relieving headband and breathable memory-foam ear cushions engineered for all-day wear.',
    spec: '50h Playback Battery',
    highlight: 'Memory Foam Cushions',
    img: 'https://images.pexels.com/photos/10433465/pexels-photo-10433465.jpeg',
    alt: 'Ergonomic ear cushion and headband design',
  },
]

export default function Showcase() {
  const [activePillar, setActivePillar] = useState(0)

  return (
    <section className="section container manifesto" id="promise">
      <div className="section-intro" data-reveal>
        <p className="eyebrow">The Novera Philosophy</p>
        <h2 className="section-title">
          Audio that empowers: <em>four pillars</em> of excellence
        </h2>
        <p className="section-intro__copy">
          Combining exceptional sound, elegant design, and cutting-edge technology to elevate every beat.
        </p>
      </div>

      <ol className="manifesto__grid" data-reveal-child>
        {PRINCIPLES.map((p, i) => {
          const isActive = activePillar === i
          return (
            <li
              className={`seal${isActive ? ' is-active' : ''}`}
              key={p.no}
              onClick={() => setActivePillar(i)}
              style={{
                cursor: 'pointer',
                border: isActive ? '1px solid var(--gerua)' : '1px solid var(--hairline)',
                boxShadow: isActive ? 'var(--shadow-glow)' : 'var(--shadow-card)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(20px, 2vw, 32px)',
                background: isActive ? 'var(--ivory-2)' : 'var(--ivory)',
                transition: 'all 0.4s var(--ease)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '12px' }}>
                <span className="seal__no">{p.no}</span>
                <span className="journal-pill journal-pill--glass" style={{ fontSize: '10.5px' }}>
                  {p.spec}
                </span>
              </div>

              <span className="seal__ring" style={{ marginBottom: '16px' }}>
                <img src={p.img} alt={p.alt} loading="lazy" />
              </span>

              <h3 className="seal__title" style={{ fontSize: 'clamp(19px, 1.4vw, 24px)', fontWeight: '600', color: 'var(--ink)' }}>
                {p.title}
              </h3>
              <p className="seal__copy" style={{ marginTop: '8px', lineHeight: '1.6' }}>{p.copy}</p>

              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid var(--hairline)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gerua)',
              }}>
                ✦ {p.highlight}
              </div>
            </li>
          )
        })}
      </ol>

      <div className="manifesto__more" data-reveal>
        <a className="arrow-link" href="#craft">
          Explore Sound Engineering <ArrowRight width="16" height="16" />
        </a>
      </div>
    </section>
  )
}
