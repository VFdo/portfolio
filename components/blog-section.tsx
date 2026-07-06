'use client'

import { Separator } from "./ui/separator";

type YearGroup = {
  year: number
  posts: { title: string; href: string }[]
}

const POSTS: YearGroup[] = [
  {
    year: 2026,
    posts: [
      { title: 'User Stories - no fluff.', href: 'https://medium.com/@vidufernando98/user-stories-no-fluff-309f50daae16' },
      { title: 'Thinking in OOP', href: 'https://medium.com/@vidufernando98/thinking-in-oop-d55c6c96db09' },
    ],
  },
  {
    year: 2025,
    posts: [
      { title: 'The Components of Spring Security', href: 'https://medium.com/@vidufernando98/the-components-of-spring-security-0ce83b34a9be' },
    ],
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-10 text-2xl font-medium tracking-tight">Blog</h2>
      <div className="flex flex-col gap-10">
        {POSTS.map((group) => (
          <div key={group.year} className="flex flex-col gap-3 sm:flex-row sm:gap-10">
            <div className="text-sm text-muted-foreground sm:w-16 sm:shrink-0">
              {group.year}
            </div>
            <ul className="flex flex-col gap-2">
              {group.posts.map((post) => (
                <li key={post.title}>
                  <a
                    href={post.href}
                    className="text-foreground underline-offset-4 transition-opacity hover:underline hover:opacity-70"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
    </section>
  )
}
