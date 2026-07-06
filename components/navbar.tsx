'use client'

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Experience', href: 'https://www.linkedin.com/in/vidu-fernando/'}
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-60"
        >
          Vidu Fernando
        </a>
        <ul className="flex items-center gap-8 text-base font-medium">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.label === 'Experience' ? '_blank' : undefined}
                rel={item.label === 'Experience' ? 'noopener noreferrer' : undefined}
                className="text-foreground transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
