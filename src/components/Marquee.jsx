import { Phool } from './Icons.jsx'

const FEATURES = [
  'Active Noise Cancellation',
  'Custom Acoustic Drivers',
  'Spatial Audio HD',
  '40-Hour Battery Life',
  'Ergonomic Comfort Fit',
  'Lossless Wireless',
  'Deep Studio Bass',
  'Crystal-Clear Calls',
]

function Group({ hidden }) {
  return (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {FEATURES.map((feat) => (
        <span className="marquee__item" key={feat}>
          {feat}
          <Phool size={11} />
        </span>
      ))}
    </div>
  )
}

/* The eight living embroidery schools of Kutch, on a slow loom-like loop. */
export default function Marquee() {
  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  )
}
