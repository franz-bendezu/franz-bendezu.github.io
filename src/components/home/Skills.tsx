import { useTranslations } from "next-intl";

export const Skills = () => {
  const t = useTranslations("Home.skills");
  return (
    <section id="skills" className="w-full bg-gray-300 py-6 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-900 px-3 py-1 text-sm">
              {t("label")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("title")}
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="grid items-start gap-6 py-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{t("frontend") }</h3>
            <p className="text-muted-foreground">
              Vue, Nuxt, Angular, React, Next.js, Tailwind CSS, Vuetify,
              Bootstrap, Material UI, Angular Material
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{ t("backend") }</h3>
            <p className="text-muted-foreground">
              Spring Framework, Node.js, Express, Nestjs
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{ t("cloud") }</h3>
            <p className="text-muted-foreground">
              AWS: S3, EC2, RDS, Lambda, API Gateway, CloudFront, Route 53,
              DigitalOcean
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{ t("devops") }</h3>
            <p className="text-muted-foreground">
              AWS, Docker, GitHub Actions, GitLab CI/CD
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{ t("databases") }</h3>
            <p className="text-muted-foreground">
              PostgreSQL, MySQL, MariaDB, MongoDB
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{ t("tools") }</h3>
            <p className="text-muted-foreground">
              Git, GitHub, Gitlab, Figma, Jira, Trello, VSCode
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{ t("testing") }</h3>
            <p className="text-muted-foreground">
              Vitest, Jest, Karma, Jasmine, Cypress, Junit, Mockito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
