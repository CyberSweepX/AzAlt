'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/az-alt/modal'

interface SuggestModalProps {
  open: boolean
  onClose: () => void
}

const fields = [
  {
    id: 'name',
    label: 'Proqram adı',
    placeholder: 'məs: Inkscape',
    type: 'text',
  },
  {
    id: 'replaces',
    label: 'Alternativ olduğu proqram',
    placeholder: 'məs: Adobe Illustrator',
    type: 'text',
  },
  {
    id: 'url',
    label: 'Keçid linki',
    placeholder: 'https://...',
    type: 'url',
  },
] as const

export function SuggestModal({ open, onClose }: SuggestModalProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    onClose()
    // reset after close animation window
    setTimeout(() => setSubmitted(false), 200)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      labelledById="suggest-title"
      title="Resurs Əlavə Et"
      description="Bilmədiyimiz gözəl bir alternativ tanıyırsınız? Bizə təklif edin."
    >
      {submitted ? (
        <div className="flex flex-col items-center py-6 text-center">
          <span className="grid size-14 place-items-center rounded-full bg-success/15 text-success">
            <CheckCircle2 className="size-8" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-semibold">Təşəkkür edirik!</h3>
          <p className="mt-1 max-w-xs text-pretty text-sm text-muted-foreground">
            Təklifiniz qeydə alındı. Komandamız yoxlayıb kataloqa əlavə edəcək.
          </p>
          <Button className="mt-6 h-10 rounded-xl px-6" onClick={handleClose}>
            Bağla
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-1.5">
              <label htmlFor={`suggest-${field.id}`} className="text-sm font-medium">
                {field.label}
              </label>
              <input
                id={`suggest-${field.id}`}
                name={field.id}
                type={field.type}
                required
                placeholder={field.placeholder}
                className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-3 focus:ring-ring/40 focus:outline-none"
              />
            </div>
          ))}
          <Button type="submit" className="mt-2 h-11 w-full rounded-xl">
            <Send className="size-4" aria-hidden="true" />
            Təklifi Göndər
          </Button>
        </form>
      )}
    </Modal>
  )
}
