import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  thumbnail: string
  title: string
  description: string
  link: string
}

export function ProjectCard({
  thumbnail,
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <Link
      className="hover:opacity-75 transition ease-in-out hover:shadow-2xl shadow-primary group view-project"
      href={link}
    >
      <div className="w-full relative">
        <Image
          src={thumbnail}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="group-hover:-translate-y-1 transition ease-in-out rounded-md"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="flex justify-between items-center pt-2 pb-6">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-paragraph text-sm">{description}</p>
      </div>
    </Link>
  )
}
