import { useState } from 'react'
import { ChevronLeft, ChevronRight } from './Icons.jsx'

/* Full-bleed lookbook slides with shoppable hotspots pinned to each look. */
const LOOKS = [
  {
    img: 'https://media.istockphoto.com/id/1646220029/photo/young-woman-with-headphones-looking-at-camera-smiling-png-isolated-white-background-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=7X3lxYH8NZnhgj1hcIp7jDc_68hQY4mmZ7NtYcEWONM=',
    alt: 'Contemporary portrait styling with modern artisanal accessories',
    focus: '50% 20%',
    hotspots: [
      {
        x: 53,
        y: 52,
        name: 'Artisan Embroidered Top',
        price: '₹ 8,400',
        thumb: 'https://media.istockphoto.com/id/1646220029/photo/young-woman-with-headphones-looking-at-camera-smiling-png-isolated-white-background-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=7X3lxYH8NZnhgj1hcIp7jDc_68hQY4mmZ7NtYcEWONM=',
      },
      {
        x: 46,
        y: 27,
        name: 'Handcrafted Heritage Headphones',
        price: '₹ 6,800',
        thumb: 'https://media.istockphoto.com/id/1646220029/photo/young-woman-with-headphones-looking-at-camera-smiling-png-isolated-white-background-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=7X3lxYH8NZnhgj1hcIp7jDc_68hQY4mmZ7NtYcEWONM=',
      },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1727407204985-7d723b6f14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    alt: 'Festive couture ensemble with rich hand-woven detailing',
    focus: '50% 15%',
    hotspots: [
      {
        x: 39,
        y: 62,
        name: 'Festive Silk Lehenga',
        price: '₹ 48,000',
        thumb: 'https://images.unsplash.com/photo-1727407204985-7d723b6f14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
      },
      {
        x: 49,
        y: 40,
        name: 'Zari Embroidered Dupatta',
        price: '₹ 12,500',
        thumb: 'https://images.unsplash.com/photo-1727407204985-7d723b6f14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
      },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1730343464372-77500ccd307a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    alt: 'Elegantly draped artisan ensemble with hand-stitched motifs',
    focus: '50% 15%',
    hotspots: [
      {
        x: 47,
        y: 48,
        name: 'Handloom Chikankari Set',
        price: '₹ 16,800',
        thumb: 'https://images.unsplash.com/photo-1730343464372-77500ccd307a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      },
      {
        x: 56,
        y: 62,
        name: 'Gota Border Stole',
        price: '₹ 8,400',
        thumb: 'https://images.unsplash.com/photo-1730343464372-77500ccd307a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      },
    ],
  },
]

export default function ShopTheLooks() {
  const [index, setIndex] = useState(0)
  const [openSpot, setOpenSpot] = useState(0)

  const go = (dir) => {
    setIndex((i) => (i + dir + LOOKS.length) % LOOKS.length)
    setOpenSpot(0)
  }

  const look = LOOKS[index]

  return (
    <section className="looks" aria-label="Shop Novera Audio Sets">
      <div className="section-intro" data-reveal>
        <p className="eyebrow">Curated Audio Sets</p>
        <h2 className="section-title">Shop Novera Audio Bundles</h2>
        <p className="section-intro__copy">
          Complete listening setups curated by Novera sound engineers. Tap a marker to inspect component specs.
        </p>
      </div>

      <div className="looks__stage" data-reveal>
        {LOOKS.map((l, i) => (
          <img
            key={l.img}
            className={`looks__slide${i === index ? ' is-active' : ''}`}
            src={l.img}
            alt={l.alt}
            style={{ objectPosition: l.focus }}
            loading={i === 0 ? 'eager' : 'lazy'}
            aria-hidden={i !== index}
          />
        ))}
        <span className="looks__scrim" aria-hidden="true" />

        {/* shoppable hotspots for the active look */}
        {look.hotspots.map((h, i) => (
          <div
            className={`looks-spot${openSpot === i ? ' is-open' : ''}`}
            key={h.name}
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          >
            <button
              className="looks-spot__dot"
              type="button"
              aria-label={`Show ${h.name}`}
              aria-expanded={openSpot === i}
              onClick={() => setOpenSpot(openSpot === i ? -1 : i)}
            />
            <div className="looks-spot__card">
              <img src={h.thumb} alt="" loading="lazy" />
              <div>
                <p className="looks-spot__name">{h.name}</p>
                <p className="looks-spot__price">{h.price}</p>
                <a className="looks-spot__link" href="#">
                  Quick view
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* control block */}
        <div className="looks__controls">
          <p className="looks__label">Novera Audio Showcase</p>
          <div className="looks__nav">
            <button type="button" onClick={() => go(-1)} aria-label="Previous look">
              <ChevronLeft />
            </button>
            <span className="looks__count">
              {index + 1} / {LOOKS.length}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="Next look">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
