import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'

const CATEGORIES = ['All Stories', 'Sound Engineering', 'Audio Tech', 'Buying Guide', 'Acoustic Guide']

const FEATURED = {
  cat: 'Sound Engineering',
  tag: 'Sound Engineering',
  date: 'Aug 2026',
  readTime: '6 min read',
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
    cat: 'Audio Tech',
    tag: 'Audio Tech',
    date: 'Jul 2026',
    readTime: '4 min read',
    author: 'Dr. Elena Rostova',
    title: 'Active Noise Cancellation explained: Hybrid vs Feedforward',
    img: 'https://images.pexels.com/photos/12266869/pexels-photo-12266869.jpeg',
    alt: 'Novera ANC headphone sensor breakdown',
  },
  {
    cat: 'Buying Guide',
    tag: 'Buying Guide',
    date: 'Jul 2026',
    readTime: '5 min read',
    author: 'Julian Thorne',
    title: 'How to choose between Studio Headphones and Wireless Earbuds',
    img: 'https://images.unsplash.com/photo-1727407204985-7d723b6f14c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    alt: 'Novera Over-Ear Headphones vs True Wireless Earbuds',
  },
  {
    cat: 'Acoustic Guide',
    tag: 'Acoustic Guide',
    date: 'Jun 2026',
    readTime: '3 min read',
    author: 'Siddharth Mehta',
    title: 'Optimizing your EQ settings for lossless high-resolution audio',
    img: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg',
    alt: 'Novera Sound App Equalizer Interface',
  },
]

export default function Journal() {
  const [activeTab, setActiveTab] = useState('All Stories')
  const [subscribed, setSubscribed] = useState(false)

  const filteredPosts = activeTab === 'All Stories'
    ? POSTS
    : POSTS.filter((p) => p.cat === activeTab)

  const showFeatured = activeTab === 'All Stories' || activeTab === 'Sound Engineering'

  return (
    <section className="section container journal" id="journal">
      <div className="journal__head" data-reveal>
        <p className="eyebrow">The Novera Sound Journal</p>
        <h2 className="section-title">
          Insights into sound engineering
          <br />
          &amp; acoustic innovation
        </h2>
        <p className="section-intro__copy">
          Deep dives into driver physics, active noise isolation tech, and high-fidelity tuning.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="journal__filters" data-reveal role="tablist">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeTab === cat}
            className={`journal__filter${activeTab === cat ? ' is-active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {showFeatured && (
        <a className="journal-feature" href="#" data-reveal key="featured-post">
          <div className="journal-feature__media">
            <img src={FEATURED.img} alt={FEATURED.alt} loading="lazy" />
            <span className="journal-pill journal-pill--glass">{FEATURED.readTime}</span>
          </div>

          <div className="journal-feature__body">
            <div className="journal-feature__meta">
              <span className="journal-pill journal-pill--dark">{FEATURED.tag}</span>
              <span className="journal-feature__date">{FEATURED.date}</span>
            </div>

            <h3 className="journal-feature__title">{FEATURED.title}</h3>
            <p className="journal-feature__excerpt">{FEATURED.excerpt}</p>

            <span className="arrow-link journal-feature__link">
              Read the story <ArrowRight width="16" height="16" />
            </span>

            <div className="journal-feature__foot">
              <div className="journal-author">
                <img src={FEATURED.avatar} alt={FEATURED.author} loading="lazy" />
                <div>
                  <p className="journal-author__name">{FEATURED.author}</p>
                  <p className="journal-author__role">{FEATURED.role}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      )}

      {/* Recent Posts Grid */}
      <div className="journal-grid" data-reveal-child key={activeTab}>
        {filteredPosts.map((post) => (
          <a className="journal-card" href="#" key={post.title}>
            <div className="journal-card__media">
              <img src={post.img} alt={post.alt} loading="lazy" />
              <span className="journal-pill">{post.tag}</span>
              <span className="journal-card__time">{post.readTime}</span>
              <span className="journal-card__arrow" aria-hidden="true">
                <ArrowRight width="15" height="15" />
              </span>
            </div>
            <div className="journal-card__info">
              <span className="journal-card__by">{post.author} · {post.date}</span>
              <h3 className="journal-card__title">{post.title}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Journal Newsletter Subscription Bar */}
      <div className="journal__newsletter" data-reveal>
        <div className="journal__news-text">
          <h4>Subscribe to Novera Sound Insights</h4>
          <p>Get bi-weekly articles on acoustic tuning, ANC engineering, and lossless audio tech delivered to your inbox.</p>
        </div>
        {subscribed ? (
          <p className="journal__news-success">✓ You are subscribed to Novera Sound Journal!</p>
        ) : (
          <form
            className="journal__news-form"
            onSubmit={(e) => {
              e.preventDefault()
              setSubscribed(true)
            }}
          >
            <input type="email" required placeholder="Enter your email" aria-label="Email address for journal" />
            <button type="submit" className="btn btn--small">
              Subscribe <ArrowRight width="14" height="14" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
