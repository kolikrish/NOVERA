import { ArrowRight } from './Icons.jsx'

/* Closing invitation — a flush two-cell block in the hero's language:
   one photograph, one solid plum panel. No ornament. */
export default function ShopCta() {
  return (
    <section className="shopcta" aria-label="Shop the collection">
      <div className="shopcta__grid" data-reveal>
        <div className="shopcta__media">
          <img
            src="https://images.pexels.com/photos/20385204/pexels-photo-20385204.jpeg"
            alt="Model in a maroon silk sari with a gold zari border"
            loading="lazy"
          />
        </div>

        <div className="shopcta__panel">
          <p className="shopcta__eyebrow">The Novera Flagship Series</p>

          <h2 className="shopcta__title">
            Experience sound,
            <br />
            <em>redefined.</em>
          </h2>

          <p className="shopcta__copy">
            Crafted to deliver crystal-clear audio, deep bass, lasting comfort, and reliable performance for your everyday life.
          </p>

          <div className="shopcta__actions">
            <a className="btn" href="#categories">
              Explore Novera Collection
            </a>
            <a className="arrow-link shopcta__link" href="#support">
              Book an Audio Consultation <ArrowRight width="16" height="16" />
            </a>
          </div>

          <ul className="shopcta__micro">
            <li>Complimentary express shipping</li>
            <li>30-day risk-free trial</li>
            <li>2-year warranty</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
