import { ArrowRight } from './Icons.jsx'

/* Shop by category — an expanding accordion band rather than a card grid,
   so it doesn't read as a second run of the bestseller rail. Collapsed
   panels carry the name up their spine; hovering one opens it and swaps in
   the horizontal block. Below 900px it stacks into landscape bands. */

const CATEGORIES = [
  {
    name: 'Over-Ear Headphones',
    copy: 'Active noise cancellation & studio-grade sound fidelity.',
    count: '28 models',
    img: 'https://images.pexels.com/photos/8100068/pexels-photo-8100068.jpeg',
    alt: 'Novera Over-Ear Wireless ANC Headphones',
  },
  {
    name: 'True Wireless Earbuds',
    copy: 'Compact, crystal-clear audio designed for life on the move.',
    count: '42 models',
    img: 'https://images.pexels.com/photos/6686276/pexels-photo-6686276.jpeg',
    alt: 'Novera True Wireless Earbuds with Smart Touch',
  },
  {
    name: 'Audiophile Studio Series',
    copy: 'Lossless high-resolution audio engineered for critical listening.',
    count: '16 models',
    img: 'https://images.pexels.com/photos/4468000/pexels-photo-4468000.jpeg',
    alt: 'Novera Studio Reference Monitor Headphones',
  },
  {
    name: 'Sports & Endurance',
    copy: 'Sweatproof ergonomic fit with deep, empowering bass.',
    count: '24 models',
    img: 'https://images.pexels.com/photos/7896557/pexels-photo-7896557.jpeg',
    alt: 'Novera Sport Wireless Earbuds',
  },
  {
    name: 'Audio Accessories',
    copy: 'Smart charging cases, DAC cables & premium ear cushions.',
    count: '35 items',
    img: 'https://images.pexels.com/photos/7862656/pexels-photo-7862656.jpeg',
    alt: 'Novera Premium Audio Accessories & Charging Gear',
  },
]

export default function Categories() {
  return (
    <section className="section container" id="categories">
      <div className="section-head section-head--center" data-reveal>
        <p className="eyebrow">Discover the Lineup</p>
        <h2 className="section-title">Shop by audio category</h2>
        <a className="arrow-link" href="#">
          View All <ArrowRight width="16" height="16" />
        </a>
      </div>

      <div className="catbar" data-reveal-child>
        {CATEGORIES.map((c, i) => (
          <a className="catpanel" href="#" key={c.name}>
            <img src={c.img} alt={c.alt} loading="lazy" />
            <span className="catpanel__scrim" aria-hidden="true" />

            <span className="catpanel__index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* collapsed state — the name runs up the spine */}
            <span className="catpanel__spine" aria-hidden="true">
              {c.name}
            </span>

            {/* open state — crossfades in as the panel widens */}
            <span className="catpanel__open">
              <span className="catpanel__name">{c.name}</span>
              <span className="catpanel__copy">{c.copy}</span>
              <span className="catpanel__foot">
                <span className="catpanel__count">{c.count}</span>
                <span className="catpanel__cta">
                  Explore <ArrowRight width="15" height="15" />
                </span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
