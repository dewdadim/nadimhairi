import { ArrowUpRight, Facebook, Github, Linkedin } from 'lucide-react'
import MaxWidthWrapper from './max-width-wrapper'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'

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

export const Navbar = () => {
  return (
    <section className="fixed top-0 w-full bg-background/80 z-10">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-2">
          <Link href={'/'}>
            <h1 className="font-medium">Nadim Hairi</h1>
          </Link>
          <div className="flex gap-4 items-center ">
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
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
      <Separator />
    </section>
  )
}
