import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'

const PILLARS = [
  {
    id: 'fidelity',
    num: '01',
    name: 'Sound Fidelity',
    title: 'Custom 40mm Titanium Diaphragm Drivers',
    desc: 'Engineered with ultra-light titanium-coated dynamic diaphragms that reproduce pristine treble, natural vocal timbre, and deep, resonant sub-bass down to 10Hz with zero harmonic distortion.',
    spec: '24-Bit / 96kHz Lossless Audio',
    img: 'https://images.unsplash.com/photo-1730343463146-296b378c437b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    alt: 'Novera sound engineer calibrating acoustic drivers',
    caption: 'Acoustic Driver Calibration',
  },
  {
    id: 'anc',
    num: '02',
    name: 'Active Noise Isolation',
    title: 'Hybrid Adaptive ANC up to -38dB',
    desc: 'Dual internal and external microphones measure ambient environmental sound 1,000 times per second, generating an inverted phase anti-noise signal that silences cabin hum and office noise.',
    spec: '-38dB Real-Time Attenuation',
    img: 'https://images.unsplash.com/photo-1690264240664-c14e44aff97c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Precision crafting of Novera memory foam ear cushions',
    caption: 'Hybrid ANC Micro-Array Integration',
  },
  {
    id: 'comfort',
    num: '03',
    name: 'Ergonomic Comfort',
    title: 'Memory Foam Cushioning & Balanced Weight',
    desc: 'Wrapped in plush protein leather and memory foam that contours seamlessly to your head shape. The arch headband distributes clamping force evenly for fatigue-free listening all day.',
    spec: '240g Ultra-Light Weight',
    img: 'https://images.pexels.com/photos/210926/pexels-photo-210926.jpeg',
    alt: 'Novera memory foam ear cushion ergonomics',
    caption: 'Ergonomic Weight Balance Testing',
  },
  {
    id: 'power',
    num: '04',
    name: 'Wireless Power',
    title: '50-Hour Playtime & Rapid Charge',
    desc: 'High-density lithium polymer battery architecture provides up to 50 hours of continuous music playback with ANC enabled. 10 minutes of USB-C charging delivers 3 extra hours of listening.',
    spec: '50 Hours Battery Life',
    img: 'https://images.pexels.com/photos/15394136/pexels-photo-15394136.jpeg',
    alt: 'Novera wireless fast charging circuitry',
    caption: 'High-Density Battery Management',
  },
]

const STATS = [
  { value: '24-Bit', label: 'Lossless Audio Resolution' },
  { value: '40mm', label: 'Titanium Dynamic Drivers' },
  { value: '-38dB', label: 'Active Noise Cancellation' },
  { value: '50 Hours', label: 'Continuous Wireless Battery' },
]

export default function CraftStory() {
  const [activePillar, setActivePillar] = useState(PILLARS[0])

  return (
    <section className="section container" id="craft">
      <div className="craft">
        <div className="craft__body">
          <p className="eyebrow" data-reveal>
            Acoustic Craftsmanship
          </p>
          <h2 className="section-title" data-reveal>
            Every frequency tuned
            <br />
            <em>to perfection</em>
          </h2>

          {/* Interactive Technology Pillar Navigation */}
          <div className="craft__pillars-nav" data-reveal role="tablist">
            {PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={activePillar.id === pillar.id}
                className={`craft__pillar-btn${activePillar.id === pillar.id ? ' is-active' : ''}`}
                onClick={() => setActivePillar(pillar)}
              >
                <span>{pillar.num}</span> {pillar.name}
              </button>
            ))}
          </div>

          <div className="craft__copy" data-reveal key={activePillar.id}>
            <h3 style={{ fontSize: 'clamp(20px, 1.5vw, 26px)', color: 'var(--ink)', fontWeight: '600', marginBottom: '10px' }}>
              {activePillar.title}
            </h3>
            <p>{activePillar.desc}</p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--sand)',
              border: '1px solid var(--hairline-strong)',
              color: 'var(--gerua)',
              fontWeight: '600',
              fontSize: '13px',
              marginTop: '12px'
            }}>
              ⚡ {activePillar.spec}
            </div>
          </div>

          <a className="arrow-link craft__link" href="#spotlight" data-reveal style={{ marginTop: '24px' }}>
            Explore Audio Technology <ArrowRight width="16" height="16" />
          </a>
        </div>

        <div className="craft__gallery" data-reveal key={activePillar.id}>
          <figure className="craft__shot">
            <div className="craft__shot-media">
              <img src={activePillar.img} alt={activePillar.alt} loading="lazy" />
              <span className="journal-pill journal-pill--glass" style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 2 }}>
                {activePillar.name}
              </span>
            </div>
            <figcaption>{activePillar.caption}</figcaption>
          </figure>
        </div>
      </div>

      <div className="craft__stats" data-reveal-child>
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <p className="stat__value">{s.value}</p>
            <p className="stat__label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
