export const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
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
                Vue, Nuxt, Angular, React, Next.js, Tailwind CSS, Vuetify,
                Bootstrap, Material UI, Angular Material
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Back-end</h3>
              <p className="text-muted-foreground">
                Spring Framework, Node.js, Express, Nestjs
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Cloud/ DevOps</h3>
              <p className="text-muted-foreground">
                AWS, DigitalOcean, Docker, GitHub Actions, GitLab CI/CD
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Databases</h3>
              <p className="text-muted-foreground">
                PostgreSQL, MySQL, MariaDB, MongoDB
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Tools</h3>
              <p className="text-muted-foreground">
                Git, GitHub, Gitlab, Figma, Jira, Trello, VSCode
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Testing</h3>
              <p className="text-muted-foreground">
                Vitest, Jest, Karma, Jasmine, Cypress, Junit, Mockito
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
