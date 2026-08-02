import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from './Icons.jsx'

const A = {
  meera: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg',
  ananya: 'https://images.pexels.com/photos/17743351/pexels-photo-17743351.jpeg',
  radhika: 'https://images.pexels.com/photos/4547849/pexels-photo-4547849.jpeg',
  sana: 'https://images.pexels.com/photos/8132514/pexels-photo-8132514.jpeg',
  kavya: 'https://images.pexels.com/photos/5269726/pexels-photo-5269726.jpeg',
  nisha: 'https://images.pexels.com/photos/210926/pexels-photo-210926.jpeg',
  divya: 'https://images.pexels.com/photos/8100068/pexels-photo-8100068.jpeg',
  farah: 'https://images.pexels.com/photos/20385204/pexels-photo-20385204.jpeg',
  tara: 'https://images.pexels.com/photos/27507165/pexels-photo-27507165.jpeg',
  ishita: 'https://images.pexels.com/photos/15394136/pexels-photo-15394136.jpeg',
  aditi: 'https://images.pexels.com/photos/8597722/pexels-photo-8597722.jpeg',
  rhea: 'https://images.pexels.com/photos/11945638/pexels-photo-11945638.jpeg',
}

const TESTIMONIALS = [
  {
    name: 'Meera Shah',
    role: 'Mumbai',
    avatar: A.meera,
    label: 'Novera Pro Wireless ANC',
    quote:
      '“The active noise cancellation on flights is unbelievable, and the acoustic clarity makes instrumentals sound like a live studio recording.”',
    bought: [
      { img: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg', name: 'Novera Pro Wireless ANC' },
      { img: 'https://images.pexels.com/photos/210926/pexels-photo-210926.jpeg', name: 'Novera Audio Case' },
    ],
  },
  {
    name: 'Ananya Iyer',
    role: 'Bengaluru',
    avatar: A.ananya,
    label: 'Novera Air Buds Pro',
    quote:
      '“I wear these for 6 hours of work calls every day. Zero ear fatigue, crystal-clear mic isolation, and lightning-fast Bluetooth 5.3 pairing.”',
    bought: [
      { img: 'https://images.unsplash.com/photo-1730343464372-77500ccd307a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D', name: 'Novera Air Buds Pro' },
      { img: 'https://images.pexels.com/photos/8597722/pexels-photo-8597722.jpeg', name: 'Smart Touch Charging Case' },
    ],
  },
  {
    name: 'Radhika Menon',
    role: 'Kochi',
    avatar: A.radhika,
    label: 'Novera Studio Reference 500',
    quote:
      '“As an audiophile, the wide soundstage and precise bass control on these 45mm titanium drivers blew me away. Worth every single rupee.”',
    bought: [
      { img: 'https://images.unsplash.com/photo-1727407204985-7d723b6f14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8', name: 'Novera Studio Reference 500' },
      { img: 'https://images.pexels.com/photos/4547849/pexels-photo-4547849.jpeg', name: 'Hi-Fi DAC Cable' },
    ],
  },
  {
    name: 'Sana Qureshi',
    role: 'Hyderabad',
    avatar: A.sana,
    label: 'Novera Pulse Sport',
    quote:
      '“Sweatproof during intense workouts and never slips. The deep punchy bass really empowers every gym session.”',
    bought: [
      { img: 'https://images.pexels.com/photos/8132514/pexels-photo-8132514.jpeg', name: 'Novera Pulse Sport' },
      { img: 'https://images.pexels.com/photos/4468000/pexels-photo-4468000.jpeg', name: 'Sport Carrying Pouch' },
    ],
  },
  {
    name: 'Kavya Nair',
    role: 'Chennai',
    avatar: A.kavya,
    label: 'Novera Horizon Spatial',
    quote:
      '“Watching movies with 360° spatial audio and head tracking feels like sitting in an IMAX theater. The sound immersion is unreal.”',
    bought: [
      { img: 'https://images.pexels.com/photos/5269726/pexels-photo-5269726.jpeg', name: 'Novera Horizon Spatial' },
      { img: 'https://images.pexels.com/photos/11945638/pexels-photo-11945638.jpeg', name: 'Wireless Charging Pad' },
    ],
  },
  {
    name: 'Nisha Bhatia',
    role: 'Chandigarh',
    avatar: A.nisha,
    label: 'Novera Velvet Comfort',
    quote:
      '“The memory foam ear cushions feel like pillows for your ears. 50-hour battery life means I only charge them once every two weeks!”',
    bought: [
      { img: 'https://images.pexels.com/photos/210926/pexels-photo-210926.jpeg', name: 'Novera Velvet Comfort' },
      { img: 'https://images.pexels.com/photos/7896557/pexels-photo-7896557.jpeg', name: 'Hard Shell Travel Case' },
    ],
  },
  {
    name: 'Divya Reddy',
    role: 'Hyderabad',
    avatar: A.divya,
    label: 'Novera Air Buds Mini',
    quote:
      '“Featherlight earbuds that fit so comfortably you forget you are wearing them. The touch controls are incredibly responsive.”',
    bought: [
      { img: 'https://images.pexels.com/photos/8597722/pexels-photo-8597722.jpeg', name: 'Novera Air Buds Mini' },
      { img: 'https://images.pexels.com/photos/8100068/pexels-photo-8100068.jpeg', name: 'Silicone Protective Sleeve' },
    ],
  },
  {
    name: 'Farah Sheikh',
    role: 'Lucknow',
    avatar: A.farah,
    label: 'Novera Studio Producer Set',
    quote:
      '“Zero latency when monitoring music production. Crystal clear high frequencies without any harshness.”',
    bought: [
      { img: 'https://images.pexels.com/photos/20385204/pexels-photo-20385204.jpeg', name: 'Novera Studio Producer' },
      { img: 'https://images.pexels.com/photos/14212887/pexels-photo-14212887.jpeg', name: 'Braided Audio Cable' },
    ],
  },
  {
    name: 'Tara Deshpande',
    role: 'Pune',
    avatar: A.tara,
    label: 'Novera Clarity ANC',
    quote:
      '“The quad microphone array cuts out background noise completely. People on calls ask what mic setup I am using.”',
    bought: [
      { img: 'https://images.pexels.com/photos/27507165/pexels-photo-27507165.jpeg', name: 'Novera Clarity ANC' },
      { img: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg', name: 'USB-C Fast Charger' },
    ],
  },
  {
    name: 'Ishita Ghosh',
    role: 'Kolkata',
    avatar: A.ishita,
    label: 'Novera Custom IEM',
    quote:
      '“Insane sound separation! Every vocal detail and subtle instrument note comes through with surgical precision.”',
    bought: [
      { img: 'https://images.pexels.com/photos/15394136/pexels-photo-15394136.jpeg', name: 'Novera Custom IEM' },
      { img: 'https://images.pexels.com/photos/7862656/pexels-photo-7862656.jpeg', name: 'Memory Foam Tips Set' },
    ],
  },
  {
    name: 'Aditi Rao',
    role: 'Bengaluru',
    avatar: A.aditi,
    label: 'Novera Pro Wireless ANC',
    quote:
      '“The companion EQ app allowed me to personalize the bass response perfectly to my music taste.”',
    bought: [
      { img: 'https://images.pexels.com/photos/8597722/pexels-photo-8597722.jpeg', name: 'Novera Pro Wireless ANC' },
      { img: 'https://images.pexels.com/photos/8100068/pexels-photo-8100068.jpeg', name: 'Audio Stand Base' },
    ],
  },
  {
    name: 'Rhea Kapoor',
    role: 'Delhi',
    avatar: A.rhea,
    label: 'Novera Air Buds Pro',
    quote:
      '“Compact case, incredible acoustic output, and rapid charging—gives 3 hours of playback in just 10 minutes.”',
    bought: [
      { img: 'https://images.pexels.com/photos/11945638/pexels-photo-11945638.jpeg', name: 'Novera Air Buds Pro' },
      { img: 'https://images.pexels.com/photos/6686276/pexels-photo-6686276.jpeg', name: 'Keyring Lanyard Case' },
    ],
  },
]

function Stars() {
  return (
    <span className="tw-rating__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.7l1.2-6.6L2.5 9.5l6.6-.9Z" />
        </svg>
      ))}
    </span>
  )
}

export default function Testimonials() {
  const trackRef = useRef(null)

  const page = (dir) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="section container tw" id="testimonials">
      <div className="tw__frame" data-reveal>
        <header className="tw__head">
          <p className="tw__title">
            Kind <em>Words.</em>
          </p>

          <div className="tw__meta">
            <div className="tw-rating">
              <Stars />
              <span className="tw-rating__count">4,850+ Reviews</span>
            </div>

            <div className="tw-loved">
              <span className="tw-loved__stack" aria-hidden="true">
                {[A.meera, A.ananya, A.radhika].map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" />
                ))}
              </span>
              <span className="tw-loved__label">
                Loved by 25,000+
                <br />
                music lovers nationwide
              </span>
            </div>

            <div className="carousel-arrows">
              <button type="button" aria-label="Previous testimonials" onClick={() => page(-1)}>
                <ChevronLeft />
              </button>
              <button type="button" aria-label="Next testimonials" onClick={() => page(1)}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </header>

        <div className="tw__grid" ref={trackRef}>
          {TESTIMONIALS.map((t, i) => (
            <article className={`tw-cell${i % 2 ? ' tw-cell--flip' : ''}`} key={t.name}>
              <div className="tw-cell__inner">
                <div className="tw-cell__face tw-cell__face--front">
                  <div className="tw-cell__person">
                    <img src={t.avatar} alt="" loading="lazy" />
                    <div>
                      <p className="tw-cell__name">{t.name}</p>
                      <p className="tw-cell__role">{t.role}</p>
                    </div>
                  </div>

                  <p className="tw-cell__label">{t.label}</p>

                  <blockquote className="tw-cell__quote">{t.quote}</blockquote>
                </div>

                {/* back — the pieces she actually took home */}
                <div className="tw-cell__face tw-cell__face--back">
                  <p className="tw-buys__eyebrow">
                    {t.name.split(' ')[0]} took home
                  </p>

                  <ul className="tw-buys">
                    {t.bought.map((b) => (
                      <li className="tw-buys__item" key={b.name}>
                        <span className="tw-buys__frame">
                          <img src={b.img} alt={b.name} loading="lazy" />
                        </span>
                        <span className="tw-buys__name">{b.name}</span>
                      </li>
                    ))}
                  </ul>

                  <a className="tw-buys__link" href="#">
                    Shop her picks
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
