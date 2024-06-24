import { ArrowUpRight, Facebook, Github, Linkedin, Menu } from 'lucide-react'
import MaxWidthWrapper from './max-width-wrapper'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'

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
    <nav className="fixed top-0 z-50 w-full bg-background/80">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between py-2">
          <Link href={'/'}>
            <h1 className="font-medium">Nadim Hairi</h1>
          </Link>
          <div className="gap-4 items-center flex">
            <div className="gap-4 items-center hidden md:flex">
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
            <ModeToggle />
            <Popover>
              <PopoverTrigger asChild className="flex md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto min-w-32 max-w-fit" align="end">
                <div className="flex flex-col gap-4">
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
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </MaxWidthWrapper>
      <Separator />
    </nav>
  )
}
