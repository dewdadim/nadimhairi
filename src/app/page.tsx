'use client'

import { HeroSection } from '@/components/hero-section'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { ProjectSection } from '@/components/project-section'
import Cursor from '@/components/ui/cursor'
import { ArrowDown } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  return (
    <main>
      <Cursor />
      <MaxWidthWrapper>
        <HeroSection className="mt-48" />
        <div className="mt-44">
          <h3 className="text-xl font-medium mb-16 w-full items-end flex gap-2 justify-center">
            My Past Projects <ArrowDown className="animate-bounce" />
          </h3>
          <ProjectSection />
        </div>
      </MaxWidthWrapper>
    </main>
  )
}
