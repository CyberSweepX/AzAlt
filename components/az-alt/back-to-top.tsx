'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Run on initial mount in case page is refreshed while scrolled
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Səhifənin əvvəlinə qayıt"
      className={`fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <ArrowUp className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
    </button>
  )
}
