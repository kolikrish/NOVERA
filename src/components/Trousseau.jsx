import { useState } from 'react'
import { ArrowRight, HeartIcon } from './Icons.jsx'

const FILTERS = ['All', 'Over-Ear', 'Wireless Earbuds', 'Studio Series', 'Sports']

const PIECES = [
  {
    name: 'Novera Studio Pro Over-Ear', craft: '45mm Titanium Drivers · Hybrid ANC', price: '₹ 18,500', was: '₹ 21,000',
    tag: 'Over-Ear', badge: 'Made for Audiophiles', swatches: ['#9FA1FF', '#B5BAFF', '#AEE2FF'],
    img: 'https://images.unsplash.com/photo-1727407204985-7d723b6f14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    alt: 'Novera Studio Pro Over-Ear Headphones',
  },
  {
    name: 'Novera EarBuds ANC', craft: 'Active Noise Cancellation · Quad Mic', price: '₹ 9,990', was: '₹ 11,900',
    tag: 'Wireless Earbuds', badge: 'Best Seller', swatches: ['#AEE2FF', '#9FA1FF', '#FFFFFF'],
    img: 'https://images.unsplash.com/photo-1730343464372-77500ccd307a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    alt: 'Novera EarBuds ANC True Wireless',
  },
  {
    name: 'Novera Studio Reference Monitor', craft: 'Hi-Res Lossless Audio · Flat Response', price: '₹ 24,500', was: null,
    tag: 'Studio Series', badge: 'Studio Choice', swatches: ['#181A38', '#52567A', '#9FA1FF'],
    img: 'https://images.pexels.com/photos/27507165/pexels-photo-27507165.jpeg',
    alt: 'Novera Studio Reference Headphones',
  },
  {
    name: 'Novera Sport Earbuds IPX7', craft: 'Sweatproof Ergonomic Fit · Deep Bass', price: '₹ 6,490', was: null,
    tag: 'Sports', badge: 'Waterproof', swatches: ['#9FA1FF', '#AEE2FF', '#B5BAFF'],
    img: 'https://images.pexels.com/photos/8132514/pexels-photo-8132514.jpeg',
    alt: 'Novera Sport Wireless Earbuds',
  },
  {
    name: 'Novera Horizon Spatial', craft: '360° Spatial Audio · Dynamic Tracking', price: '₹ 16,900', was: null,
    tag: 'Over-Ear', badge: 'Bestseller', swatches: ['#9FA1FF', '#B5BAFF', '#AEE2FF'],
    img: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg',
    alt: 'Novera Horizon Spatial Headphones',
  },
  {
    name: 'Novera Audiophile IEM', craft: 'Quad Armature In-Ear Monitor', price: '₹ 11,900', was: null,
    tag: 'Studio Series', badge: 'Few left', swatches: ['#AEE2FF', '#9FA1FF', '#181A38'],
    img: 'https://images.pexels.com/photos/8597722/pexels-photo-8597722.jpeg',
    alt: 'Novera Audiophile In-Ear Monitor',
  },
  {
    name: 'Novera Pulse Earbuds', craft: 'Dual Dynamic Drivers · Bass Boost', price: '₹ 4,990', was: '₹ 5,800',
    tag: 'Wireless Earbuds', badge: 'New In', swatches: ['#9FA1FF', '#181A38', '#52567A'],
    img: 'https://images.pexels.com/photos/11945638/pexels-photo-11945638.jpeg',
    alt: 'Novera Pulse Wireless Earbuds',
  },
  {
    name: 'Novera Portable DAC Adapter', craft: '32-Bit USB-C Hi-Fi DAC', price: '₹ 2,990', was: null,
    tag: 'Studio Series', badge: null, swatches: ['#9FA1FF', '#B5BAFF', '#AEE2FF'],
    img: 'https://images.pexels.com/photos/15394136/pexels-photo-15394136.jpeg',
    alt: 'Novera Portable DAC Adapter',
  },
  {
    name: 'Novera Velocity Sport', craft: 'Secure Ear-Hooks · IPX7 Water Resistant', price: '₹ 5,990', was: null,
    tag: 'Sports', badge: null, swatches: ['#B5BAFF', '#9FA1FF', '#AEE2FF'],
    img: 'https://images.pexels.com/photos/4547849/pexels-photo-4547849.jpeg',
    alt: 'Novera Velocity Sport Headphones',
  },
  {
    name: 'Novera Comfort Over-Ear', craft: '50h Playtime · Memory Foam Cushion', price: '₹ 12,990', was: null,
    tag: 'Over-Ear', badge: 'Bestseller', swatches: ['#AEE2FF', '#FFFFFF', '#52567A'],
    img: 'https://images.pexels.com/photos/210926/pexels-photo-210926.jpeg',
    alt: 'Novera Comfort Wireless Headphones',
  },
]

const PROMISES = [
  { title: 'Complimentary express shipping', copy: 'On all Novera audio orders nationwide' },
  { title: '30-day risk-free audio trial', copy: 'Experience the sound at home or return easily' },
  { title: '2-year Novera warranty', copy: 'Full protection against manufacturing defects' },
  { title: 'Custom EQ sound app', copy: 'Personalized acoustic frequency tuning' },
]

export default function Trousseau() {
  const [filter, setFilter] = useState('All')

  const shown = (filter === 'All' ? PIECES : PIECES.filter((p) => p.tag === filter)).slice(0, 5)

  return (
    <section className="section container" id="curated">
      <div className="section-intro" data-reveal>
        <p className="eyebrow">Engineered for Excellence</p>
        <h2 className="section-title">Curated audio gear, crafted for sound</h2>
        <p className="section-intro__copy">
          Precision acoustics, ergonomic comfort, and cutting-edge technology engineered by Novera.
        </p>
      </div>

      {/* ---- occasion filters ---- */}
      <div className="curated__filters" data-reveal role="tablist" aria-label="Filter by occasion">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`curated__filter${filter === f ? ' is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ---- product grid ---- */}
      <div className="curated__grid" data-reveal-child key={filter}>
        {shown.map((p) => (
          <a className="piece" href="#" key={p.name}>
            <div className="piece__media">
              <img src={p.img} alt={p.alt} loading="lazy" />
              {p.badge && <span className="piece__badge">{p.badge}</span>}
              <button
                className="piece__wish"
                type="button"
                aria-label={`Save ${p.name} to wishlist`}
                onClick={(e) => e.preventDefault()}
              >
                <HeartIcon width="16" height="16" />
              </button>
              <span className="piece__quick">Add to bag</span>
            </div>

            <div className="piece__info">
              <p className="piece__name">{p.name}</p>
              <p className="piece__craft">{p.craft}</p>
              <p className="piece__price">
                {p.price}
                {p.was && <span>{p.was}</span>}
              </p>
              <span className="piece__swatches" aria-hidden="true">
                {p.swatches.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="curated__more" data-reveal>
        <a className="btn btn--ghost" href="#">
          View the full edit <ArrowRight width="16" height="16" />
        </a>
      </div>

      {/* ---- promises ---- */}
      <div className="curated__promises" data-reveal-child>
        {PROMISES.map((p) => (
          <div className="promise" key={p.title}>
            <p className="promise__title">{p.title}</p>
            <p className="promise__copy">{p.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
