import { useId, useState } from 'react'
import { PlusIcon } from './Icons.jsx'

const FAQS = [
  {
    q: 'What makes Novera audio products unique?',
    a: 'Novera combines exceptional studio sound, custom-tuned titanium drivers, elegant minimalist design, and cutting-edge active noise cancellation for lasting everyday comfort.',
  },
  {
    q: 'What battery life can I expect from Novera devices?',
    a: 'Our over-ear headphones deliver up to 50 hours of continuous playback on a single charge. Novera earbuds offer 8–10 hours per charge, extended up to 42 hours with the smart wireless charging case.',
  },
  {
    q: 'How does Novera Active Noise Cancellation (ANC) work?',
    a: 'Novera utilizes adaptive hybrid dual-microphone arrays that analyze ambient noise in real-time and invert sound waves up to -38dB to isolate your music cleanly.',
  },
  {
    q: 'What is the Novera 30-day audio trial?',
    a: 'We want you to experience Novera sound risk-free. If you are not completely thrilled with the audio fidelity within 30 days, return your device for a full refund.',
  },
  {
    q: 'What warranty is included with my purchase?',
    a: 'All Novera headphones and earbuds come with a 2-Year Limited Manufacturer Warranty covering driver performance, battery health, and electronic components.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)
  const uid = useId()

  return (
    <section className="section container faq-section" id="support">
      <div className="section-intro" data-reveal>
        <p className="eyebrow">Help &amp; Support</p>
        <h2 className="section-title">Everything you need to know</h2>
        <p className="section-intro__copy">
          Thoughtful answers for a seamless shopping experience.
        </p>
      </div>

      <div className="faq" data-reveal>
        {FAQS.map((item, i) => {
          const isOpen = open === i
          const panelId = `${uid}-panel-${i}`
          return (
            <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.q}>
              <button
                className="faq__summary"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="faq__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq__q">{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  <PlusIcon />
                </span>
              </button>

              {/* 0fr → 1fr gives a smooth height transition without JS measuring */}
              <div className="faq__panel" id={panelId} role="region">
                <div className="faq__panel-inner">
                  <p className="faq__a">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}
