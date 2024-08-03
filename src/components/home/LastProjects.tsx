import Image from "next/image";
import Link from "next/link";

export default function LastProjects() {
  return (
    <section id="projects" className="bg-muted w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Latest Projects
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a selection of my recent web development projects,
              showcasing my skills and creativity.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <Link
            href="#"
            className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group grid h-auto w-full justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Project 1"
              className="mx-auto aspect-video overflow-hidden rounded-md object-cover object-center"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-bold">Project 1</h3>
              <p className="text-muted-foreground">
                A modern web application built with the latest technologies.
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group grid h-auto w-full justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Project 2"
              className="mx-auto aspect-video overflow-hidden rounded-md object-cover object-center"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-bold">Project 2</h3>
              <p className="text-muted-foreground">
                A responsive and user-friendly web application.
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group grid h-auto w-full justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Project 3"
              className="mx-auto aspect-video overflow-hidden rounded-md object-cover object-center"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-bold">Project 3</h3>
              <p className="text-muted-foreground">
                A scalable and performant web application.
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group grid h-auto w-full justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Project 4"
              className="mx-auto aspect-video overflow-hidden rounded-md object-cover object-center"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-bold">Project 4</h3>
              <p className="text-muted-foreground">
                A visually stunning and interactive web application.
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group grid h-auto w-full justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Project 5"
              className="mx-auto aspect-video overflow-hidden rounded-md object-cover object-center"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-bold">Project 5</h3>
              <p className="text-muted-foreground">
                A mobile-friendly and accessible web application.
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group grid h-auto w-full justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              width="400"
              height="300"
              alt="Project 6"
              className="mx-auto aspect-video overflow-hidden rounded-md object-cover object-center"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-bold">Project 6</h3>
              <p className="text-muted-foreground">
                A feature-rich and innovative web application.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
