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
              src={'/thumbnail/stooket.png'}
              alt={'stooket header'}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-md"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <h2 className="font-bold text-2xl mt-4">
            STOOKET: Student Marketplace
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-x-4">
            <div className="mt-8">
              <p className="text-paragraph">
                Stooket is a student marketplace system that I develop during my
                Diploma's Final Year in Universiti Malaysia Pahang Al-Sultan
                Abdullah (UMPSA).
              </p>
            </div>
            <div className="grid grid-cols-3 mt-8 gap-y-6">
              <div>
                <h4 className="font-semibold text-sm mb-2">AWARD</h4>
                <p className="text-paragraph">Silver Award</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">SUPERVISOR</h4>
                <p className="text-paragraph">Dr. Bariah Yusob</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">TOOLS</h4>
                <p className="text-paragraph">Next.js, Figma, PostgreSQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">LINK</h4>
                <Link
                  href={'https://www.stooket.com'}
                  target="_blank"
                  className="hover:underline"
                >
                  <p className="text-paragraph flex gap-1 items-center">
                    stooket.com <ArrowUpRight size={16} />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <h3 className="font-bold text-2xl">Snapshots</h3>
          <div className="py-8 flex flex-col gap-4">
            <div className="w-full relative">
              <Image
                src={'/stooket/design.jpg'}
                alt={'design stooket'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/stooket/home-page.jpg'}
                alt={'home page stooket'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/stooket/seller-dashboard-page.jpg'}
                alt={'seller dasboard stooket'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/stooket/product-details-page.jpg'}
                alt={'product details stooket'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/stooket/fyprocom.jfif'}
                alt={'fyprocom stooket'}
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
