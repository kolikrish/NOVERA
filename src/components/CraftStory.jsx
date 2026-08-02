import { ArrowRight } from './Icons.jsx'

const SHOTS = [
  {
    img: 'https://images.unsplash.com/photo-1730343463146-296b378c437b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    alt: 'Novera sound engineer calibrating acoustic drivers',
    caption: 'Acoustic Driver Calibration',
  },
  {
    img: 'https://images.unsplash.com/photo-1690264240664-c14e44aff97c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Precision crafting of Novera memory foam ear cushions',
    caption: 'Precision Ergonomic Craftsmanship',
  },
]

const STATS = [
  { value: '24-Bit', label: 'Lossless Audio Resolution' },
  { value: '40mm', label: 'Titanium Dynamic Drivers' },
  { value: '-38dB', label: 'Active Noise Cancellation' },
  { value: '50 Hours', label: 'Continuous Wireless Battery' },
]

export default function CraftStory() {
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
          <div className="craft__copy" data-reveal>
            <p>
              Novera was founded on a simple belief: music is more than entertainment—it is an experience that inspires, connects, and empowers. Every pair of headphones and earbuds is engineered with obsessive attention to acoustic detail.
            </p>
            <p>
              From custom-tuned 40mm titanium drivers to ergonomic weight balance and advanced hybrid active noise cancellation, Novera delivers pristine sound, deep punchy bass, and lasting comfort for everyday life.
            </p>
          </div>

          <a className="arrow-link craft__link" href="#" data-reveal>
            Explore Audio Technology <ArrowRight width="16" height="16" />
          </a>
        </div>

        <div className="craft__gallery" data-reveal>
          {SHOTS.map((shot, i) => (
            <figure className="craft__shot" key={shot.caption}>
              <div className="craft__shot-media" data-parallax={i === 0 ? '' : undefined}>
                <img src={shot.img} alt={shot.alt} loading="lazy" />
              </div>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
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
