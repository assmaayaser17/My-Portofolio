import Link from "next/link";
import { TechStack } from "./tech-stack";

export const personalInfo = [
  {
    emoji: "🎓",
    text: "Bachelor's Degree in Engineering(ComputerScience Section).",
  },
  {
    emoji: "💻",
    text: "Front End Developer with 2+ years of hands-on experience in building  applications",
  },
  {
    emoji: "📝",
    text: "Native Arabic speaker with B-level English proficiency.",
  },
   {
    emoji: "💻",
    text: "Experience on BackEnd [Node.Js]. ",
  },
];

export function About() {
  return (
    <section id="about" className="py-4 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Hi there 👋</h2>
      <p className="text-xl sm:text-2xl font-medium">
        I&apos;m passionate about building impactful software and intelligent systems.
      </p>
      <p className="text-lg text-muted-foreground">
        As a Frontend Developer and a Computer Science Graduate, I design and build responsive and engaging web applications using React, Next.js, and modern UI frameworks — combining data insights with user-centric design.
      </p>
<div className="mt-8">
  <h3 className="text-xl font-semibold mb-4">A little more about me...</h3>
  <div className="space-y-4">
    {personalInfo.map((highlight, index) => (
      <div key={index} className="flex items-start gap-4">
        <span className="text-2xl">{highlight.emoji}</span>
        <p className="text-muted-foreground">
          {highlight.text}{" "}
          {/* {highlight?.link && (
            <Link
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition duration-200"
            >
              Visit my LeetCode profile 🚀
            </Link>
          )} */}
        </p>
      </div>
    ))}
  </div>

  {/* 🔽 Add Download Resume link here */}
  <div className="mt-6">
    <Link
      href="cv.pdf"
      download
      className="text-blue-600 font-semibold underline hover:text-blue-800 transition duration-200 text-lg"
    >
      📄 Download My Resume (PDF)
    </Link>
  </div>

  {/* TechStack section */}
  <TechStack />
</div>

    </section>
  );
}
