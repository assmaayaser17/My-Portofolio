import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experiences = [
 {
  company: "Elevate Tech",
  role: "Frontend Developer [Trainee]",
  period: "9 Months, 2025",
  location: "Remote – Egypt",
  responsibilities: [
    "Worked with modern technologies such as Next.js, React, and Tailwind CSS to build high-quality, responsive web interfaces.",
    "Collaborated with a cross-functional development team in an agile environment to deliver new features and maintain existing ones.",
    "Developed modular and reusable UI components using React.js and Tailwind CSS.",
    "Integrated Next.js routing and utilized Server Actions for efficient backend interactions.",
    "Implemented and managed data fetching and caching using React Query.",
    "Built multilingual support using next-intl for Arabic and English.",
    "Contributed to authentication system, including protected routes ,Next-Auth,Middlewares, and role-based access control.",
    "Maintained clean code practices and followed scalable folder structure guidelines.",
    "Gained hands-on experience with state management, server-side logic, and frontend architecture.",
     "Practiced agile methodologies and collaborated effectively with team members using Git and task management tools.",
     "Projects: ",
     "Online-Exam",
    "Flower-Shop-Ecommerce",
    "Fitness-APP"

  ],
},

{
  company: "OonTech Company ",
  role: "React Instructor (Contract)",
  period: "Present",
  location: "Remote – USA",
  responsibilities: [
    "Delivered live coding sessions and structured lessons to guide students in mastering React.js fundamentals and advanced concepts.",
    "Designed hands-on projects to help learners build practical skills in components, props, state management, and routing.",
    "Provided code reviews and technical feedback to improve students’ code quality and understanding.",
    "Introduced best practices such as clean code, reusable components, and modern React hooks.",
    "Collaborated with an international team to maintain teaching materials and adjust content based on learner feedback.",
     "learned:" ,
    "Strengthened my understanding of React by teaching core concepts in simple, digestible ways.",
    "Gained experience in technical mentoring and explaining complex ideas clearly.",
    "Improved public speaking, presentation, and communication skills.",
    "Learned how to manage time, structure content, and adapt to learners’ different paces.",
    "Collaborated remotely with a diverse international team using Git, Notion, and task management tools."
  ]
  
 
},

  {
    company: "Route Academy",
    role: "FullStack Development [Trainee]",
    period: "9 Months , 2023",
    location: "OnSite - Egypt",
    responsibilities: [
      "Completed an intensive FullStack development course focused on building scalable and secure RESTful APIs",
      "Learned and applied technologies such as Node.js, Express.js, MongoDB (Mongoose), and MySQl,react.js,Next.js,Html,Css,Js,Tailwindcss",
      "Designed and implemented authentication, authorization, product management, and order handling systems",
      "Built a complete e-commerce FullSTack application with real-world architecture and database design",
      "Collaborated with peers in remote coding sessions and received mentorship from experienced developers",
      "Projects:",
      "E-commerce",
      "Weather-App",
      "Mealfy-APP"
    ],
  },

  {
 
  role: "FreeLancer React Developer",
  company:"Self-employed",
  period: "2023 – Present",
  location: "Remote – Egypt",
  responsibilities: [
    "Delivered responsive web applications using React.js, Next.js, and Tailwind CSS.",
    "Built reusable UI components, authentication flows, dashboards, and landing pages.",
    "Used React Query for data fetching and Zod for form validation.",
    "Implemented internationalization using next-intl.",
    "Handled client communication, requirement gathering, and project delivery.",
    "Integrated server actions and followed clean code and scalable structure.",
    "Enhanced full-cycle project delivery skills from start to deployment.",
    "Strengthened communication and time management.",
    "Gained real-world problem-solving experience under client deadlines.",
    "Improved ability to work independently and maintain code quality."
  ],
}

];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Experience
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => {
          return (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-medium text-xl mb-2">{exp.role}</div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <span className="flex items-center text-muted-foreground">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {exp.company}
                </span>
                <span className="hidden sm:inline text-muted-foreground">
                  .
                </span>
                <span className="flex items-center text-muted-foreground">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  {exp.period}
                </span>
                <span className="hidden sm:inline text-muted-foreground">
                  .
                </span>
                <span className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {exp.location}
                </span>
              </div>
              <ul className="list-disc list-outside text-muted-foreground ml-4 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => {
                  return <li key={respIndex}>{resp}</li>;
                })}
              </ul>
              <div className="absolute left-0 top-0 h-full w-px bg-border sm:left-20 sm:ml-px" />
              <div className="absolute left-0 top-28 h-4 w-4 rounded-full border-2 border-primary bg-background sm:left-20 sm:ml-px" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
