import { useState } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
]

function NavLinks({ onNavigate, className }) {
  return (
    <div className={className}>
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className="sketch-nav-link" onClick={onNavigate}>
          {item.label}
        </a>
      ))}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed z-50 w-full border-b-2 border-blush-400/80 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
        <a href="#top" className="font-display text-4xl font-bold leading-none text-ink">
          Muhammad Rayan Rao
        </a>
        <button
          type="button"
          className="sketch-btn md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <NavLinks
          className="hidden flex-wrap justify-end gap-2 md:flex"
          onNavigate={() => setOpen(false)}
        />
      </div>
      {open && (
        <div id="site-nav" className="mx-auto max-w-6xl px-5 pb-4 md:hidden">
          <NavLinks className="flex flex-wrap gap-2" onNavigate={() => setOpen(false)} />
        </div>
      )}
    </nav>
  )
}

export default Navbar