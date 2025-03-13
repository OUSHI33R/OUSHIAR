import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import SplitText from '@/TextAnimations/SplitText/SplitText'
import TextPressure from '@/TextAnimations/TextPressure/TextPressure'
import CircularText from '@/TextAnimations/CircularText/CircularText'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        prefetch
        className="group flex text-sm font-semibold text-zinc-800 transition hover:text-[#22C55E] dark:text-zinc-200 dark:hover:text-[#22C55E]"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-[#22C55E]" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="relative lg:pl-20">
          <div className="relative max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
            {/* Circular Text Positioned on Top Left */}
            <div className="absolute -bottom-20 -right-8">
              <CircularText
                text=" This * is * </OUSHI33R> *"
                onHover="speedUp"
                spinDuration={20}
                className="uppercase text-zinc-800 dark:text-zinc-100"
              />
            </div>
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <SplitText
            text="A Creative Developer & Digital Designer."
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            delay={100}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            // easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m Abdelhakim Ouchiar (OUSHI33R), a passionate Full Stack Web
              Developer based in Morocco with a sharp focus on crafting modern,
              user-centric web applications. My mission? To turn ideas into
              intuitive, high-performance digital solutions.
            </p>
            <p>
              From React.js & Next.js on the frontend to clean, scalable code in
              the backend, I ensure every project I build is both functional and
              aesthetically engaging. With experience at DevOps Crowd and
              various freelance projects, I blend technical precision with
              creative problem-solving to deliver high-quality applications.
            </p>
            <p>
              I thrive on continuous learning, innovation, and staying ahead of
              trends. Whether it’s refining UI/UX with Figma or developing
              seamless mobile experiences with React Native, I believe in
              pushing the boundaries of what’s possible in web development.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p>
            <TextPressure
              text="Let’s  build  something  amazing  together!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#22C55E"
              strokeColor="#000000"
              minFontSize={50}
              className="font-bold text-zinc-800 dark:text-zinc-100"
            />
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/aelhakim-ouchiar/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/oushiiar33/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/OUSHI33R"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:ouchiar.abdelhakim@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ouchiar.abdelhakim@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
