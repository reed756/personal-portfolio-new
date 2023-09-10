import Head from 'next/head'
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

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - James Reed</title>
        <meta
          name="description"
          content="I’m James Reed. I live in London, where I develop apps for ios, android and web."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m James Reed. I live in London, where I develop apps for mobile
              and web.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                🇬🇧 Hey I'm a Front End Developer based in London!
                <br />
                🚀 I have nearly two years experience building frontends with
                Angular, JavaScript, TypeScript, and Node.js.
              </p>
              <p>
                💻 Work experience with projects, software development.
                <br />➡ Work experience in creating the front end for a brand
                new app for mobile and web at a startup using TypeScript,
                Angular, Ionic and Capacitor.
                <br />
                ➡️ Also built a dashboard there to show login and signup numbers
                as well as trends with same stack as main app plus Firebase.
                <br />➡ Development of systems with (Angular, Node.js,
                TypeScript, JavaScript, React).
                <br />
                ➡️ Familiar with Tailwind.css framework and Ionic Mobile
                framework.
                <br />
                ➡️ Familiar with Backend frameworks such as Express.js and
                Nest.js.
                <br />
                ➡️ Familiar with testing tools such as Jasmine, Karma, and Jest.
                <br />
                ➡️ Solid knowledge of SOLID programming principles.
                <br />
                ➡️ Solid knowledge of both functional programming and Object
                Oriented Programming principles.
                <br />
                ➡️ Solid knowledge of using REST API's.
                <br />
                ➡️ Experience with Agile methodology.
                <br />
                ➡️ Version control with Git and Github.
              </p>
              <p>
                🎓Coding Bootcamp Graduate Northcoders Skills Bootcamp in
                Software Development.
              </p>
              <p>
                📈 I'm always looking for things to learn or build and open to
                new challenges.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/reedandj1"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/reed756"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/james-reed-a6b413111/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:reedandj1@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                reedandj1@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
