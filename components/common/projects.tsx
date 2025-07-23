import { ProductCard } from "./project-card";

const projects: {
  title: string;
  description: string;
  imgUrl: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}[] = [
  {
  title: "Flower E-Commerce",
  description: `Flower Obsession is a bilingual e-commerce platform for floral arrangements.

As a Frontend Developer on the team, I was responsible for implementing core features and UI components using Next.js, TypeScript, and Tailwind CSS, with a focus on clean code and scalable architecture.

- Internationalization:
  • Integrated bilingual support (English & Arabic) using next-intl.

- Authentication:
  • Implemented a secure login system using next-auth.

- Product Display:
  • Built the Product Details page with dynamic routing and slugs.
  • Added "Add to Cart" functionality with state management.
  • Displayed Related Products and Related Categories dynamically.

- Admin Features:
  • Developed pages for adding new products and creating new categories, integrated with the backend REST API.

- UI/UX:
  • Built a responsive navbar and footer.
  • Ensured fully responsive layout across devices.
  • Followed clean code principles and organized components in a scalable folder structure.

The project was deployed on Vercel for optimal performance and SEO.`,
 
  imgUrl: "/project1.png",
  techStack: [
    "TypeScript",
    "Next.js",
    "Next-intl",
    "Shadcn UI",
    "Zod",
    "Server Actions",
    "React Query",
    "Custom Hooks",
    "Next-Auth",
    "Clean Code",
    "Clean Structure",
    "Team Work"
  ],
  githubUrl: "https://github.com/assmaayaser17/e-commerce-flower-shop",
  liveUrl: "https://florist-nextjs-neon.vercel.app/en"
},
{
  title: "Fitness App",
  description: `A fitness-focused web application designed with an e-commerce-like structure, allowing users to browse workouts and meal plans, and manage their accounts through a secure authentication system.

My Contributions:
- Authentication Flow:
  • Implemented "Forgot Password" and "Reset Password" features (UI + API).
  • Used React Context to store the user email and manage step-by-step flow across pages.
  • Saved progress in session storage for a persistent experience.
  • Built Protected Routes to restrict access based on user authentication status.

- Exercises Section:
  • Displayed exercises dynamically through a clean, responsive UI.
  • Fetched data from the backend API and integrated it smoothly into components.

- Meals Section:
  • Built a UI to list meal plans with structured and aesthetic design.
  • Connected to API to fetch and display meal content.`,
  
  imgUrl: "/project2.png",
  techStack: [
    "TypeScript",
    "React.js",
    "React Query",
    "Shadcn UI",
    "Zod",
    "Tailwind CSS",
    "Responsive",
    "Use-Intl",
    "Clean Code",
    "Clean Structure",
    "Team Work",
    "Custom Hook"
  ],
  githubUrl: "https://github.com/assmaayaser17/super-fitness",
  liveUrl: "https://nextjs-home-away-production.vercel.app/"
},

  {
    title: "Online-Exam",
    description: "A responsive and secure online exam platform built with React.js, TypeScript, Tailwind CSS, and React Query. The app allows users to take timed quizzes, track their scores, and receive instant feedback. It features efficient state management, authentication, and a smooth user experience across all devices. Designed with a focus on performance, accessibility, and real-time data handling.",
    imgUrl: '/project3.png',
    techStack: ['Nextjs','Typescript',"ServerAction","TailwindCss","Clean-Code","Clean-Structure","Next-Auth"],
    githubUrl: "https://github.com/assmaayaser17/Online-Exam-Opt",
    liveUrl: "https://twitch-clone-rsshonjoydas.vercel.app/"
  },

  {
  title: "Farm-Ecommerce (Freelance)",
  description: "Welcome to our official farm website, where nature meets quality. We specialize in providing a wide range of high-quality, fresh agricultural products cultivated with care and sustainability. Browse our categories, explore product details, and experience seamless access to seasonal fruits, vegetables, and export-ready goods — all with clear specifications and packaging info. Built with modern technologies like Laravel, Tailwind CSS, and a responsive design, our website ensures a smooth, user-friendly experience across all devices.",
  
  imgUrl: "/project4.png",
  techStack: ["Laravel", "Blade", "Tailwind CSS", "PHP", "MySQL","Translation","Admin-Dashboard", "Responsive Design"],
  githubUrl: "https://github.com/assmaayaser17/Farm-website", 
  liveUrl: "https://your-farm-site.com", 
},


];

export function Projects() {
  return (
    <div id="projects" className="">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => {
          return <ProductCard key={index} {...project} number={index + 1} />;
        })}
      </div>
    </div>
  );
}


