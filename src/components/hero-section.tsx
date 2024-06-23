'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { WavyBackground } from './ui/wavy-background'
import { Spotlight } from './ui/spotlight'
import { LinkPreview } from './ui/link-preview'

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn('flex flex-col items-center gap-4', className)}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h3 className="font-medium text-xl text-center">
        Hey, I&lsquo;m Nadim Hairi. 👋
      </h3>
      <p className="text-center leading-loose text-paragraph font-medium">
        I&lsquo;m a fullstack developer, UI/UX designer, and logo designer.
        <br />I expertise with a{' '}
        <Button asChild variant="secondary" className="px-2 h-8">
          <LinkPreview url="https://react.dev/">
            <Image
              src={'/react-logo.png'}
              alt="react"
              height={16}
              width={16}
              className="mr-1"
            />
            React
          </LinkPreview>
        </Button>{' '}
        framework;{' '}
        <Button asChild variant="secondary" className="px-2 h-8">
          <LinkPreview url="https://nextjs.org/">
            <Image
              src={'/next-logo.svg'}
              alt="react"
              height={16}
              width={16}
              className="mr-1"
            />
            Next.js
          </LinkPreview>
        </Button>{' '}
        and a design tool;{' '}
        <Button asChild variant="secondary" className="px-2 h-8">
          <LinkPreview url="https://www.figma.com/">
            <Image
              src={'/figma-logo.png'}
              alt="react"
              height={10}
              width={10}
              className="mr-1"
            />
            Figma
          </LinkPreview>
        </Button>
        <br /> I love to teach and learn!
      </p>
    </section>
  )
}
