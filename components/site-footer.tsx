import Image from 'next/image'
import {
  siGithub,
  siNextdotjs,
  siTailwindcss,
  siSpringboot,
  siSpringsecurity,
  siGoogle,
  siCursor,
  siV0,
  type SimpleIcon,
  siVercel,
} from 'simple-icons'

// Replace the src paths below with your own logo images.
// Files live in /public/images/social/ — swap them out and keep the same names,
// or update the `src` values here to point at your files.
const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/VFdo/',
    src: '/images/social/github.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vidu-fernando/',
    src: '/images/social/linkedin.svg',
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          {SOCIALS.map(({ label, href, src }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`${label} logo`}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Vidu Fernando. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
