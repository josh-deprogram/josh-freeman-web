'use client';

import {
  Arrow,
  ContentBlock,
  Footer,
  Marquee,
  NavBar,
  Section,
  Tag,
} from '../components';
import Image from 'next/image';
import { Element } from 'react-scroll';

export default function Home() {
  const skills = [
    'React',
    'React Native',
    'TypeScript',
    'GraphQL',
    'NextJs',
    'NodeJs',
    'Deno',
    'CI / CD',
    'Firebase',
    'Subabase',
    'PostGres',
    'AWS',
    'Heroku',
    'CSS',
    'Tailwind',
    'Swift',
    'Java',
    'WebSockets',
    'WebGL',
    'WebXR',
    'Interactions',
    'Stripe',
    'API schemas',
  ];

  const personalSkills = [
    'Mobile Lead',
    'Effective Communicator',
    'Opinionated',
    'Creative',
    'Passionate',
    'Driven',
    'Dad Jokes',
  ];

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center pb-0 mt-0 
    bg-brand-dark-200 w-full "
    >
      <NavBar subpage />

      <div
        className="w-screen h-screen relative 
        px-4 pb-6
        bg-gradient-to-b from-brand-dark-200
       flex-col flex justify-end"
      >
        <div>
          <Element name="contact">
            <div className="md:px-10 pr-36 md:pr-96 z-10 relative self-end">
              <h1 className="text-2xl md:text-3xl lg:text-7xl text-brand-dark-950">
                Contact me.
              </h1>
            </div>

            <div>
              <Arrow />
            </div>

            <div className="z10 relative flex justify-start items-start"></div>
          </Element>
        </div>
      </div>

      <Section className="items-start justify-start overflow-x-hidden">
        <div className="mx-auto">
          <div className="group box-content">
            <div
              className="absolute top-12
              scale-75 md:scale-100 lg:scale-110
              translate-x-1/3 md:-translate-x-0 lg:-translate-x-3
              transition-all
              group-hover:shadow-[-16px_16px_0px_0px_#f2ff41] group-hover:md:shadow-[16px_16px_0px_0px_#f2ff41]"
            >
              <Image
                src="/images/me-avatar-large.jpg"
                alt="Josh Freeman"
                width={430}
                height={400}
              />
            </div>
            <ContentBlock className="mt-[400px]">
              <h2 className="text-2xl md:text-3xl lg:text-5xl text-left text-brand-dark-950">
                <span className="text-brand-600 group-hover:text-brand-300">
                  _{' '}
                </span>
                At The Garden Gate
              </h2>
              <div className="text-lg md:text-xl lg:text-xl text-brand-dark-950 pt-4">
                Proficient in interface development, cross-platform mobile,
                mobile architecture, and implementing seamless UI/UX experiences
                on Web and Mobile. With over 15 years of extensive experience in
                the digital industry spanning product development, user
                experience design, and advertising. Possessing an unwavering
                passion for crafting interfaces, products, and applications that
                deliver exceptional performance, and break technological
                boundaries.
                <div className="h-3" />
                Experience across CI/CD pipelines and PostGres databases. Very
                comfortable taking on a project solo in its entirety or
                working/leading a team of developers. My key skills include
                leading mobile projects, interface development, cross-platform
                mobile development, and creating performant UI.
                <div className="h-3" />
                My preferred languages and frameworks include React, React
                Native, TypeScript, GraphQL, NextJs, Unity3D, and plain old
                JavaScript. A very keen interest in new technologies and
                utilising such to advance projects forwards
              </div>

              <p className="pt-4 text-brand-dark-500 flex flex-row text-sm">
                <Image
                  priority
                  src={'/images/pin.svg'}
                  width={18}
                  height={18}
                  alt="Location"
                  className="pr-1"
                />
                Located near Byron Bay 🌴 Australia.
              </p>
            </ContentBlock>
          </div>

          <div className="h-4" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
