import { ArrowRight } from './Icons.jsx'

const PRINCIPLES = [
  {
    no: '01',
    title: 'Exceptional Sound',
    copy: 'Precision titanium drivers tuned for studio-fidelity acoustics and deep, resonant bass.',
    img: 'https://images.pexels.com/photos/12266869/pexels-photo-12266869.jpeg',
    alt: 'Novera high-resolution audio driver engineering',
  },
  {
    no: '02',
    title: 'Elegant Design',
    copy: 'Minimalist aesthetics crafted from premium aerospace-grade aluminum and soft memory leather.',
    img: 'https://images.pexels.com/photos/24602113/pexels-photo-24602113.jpeg',
    alt: 'Sleek metallic finish of Novera flagship headphones',
  },
  {
    no: '03',
    title: 'Cutting-Edge Tech',
    copy: 'Adaptive Hybrid Active Noise Cancellation, Bluetooth 5.3, and multipoint seamless pairing.',
    img: 'https://images.pexels.com/photos/5382359/pexels-photo-5382359.jpeg',
    alt: 'Advanced acoustic sensor integration',
  },
  {
    no: '04',
    title: 'Lasting Comfort',
    copy: 'Ergonomic pressure-relieving headband and breathable memory-foam cushions for all-day wear.',
    img: 'https://images.pexels.com/photos/10433465/pexels-photo-10433465.jpeg',
    alt: 'Ergonomic ear cushion and headband design',
  },
]

export default function Showcase() {
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
        {PRINCIPLES.map((p) => (
          <li className="seal" key={p.no}>
            <span className="seal__no">{p.no}</span>

            <span className="seal__ring">
              <img src={p.img} alt={p.alt} loading="lazy" />
            </span>

            <h3 className="seal__title">{p.title}</h3>
            <p className="seal__copy">{p.copy}</p>
          </li>
        ))}
      </ol>

      <div className="manifesto__more" data-reveal>
        <a className="arrow-link" href="#craft">
          Explore Sound Engineering <ArrowRight width="16" height="16" />
        </a>
      </div>
    </section>
  )
}
