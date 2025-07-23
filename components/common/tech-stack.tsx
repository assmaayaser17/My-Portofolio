import { CgVercel } from "react-icons/cg";
import { DiDocker } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGit,
  SiMysql,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiJsonwebtokens,
  SiPostman,
  SiSwagger,
  SiRedux,
  SiJest,
} from "react-icons/si";

const frontEndStack = [
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  {icon : SiRedux, name: "Redux"},
  {icon : RiTailwindCssFill, name: "Tailwind"},
];

const backEndStack = [
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMysql, name: "NOSQL" },
];

const devTools = [
  { icon: SiGit, name: "Git" },
  { icon: SiGit, name: "GitHub" },
  { icon: SiPostman, name: "Postman" },
  { icon: CgVercel, name: "Vercel" },
];

export function TechStack() {
  return (
    <div className="py-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Stack */}
        <div>
          <h4 className="text-lg font-medium mb-4">Frontend</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 border p-5">
            {frontEndStack.map(tech => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center group"
              >
                <tech.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="mt-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Stack */}
        <div>
          <h4 className="text-lg font-medium mb-4">Backend</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 border p-5">
            {backEndStack.map(tech => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center group"
              >
                <tech.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="mt-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>


        <div>
          <h4 className="text-lg font-medium mb-4">Dev Tools & Runtime</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 border p-5">
            {devTools.map(tech => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center group"
              >
                <tech.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="mt-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
