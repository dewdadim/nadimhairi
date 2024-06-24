import MaxWidthWrapper from '@/components/max-width-wrapper'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main>
      <MaxWidthWrapper>
        <div className="mt-20">
          <AspectRatio ratio={5 / 2}>
            <Image
              src={'/thumbnail/dapur-azman.png'}
              alt={'dapur azman'}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <h2 className="font-bold text-2xl mt-4">Dapur Azman Catering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4">
            <div className="mt-8">
              <p className="text-paragraph">
                It was my freelance job during semester break. I got this job
                from a Web Application Engineer, Farid Aiman — Designing a
                website for a company called &quot;Dapur Azman&quot; to showcase
                their services, quality, and highly positive reviews.
              </p>
            </div>
            <div className="grid grid-cols-3 mt-8 gap-y-6 gap-x-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">ROLE</h4>
                <p className="text-paragraph">Web Desiner</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">CONTRIBUTERS</h4>
                <p className="text-paragraph">Farid Aiman</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">TOOLS</h4>
                <p className="text-paragraph">Figma, Illustrator</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">YEAR</h4>
                <p className="text-paragraph">2023</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <h3 className="font-bold text-2xl">Snapshots</h3>
          <div className="py-8 flex flex-col gap-4">
            <div className="w-full relative">
              <Image
                src={'/dapur-azman/design1.jpg'}
                alt={'design dapur azman'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/dapur-azman/design2.jpg'}
                alt={'design dapur azman'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/dapur-azman/demo.gif'}
                alt={'demo dapur azman'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}
