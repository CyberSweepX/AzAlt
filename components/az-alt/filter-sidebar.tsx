'use client'

import { Check, LayoutGrid } from 'lucide-react'
import {
  categories,
  licenseLabels,
  type Category,
  type LicenseType,
} from '@/lib/data'
import { cn } from '@/lib/utils'

const licenseOrder: LicenseType[] = ['open-source', 'free', 'web-based']

interface FilterSidebarProps {
  activeCategory: Category | null
  onCategoryChange: (category: Category | null) => void
  activeLicenses: LicenseType[]
  onLicenseToggle: (license: LicenseType) => void
}

export function FilterSidebar({
  activeCategory,
  onCategoryChange,
  activeLicenses,
  onLicenseToggle,
}: FilterSidebarProps) {
  return (
    <aside className="flex flex-col gap-6">
      {/* Categories */}
      <div className="rounded-2xl border border-border bg-card p-2">
        <h2 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Kateqoriyalar
        </h2>
        <ul className="flex flex-col gap-0.5">
          <li>
            <button
              type="button"
              onClick={() => onCategoryChange(null)}
              className={cn(
                'flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                activeCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <LayoutGrid className="size-4" aria-hidden="true" />
              Bütün Proqramlar
            </button>
          </li>
          {categories.map((cat) => {
            const Icon = cat.icon
            const active = activeCategory === cat.id
            return (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(cat.id)}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {cat.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Licenses */}
      <div className="rounded-2xl border border-border bg-card p-2">
        <h2 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Lisenziya
        </h2>
        <ul className="flex flex-col gap-0.5">
          {licenseOrder.map((license) => {
            const checked = activeLicenses.includes(license)
            return (
              <li key={license}>
                <label className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <span
                    className={cn(
                      'flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors',
                      checked
                        ? 'border-success bg-success text-success-foreground'
                        : 'border-border bg-background',
                    )}
                  >
                    {checked && <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />}
                  </span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onLicenseToggle(license)}
                    className="sr-only"
                  />
                  {licenseLabels[license]}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
