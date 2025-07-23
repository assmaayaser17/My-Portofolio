import Image from "next/image";
import { Button } from "../ui/button";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./rainbow-highlight";

const colors = ["#F59E0B", "#10B981", "#3B82F6"];

export function Landing() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="w-64 h-64 md:w-80 md:h-80 relative">
        <Image
          src="/me.jpg"
          alt="assmaa"
          fill
          className="rounded-full object-cover border-4 border-gray-400"
        />
      </div>
      <div className="mt-3">
        <RoughNotationGroup show={true}>
          <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold mb-4">
            Assmaa Yaser
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xl sm:text-2xl md:text-3xl mb-4">
            <RainbowHighlight color={colors[1]}>
              <span>Software Engineer</span>
            </RainbowHighlight>
            <span className="hidden sm:inline">|</span>

            <RainbowHighlight color={colors[2]}>
              <span>FrontEnd Developer</span>
            </RainbowHighlight>
          </div>
        </RoughNotationGroup>
        <div className="flex flex-col justify-center items-center">
                    <p className="mt-5 mb-3 max-w-2xl text-md font-semibold sm:text-base text-center">
          Building Scalable Web Solutions to Drive Your Business Forward.
        </p>

        <Button
          asChild
          className=" px-10 py-5 text-lg font-semibold rounded-lg mt-3 mb-4 bg-orange-500 hover:bg-orange-500/80 text-black"
        >
          <a href="#contact">Let&apos;s Discuss Your Project</a>
        </Button>
        </div>
      </div>
    </div>
  );
}
