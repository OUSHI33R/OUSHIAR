import type React from 'react'
import { Card } from '@/components/ui/card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiFramer,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSanity,
  SiClickup,
  SiTrello,
  SiNotion,
  SiSpotify,
  SiRaycast,
  SiDribbble,
  SiBehance,
} from 'react-icons/si'
import { GiProcessor } from 'react-icons/gi'
import { FaLanguage } from 'react-icons/fa'
import { VscAzureDevops } from 'react-icons/vsc'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  icon: Icon,
  children,
}: {
  title: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-3">
        {Icon && <Icon className="text-primary mt-1 h-5 w-5 flex-shrink-0" />}
        <div>
          <h3 className="text-primary text-lg font-semibold">
            {href ? (
              <a href={href} className="hover:underline">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <div className="text-muted-foreground mt-2">{children}</div>
        </div>
      </div>
    </Card>
  )
}

export const metadata = {
  title: 'Skills & Tools',
  description: 'Programming languages, frameworks, tools, and languages I use.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Skills, Tools & Languages"
      intro="A comprehensive overview of my technical skills, tools, and languages that I use to build modern web applications."
    >
      <div className="space-y-20">
        <ToolsSection title="Programming Languages">
          <Tool title="JavaScript (ES6+)" icon={SiJavascript}>
            My primary programming language for web development. I leverage
            modern ES6+ features like arrow functions, destructuring, and
            async/await for clean, efficient code.
          </Tool>
          <Tool title="TypeScript" icon={SiTypescript}>
            I use TypeScript for all my projects to ensure type safety, improve
            code quality, and make refactoring more reliable with static type
            checking.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Frameworks">
          <Tool title="React.js" icon={SiReact}>
            My go-to library for building user interfaces with a component-based
            architecture that makes code reusable and maintainable.
          </Tool>
          <Tool title="Next.js" icon={SiNextdotjs}>
            I leverage Next.js for its hybrid rendering strategies, built-in
            routing, and optimized performance features like image optimization
            and automatic code splitting.
          </Tool>
          <Tool title="React Native" icon={SiReact}>
            For cross-platform mobile app development, allowing me to use my
            React skills to build native mobile experiences for iOS and Android.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Styling">
          <Tool title="Tailwind CSS" icon={SiTailwindcss}>
            My preferred styling approach using utility classes for rapid UI
            development without leaving HTML. Perfect for consistent designs
            with minimal CSS.
          </Tool>
          <Tool title="Styled Components" icon={SiStyledcomponents}>
            For component-specific styling with the power of CSS-in-JS, enabling
            dynamic styling based on props and theme variables.
          </Tool>
          <Tool title="ShadcnUI" icon={GiProcessor}>
            A collection of beautifully designed, accessible components built on
            Radix UI primitives that I use as building blocks for consistent
            interfaces.
          </Tool>
          <Tool title="Framer Motion" icon={SiFramer}>
            For adding fluid animations and micro-interactions that elevate the
            user experience with a declarative API that makes complex animations
            simple.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Tools">
          <Tool title="Git" icon={SiGit}>
            Essential for version control, allowing me to track changes, work on
            features in isolation, and collaborate effectively with other
            developers.
          </Tool>
          <Tool title="GitHub" icon={SiGithub}>
            For hosting repositories, managing projects, and implementing CI/CD
            workflows through GitHub Actions to automate testing and deployment.
          </Tool>
          <Tool title="Vercel" icon={SiVercel}>
            My preferred deployment platform for frontend applications, offering
            seamless integration with Git, preview deployments, and global CDN.
          </Tool>
          <Tool title="Figma" icon={SiFigma}>
            For reviewing designs, collaborating with designers, and
            occasionally creating my own UI mockups and prototypes.
          </Tool>
          <Tool title="Adobe Photoshop" icon={SiAdobephotoshop}>
            For image editing, optimization, and creating custom graphics when
            needed for projects that require more advanced image manipulation.
          </Tool>
          <Tool title="Adobe Illustrator" icon={SiAdobeillustrator}>
            For working with vector graphics, creating custom icons, and
            designing logos that scale perfectly across different screen sizes.
          </Tool>
          <Tool title="Sanity" icon={SiSanity}>
            My preferred headless CMS for content-driven websites, offering a
            flexible content modeling system and a great editing experience.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Backend">
          <Tool title="Gadget" icon={GiProcessor}>
            A backend platform that helps me build and scale applications
            quickly with built-in authentication, data modeling, and API
            generation.
          </Tool>
          <Tool title="Convex" icon={GiProcessor}>
            A backend-as-a-service that provides real-time database capabilities
            with automatic syncing between server and client.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Methodologies">
          <Tool title="Azure DevOps Services" icon={VscAzureDevops}>
            For project management, CI/CD pipelines, and team collaboration on
            larger enterprise projects with integrated testing and deployment.
          </Tool>
          <Tool title="ClickUp" icon={SiClickup}>
            For task management, documentation, and project planning with
            features like time tracking, goals, and custom workflows.
          </Tool>
          <Tool title="Trello" icon={SiTrello}>
            For visual project management using Kanban boards to track progress
            and organize tasks in a simple, intuitive interface.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity">
          <Tool title="Notion" icon={SiNotion}>
            My digital workspace for notes, documentation, and knowledge
            management. I use it to organize projects, create documentation, and
            track personal goals.
          </Tool>
          <Tool title="Spotify" icon={SiSpotify}>
            Essential for my workflow, providing background music that helps me
            focus during coding sessions. Lo-fi beats and instrumental tracks
            are my go-to.
          </Tool>
          <Tool title="Behance" icon={SiBehance}>
            A great platform for finding creative inspiration and exploring
            high-quality design projects. I use it to stay updated on trends and
            discover new ideas.
          </Tool>
          <Tool title="Dribbble" icon={SiDribbble}>
            My go-to source for UI/UX inspiration. I browse Dribbble to get
            design ideas, explore creative layouts, and refine my visual
            aesthetics.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Languages">
          <Tool title="Tamazight" icon={FaLanguage}>
            My native language, giving me a unique cultural perspective and
            communication skills within North African communities.
          </Tool>
          <Tool title="Arabic" icon={FaLanguage}>
            Fluent in both spoken and written Arabic, allowing me to work
            effectively with clients and teams across the Middle East and North
            Africa.
          </Tool>
          <Tool title="French" icon={FaLanguage}>
            Intermediate proficiency in French, enabling me to understand
            requirements and communicate with French-speaking stakeholders.
          </Tool>
          <Tool title="English" icon={FaLanguage}>
            Intermediate professional proficiency, sufficient for technical
            documentation, international collaboration, and client
            communication.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
