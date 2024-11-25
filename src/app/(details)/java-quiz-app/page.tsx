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
          <AspectRatio ratio={5 / 3}>
            <Image
              unoptimized
              src={'/thumbnail/java-quiz-app.gif'}
              alt={'dapur azman'}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <h2 className="font-bold text-2xl mt-4">Java Quiz App</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="mt-8">
              <p className="text-paragraph">
                It was my mini project during my second semester in Diploma.
                This Quiz App implements Object Oriented Programming (OOP)
                studies. The source code is available on my Github!
              </p>
            </div>
            <div className="grid grid-cols-3 mt-8 gap-y-6 gap-x-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">ROLE</h4>
                <p className="text-paragraph">Software Developer</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">TOOLS</h4>
                <p className="text-paragraph">JAVA, Netbeans</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">LINK</h4>
                <Link
                  href={'https://github.com/dewdadim/QuizApplication'}
                  target="_blank"
                  className="hover:underline"
                >
                  <p className="text-paragraph flex gap-1 items-center">
                    Source Code <ArrowUpRight size={16} />
                  </p>
                </Link>
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
                src={'/java-quiz-app/code1.jpg'}
                alt={'code java-quiz-app'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md border"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/java-quiz-app/answer-question.jpg'}
                alt={'answer quiz java-quiz-app'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md border"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="w-full relative">
              <Image
                src={'/java-quiz-app/addquiz.jpg'}
                alt={'add quiz java-quiz-app'}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md border"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}
