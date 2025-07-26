import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

type ProjectCardProp = {
  title: string;
  description: string;
  imgUrl: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  number: number;
};

export function ProductCard({
  title,
  description,
  imgUrl,
  techStack,
  githubUrl,
  // liveUrl,
  number,
}: ProjectCardProp) {


  return (
    <Card className="group flex flex-col h-full border rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-card">
      <CardHeader className="relative aspect-video overflow-hidden">
        <Image
          src={imgUrl}
          alt="Mohamed Elsayed"
          width={500}
          height={500}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 text-white/90 font-mono text-xl">
          {String(number).padStart(2, "0")}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-6">
        <CardTitle className="text-xl font-semibold mb-3">{title}</CardTitle>
        <CardDescription>
            {description}
        </CardDescription>
        <div className="space-y-6 mt-6">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter
        className={`border-t flex items-center pt-4 
          // liveUrl ? "justify-between" : "justify-end"
        `}
      >
        {/* {liveUrl && (
          <Button asChild variant="default" size="sm">
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              View Live
            </Link>
          </Button>
        )} */}
        <Button asChild variant="ghost" size="icon">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View"
          >
            <Github className="w-5 h-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
