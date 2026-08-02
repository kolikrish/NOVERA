import { ArrowRight } from './Icons.jsx'

const FEATURED = {
  tag: 'Sound Engineering',
  title: 'The Science of Spatial Audio & Custom Titanium Driver Tuning',
  excerpt:
    'How Novera acoustic engineers balance frequency response curves to achieve studio fidelity, punchy deep bass, and zero audio distortion.',
  img: 'https://images.pexels.com/photos/15394136/pexels-photo-15394136.jpeg',
  alt: 'Novera sound engineering laboratory testing setup',
  author: 'Marcus Vance',
  role: 'Head of Acoustic Engineering · Novera Sound Lab',
  avatar: 'https://images.pexels.com/photos/8100068/pexels-photo-8100068.jpeg',
}

const POSTS = [
  {
    tag: 'Audio Tech',
    title: 'Active Noise Cancellation explained: Hybrid vs Feedforward',
    img: 'https://images.pexels.com/photos/12266869/pexels-photo-12266869.jpeg',
    alt: 'Novera ANC headphone sensor breakdown',
  },
  {
    tag: 'Buying Guide',
    title: 'How to choose between Studio Headphones and Wireless Earbuds',
    img: 'https://images.unsplash.com/photo-1727407204985-7d723b6f14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    alt: 'Novera Over-Ear Headphones vs True Wireless Earbuds',
  },
  {
    tag: 'Acoustic Guide',
    title: 'Optimizing your EQ settings for lossless high-resolution audio',
    img: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg',
    alt: 'Novera Sound App Equalizer Interface',
  },
]

export default function Journal() {
  return (
    <section className="section container journal" id="journal">
      <div className="journal__head" data-reveal>
        <p className="eyebrow">The Novera Sound Journal</p>
        <h2 className="section-title">
          Insights into sound engineering
          <br />
          &amp; acoustic innovation
        </h2>
      </div>

      {/* ---- featured post ---- */}
      <a className="journal-feature" href="#" data-reveal>
        <div className="journal-feature__media">
          <img src={FEATURED.img} alt={FEATURED.alt} loading="lazy" />
        </div>

        <div className="journal-feature__body">
          <span className="journal-pill journal-pill--dark journal-feature__tag">{FEATURED.tag}</span>
          <h3 className="journal-feature__title">{FEATURED.title}</h3>
          <p className="journal-feature__excerpt">{FEATURED.excerpt}</p>

          <span className="arrow-link journal-feature__link">
            Read the story <ArrowRight width="16" height="16" />
          </span>

          <div className="journal-feature__foot">
            <div className="journal-author">
              <img src={FEATURED.avatar} alt="" loading="lazy" />
              <div>
                <p className="journal-author__name">{FEATURED.author}</p>
                <p className="journal-author__role">{FEATURED.role}</p>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* ---- three recent posts ---- */}
      <div className="journal-grid" data-reveal-child>
        {POSTS.map((post) => (
          <a className="journal-card" href="#" key={post.title}>
            <div className="journal-card__media">
              <img src={post.img} alt={post.alt} loading="lazy" />
              <span className="journal-pill">{post.tag}</span>
              <span className="journal-card__arrow" aria-hidden="true">
                <ArrowRight width="15" height="15" />
              </span>
            </div>
            <h3 className="journal-card__title">{post.title}</h3>
          </a>
        ))}
      </div>
    </section>
  )
}
