import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { SiScrimba, SiUdemy } from "react-icons/si";
import { ScrollArea } from "@/components/ui/scroll-area";

const certifications: { name: string; date: string; url: string }[] = [
  {
    name: "Front End Course at Route Acadmy",
    date: "5 May,to 9 Sep 2023",
    url: "https://drive.google.com/drive/folders/1BYR5j5N_SRr2RWlfJhEs8fiDdyDxQ2I1",
  },
  {
    name: "Mern Stack Deploma at Route Academy",
    date: " 9 Months, 2023",
    url: "https://drive.google.com/drive/u/1/folders/1BYR5j5N_SRr2RWlfJhEs8fiDdyDxQ2I1",
  },

];

export function Certifications() {
  return (
    <section className="mt-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Certifications
      </h2>
      <ScrollArea className="h-[400px] w-full rounded-md">
        <div className="pr-4">
          {" "}
          {/* Optional right padding to avoid scrollbar overlap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <a
              href="https://scrimba.com/certificate/u2wKkMsw/gfrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 items-center">
                    <SiScrimba className="ml-2 h-10 w-10 text-[#A435F0] group-hover:text-[#A435F0]/80 transition-colors" />
                    <h1 className="text-sm font-semibold mt-1">Scrimba</h1>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      The Frontend Developer Career Path
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-orange-500 text-white font-medium">
                        Feb. 9, 2023
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Click to view credential
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a> */}
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 items-center">
                      <SiUdemy className="ml-2 h-10 w-10 text-[#A435F0] group-hover:text-[#A435F0]/80 transition-colors" />
                      <h1 className="text-sm font-semibold mt-1">Udemy</h1>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {cert.name.length > 50
                          ? cert.name.substring(0, 50) + "..."
                          : cert.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-orange-500 text-white font-medium">
                          {cert.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Click to view credential
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
