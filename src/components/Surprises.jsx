import { useEffect, useState } from "react"

const Star = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="m12 3 2.2 6.2L21 10l-5 4.2L17.4 21 12 17.4 6.6 21 8 14.2 3 10l6.8-.8Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
)

const doodles = [
  { top: "42%", right: "3%", delay: "1.2s", rotate: "10deg", kind: "star" },
  { top: "68%", left: "6%", delay: "0.6s", rotate: "8deg", kind: "star" }
]

const whispers = [
  "hi, you found the doodle",
  "onepiece is real",
  "still producing, still shipping",
  "hehe, you found me",
  "rayan says hello"
]

let whisperIndex = 0

function Surprises() {
  const [bits, setBits] = useState([])
  const [sparks, setSparks] = useState([])
  const [whisper, setWhisper] = useState(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return undefined

    const onBurst = (event) => {
      const x = event.detail?.x ?? window.innerWidth / 2
      const y = event.detail?.y ?? 180
      const stamp = Date.now()
      const next = Array.from({ length: 12 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 12 + Math.random() * 0.4
        const distance = 50 + Math.random() * 70
        return {
          id: `${stamp}-${index}`,
          x,
          y,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance - 20,
          kind: "star"
        }
      })
      setBits((current) => [...current, ...next].slice(-36))
      setWhisper({
        id: stamp,
        x,
        y: y - 28,
        text: whispers[whisperIndex % whispers.length]
      })
      whisperIndex += 1
      window.setTimeout(() => {
        setBits((current) => current.filter((bit) => !String(bit.id).startsWith(String(stamp))))
        setWhisper((current) => (current?.id === stamp ? null : current))
      }, 950)
    }

    let last = 0
    const onMove = (event) => {
      const now = Date.now()
      if (now - last < 160) return
      last = now
      const id = now
      setSparks((current) => [...current, { id, x: event.clientX, y: event.clientY }].slice(-10))
      window.setTimeout(() => {
        setSparks((current) => current.filter((spark) => spark.id !== id))
      }, 700)
    }

    window.addEventListener("sketch-burst", onBurst)
    window.addEventListener("pointermove", onMove)
    return () => {
      window.removeEventListener("sketch-burst", onBurst)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-20 hidden md:block" aria-hidden="true">
        {doodles.map((doodle) => (
          <span
            key={`${doodle.top}-${doodle.kind}`}
            className="doodle text-blush-600"
            style={{
              top: doodle.top,
              left: doodle.left,
              right: doodle.right,
              animationDelay: doodle.delay,
              "--r": doodle.rotate
            }}
          >
            <Star />
          </span>
        ))}
      </div>
      {bits.map((bit) => (
        <span
          key={bit.id}
          className="burst-bit text-blush-700"
          style={{ left: bit.x, top: bit.y, "--dx": `${bit.dx}px`, "--dy": `${bit.dy}px` }}
        >
          <Star className="h-5 w-5" />
        </span>
      ))}

      {whisper && (
        <span className="whisper" style={{ left: whisper.x, top: whisper.y }}>
          {whisper.text}
        </span>
      )}

      {sparks.map((spark) => (
        <span key={spark.id} className="spark" style={{ left: spark.x, top: spark.y }} />
      ))}

    </>
  )
}

export default Surprises
