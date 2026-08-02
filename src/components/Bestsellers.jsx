import { useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, HeartIcon } from './Icons.jsx'

/* Most Loved — the curated grid's card, re-cut as a ranked rail.
   Cards keep the .piece footprint (3/4 media, serif name, swatches); what
   changes is the reading order: a running-stitch rule threads the rank
   numerals together and each piece carries how many were taken home. */

const BEST = [
  {
    rank: '01',
    name: 'Novera Pro Wireless ANC',
    craft: 'Flagship Over-Ear · Active Noise Cancelling',
    price: '₹ 18,990',
    was: '₹ 21,990',
    sold: 842,
    note: 'Voted #1 Premium ANC Headphones',
    swatches: ['#9FA1FF', '#B5BAFF', '#AEE2FF'],
    img: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg',
    alt: 'Novera Pro Wireless ANC Headphones in Matte Finish',
  },
  {
    rank: '02',
    name: 'Novera Air Buds Pro',
    craft: 'True Wireless · Smart Touch Case',
    price: '₹ 9,990',
    was: null,
    sold: 720,
    note: '42-hour total battery + Spatial Audio',
    swatches: ['#B5BAFF', '#AEE2FF', '#181A38'],
    img: 'https://images.pexels.com/photos/210926/pexels-photo-210926.jpeg',
    alt: 'Novera Air Buds Pro with sleek wireless charging case',
  },
  {
    rank: '03',
    name: 'Novera Studio Reference 500',
    craft: 'Audiophile Monitor · 45mm Titanium Drivers',
    price: '₹ 24,500',
    was: '₹ 27,900',
    sold: 615,
    note: 'Lossless Hi-Res Studio Fidelity',
    swatches: ['#AEE2FF', '#9FA1FF', '#FFFFFF'],
    img: 'https://images.pexels.com/photos/17743351/pexels-photo-17743351.jpeg',
    alt: 'Novera Studio Reference Monitor Headphones',
  },
  {
    rank: '04',
    name: 'Novera Horizon Spatial',
    craft: 'Spatial Audio · Head Tracking',
    price: '₹ 16,900',
    was: '₹ 18,500',
    sold: 580,
    note: 'Immersive 360° Soundstage',
    swatches: ['#9FA1FF', '#181A38', '#B5BAFF'],
    img: 'https://images.pexels.com/photos/20385204/pexels-photo-20385204.jpeg',
    alt: 'Novera Horizon Spatial Wireless Headphones',
  },
  {
    rank: '05',
    name: 'Novera Pulse Sport',
    craft: 'IPX7 Sweatproof · Ergonomic Ear-Hooks',
    price: '₹ 6,490',
    was: '₹ 7,800',
    sold: 490,
    note: 'Deep bass performance for workout sessions',
    swatches: ['#AEE2FF', '#B5BAFF', '#52567A'],
    img: 'https://images.pexels.com/photos/11945638/pexels-photo-11945638.jpeg',
    alt: 'Novera Pulse Sport Wireless Earbuds',
  },
  {
    rank: '06',
    name: 'Novera Mini Wireless',
    craft: 'Ultra-Compact · Featherlight Fit',
    price: '₹ 4,990',
    was: null,
    sold: 430,
    note: 'Invisible ergonomic comfort for everyday life',
    swatches: ['#9FA1FF', '#AEE2FF', '#B5BAFF'],
    img: 'https://images.pexels.com/photos/8132514/pexels-photo-8132514.jpeg',
    alt: 'Novera Mini Wireless Earbuds',
  },
  {
    rank: '07',
    name: 'Novera Clarity ANC',
    craft: 'Over-Ear · Quad Microphone Array',
    price: '₹ 14,990',
    was: null,
    sold: 390,
    note: 'Crystal-clear call isolation technology',
    swatches: ['#B5BAFF', '#9FA1FF', '#181A38'],
    img: 'https://images.pexels.com/photos/4547849/pexels-photo-4547849.jpeg',
    alt: 'Novera Clarity ANC Headphones',
  },
  {
    rank: '08',
    name: 'Novera Velvet Comfort',
    craft: 'Memory Foam Cushions · 50hr Playtime',
    price: '₹ 12,990',
    was: null,
    sold: 340,
    note: 'Engineered for extended listening sessions',
    swatches: ['#181A38', '#9FA1FF', '#AEE2FF'],
    img: 'https://images.pexels.com/photos/27507165/pexels-photo-27507165.jpeg',
    alt: 'Novera Velvet Comfort Over-Ear Headphones',
  },
  {
    rank: '09',
    name: 'Novera Pure Bass Edition',
    craft: 'Dual Dynamic Drivers · Bass Boost',
    price: '₹ 7,990',
    was: null,
    sold: 310,
    note: 'Punchy low-frequency resonance',
    swatches: ['#AEE2FF', '#B5BAFF', '#9FA1FF'],
    img: 'https://images.pexels.com/photos/8597722/pexels-photo-8597722.jpeg',
    alt: 'Novera Pure Bass Wireless Earbuds',
  },
  {
    rank: '10',
    name: 'Novera Custom IEM',
    craft: 'In-Ear Monitor · Quad Armature',
    price: '₹ 11,490',
    was: '₹ 13,600',
    sold: 275,
    note: 'Precise acoustic frequency separation',
    swatches: ['#FFFFFF', '#AEE2FF', '#9FA1FF'],
    img: 'https://images.pexels.com/photos/5269726/pexels-photo-5269726.jpeg',
    alt: 'Novera Custom In-Ear Monitors',
  },
  {
    rank: '11',
    name: 'Novera Studio Stream',
    craft: 'Low-Latency Wireless · 15ms Transceiver',
    price: '₹ 21,990',
    was: null,
    sold: 240,
    note: 'Designed for music creators & streamers',
    swatches: ['#B5BAFF', '#181A38', '#9FA1FF'],
    img: 'https://images.pexels.com/photos/14212887/pexels-photo-14212887.jpeg',
    alt: 'Novera Studio Stream Headphones',
  },
  {
    rank: '12',
    name: 'Novera Audio DAC Cable',
    craft: '32-Bit / 384kHz USB-C Hi-Fi DAC',
    price: '₹ 2,990',
    was: null,
    sold: 195,
    note: 'Lossless audio signal converter',
    swatches: ['#9FA1FF', '#52567A', '#AEE2FF'],
    img: 'https://images.pexels.com/photos/15394136/pexels-photo-15394136.jpeg',
    alt: 'Novera High-Resolution DAC Adapter',
  },
]

const TOP = BEST[0].sold

export default function Bestsellers() {
  const railRef = useRef(null)

  // Scroll one full page — however many cards currently fit.
  const page = (dir) => {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({ left: dir * rail.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="section container best" id="bestsellers">
      <div className="section-head" data-reveal>
        <div className="section-head__titles">
          <p className="eyebrow">Top Performing Audio</p>
          <h2 className="section-title">
            Bestsellers, ranked by <em>listeners</em>
          </h2>
        </div>

        <div className="section-head__aside">
          <p className="best__legend">
            Ordered by Novera audio devices chosen by music lovers over the last six months.
          </p>
          <div className="carousel-arrows">
            <button type="button" aria-label="Previous bestsellers" onClick={() => page(-1)}>
              <ChevronLeft />
            </button>
            <button type="button" aria-label="Next bestsellers" onClick={() => page(1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="best__rail" ref={railRef} data-reveal-child>
        {BEST.map((p) => (
          <a className="best-card" href="#" key={p.name}>
            {/* rank numeral, threaded to the next card by a running stitch */}
            <span className="best-card__rank">
              <span className="best-card__num">{p.rank}</span>
              <span className="best-card__thread" aria-hidden="true" />
            </span>

            <div className="best-card__media">
              <img src={p.img} alt={p.alt} loading="lazy" />
              <button
                className="best-card__wish"
                type="button"
                aria-label={`Save ${p.name} to wishlist`}
                onClick={(e) => e.preventDefault()}
              >
                <HeartIcon width="16" height="16" />
              </button>
              <span className="best-card__note">{p.note}</span>
            </div>

            <div className="best-card__info">
              <p className="best-card__name">{p.name}</p>
              <p className="best-card__craft">{p.craft}</p>

              <p className="best-card__price">
                {p.price}
                {p.was && <span>{p.was}</span>}
              </p>

              {/* how far this piece sits from the number one spot */}
              <span
                className="best-card__meter"
                style={{ '--fill': `${Math.round((p.sold / TOP) * 100)}%` }}
                aria-hidden="true"
              />
              <p className="best-card__sold">
                <strong>{p.sold}</strong> taken home
              </p>

              <span className="best-card__swatches" aria-hidden="true">
                {p.swatches.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="best__more" data-reveal>
        <a className="arrow-link" href="#">
          See the full ranking <ArrowRight width="16" height="16" />
        </a>
      </div>
    </section>
  )
}
