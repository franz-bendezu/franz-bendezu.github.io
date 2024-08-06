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
