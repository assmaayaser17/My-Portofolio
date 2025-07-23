"use client";

import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { Github, Linkedin, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const navItems: { id: string; label: string }[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Mobile Header */}
        <nav className="w-full md:hidden flex items-center justify-between px-4 py-2 border-b">
          {/* Start (Menu Button) */}
          <div className="flex-1 flex justify-start">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4">
                  {navItems.map(({ id, label }) => (
                    <a
                      onClick={() => setIsOpen(false)}
                      key={id}
                      href={`#${id}`}
                      className="transition-colors duration-200"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Middle (Logo) */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="text-2xl font-bold">
              assmaa<span className="text-orange-400">.</span>
            </Link>
          </div>

          {/* End (Mode Toggle) */}
        <div className="flex-1 flex justify-end items-center gap-1">
          <a
            href="https://github.com/assmaayaser17"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors duration-200 
                   hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Github className="h-[1.2rem] w-[1.2rem] text-black dark:text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/assmaa-yaser-937ba432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors duration-200 
                   hover:bg-blue-100 dark:hover:bg-blue-700"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem] text-black dark:text-white" />
          </a>
          <ModeToggle />
        </div>
        </nav>
      </header>
      {/* Full Screen */}
      {/*  */}
      <header className="hidden md:sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:flex justify-between max-w-6xl mx-auto py-4">
        <div className="flex items-center gap-4">
          <Link className="text-2xl font-bold" href="/">
            Portofolio<span className="text-orange-500">.</span>
          </Link>
          <h1 className="text-gray-400">FrontEnd Developer</h1>
        </div>
        <nav className="flex items-center gap-6 text-gray-400">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/assmaayaser17"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors duration-200 
                   hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Github className="h-[1.2rem] w-[1.2rem] text-black dark:text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/assmaa-yaser-937ba432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors duration-200 
                   hover:bg-blue-100 dark:hover:bg-blue-700"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem] text-black dark:text-white" />
          </a>
          <ModeToggle />
        </div>
      </header>
    </>
  );
}
