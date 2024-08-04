export const Skills = () => {
  return (
    <section id="skills" className="bg-gray-300 w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="bg-gray-100 inline-block rounded-lg px-3 py-1 text-sm">
              My Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technologies I&apos;m Proficient In
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have a diverse set of skills across various domains of software
              development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Front-end</h3>
              <p className="text-muted-foreground">
                React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Back-end</h3>
              <p className="text-muted-foreground">
                Node.js, Express, Python, Django, Ruby on Rails
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Cloud</h3>
              <p className="text-muted-foreground">
                AWS, Google Cloud, Vercel, Netlify, Heroku
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Databases</h3>
              <p className="text-muted-foreground">
                PostgreSQL, MySQL, MongoDB, Firebase
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Tools</h3>
              <p className="text-muted-foreground">
                Git, GitHub, Figma, Jira, Trello, VSCode
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Testing</h3>
              <p className="text-muted-foreground">
                Jest, Cypress, Enzyme, React Testing Library
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
