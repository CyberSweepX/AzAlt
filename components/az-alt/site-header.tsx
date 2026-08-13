'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AzAltLogo } from '@/components/az-alt/az-alt-logo'
import { SuggestModal } from '@/components/az-alt/suggest-modal'

interface SiteHeaderProps {
  query: string
  onQueryChange: (value: string) => void
}

export function SiteHeader({ query, onQueryChange }: SiteHeaderProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [suggestOpen, setSuggestOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex shrink-0 items-center cursor-pointer"
          aria-label="AzAlt ana səhifə"
        >
          <AzAltLogo size="md" />
        </a>

        {/* Search */}
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Hansı proqramın pulsuz alternativini axtarırsınız? (məs: Photoshop, Word)..."
            aria-label="Proqram axtar"
            className="h-11 w-full rounded-xl border border-border bg-card pr-16 pl-9 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-3 focus:ring-ring/40 focus:outline-none"
          />
          <kbd className="pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            Ctrl K
          </kbd>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button
            className="h-11 rounded-xl px-3 sm:px-4"
            onClick={() => setSuggestOpen(true)}
          >
            <Plus className="size-4" aria-hidden="true" />
            <span className="hidden lg:inline">Resurs Əlavə Et</span>
            <span className="hidden sm:inline lg:hidden">Əlavə Et</span>
          </Button>
        </div>
      </div>

      <SuggestModal open={suggestOpen} onClose={() => setSuggestOpen(false)} />
    </header>
  )
}
