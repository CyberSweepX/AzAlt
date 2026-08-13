import type { LucideIcon } from 'lucide-react'
import {
  Palette,
  Clapperboard,
  FileText,
  ShieldCheck,
  Code2,
  Settings2,
} from 'lucide-react'

export type LicenseType = 'open-source' | 'free' | 'web-based'

export type Category =
  | 'dizayn'
  | 'video-audio'
  | 'ofis'
  | 'tehlukesizlik'
  | 'proqramlasdirma'
  | 'sistem'

export interface CategoryInfo {
  id: Category
  label: string
  icon: LucideIcon
}

export const categories: CategoryInfo[] = [
  { id: 'dizayn', label: 'Dizayn & Qrafika', icon: Palette },
  { id: 'video-audio', label: 'Video & Audio', icon: Clapperboard },
  { id: 'ofis', label: 'Ofis & Mətn', icon: FileText },
  { id: 'tehlukesizlik', label: 'Təhlükəsizlik & VPN', icon: ShieldCheck },
  { id: 'proqramlasdirma', label: 'Proqramlaşdırma', icon: Code2 },
  { id: 'sistem', label: 'Sistem Alətləri', icon: Settings2 },
]

export const licenseLabels: Record<LicenseType, string> = {
  'open-source': 'Açıq Mənbə',
  free: 'Tam Pulsuz',
  'web-based': 'Brauzerdə İşləyən',
}

export const licenseBadgeClasses: Record<LicenseType, string> = {
  'open-source': 'bg-green/15 text-green',
  free: 'bg-green/15 text-green',
  'web-based': 'bg-cyan/15 text-cyan',
}

/** Reserved for offline-capable badges (e.g. "Oflayn") */
export const offlineBadgeClass = 'bg-peach/15 text-peach'

export interface Software {
  id: string
  replaces: string
  name: string
  logo: string
  category: Category
  licenses: LicenseType[]
  platforms: string[]
  description: string
  overview: string
  advantages: string[]
  features: string[]
  url: string
}

export const softwareList: Software[] = [
  {
    id: 'photopea',
    replaces: 'Adobe Photoshop',
    name: 'Photopea',
    logo: '/logos/photopea.svg',
    category: 'dizayn',
    licenses: ['free', 'web-based'],
    platforms: ['Veb-Səhifə'],
    description:
      'Brauzerdə işləyən güclü şəkil redaktoru. PSD fayllarını birbaşa açır və Photoshop-a çox oxşar interfeys təqdim edir — quraşdırma tələb olunmur.',
    overview:
      'Photopea tamamilə brauzerdə işləyən onlayn qrafika redaktorudur. Heç bir quraşdırma tələb etmədən Photoshop-un əksər funksiyalarını təqdim edir və PSD, XCF, Sketch kimi peşəkar formatları birbaşa oxuya bilir. İnterfeysi Photoshop-a o qədər oxşardır ki, keçid demək olar ki, öyrənmə tələb etmir.',
    advantages: [
      'Quraşdırma və qeydiyyat tələb etmir — dərhal işə başlayın',
      'PSD fayllarını Photoshop kimi tam açır və saxlayır',
      'Zəif kompüterlərdə belə problemsiz işləyir, çünki brauzerdədir',
      'Aylıq abunə haqqı yoxdur — Adobe-un $22.99/ay xərcini sıfıra endirir',
    ],
    features: [
      'PSD, XCF, Sketch fayl dəstəyi',
      'Layerlər, maskalar və filtrlər',
      'Tam pulsuz, qeydiyyatsız işləyir',
    ],
    url: 'https://www.photopea.com',
  },
  {
    id: 'gimp',
    replaces: 'Adobe Photoshop',
    name: 'GIMP',
    logo: '/logos/gimp.svg',
    category: 'dizayn',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Açıq mənbəli professional qrafika redaktoru. Peşəkar foto emalı, rəsm və dizayn üçün onilliklər boyu inkişaf etdirilib.',
    overview:
      'GIMP (GNU Image Manipulation Program) 25 ildən çoxdur inkişaf etdirilən, açıq mənbəli peşəkar qrafika redaktorudur. Foto retuşundan tutmuş rəqəmsal rəssamlığa qədər geniş imkanlar təqdim edir və plagin sistemi sayəsində Photoshop-un bir çox funksiyasını təkrarlaya bilir.',
    advantages: [
      'Tamamilə pulsuz və açıq mənbəli — heç vaxt ödəniş tələb etmir',
      'Bütün əməliyyat sistemlərində eyni cür işləyir',
      'Genişlənə bilən plagin və skript sistemi ilə fərdiləşdirilir',
      'İcma tərəfindən daim yenilənir, reklam və izləmə yoxdur',
    ],
    features: [
      'Genişlənə bilən plagin sistemi',
      'Yüksək səviyyəli foto retuş alətləri',
      'Bütün əməliyyat sistemlərində pulsuz',
    ],
    url: 'https://www.gimp.org',
  },
  {
    id: 'krita',
    replaces: 'Adobe Photoshop / Corel Painter',
    name: 'Krita',
    logo: '/logos/krita.svg',
    category: 'dizayn',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Rəqəmsal rəssamlar və illüstratorlar üçün nəzərdə tutulmuş açıq mənbəli rəsm proqramı. Konsept art, komiks və animasiya üçün idealdır.',
    overview:
      'Krita peşəkar rəqəmsal rəssamlıq üçün sıfırdan hazırlanmış açıq mənbəli proqramdır. Yüzlərlə fərça, qabaqcıl rəng idarəetməsi və kətan animasiyası imkanları ilə konsept artistləri, illüstratorları və komiks yaradıcılarını hədəf alır.',
    advantages: [
      'Qrafik planşetlər üçün optimallaşdırılmış təbii fərçalar',
      'Photoshop-dan fərqli olaraq rəssamlığa xüsusi köklənib',
      'Kadr-kadr animasiya dəstəyi daxildir',
      'Tam pulsuz, reklamsız və açıq mənbəli',
    ],
    features: [
      '100+ peşəkar fərça motoru',
      'Kadr-kadr (frame-by-frame) animasiya',
      'HDR və qabaqcıl rəng idarəetməsi',
    ],
    url: 'https://krita.org',
  },
  {
    id: 'inkscape',
    replaces: 'Adobe Illustrator',
    name: 'Inkscape',
    logo: '/logos/inkscape.svg',
    category: 'dizayn',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Peşəkar vektor qrafika redaktoru. Loqo, ikon, illüstrasiya və digər miqyaslana bilən qrafikalar üçün Illustrator-un pulsuz alternatividir.',
    overview:
      'Inkscape SVG standartına əsaslanan güclü vektor qrafika redaktorudur. Loqolar, ikonlar, texniki cizgilər və mürəkkəb illüstrasiyalar yaratmaq üçün Adobe Illustrator-un bütün əsas alətlərini pulsuz təqdim edir.',
    advantages: [
      'Açıq SVG formatı ilə tam uyğunluq',
      'Illustrator-un aylıq abunəsini tamamilə əvəz edir',
      'Güclü yol (path) redaktə və node alətləri',
      'Genişlənmələr və icma dəstəyi ilə daim inkişaf edir',
    ],
    features: [
      'Tam SVG vektor redaktəsi',
      'Node və yol (path) alətləri',
      'AI/EPS fayllarını idxal edə bilir',
    ],
    url: 'https://inkscape.org',
  },
  {
    id: 'blender',
    replaces: 'Cinema 4D / 3ds Max',
    name: 'Blender',
    logo: '/logos/blender.svg',
    category: 'dizayn',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      '3D modelləşdirmə, animasiya, render və VFX üçün dünya standartına çevrilmiş açıq mənbəli proqram. Tamamilə pulsuz.',
    overview:
      'Blender 3D yaradıcılığının bütün mərhələlərini — modelləşdirmə, riqqinq, animasiya, simulyasiya, render, kompozit və hətta video montaj — bir proqramda birləşdirir. Peşəkar studiyalar tərəfindən istifadə olunur və tamamilə pulsuzdur.',
    advantages: [
      'Minlərlə dollarlıq 3D proqramları pulsuz əvəz edir',
      'Real-time Eevee və foto-realistik Cycles render motorları',
      'Nəhəng dərs və icma resursları ekosistemi',
      'Daim yenilənir və peşəkar filmlərdə istifadə olunur',
    ],
    features: [
      'Tam 3D modelləşdirmə və heykəltəraşlıq',
      'Cycles və Eevee render motorları',
      'Animasiya, VFX və video montaj',
    ],
    url: 'https://www.blender.org',
  },
  {
    id: 'davinci',
    replaces: 'Adobe Premiere Pro',
    name: 'DaVinci Resolve',
    logo: '/logos/davinci-resolve.svg',
    category: 'video-audio',
    licenses: ['free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Hollivud səviyyəli video montaj və rəng korreksiyası proqramı. Pulsuz versiyası belə əksər peşəkar layihələr üçün kifayət qədər güclüdür.',
    overview:
      'DaVinci Resolve peşəkar montaj, rəng korreksiyası, vizual effektlər və audio post-produksiyanı vahid platformada birləşdirir. Pulsuz versiyası əksər YouTube və hətta kino layihələri üçün kifayət qədər imkan təqdim edir.',
    advantages: [
      'Sənayenin ən yaxşı rəng korreksiya sistemi (pulsuz)',
      'Premiere-in aylıq abunəsi olmadan peşəkar montaj',
      'Fusion VFX və Fairlight audio daxildir',
      'GPU sürətləndirməsi ilə yüksək performans',
    ],
    features: [
      'Peşəkar rəng korreksiyası (color grading)',
      'Daxili Fairlight audio montajı',
      'Fusion vizual effektlər modulu',
    ],
    url: 'https://www.blackmagicdesign.com/products/davinciresolve',
  },
  {
    id: 'kdenlive',
    replaces: 'Adobe Premiere Pro',
    name: 'Kdenlive',
    logo: '/logos/kdenlive.svg',
    category: 'video-audio',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Çoxtrekli açıq mənbəli video montaj proqramı. Sadə interfeysi ilə başlanğıc və orta səviyyəli montajçılar üçün idealdır.',
    overview:
      'Kdenlive açıq mənbəli, çoxtrekli qeyri-xətti video montaj proqramıdır. Geniş fayl formatı dəstəyi, effektlər və keçidlər kitabxanası ilə gündəlik montaj işləri üçün güclü və sadə həll təqdim edir.',
    advantages: [
      'Tamamilə pulsuz və açıq mənbəli, limitsiz',
      'Çoxtrekli montaj və konfiqurasiya edilə bilən interfeys',
      'Geniş effekt və keçid kitabxanası',
      'Bütün əsas platformalarda işləyir',
    ],
    features: [
      'Çoxtrekli montaj (multi-track)',
      'Geniş effekt və keçid kitabxanası',
      'Proksi montaj ilə sürətli iş',
    ],
    url: 'https://kdenlive.org',
  },
  {
    id: 'vlc',
    replaces: 'Windows Media Player / QuickTime',
    name: 'VLC Media Player',
    logo: '/logos/vlc.svg',
    category: 'video-audio',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Demək olar ki, bütün audio və video formatlarını əlavə kodek olmadan oxuyan universal media pleyer.',
    overview:
      'VLC hər növ media faylını — DVD, disk, kamera axını və şəbəkə protokollarını daxil olmaqla — heç bir əlavə kodek quraşdırmadan oxuya bilən açıq mənbəli universal pleyerdir. Sadəliyi və etibarlılığı ilə onilliklərdir dünya standartıdır.',
    advantages: [
      'Praktiki olaraq bütün formatları qutudan çıxan kimi oxuyur',
      'Reklamsız, izləməsiz və tamamilə pulsuz',
      'Video çevirmə, axın (stream) və yazma imkanları',
      'Yüngül və bütün platformalarda mövcuddur',
    ],
    features: [
      'Bütün media formatları üçün dəstək',
      'Video çevirmə və axın (streaming)',
      'Subtitr və audio sinxronizasiyası',
    ],
    url: 'https://www.videolan.org/vlc',
  },
  {
    id: 'audacity',
    replaces: 'Adobe Audition',
    name: 'Audacity',
    logo: '/logos/audacity.svg',
    category: 'video-audio',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Açıq mənbəli çoxkanallı audio redaktoru. Səs yazısı, montaj və emal üçün onilliklərdir istifadə olunan etibarlı vasitə.',
    overview:
      'Audacity səs yazısı və redaktəsi üçün ən populyar açıq mənbəli proqramdır. Podkast, musiqi və səs təsirləri üzərində işləmək üçün çoxkanallı montaj, effektlər və plagin dəstəyi təqdim edir.',
    advantages: [
      'Peşəkar audio montaj tamamilə pulsuz',
      'Səs-küy azaltma və restavrasiya alətləri',
      'VST plagin dəstəyi ilə genişlənir',
      'Sadə interfeys, sürətli öyrənmə',
    ],
    features: [
      'Çoxkanallı yazı və montaj',
      'Səs-küy azaltma effektləri',
      'Tam pulsuz və açıq mənbəli',
    ],
    url: 'https://www.audacityteam.org',
  },
  {
    id: 'libreoffice',
    replaces: 'Microsoft Office',
    name: 'LibreOffice',
    logo: '/logos/libreoffice.svg',
    category: 'ofis',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Tam funksional ofis paketi. Word, Excel və PowerPoint fayllarını açır və redaktə edir — heç bir abunə haqqı olmadan.',
    overview:
      'LibreOffice altı güclü moduldan ibarət tam ofis paketidir: Writer, Calc, Impress, Draw, Base və Math. Microsoft Office formatlarını açıb saxlaya bilir və heç bir abunə haqqı tələb etmir.',
    advantages: [
      'Office 365-in illik abunəsini tamamilə əvəz edir',
      'DOCX, XLSX, PPTX faylları ilə uyğunluq',
      'Oflayn işləyir — məlumatlarınız buludda deyil',
      'Açıq ODF standartı ilə fayllarınız kilidlənmir',
    ],
    features: [
      'Writer, Calc, Impress modulları',
      'DOCX, XLSX, PPTX uyğunluğu',
      'Tamamilə açıq mənbəli və pulsuz',
    ],
    url: 'https://www.libreoffice.org',
  },
  {
    id: 'onlyoffice',
    replaces: 'Microsoft Word',
    name: 'ONLYOFFICE',
    logo: '/logos/onlyoffice.svg',
    category: 'ofis',
    licenses: ['open-source', 'free', 'web-based'],
    platforms: ['Windows', 'macOS', 'Linux', 'Veb-Səhifə'],
    description:
      'Microsoft Office formatları ilə ən yüksək uyğunluğa malik ofis paketi. Sənədlərin görünüşünü qorumaqda xüsusilə güclüdür.',
    overview:
      'ONLYOFFICE Microsoft Office formatları ilə demək olar ki, mükəmməl uyğunluq təqdim edən müasir ofis paketidir. Real-vaxt birgə redaktə və bulud inteqrasiyası ilə komandalar üçün xüsusilə əlverişlidir.',
    advantages: [
      'MS Office layoutunu ən yaxşı qoruyan açıq paket',
      'Real-vaxt komanda halında redaktə',
      'Masaüstü, bulud və self-hosted variantlar',
      'Pulsuz istifadə üçün tam funksional',
    ],
    features: [
      'MS Office ilə əla uyğunluq',
      'Birgə real-vaxt redaktə',
      'Masaüstü və bulud versiyası',
    ],
    url: 'https://www.onlyoffice.com',
  },
  {
    id: 'obsidian',
    replaces: 'Notion',
    name: 'Obsidian',
    logo: '/logos/obsidian.svg',
    category: 'ofis',
    licenses: ['free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Qeydlərinizi öz kompüterinizdə saxlayan güclü bilik idarəetmə aləti. Fikirləriniz arasında əlaqələr qurur.',
    overview:
      'Obsidian yerli Markdown fayllarına əsaslanan bilik idarəetmə tətbiqidir. Qeydlər arasında ikitərəfli əlaqələr yaradaraq "ikinci beyin" qurmağa imkan verir və məlumatlarınız tamamilə sizin cihazınızda qalır.',
    advantages: [
      'Məlumatlarınız lokal saxlanılır — tam məxfilik',
      'Notion-dan fərqli olaraq oflayn işləyir',
      'Qeydlər arasında qrafik əlaqələr (graph view)',
      'Şəxsi istifadə üçün tamamilə pulsuz',
    ],
    features: [
      'Lokal Markdown fayllarında saxlama',
      'Qrafik görünüş və əlaqələr',
      'Zəngin plagin ekosistemi',
    ],
    url: 'https://obsidian.md',
  },
  {
    id: 'joplin',
    replaces: 'Evernote',
    name: 'Joplin',
    logo: '/logos/joplin.svg',
    category: 'ofis',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Uçtan-uca şifrələnmiş açıq mənbəli qeyd və tapşırıq idarəetmə tətbiqi. Evernote-un məxfiliyə əsaslanan alternatividir.',
    overview:
      'Joplin qeydlərinizi Markdown formatında saxlayan, uçtan-uca şifrələmə dəstəkləyən açıq mənbəli tətbiqdir. İstədiyiniz bulud xidməti (Nextcloud, Dropbox və s.) ilə sinxronizasiya edə bilər və Evernote qeydlərini idxal edir.',
    advantages: [
      'Uçtan-uca şifrələmə ilə tam məxfilik',
      'İstənilən bulud və ya self-hosted sinxronizasiya',
      'Evernote və Markdown idxalı',
      'Tamamilə pulsuz və açıq mənbəli',
    ],
    features: [
      'Uçtan-uca şifrələmə',
      'Çoxplatformalı sinxronizasiya',
      'Markdown və web clipper dəstəyi',
    ],
    url: 'https://joplinapp.org',
  },
  {
    id: 'thunderbird',
    replaces: 'Microsoft Outlook',
    name: 'Mozilla Thunderbird',
    logo: '/logos/thunderbird.svg',
    category: 'ofis',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Güclü açıq mənbəli e-poçt müştərisi. Çoxsaylı hesabları, təqvimi və kontaktları bir yerdə idarə edir.',
    overview:
      'Thunderbird Mozilla tərəfindən inkişaf etdirilən açıq mənbəli e-poçt, təqvim və kontakt idarəetmə proqramıdır. Çoxsaylı hesabları bir interfeysdə birləşdirir və genişlənmələrlə fərdiləşdirilir.',
    advantages: [
      'Outlook-a pulsuz və reklamsız alternativ',
      'Sonsuz sayda e-poçt hesabı dəstəyi',
      'Daxili spam və fişinq qoruması',
      'Təqvim, tapşırıq və kontakt inteqrasiyası',
    ],
    features: [
      'Çoxhesablı e-poçt idarəetməsi',
      'Daxili təqvim və tapşırıqlar',
      'Genişlənmələr və mövzular',
    ],
    url: 'https://www.thunderbird.net',
  },
  {
    id: 'bitwarden',
    replaces: '1Password / LastPass',
    name: 'Bitwarden',
    logo: '/logos/bitwarden.svg',
    category: 'tehlukesizlik',
    licenses: ['open-source', 'free', 'web-based'],
    platforms: ['Windows', 'macOS', 'Linux', 'Veb-Səhifə', 'Brauzer'],
    description:
      'Açıq mənbəli parol menecmenti. Bütün şifrələrinizi şifrələnmiş formada saxlayır və istənilən cihazda təhlükəsiz sinxronizasiya edir.',
    overview:
      'Bitwarden bütün parollarınızı uçtan-uca şifrələmə ilə saxlayan açıq mənbəli parol menecementi xidmətidir. Pulsuz planı limitsiz parol və çoxcihazlı sinxronizasiya təqdim edir, kodu isə müstəqil auditdən keçir.',
    advantages: [
      'Pulsuz planda limitsiz parol saxlama',
      'Bütün brauzer və platformalar üçün genişlənmələr',
      'Açıq mənbə — təhlükəsizlik ictimai auditə açıqdır',
      'Self-hosted variantı da mövcuddur',
    ],
    features: [
      'Uçtan-uca şifrələmə (end-to-end)',
      'Bütün brauzer və platformalar üçün',
      'Pulsuz plan limitsiz parol saxlayır',
    ],
    url: 'https://bitwarden.com',
  },
  {
    id: 'keepassxc',
    replaces: '1Password / Dashlane',
    name: 'KeePassXC',
    logo: '/logos/keepassxc.svg',
    category: 'tehlukesizlik',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'Tamamilə oflayn işləyən parol menecmenti. Parollarınız buludda deyil, öz cihazınızda şifrələnmiş faylda saxlanılır.',
    overview:
      'KeePassXC parollarınızı yerli, güclü şifrələnmiş fayl (.kdbx) daxilində saxlayan açıq mənbəli menecerdir. Heç bir bulud və ya server tələb etmir — məlumatlarınız yalnız sizin nəzarətinizdədir.',
    advantages: [
      'Tam oflayn — heç bir server və ya abunə yoxdur',
      'Parollar yerli şifrələnmiş faylda saxlanılır',
      'Brauzer inteqrasiyası və avtomatik doldurma',
      'Tamamilə pulsuz və açıq mənbəli',
    ],
    features: [
      'Yerli şifrələnmiş verilənlər bazası',
      'Brauzer inteqrasiyası',
      'TOTP (2FA) kod generatoru',
    ],
    url: 'https://keepassxc.org',
  },
  {
    id: 'signal',
    replaces: 'WhatsApp / Telegram',
    name: 'Signal',
    logo: '/logos/signal.svg',
    category: 'tehlukesizlik',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux', 'Mobil'],
    description:
      'Məxfiliyə yönəlmiş, uçtan-uca şifrələnmiş mesajlaşma tətbiqi. Reklam və məlumat toplama yoxdur.',
    overview:
      'Signal dünyanın ən etibarlı hesab edilən uçtan-uca şifrələmə protokolundan istifadə edən mesajlaşma tətbiqidir. Qeyri-kommersiya fondu tərəfindən idarə olunur, reklam və istifadəçi məlumatı toplamır.',
    advantages: [
      'Bütün mesaj və zənglər uçtan-uca şifrələnir',
      'İstifadəçi məlumatı toplanmır və satılmır',
      'Açıq mənbə — protokol ictimai auditdən keçir',
      'Reklamsız və tamamilə pulsuz',
    ],
    features: [
      'Uçtan-uca şifrələnmiş mesaj və zənglər',
      'Yoxa çıxan mesajlar',
      'Qrup söhbətləri və media paylaşımı',
    ],
    url: 'https://signal.org',
  },
  {
    id: 'vscodium',
    replaces: 'Visual Studio',
    name: 'VSCodium',
    logo: '/logos/vscodium.svg',
    category: 'proqramlasdirma',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux'],
    description:
      'VS Code-un telemetriyasız, tam açıq mənbəli versiyası. Bütün genişlənmələri dəstəkləyir, lakin məlumatlarınızı toplamır.',
    overview:
      'VSCodium VS Code-un mənbə kodundan Microsoft telemetriyası və brendinqi olmadan qurulan versiyadır. Eyni interfeys və genişlənmələri təqdim edir, lakin istifadə məlumatlarınızı toplamır.',
    advantages: [
      'İzləmə (telemetry) tamamilə söndürülüb',
      'VS Code ilə eyni interfeys və qısayollar',
      'Minlərlə genişlənmə dəstəyi',
      'Açıq mənbəli və pulsuz',
    ],
    features: [
      'İzləmə (telemetry) olmadan işləyir',
      'Minlərlə genişlənmə dəstəyi',
      'Yüngül və sürətli redaktor',
    ],
    url: 'https://vscodium.com',
  },
  {
    id: 'firefox',
    replaces: 'Google Chrome',
    name: 'Mozilla Firefox',
    logo: '/logos/firefox.svg',
    category: 'sistem',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux', 'Mobil'],
    description:
      'Məxfiliyə önəm verən açıq mənbəli veb brauzeri. Güclü izləmə qoruması və fərdiləşdirmə imkanları ilə.',
    overview:
      'Firefox qeyri-kommersiya Mozilla fondu tərəfindən inkişaf etdirilən açıq mənbəli brauzerdir. Daxili izləmə qoruması, konteyner sekmeleri və geniş genişlənmə dəstəyi ilə məxfiliyi ön plana çıxarır.',
    advantages: [
      'Daxili izləmə və reklam qoruması',
      'Google-un ekosisteminə bağlı deyil',
      'Açıq mənbə və müstəqil render motoru',
      'Güclü fərdiləşdirmə və genişlənmələr',
    ],
    features: [
      'Gücləndirilmiş izləmə qoruması',
      'Konteyner sekmeleri (containers)',
      'Çoxplatformalı sinxronizasiya',
    ],
    url: 'https://www.mozilla.org/firefox',
  },
  {
    id: 'brave',
    replaces: 'Google Chrome',
    name: 'Brave',
    logo: '/logos/brave.svg',
    category: 'sistem',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux', 'Mobil'],
    description:
      'Reklam və izləyiciləri avtomatik bloklayan, Chromium əsaslı sürətli brauzer. Chrome genişlənmələri ilə uyğundur.',
    overview:
      'Brave Chromium üzərində qurulmuş, reklam və izləyiciləri standart olaraq bloklayan brauzerdir. Chrome genişlənmələri ilə tam uyğundur, lakin daha sürətli və məxfilik-yönümlüdür.',
    advantages: [
      'Reklam və izləyicilər qutudan çıxan kimi bloklanır',
      'Chrome genişlənmələri ilə tam uyğunluq',
      'Reklam bloku sayəsində daha sürətli yüklənmə',
      'Açıq mənbəli və pulsuz',
    ],
    features: [
      'Daxili reklam və izləyici bloku',
      'Chromium əsaslı, Chrome genişlənmələri',
      'Tor ilə məxfi pəncərə',
    ],
    url: 'https://brave.com',
  },
  {
    id: 'nextcloud',
    replaces: 'Google Drive / Dropbox',
    name: 'Nextcloud',
    logo: '/logos/nextcloud.svg',
    category: 'sistem',
    licenses: ['open-source', 'free'],
    platforms: ['Windows', 'macOS', 'Linux', 'Veb-Səhifə'],
    description:
      'Öz serverinizdə qura biləcəyiniz açıq mənbəli bulud saxlama platforması. Fayllarınız tam nəzarətinizdə qalır.',
    overview:
      'Nextcloud fayl saxlama, sinxronizasiya və paylaşmanı öz serverinizdə idarə etməyə imkan verən açıq mənbəli platformadır. Google Drive və Dropbox-un funksiyalarını təqdim edir, lakin məlumatlarınız üçüncü tərəfdə deyil.',
    advantages: [
      'Fayllarınız öz serverinizdə — tam məxfilik',
      'Google Drive/Dropbox abunəsini əvəz edir',
      'Fayl, təqvim, kontakt və sənəd inteqrasiyası',
      'Açıq mənbəli və limitsiz (öz saxlama həcminizlə)',
    ],
    features: [
      'Self-hosted bulud saxlama',
      'Fayl sinxronizasiyası və paylaşımı',
      'Təqvim, kontakt və onlayn ofis',
    ],
    url: 'https://nextcloud.com',
  },
]
