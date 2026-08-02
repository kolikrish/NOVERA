import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { ArrowRight } from './Icons.jsx'

/* This Week's Index — products as a typographic list, not cards.
   Hovering a line dims the rest and pulls a preview plate along under the
   cursor. Every other product section on this page is image-first; this one
   is type-first, which is the whole point of putting it here. */

const INDEX = [
  {
    name: 'Novera ANC Studio Edition',
    craft: 'Hybrid ANC · Bluetooth 5.3',
    maker: 'Acoustic Lab, Munich',
    days: '40 hours battery life',
    price: '₹ 18,990',
    img: 'https://images.pexels.com/photos/27507165/pexels-photo-27507165.jpeg',
    alt: 'Novera ANC Studio Edition Headphones',
  },
  {
    name: 'Novera Air Buds Sound Engine',
    craft: 'Custom Dynamic Driver',
    maker: 'Audio Engineering Team',
    days: '42 hours battery life',
    price: '₹ 9,990',
    img: 'https://images.pexels.com/photos/4547849/pexels-photo-4547849.jpeg',
    alt: 'Novera Air Buds Sound Engine',
  },
  {
    name: 'Novera Audiophile Reference 500',
    craft: 'Hi-Res Titanium Monitor',
    maker: 'Master Sound Lab',
    days: 'Studio Calibrated',
    price: '₹ 24,500',
    img: 'https://images.unsplash.com/photo-1727407204985-7d723b6f14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    alt: 'Novera Audiophile Reference 500',
  },
  {
    name: 'Novera Spatial Surround ANC',
    craft: '360° Spatial Audio',
    maker: 'Acoustic R&D Lab',
    days: '35 hours battery life',
    price: '₹ 16,900',
    img: 'https://images.unsplash.com/photo-1730343464372-77500ccd307a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    alt: 'Novera Spatial Surround ANC Headphones',
  },
  {
    name: 'Novera Sport Earbuds IPX7',
    craft: 'Sweatproof Ergonomic Fit',
    maker: 'Performance Audio Team',
    days: '24 hours battery life',
    price: '₹ 6,490',
    img: 'https://images.pexels.com/photos/8132514/pexels-photo-8132514.jpeg',
    alt: 'Novera Sport Earbuds IPX7',
  },
  {
    name: 'Novera Hi-Fi USB-C DAC',
    craft: '32-Bit / 384kHz DAC',
    maker: 'Precision Electronics',
    days: 'Ultra-Low Jitter',
    price: '₹ 2,990',
    img: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg',
    alt: 'Novera Hi-Fi USB-C DAC Cable',
  },
]

export default function Ledger() {
  const root = useRef(null)
  const list = useRef(null)
  const preview = useRef(null)
  const xTo = useRef(null)
  const yTo = useRef(null)

  // Last cursor position in viewport coordinates. The plate is positioned in
  // section coordinates, so scrolling has to re-derive one from the other.
  const cursor = useRef(null)

  const [active, setActive] = useState(-1)
  // The plate only makes sense when a pointer is driving it — keyboard focus
  // gets the dimming and the row highlight, but no plate parked at 0,0.
  const [pointing, setPointing] = useState(false)

  // GSAP quickTo setters handle smooth movement on mousemove. On scroll, a
  // passive listener recalculates cursor position against the root element.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (!preview.current) return
        xTo.current = gsap.quickTo(preview.current, 'x', { duration: 0.35, ease: 'power2.out' })
        yTo.current = gsap.quickTo(preview.current, 'y', { duration: 0.35, ease: 'power2.out' })

        // The cursor can sit still while the page moves under it: re-test what
        // is beneath it on every scroll frame and re-pin the plate, or it
        // drifts off with the section and the wrong row stays lit.
        let queued = false

        const resync = () => {
          queued = false
          const at = cursor.current
          if (!at || !xTo.current) return

          const under = document.elementFromPoint(at.x, at.y)
          const row = under?.closest?.('.ledger-row')

          if (!row || !list.current?.contains(row)) {
            setActive(-1)
            setPointing(false)
            cursor.current = null
            return
          }

          const r = root.current.getBoundingClientRect()
          // second arg makes quickTo snap rather than ease — the plate must
          // stay welded to the cursor while the page moves
          xTo.current(at.x - r.left, at.x - r.left)
          yTo.current(at.y - r.top, at.y - r.top)
          setActive(Number(row.dataset.index))
        }

        const onScroll = () => {
          if (queued || !cursor.current) return
          queued = true
          requestAnimationFrame(resync)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
      })
    },
    { scope: root },
  )

  const track = (e) => {
    if (!xTo.current) return
    cursor.current = { x: e.clientX, y: e.clientY }
    const r = root.current.getBoundingClientRect()
    xTo.current(e.clientX - r.left)
    yTo.current(e.clientY - r.top)
  }

  const enter = (i, e) => {
    // Jump the plate to the cursor on first entry, or it flies in from 0,0.
    if (!pointing && xTo.current) {
      const r = root.current.getBoundingClientRect()
      gsap.set(preview.current, { x: e.clientX - r.left, y: e.clientY - r.top })
    }
    cursor.current = { x: e.clientX, y: e.clientY }
    setPointing(true)
    setActive(i)
  }

  const leave = () => {
    cursor.current = null
    setActive(-1)
    setPointing(false)
  }

  return (
    <section
      className={
        'section container ledger' +
        (active > -1 ? ' is-browsing' : '') +
        (pointing && active > -1 ? ' is-pointing' : '')
      }
      id="index"
      ref={root}
    >
      <div className="section-head" data-reveal>
        <div className="section-head__titles">
          <p className="eyebrow">Fresh from the acoustic lab</p>
          <h2 className="section-title">
            This week&apos;s audio <em>index</em>
          </h2>
        </div>

        <p className="ledger__note">
          Six featured Novera audio products, listed with custom driver specs, sound tuning labs, and battery performance.
        </p>
      </div>

      {/* The plate rides the cursor. GSAP owns the outer element's transform,
          so the scale-in lives on an inner wrapper — a CSS `scale` on the same
          element composites after `transform` and would drag the position with
          it. All six images are preloaded; one is faded in. */}
      <div className="ledger__preview" ref={preview} aria-hidden="true">
        <div className="ledger__plate">
          {INDEX.map((p, i) => (
            <img
              key={p.name}
              src={p.img}
              alt=""
              loading="lazy"
              className={active === i ? 'is-shown' : undefined}
            />
          ))}
        </div>
      </div>

      {/* Tracking lives on the list, not the section: leaving the list for the
          heading or the button below has to clear the plate too. */}
      <ol
        className="ledger__list"
        data-reveal-child
        ref={list}
        onPointerMove={track}
        onPointerLeave={leave}
      >
        {INDEX.map((p, i) => (
          <li key={p.name}>
            <a
              className={`ledger-row${active === i ? ' is-active' : ''}`}
              href="#"
              data-index={i}
              onPointerEnter={(e) => enter(i, e)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(-1)}
            >
              <span className="ledger-row__no">{String(i + 1).padStart(2, '0')}</span>

              {/* stands in for the cursor plate where there is no hover */}
              <span className="ledger-row__thumb">
                <img src={p.img} alt={p.alt} loading="lazy" />
              </span>

              <span className="ledger-row__name">{p.name}</span>
              <span className="ledger-row__craft">{p.craft}</span>

              <span className="ledger-row__maker">
                {p.maker}
                <em>{p.days}</em>
              </span>

              <span className="ledger-row__price">{p.price}</span>

              <span className="ledger-row__go" aria-hidden="true">
                <ArrowRight width="16" height="16" />
              </span>
            </a>
          </li>
        ))}
      </ol>

      <div className="ledger__more" data-reveal>
        <a className="btn btn--ghost" href="#">
          Browse everything new <ArrowRight width="16" height="16" />
        </a>
      </div>
    </section>
  )
}
