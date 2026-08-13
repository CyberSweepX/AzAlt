import { cn } from '@/lib/utils'

interface AzAltLogoIconProps {
  size?: 'sm' | 'md'
  className?: string
}

export function AzAltLogoIcon({ size = 'md', className }: AzAltLogoIconProps) {
  const dimension = size === 'sm' ? 'size-8' : 'size-9'

  return (
    <span
      className={cn('relative flex shrink-0 items-center justify-center', dimension, className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 36 36" className={dimension} fill="none">
        {/* back layer */}
        <rect x="6" y="6" width="20" height="20" rx="6" fill="#cba6f7" fillOpacity="0.25" />
        {/* front layer with switch arrows */}
        <rect x="12" y="12" width="18" height="18" rx="6" fill="#cba6f7" />
        <path
          d="M17.5 18.5h6m0 0-2-2m2 2-2 2M24.5 23.5h-6m0 0 2 2m-2-2 2-2"
          stroke="#11111b"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

interface AzAltBrandTextProps {
  className?: string
}

export function AzAltBrandText({ className }: AzAltBrandTextProps) {
  return (
    <span className={cn('font-bold tracking-tight', className)}>
      <span className="text-foreground">Az</span>
      <span className="text-primary">Alt</span>
    </span>
  )
}

interface AzAltLogoProps {
  size?: 'sm' | 'md'
  showText?: boolean
  className?: string
}

export function AzAltLogo({ size = 'md', showText = true, className }: AzAltLogoProps) {
  const textSize = size === 'sm' ? 'text-base' : 'text-lg'

  return (
    <span className={cn('flex items-center gap-2', className)}>
      <AzAltLogoIcon size={size} />
      {showText && <AzAltBrandText className={textSize} />}
    </span>
  )
}
