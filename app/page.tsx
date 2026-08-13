'use client'

import { useMemo, useState } from 'react'
import { SearchX, SlidersHorizontal } from 'lucide-react'
import { SiteHeader } from '@/components/az-alt/site-header'
import { Hero } from '@/components/az-alt/hero'
import { FilterSidebar } from '@/components/az-alt/filter-sidebar'
import { SoftwareCard } from '@/components/az-alt/software-card'
import { SiteFooter } from '@/components/az-alt/site-footer'
import { BackToTop } from '@/components/az-alt/back-to-top'
import { softwareList, type Category, type LicenseType } from '@/lib/data'

const tagToCategory: Record<string, Category> = {
  Dizayn: 'dizayn',
  Ofis: 'ofis',
  Montaj: 'video-audio',
  Proqramlaşdırma: 'proqramlasdirma',
  Təhlükəsizlik: 'tehlukesizlik',
}

export default function Page() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)
  const [activeLicenses, setActiveLicenses] = useState<LicenseType[]>([])

  function toggleLicense(license: LicenseType) {
    setActiveLicenses((prev) =>
      prev.includes(license) ? prev.filter((l) => l !== license) : [...prev, license],
    )
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return softwareList.filter((s) => {
      if (activeCategory && s.category !== activeCategory) return false
      if (activeLicenses.length > 0 && !activeLicenses.every((l) => s.licenses.includes(l)))
        return false
      if (q) {
        const haystack = `${s.name} ${s.replaces} ${s.description}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [query, activeCategory, activeLicenses])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader query={query} onQueryChange={setQuery} />
      <Hero onTagClick={(tag) => setActiveCategory(tagToCategory[tag] ?? null)} />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <FilterSidebar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              activeLicenses={activeLicenses}
              onLicenseToggle={toggleLicense}
            />
          </div>

          <section aria-label="Proqram alternativləri">
            <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="size-4" aria-hidden="true" />
              <span>
                <span className="font-semibold text-foreground tabular-nums">{results.length}</span>{' '}
                nəticə tapıldı
              </span>
            </div>

            {results.length > 0 ? (
              <div
                key={`${activeCategory ?? 'all'}-${activeLicenses.join(',')}-${query}`}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                {results.map((software, index) => (
                  <SoftwareCard
                    key={software.id}
                    software={software}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-20 text-center animate-fade-in-up">
                <SearchX className="size-10 text-muted-foreground" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">Nəticə tapılmadı</h3>
                <p className="mt-1 max-w-sm text-pretty text-sm text-muted-foreground">
                  Axtarış sorğunuza və ya seçdiyiniz filtrlərə uyğun proqram tapılmadı. Başqa açar
                  sözlə yoxlayın.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  )
}
