'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, ChevronsRight, ExternalLink, Info, Sparkles, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/az-alt/modal'
import { cn } from '@/lib/utils'
import { licenseBadgeClasses, licenseLabels, type Software } from '@/lib/data'

interface SoftwareCardProps {
  software: Software
  className?: string
  style?: React.CSSProperties
}

export function SoftwareCard({ software, className, style }: SoftwareCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <article
      style={style}
      className={cn(
        'group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_8px_25px_-5px_rgba(203,166,247,0.15)] dark:hover:border-[#cba6f7]/50 dark:hover:shadow-[0_8px_25px_-5px_rgba(203,166,247,0.15)]',
        className
      )}
    >
      {/* Replaces */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <span className="font-medium text-foreground/70">{software.replaces}</span>
        <ChevronsRight className="size-4 text-primary" aria-hidden="true" />
        <span>əvəzinə</span>
      </div>

      {/* Title row */}
      <div className="mt-3 flex items-start gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-border bg-background p-2.5">
          <Image
            src={software.logo || '/placeholder.svg'}
            alt={`${software.name} loqosu`}
            width={40}
            height={40}
            className="size-full object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold tracking-tight">{software.name}</h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {software.licenses.map((license) => (
              <span
                key={license}
                className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${licenseBadgeClasses[license]}`}
              >
                {licenseLabels[license]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
        {software.description}
      </p>

      {/* Features */}
      <ul className="mt-4 flex flex-col gap-2">
        {software.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
            <Check
              className="mt-0.5 size-4 shrink-0 text-success"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
        <Button
          nativeButton={false}
          className="h-10 flex-1 rounded-xl"
          render={<a href={software.url} target="_blank" rel="noopener noreferrer" />}
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          Yüklə / Keçid Et
        </Button>
        <Button
          variant="outline"
          className="h-10 rounded-xl px-3"
          onClick={() => setDetailsOpen(true)}
        >
          <Info className="size-4" aria-hidden="true" />
          Ətraflı
        </Button>
      </div>

      {/* Details modal */}
      <Modal
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        labelledById={`details-${software.id}`}
        title={software.name}
        description={`${software.replaces} əvəzinə`}
      >
        <div className="flex flex-col gap-6">
          {/* Header logo + licenses */}
          <div className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-border bg-background p-3">
              <Image
                src={software.logo || '/placeholder.svg'}
                alt={`${software.name} loqosu`}
                width={48}
                height={48}
                className="size-full object-contain"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {software.licenses.map((license) => (
                <span
                  key={license}
                  className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${licenseBadgeClasses[license]}`}
                >
                  {licenseLabels[license]}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Ümumi məlumat
            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
              {software.overview}
            </p>
          </section>

          {/* Advantages */}
          <section>
            <h3 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              Əsas üstünlükləri
            </h3>
            <ul className="mt-2 flex flex-col gap-2">
              {software.advantages.map((adv) => (
                <li key={adv} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-success"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  {adv}
                </li>
              ))}
            </ul>
          </section>

          {/* Platforms */}
          <section>
            <h3 className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Monitor className="size-4" aria-hidden="true" />
              Platformalar
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {software.platforms.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {platform}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <Button
            nativeButton={false}
            className="h-11 w-full rounded-xl"
            render={<a href={software.url} target="_blank" rel="noopener noreferrer" />}
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            Rəsmi sayta keç
          </Button>
        </div>
      </Modal>
    </article>
  )
}
