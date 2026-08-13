import { AzAltLogo } from '@/components/az-alt/az-alt-logo'

const links = [
  { label: 'Haqqımızda', href: '#' },
  { label: 'Şərtlər', href: '#' },
  { label: 'Təklif Göndər', href: '#' },
  { label: 'GitHub', href: 'https://github.com' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <AzAltLogo size="sm" />
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            AzAlt platforması açıq mənbəli və pulsuz proqramların təbliğatı üçün yaradılmış
            qeyri-kommersiya təşəbbüsüdür.
          </p>
        </div>

        <nav aria-label="Alt naviqasiya">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
