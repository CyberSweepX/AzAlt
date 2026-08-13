'use client'

import { ShieldCheck } from 'lucide-react'

const tags = ['Dizayn', 'Ofis', 'Montaj', 'Proqramlaşdırma', 'Təhlükəsizlik']

interface HeroProps {
  onTagClick: (tag: string) => void
}

export function Hero({ onTagClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Təhlükəsiz və lisenziyalı proqramlar
          </span>

          <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Proqram xərclərini{' '}
            <span className="text-gradient-mauve-pink">AzAlt</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Qrafik dizayn, montaj, ofis və proqramlaşdırma üçün tam pulsuz, açıq mənbəli və
            təhlükəsiz alternativlər kataloqu.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onTagClick(tag)}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-surface-1 hover:bg-accent hover:text-foreground"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
