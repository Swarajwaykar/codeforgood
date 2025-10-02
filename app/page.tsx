"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin, Code2, ExternalLink, Trophy, GraduationCap } from "lucide-react"

/* Simple stagger helpers */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
  viewport: { once: true, margin: "-100px" },
})

function Section({
  id,
  title,
  children,
  subtitle,
}: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <motion.header {...fadeUp(0)} className="text-center">
        <h2 className="font-display text-balance text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed mx-auto">{subtitle}</p> : null}
      </motion.header>
      <div className="mt-8 md:mt-12">{children}</div>
    </section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return <Badge className="neon-border bg-transparent text-foreground">{children}</Badge>
}

function ProjectCard({
  title,
  summary,
  tags,
  href,
  repo,
  imageSrc,
  imageAlt,
}: {
  title: string
  summary: string
  tags: string[]
  href?: string
  repo?: string
  imageSrc?: string
  imageAlt?: string
}) {
  return (
    <motion.div {...fadeUp(0.05)}>
      <Card className="tilt-card glass neon-border transition hover:shadow-lg hover:shadow-primary/20">
        <CardHeader>
          <CardTitle className="font-display text-xl text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            {imageSrc ? (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-white/10">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={imageAlt || `${title} thumbnail`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className="space-y-4">
              <p className="text-muted-foreground">{summary}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-2">
                {href ? (
                  <Link href={href} className="inline-flex items-center gap-1 text-primary hover:underline">
                    <ExternalLink size={16} /> Demo
                  </Link>
                ) : null}
                {repo ? (
                  <Link href={repo} className="inline-flex items-center gap-1 text-primary hover:underline">
                    <Github size={16} /> Code
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Page() {
  return (
    <main className="relative mx-auto max-w-6xl px-4">
      {/* HERO (reference-style) */}
      <section id="hero" className="relative">
        <div className="container mx-auto grid min-h-[70svh] grid-cols-1 place-items-center gap-10 px-4 py-24 md:grid-cols-2">
          {/* Left: text block */}
          <div className="max-w-xl text-center">
            <motion.h1
              className="text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
              {...fadeUp(0)}
            >
              {"Swaraj Shahaji Waykar"}
            </motion.h1>

            <motion.p className="mt-3 text-base text-muted-foreground" {...fadeUp(0.05)}>
              {"Computer Science "}
            </motion.p>

            <motion.p className="mt-4 text-base leading-7 text-muted-foreground" {...fadeUp(0.1)}>
              {
                "Motivated Computer Science student with hands-on experience in Software development and building scalable applications .Proficient in Java and growing expertise in Spring Boot framework.Worked with cross functional teams to solve real-world problems through projects and hackathons,demonstrating adaptability,and a commitment to continuous learning and innovation."
              }
            </motion.p>

            <motion.div className="mt-6 flex flex-wrap items-center justify-center gap-2" {...fadeUp(0.15)}>
              <Link href="https://github.com/Swarajwaykar?tab=repositories">
                <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/swaraj-waykar-a56290258/">
                <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://drive.google.com/file/d/19K-55pWkYVuPbJWOFV2YQwCxhzlbgfTm/view?usp=sharing">
                <Button size="sm" className="rounded-full">
                  View Resume
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: profile image card */}
          <motion.div className="justify-self-center md:justify-self-center" {...fadeUp(0.12)}>
            <div className="relative h-52 w-52 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl md:h-60 md:w-60">
              <Image
                src="/images/swa.png"
                alt="Profile photo"
                fill
                sizes="(min-width: 768px) 240px, 208px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        title="About Me"
        subtitle="Motivated Computer Science student with hands-on experience in building scalable applications. Proficient in Java, Spring Boot, Cloud, and AI. Passionate about solving real-world problems through technology, projects, and hackathons."
      >
        <motion.div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[220px,1fr]" {...fadeUp(0.05)}>
          <div className="relative"></div>
          <Card className="tilt-card glass neon-border">
            <CardContent className="space-y-4 p-6">
              <p className="leading-relaxed">
                I enjoy crafting reliable, high-performance systems and delightful user experiences. My focus spans from
                backend architecture to interactive frontends with modern tooling.
              </p>
              <div className="flex flex-wrap gap-2">
                <Pill>Java</Pill>
                <Pill>Spring Boot</Pill>
                <Pill>MySQL</Pill>
                <Pill>REST APIs</Pill>
                <Pill>Cloud</Pill>
                <Pill>AI</Pill>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <motion.div
          className="mx-auto max-w-6xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          {...fadeUp(0.05)}
        >
          {[
            { h: "Programming", items: ["Java", "SQL"] },
            { h: "Frameworks & DB", items: ["Spring Boot", "React", "MySQL"] },
            { h: "Concepts", items: ["OOP", "DSA", "REST APIs", "OS", "Cloud Fundamentals", "Networking", "SDLC"] },
            { h: "Tools", items: ["Git", "GitHub", "CI/CD (GitHub Actions)", "Linux"] },
            { h: "Soft Skills", items: ["Communication", "Problem Solving", "Team Collaboration"] },
          ].map(({ h, items }) => (
            <Card key={h} className="tilt-card glass neon-border">
              <CardHeader>
                <CardTitle className="font-display">{h}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {items.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education" subtitle="A concise, interactive timeline of my academic journey.">
        <div className="space-y-4">
          {[
            { t: "2022–2026", title: "JSPM’s Rajarshi Shahu College of Engineering, Pune", d: "CGPA: 9.12/10" },
            { t: "2022", title: "Takshshila Junior College, Jamkhed", d: "79.33%" },
            { t: "2020", title: "L.N. Hoshing Vidyalaya, Jamkhed", d: "97.80%" },
          ].map((e, idx) => (
            <motion.div key={e.title} {...fadeUp(idx * 0.04)}>
              <div className="glass neon-border rounded-lg p-4 md:p-5">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <GraduationCap size={16} className="text-primary" />
                  <span>{e.t}</span>
                </div>
                <h3 className="mt-1 font-display text-lg">{e.title}</h3>
                <p className="text-muted-foreground">{e.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="Modern cards with hover and neon glow.">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6">
          <ProjectCard
            title="Companion-Way: AI Travel Buddy"
            summary="• Developed an AI-powered assistant with real-time facial emotion recognition for solo travelers.

 • Delivered emotion-aware responses by training machine learning models on real-time facial data.

 • Designed backend microservices using REST APIs for scalability.

 • Enhanced system responsiveness and reliability through emotion-aware conversation flows, improving user
 engagement in prototype testing"
            tags={["AI", "Emotion Recognition", "Microsevises"]}
            repo="https://github.com/Swarajwaykar/AI-Travel-Buddy-App"
            imageSrc="/ai-travel-buddy-app-thumbnail.jpg"
            imageAlt="AI Travel Buddy thumbnail"
          />
          <ProjectCard
            title="ServiSwift"
            summary=" • Developed a full-stack platform with Spring Boot and React to connect users with local providers.
 • Integrated data from APIs and databases, ensuring consistency and scalability across services.
 • Implemented JWT-based authentication; containerized services with Docker.
 • Set up CI/CD pipelines using GitHub Actions for automated testing and deployment."
            tags={["Spring Boot", "React", "Docker", "CI/CD"]}
            repo="https://github.com/Swarajwaykar/ServiSwift"
            imageSrc="/services-marketplace-thumbnail.jpg"
            imageAlt="ServiSwift thumbnail"
          />
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="tilt-card glass neon-border">
            <CardHeader>
              <CardTitle className="font-display">Technology Intern, Deloitte</CardTitle>
              <p className="text-sm text-muted-foreground">May 2025</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Requirement analysis, proposing innovative solutions, and exposure to global consulting workflows.</p>
              <div className="flex flex-wrap gap-2">
                <Pill>Analysis</Pill>
                <Pill>Solutioning</Pill>
                <Pill>Teamwork</Pill>
              </div>
            </CardContent>
          </Card>
          <Card className="tilt-card glass neon-border">
            <CardHeader>
              <CardTitle className="font-display">AI/ML Virtual Intern, AICTE & EduSkills</CardTitle>
              <p className="text-sm text-muted-foreground">Jan–Mar 2024</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Built ML models for classification tasks and strengthened analytics and experimentation skills.</p>
              <div className="flex flex-wrap gap-2">
                <Pill>ML</Pill>
                <Pill>Python</Pill>
                <Pill>Analytics</Pill>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" title="Leadership">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="tilt-card glass neon-border">
            <CardHeader>
              <CardTitle className="font-display">Technical Event Head – Competitive Coding Club</CardTitle>
              <p className="text-sm text-muted-foreground">Oct 2023–Present</p>
            </CardHeader>
          </Card>
          <Card className="tilt-card glass neon-border">
            <CardHeader>
              <CardTitle className="font-display">Student Coordinator – Dept. of Engineering Sciences</CardTitle>
              <p className="text-sm text-muted-foreground">Jan–Jul 2023</p>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" title="Achievements & Certifications">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card className="tilt-card glass neon-border">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="font-display">Highlights</CardTitle>
              <Trophy className="text-primary" />
            </CardHeader>
            <CardContent className="grid gap-2">
              <p>Runner-up — Apptware 48‑Hour Hackathon</p>
              <p>Best Performer — Avinya 24‑Hour Hackathon</p>
              <p>Organizer — CodWolf Event</p>
            </CardContent>
          </Card>
          <Card className="tilt-card glass neon-border">
            <CardHeader>
              <CardTitle className="font-display">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {[
                "Cisco Networking (2025)",
                "Oracle Cloud Infrastructure Foundation (2025)",
                "Java Programming (IIT Bombay, 2024)",
              ].map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3">
          <figure className="glass neon-border rounded-lg p-3">
            <div className="relative h-72 w-full overflow-hidden rounded-md md:h-80">
              <Image
                src="/images/achievements/apptware-48h-runner-up.png"
                alt="Group at hackathon venue holding prize cheque"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Apptware 48‑hour Hackathon — Runner‑up
            </figcaption>
          </figure>

          <figure className="glass neon-border rounded-lg p-3">
            <div className="relative h-72 w-full overflow-hidden rounded-md md:h-80">
              <Image
                src="/images/achievements/avinya-24h-best-performer.png"
                alt="Hackathon workspace with participants working on laptops"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Avinya 24‑hour Hackathon — Best Performer
            </figcaption>
          </figure>

          <figure className="glass neon-border rounded-lg p-3">
            <div className="relative h-72 w-full overflow-hidden rounded-md md:h-80">
              <Image
                src="/images/achievements/codwolf-organizer.png"
                alt="Audience seated during a club event while speakers present"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              CodWolf Event — Organizer As Technical Event Head
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="tilt-card glass neon-border">
            <CardHeader>
              <CardTitle className="font-display">Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" /> Pune, India
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-primary" /> swarajwaykar8@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-primary" /> +91 9665603711
              </p>
              <div className="mt-3 flex items-center gap-4">
                <Link
                  href="https://github.com/Swarajwaykar?tab=repositories"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/swaraj-waykar-a56290258/"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin />
                </Link>
                <Link href="https://leetcode.com/u/8x6q0DDW2A/" className="text-muted-foreground hover:text-primary">
                  <Code2 />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="tilt-card glass neon-border lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-display">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget as HTMLFormElement)
                  const name = fd.get("name") as string
                  const email = fd.get("email") as string
                  const message = fd.get("message") as string
                  const subject = encodeURIComponent(`Portfolio message from ${name}`)
                  const body = encodeURIComponent(message + `\n\nReply to: ${email}`)
                  window.location.href = `mailto:swarajwaykar8@gmail.com?subject=${subject}&body=${body}`
                }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </label>
                  <Input id="name" name="name" required className="neon-border bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" name="email" required className="neon-border bg-transparent" />
                </div>
                <div className="col-span-full space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required className="neon-border bg-transparent" />
                </div>
                <div className="col-span-full">
                  <Button
                    type="submit"
                    className="btn-glow font-display neon-border bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        {new Date().getFullYear()} {"Swaraj Shahaji Waykar"}.
      </footer>
    </main>
  )
}
