import { About } from "@/components/common/about";
import { Certifications } from "@/components/common/certificate";
import { Contact } from "@/components/common/contact";
import { Experience } from "@/components/common/experience";
import { Landing } from "@/components/common/landing";
import { Projects } from "@/components/common/projects";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto">
      <Landing/>
      <About/>
      <Certifications/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}
