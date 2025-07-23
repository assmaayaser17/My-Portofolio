"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }).max(50),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }).max(1000),
});

export function Contact() {
  const email = "assmaayaser800@gmail.com";
  const phoneNumber = "201093089774";
  const message = "Hi! I'm interested in working with you.";
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      toast.success("Email copied to clipboard!");
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("https://formspree.io/f/xnqyrvly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(
          <>
            Something went wrong. You can also reach me at{" "}
            <a href={`mailto:${email}`} className="underline text-blue-400">
              {email}
            </a>
          </>
        );
      }
    } catch (_) {
      toast.error(
        <>
          Failed to send message. You can contact me directly at{" "}
          <a href={`mailto:${email}`} className="underline text-blue-400">
            {email}
          </a>
        </>
      );
    }
  };

  return (
    <section id="contact">
      <div className="gap-y-4 p-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Get in touch</h2>
        <p className="text-center text-gray-400 text-lg">
          If working together sounds like perfect match (like coffee and code ☕💻), let&apos;s connect!
        </p>

        <div className="flex items-center gap-5 justify-center mt-10">
             <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 px-2 py-2 text-white font-semibold rounded-lg shadow-md transition text-center "
              >
                Chat with me on WhatsApp
              </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <MessageSquare className="mr-2" />
                Send Message
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send a message</DialogTitle>
                <DialogDescription>
                  Fill out the form below and I&apos;ll get back to you ASAP
                </DialogDescription>
              </DialogHeader>
                
           



              {/* Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            className="resize-none"
                            rows={5}
                            placeholder="Leave a message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center justify-center gap-4 w-4/5 mx-auto my-6">
          <div className="flex-grow h-px bg-muted-foreground/20" />
          <span className="text-muted-foreground text-sm">or</span>
          <div className="flex-grow h-px bg-muted-foreground/20" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <Button onClick={handleCopy}>
            <Mail className="mr-2" />
            Copy Email Address
          </Button>

          <Button variant="outline" asChild>
            <Link href="https://github.com/assmaayaser17" target="_blank">
              <Github className="mr-2" />
              Connect on GitHub
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="https://www.linkedin.com/in/assmaa-yaser-937ba432a" target="_blank">
              <Linkedin className="mr-2" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
