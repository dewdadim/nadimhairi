import Link from 'next/link'
import MaxWidthWrapper from './max-width-wrapper'
import { Separator } from './ui/separator'
import { ArrowUpRight } from 'lucide-react'

const socials = [
  {
    id: 1,
    title: 'Github',
    href: 'https://github.com/dewdadim',
  },
  {
    id: 2,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nadim-hairi/',
  },
  {
    id: 3,
    title: 'Facebook',
    href: 'https://www.facebook.com/nadim.hairi.9/',
  },
]

export function Footer() {
  return (
    <footer className="mt-24 bg-secondary bottom-0 z-10">
      <Separator />
      <MaxWidthWrapper>
        <div className="py-8 flex flex-col items-center text-center gap-8 md:flex-row md:text-start md:justify-between md:items-start">
          <p className="text-xs text-paragraph">LAST UPDATED - 23 JUN 2024</p>
          <div>
            <p className="text-sm text-paragraph mb-2">FIND ME!</p>
            <div className="flex flex-col items-center md:items-start">
              {socials.map((social) => (
                <Link
                  href={social.href}
                  className="flex gap-1 hover:underline items-end group"
                  target="_blank"
                  key={social.id}
                >
                  <p className="text-sm">{social.title}</p>
                  <ArrowUpRight
                    size={20}
                    className="group-hover:-translate-y-1 ease-in-out transition"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-paragraph mb-2">
              In case of any inquiries:
            </p>
            <Link
              href={'mailto:nadimhairi@yahoo.com'}
              className="flex gap-1 hover:underline items-end group"
            >
              nadimhairi@yahoo.com
              <ArrowUpRight
                size={20}
                className="group-hover:-translate-y-1 ease-in-out transition"
              />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
