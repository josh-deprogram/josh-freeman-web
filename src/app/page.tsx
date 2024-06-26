'use client';

import {
  Arrow,
  Avalible,
  Canvas,
  ChatInput,
  ContentBlock,
  Footer,
  Heading,
  Marquee,
  MarqueeLogos,
  MarqueeProjects,
  NavBar,
  Section,
  Tag,
  TextAni,
} from './components';
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
    'GCP',
    'Heroku',
    'CSS',
    'Tailwind',
    'Swift',
    'Java',
  ];

  const dabbled = [
    'WebGL',
    'ThreeJS / R3F',
    'WebSockets',
    'WebXR',
    'VR /AR',
    'Unity3D',
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
      <NavBar />

      <div
        className="w-screen h-screen relative 
        px-4 pb-6
        bg-gradient-to-b from-brand-dark-200
       flex-col flex justify-end"
      >
        <div className="flex h-full justify-center items-center pt-28">
          <Heading
            title="Josh Freeman"
            description="Well hello 👋, this is the hub of"
          />
        </div>
        <div>
          <Element name="profile">
            <div className="md:px-10 pr-36 md:pr-86 z-10 relative self-end">
              <TextAni className="text-2xl md:text-3xl lg:text-7xl text-brand-dark-950">
                Senior Interface developer{' '}
              </TextAni>
              <TextAni
                delay={0.3}
                className="text-2xl md:text-3xl lg:text-7xl text-brand-dark-950"
              >
                across Mobile and Web.
              </TextAni>
            </div>

            <div>
              <Arrow />
            </div>

            <div className="z10 relative flex justify-start items-start"></div>
          </Element>
        </div>
      </div>

      <Section className="items-start justify-start overflow-x-hidden">
        <div className="mx-auto ">
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
              <TextAni className="text-2xl md:text-3xl lg:text-5xl text-left text-brand-dark-950">
                <span className="text-brand-600 group-hover:text-brand-300">
                  _{' '}
                </span>
                Profile
              </TextAni>
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

          <Element name="experience">
            <ContentBlock className="overflow-hidden group pb-10 ">
              <TextAni className="pt-2  text-2xl md:text-3xl lg:text-5xl text-left text-brand-dark-950">
                <span className="text-brand-600 group-hover:text-brand-300">
                  _{' '}
                </span>
                Work Experience
              </TextAni>

              <div className="pb-24">
                <p className="pt-12 text-brand-dark-500">I have worked with:</p>
                <div className="absolute left-0 pt-4">
                  <MarqueeLogos label="more passion more energy more footwork" />
                </div>

                <p className="pt-4 pb-4 text-brand-dark-500 mt-24">
                  Selected projects:
                </p>
                <div className="h-44">
                  <div className="absolute left-0 h-[200px] pt-4">
                    <MarqueeProjects />
                  </div>
                </div>
              </div>
            </ContentBlock>
          </Element>
          <div className="h-4" />

          <Element name="skills">
            <ContentBlock className="group">
              <TextAni className="text-2xl md:text-3xl lg:text-5xl text-left text-brand-dark-950">
                <span className="text-brand-600 group-hover:text-brand-300">
                  _{' '}
                </span>
                Key Skills
              </TextAni>
              <p className="pt-8 text-brand-800 mt-4">Technical:</p>
              <div className="flex flex-row flex-wrap mt-4 gap-4">
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
              <p className="pt-4 text-brand-800 mt-4">Dabbled In:</p>
              <div className="flex flex-row flex-wrap mt-4 gap-4">
                {dabbled.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
              <p className="pt-8 text-brand-800">Personal Traits:</p>
              <div className="flex flex-row flex-wrap mt-4 gap-4">
                {personalSkills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </ContentBlock>
          </Element>

          <div className="h-4" />

          <Element name="ask">
            <ContentBlock className="group">
              <TextAni className="text-2xl md:text-3xl lg:text-5xl text-left text-brand-dark-950">
                <span className="text-brand-600 group-hover:text-brand-300">
                  _{' '}
                </span>
                Ask my assistant
              </TextAni>
              <div className="relative mt-8 w-full">
                <ChatInput
                  personaId={'asst_AX9LyuTjONDaBWZEQdzTbr0H'}
                  welcomeMsg="Hey whats going on ask me something about my work experience"
                />
              </div>
            </ContentBlock>
          </Element>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
