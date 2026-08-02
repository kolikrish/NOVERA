import { useId, useState } from 'react'
import { PlusIcon, ArrowRight } from './Icons.jsx'

const CATEGORIES = ['All', 'Sound & ANC', 'Battery & Charging', 'Trial & Warranty', 'Shipping & Support']

const FAQS = [
  {
    cat: 'Sound & ANC',
    q: 'What makes Novera audio products unique?',
    a: 'Novera combines studio-fidelity acoustics, custom-tuned 40mm titanium drivers, elegant minimalist design, and cutting-edge active noise cancellation for lasting everyday comfort.',
  },
  {
    cat: 'Sound & ANC',
    q: 'How does Novera Active Noise Cancellation (ANC) work?',
    a: 'Novera utilizes adaptive hybrid dual-microphone arrays that analyze ambient noise in real-time and invert sound waves up to -38dB to isolate your music cleanly without altering audio transparency.',
  },
  {
    cat: 'Sound & ANC',
    q: 'Can I connect Novera headphones to multiple devices simultaneously?',
    a: 'Yes. All Novera Bluetooth 5.3 devices support seamless Multipoint Connectivity, allowing you to pair with your laptop and mobile phone at the same time and switch calls automatically.',
  },
  {
    cat: 'Battery & Charging',
    q: 'What battery life can I expect from Novera devices?',
    a: 'Our flagship over-ear headphones deliver up to 50 hours of continuous playback on a single charge. Novera wireless earbuds offer 8–10 hours per charge, extended up to 42 hours with the smart charging case.',
  },
  {
    cat: 'Battery & Charging',
    q: 'Do Novera earbuds and headphones support fast charging?',
    a: 'Yes! Novera Rapid Charge gives you 3 hours of high-resolution playback from a quick 10-minute USB-C charge.',
  },
  {
    cat: 'Trial & Warranty',
    q: 'What is the Novera 30-day risk-free audio trial?',
    a: 'We want you to experience Novera sound risk-free. If you are not completely thrilled with the audio fidelity within 30 days, return your device for a full refund with free return pickup.',
  },
  {
    cat: 'Trial & Warranty',
    q: 'What is covered under the 2-Year Novera Warranty?',
    a: 'All Novera headphones and earbuds include a 2-Year Manufacturer Warranty covering acoustic driver performance, battery health, wireless connectivity, and electronic components.',
  },
  {
    cat: 'Shipping & Support',
    q: 'How fast is express shipping, and can I track my order?',
    a: 'All orders ship via express courier within 24 hours. Delivery takes 2–4 business days across India, and you will receive real-time SMS and WhatsApp tracking links.',
  },
]

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState(0)
  const uid = useId()

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.cat === activeCategory)

  return (
    <section className="section container faq-section" id="support">
      <div className="section-intro" data-reveal>
        <p className="eyebrow">Help &amp; Support</p>
        <h2 className="section-title">Everything you need to know</h2>
        <p className="section-intro__copy">
          Thoughtful answers for a seamless Novera audio experience.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="faq__filters" data-reveal role="tablist" aria-label="FAQ Categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            className={`faq__filter${activeCategory === cat ? ' is-active' : ''}`}
            onClick={() => {
              setActiveCategory(cat)
              setOpenIndex(0)
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="faq" data-reveal key={activeCategory}>
        {filteredFaqs.map((item, i) => {
          const isOpen = openIndex === i
          const panelId = `${uid}-panel-${i}`
          return (
            <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.q}>
              <button
                className="faq__summary"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span className="faq__no">{String(i + 1).padStart(2, '0')}</span>
                <div className="faq__q-group">
                  <span className="faq__badge">{item.cat}</span>
                  <span className="faq__q">{item.q}</span>
                </div>
                <span className="faq__icon" aria-hidden="true">
                  <PlusIcon />
                </span>
              </button>

              <div className="faq__panel" id={panelId} role="region">
                <div className="faq__panel-inner">
                  <p className="faq__a">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Still Have Questions Contact Card */}
      <div className="faq__help-card" data-reveal>
        <div className="faq__help-content">
          <h3 className="faq__help-title">Still have questions about Novera sound?</h3>
          <p className="faq__help-copy">
            Our audio specialists are available 7 days a week to help you choose the perfect headphone or earbud for your setup.
          </p>
        </div>
        <div className="faq__help-actions">
          <a className="btn" href="mailto:support@novera-audio.com">
            Email Audio Support <ArrowRight width="16" height="16" />
          </a>
          <a className="btn btn--ghost" href="tel:+9118008909000">
            Call +91 1800 890 9000
          </a>
        </div>
      </div>
    </section>
  )
}
