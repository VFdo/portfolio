'use client'

import { useEffect, useState } from 'react'

type TypewriterProps = {
  text: string
  /** Delay before typing starts (ms) */
  startDelay?: number
  /** Time between characters (ms) */
  speed?: number
  className?: string
}

export function Typewriter({
  text,
  startDelay = 400,
  speed = 45,
  className,
}: TypewriterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(startTimer)
  }, [startDelay])

  useEffect(() => {
    if (!started || count >= text.length) return
    const timer = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(timer)
  }, [started, count, text.length, speed])

  const done = count >= text.length

  return (
    <p className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block w-[1px] self-stretch bg-foreground align-middle ${
          done ? 'animate-pulse' : ''
        }`}
        style={{ height: '1em' }}
      />
    </p>
  )
}
