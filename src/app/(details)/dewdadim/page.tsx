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
              src={'/thumbnail/dewdadim.gif'}
              alt={'dapur azman'}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <h2 className="font-bold text-2xl mt-4">DewDaDim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4">
            <div className="mt-8">
              <p className="text-paragraph">
                Dewdadim is a gaming channel that primarily live stream video
                games on the internet. The brand elements was designed to bring
                energetic vibes the viewers and supporters.
              </p>
            </div>
            <div className="grid grid-cols-3 mt-8 gap-y-6 gap-x-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">ROLE</h4>
                <p className="text-paragraph">Brand Designer</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">TOOLS</h4>
                <p className="text-paragraph">
                  After Effects, Illustrator, Photoshop
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">YEAR</h4>
                <p className="text-paragraph">2020</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <h3 className="font-bold text-2xl">Snapshots</h3>
          <div className="py-8 flex flex-col gap-4">
            <div className="w-full relative">
              <Image
                src={'/dewdadim/channel-dashboard.jpg'}
                alt={'channel dewdadim'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md border"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/dewdadim/intro.gif'}
                alt={'intro dewdadim'}
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
