import type { IBaseProject } from "@/interfaces/project";

export const HOREXT: IBaseProject = {
  status: "completed",
  title: "Horext",
  shortDescription: "Proyecto personal para generar horarios académicos.",
  description: "En julio de 2019, llevé a cabo un proyecto independiente denominado Horext, destinado a simplificar la creación de horarios académicos para los estudiantes. Para lograr este objetivo, desarrollé una aplicación utilizando Nuxt.js en el frontend y un API REST en Spring Boot, inicialmente con Java 8 y posteriormente con Kotlin, respaldado por una base de datos PostgreSQL. Además, implementé un robusto sistema de integración y entrega continua (CI/CD) mediante GitLab y gestioné contenedores con Docker para garantizar la escalabilidad y la eficiencia del proyecto. Esta aplicación no solo generaba horarios teniendo en cuenta la carga horaria y eventos paralelos de la universidad, sino que también estaba integrada con Google Calendar para una mejor gestión de los horarios académicos de los estudiantes. Además, este proyecto se encuentra disponible como código abierto.",
  tags: ["Nuxt.js", "Spring Boot", "Java", "Kotlin", "PostgreSQL"],
  banner: {
    src: "/images/horext.webp",
    alt: "Horext",
  },
  links: [
    {
      title: "Código fuente",
      url: "https://gitlab.com/horext-app",
      type: "gitlab",
    },
    {
      title: "Demo",
      url: "https://horext.octatec.io",
      type: "website",
    },
  ],
  categoryCode: "personal",
  technologyCodes: ["nuxt", "spring-boot", "java", "kotlin", "postgresql"],
  start: "2019-07",
  code: "horext",
  lang: "es",
  projectGoals: [
    {
      title: "Gestión Eficiente de Horarios",
      description: "Simplificar la creación y gestión de horarios académicos para estudiantes.",
    },
    {
      title: "Integración con Herramientas de Calendario",
      description: "Integrar con Google Calendar para sincronización de horarios sin problemas.",
    },
    {
      title: "Escalabilidad y Código Abierto",
      description: "Garantizar la escalabilidad mediante Docker y contribuir a la comunidad como un proyecto de código abierto.",
    },
  ],
  keyFeatures: [
    {
      title: "Integración con Calendario",
      description: "Sincronización de horarios con Google Calendar para una gestión eficiente.",
    },
    {
      title: "Generación Automatizada de Horarios",
      description: "Generación de horarios basada en la carga horaria y eventos paralelos de la universidad.",
    },
    {
      title: "Comunidad de Código Abierto",
      description: "Disponibilidad del proyecto como código abierto para contribuciones y mejoras continuas.",
    },
  ],
};

export const HOREXT_EN: IBaseProject = {
  status: "completed",
  title: "Horext",
  shortDescription: "Personal project to generate academic schedules.",
  description: "In July 2019, I carried out an independent project called Horext, aimed at simplifying the creation of academic schedules for students. To achieve this goal, I developed an application using Nuxt.js on the frontend and a REST API in Spring Boot, initially with Java 8 and later with Kotlin, backed by a PostgreSQL database. Additionally, I implemented a robust continuous integration and delivery (CI/CD) system using GitLab and managed containers with Docker to ensure the scalability and efficiency of the project. This application not only generated schedules considering the university's workload and parallel events but was also integrated with Google Calendar for better management of students' academic schedules. Furthermore, this project is available as open source.",
  tags: ["Nuxt.js", "Spring Boot", "Java", "Kotlin", "PostgreSQL"],
  banner: {
    src: "/images/horext.webp",
    alt: "Horext",
  },
  links: [
    {
      title: "Source Code",
      url: "https://gitlab.com/horext-app",
      type: "gitlab",
    },
    {
      title: "Demo",
      url: "https://horext.octatec.io",
      type: "website",
    },
  ],
  categoryCode: "personal",
  technologyCodes: ["nuxt", "spring-boot", "java", "kotlin", "postgresql"],
  start: "2019-07",
  code: "horext",
  lang: "en",
  projectGoals: [
    {
      title: "Efficient Schedule Management",
      description: "Simplify the creation and management of academic schedules for students.",
    },
    {
      title: "Integration with Calendar Tools",
      description: "Integrate with Google Calendar for seamless schedule synchronization.",
    },
    {
      title: "Scalability and Open Source",
      description: "Ensure scalability through Docker and contribute to the community as an open-source project.",
    },
  ],
  keyFeatures: [
    {
      title: "Calendar Integration",
      description: "Schedule synchronization with Google Calendar for efficient management.",
    },
    {
      title: "Automated Schedule Generation",
      description: "Generation of schedules based on the university's workload and parallel events.",
    },
    {
      title: "Open Source Community",
      description: "Availability of the project as open source for continuous contributions and improvements.",
    },
  ],
};
