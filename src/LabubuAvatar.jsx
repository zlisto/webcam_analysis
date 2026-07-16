import './LabubuAvatar.css'

function darkenHex(hex, amount = 0.18) {
  const raw = hex.replace('#', '')
  if (raw.length !== 6) return hex
  const num = Number.parseInt(raw, 16)
  const r = Math.max(0, Math.round(((num >> 16) & 255) * (1 - amount)))
  const g = Math.max(0, Math.round(((num >> 8) & 255) * (1 - amount)))
  const b = Math.max(0, Math.round((num & 255) * (1 - amount)))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export default function LabubuAvatar({
  color = '#5c4a43',
  className = '',
  size = 'md',
}) {
  const dark = darkenHex(color)

  return (
    <div
      className={`labubu-avatar labubu-avatar--${size} ${className}`.trim()}
      style={{
        '--labubu-fur': color,
        '--labubu-fur-dark': dark,
      }}
      aria-hidden="true"
    >
      <div className="labubu-figure">
        <div className="labubu-ears">
          <div className="labubu-ear labubu-ear--left">
            <div className="labubu-ear-inner">
              <div className="labubu-ear-core" />
            </div>
          </div>
          <div className="labubu-ear labubu-ear--right">
            <div className="labubu-ear-inner">
              <div className="labubu-ear-core" />
            </div>
          </div>
        </div>

        <div className="labubu-head">
          <div className="labubu-face">
            <div className="labubu-blush labubu-blush--left" />
            <div className="labubu-blush labubu-blush--right" />

            <div className="labubu-eyes">
              <div className="labubu-eye">
                <span className="labubu-glint">✦</span>
                <span className="labubu-spark labubu-spark--right" />
              </div>
              <div className="labubu-eye">
                <span className="labubu-glint">✦</span>
                <span className="labubu-spark labubu-spark--left" />
              </div>
            </div>

            <div className="labubu-nose" />
            <div className="labubu-freckles">
              <span>...</span>
              <span>...</span>
            </div>

            <div className="labubu-smile">
              <div className="labubu-teeth labubu-teeth--top">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={`top-${i}`} className="labubu-tooth" />
                ))}
              </div>
              <div className="labubu-teeth labubu-teeth--bottom">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={`bot-${i}`} className="labubu-tooth" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="labubu-body">
          <div className="labubu-tag">THE</div>
          <div className="labubu-feet">
            <div className="labubu-foot" />
            <div className="labubu-foot" />
          </div>
        </div>

        <div className="labubu-arm labubu-arm--left" />
        <div className="labubu-arm labubu-arm--right" />
      </div>
    </div>
  )
}
