import type { SimpleIcon } from 'simple-icons'

export function TechIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <span className="group/tech relative inline-flex">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 fill-muted-foreground transition-colors group-hover/tech:fill-foreground"
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
      <span className="sr-only">{icon.title}</span>
      {/* Tooltip shown on hover */}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity duration-150 group-hover/tech:opacity-100"
      >
        {icon.title}
      </span>
    </span>
  )
}
