import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Separator } from '@/components/ui/separator'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main>
      <MaxWidthWrapper>
        <div className="mt-20">
          <div className="w-full relative">
            <Image
              src={'/thumbnail/gen-y-cult.jpg'}
              alt={'stooket header'}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-md"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <h2 className="font-bold text-2xl mt-4">GEN Y CULT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4">
            <div className="mt-8">
              <p className="text-paragraph">
                Gen Y Cult is a podcast channel that talk about real life
                issues, movie suggestions, hobbies and many more. It is focused
                and related with Generation Y people.
              </p>
            </div>
            <div className="grid grid-cols-3 mt-8 gap-y-6 gap-x-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">ROLE</h4>
                <p className="text-paragraph">Brand Designer</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">TOOLS</h4>
                <p className="text-paragraph">Photoshop, Illustrator</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">LINK</h4>
                <Link
                  href={'https://www.instagram.com/gen_y_cult/'}
                  target="_blank"
                  className="hover:underline"
                >
                  <p className="text-paragraph flex gap-1 items-center">
                    Instagram <ArrowUpRight size={16} />
                  </p>
                </Link>
                <Link
                  href={'https://open.spotify.com/show/11OxfrKdXfWvP93vghE1ph'}
                  target="_blank"
                  className="hover:underline"
                >
                  <p className="text-paragraph flex gap-1 items-center">
                    Spotify <ArrowUpRight size={16} />
                  </p>
                </Link>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">YEAR</h4>
                <p className="text-paragraph">2021</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <h3 className="font-bold text-2xl">Snapshots</h3>
          <div className="py-8 flex flex-col gap-4">
            <div className="w-full relative">
              <Image
                src={'/gen-y-cult/logo.png'}
                alt={'gen y cult logo'}
                width={0}
                height={0}
                sizes="100vw"
                className="group-hover:-translate-y-1 transition ease-in-out rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/gen-y-cult/spotify.jpg'}
                alt={'spotify gen y cult'}
                width={0}
                height={0}
                sizes="100vw"
                className="group-hover:-translate-y-1 transition ease-in-out rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}
