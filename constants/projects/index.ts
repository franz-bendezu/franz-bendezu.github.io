import type { IProject, IProjectCategory } from "../../interfaces/project";


export const PROJECT_CATEGORIES: IProjectCategory[] = [
  {
    name: "Freelance",
    value: "freelance",
  },
  {
    name: "Personal",
    value: "personal",
  },
  {
    name: "Demo",
    value: "demo",
  },
];

export const PROJECTS: IProject[] = [
  {
    status: "completed",
    title: "Con qué profe",
    shortDescription:
      "Diseño y desarrollo Frontend para una plataforma de comentarios acerca de docentes de la Facultad de Ingeniería Industrial y de Sistemas. de la UNI.",
    description: `Durante el período de enero a marzo de 2021, lideré el diseño y desarrollo de una plataforma innovadora que permitió a los estudiantes de la facultad compartir sus opiniones y comentarios sobre los docentes. Utilicé tecnologías modernas como Nuxt.js con Typescript en el frontend y GraphQL con Apollo Server para la consulta de datos. Además, integré el sistema de autenticación de la facultad (UNI-PASSPORT) para garantizar la seguridad y la legitimidad de los comentarios. Una de las características destacadas de esta plataforma fue la implementación de un sistema de conversaciones en hilos, que mejoró significativamente la transparencia y facilitó la retroalimentación sobre los docentes en cada uno de sus cursos.`,
    tags: ["Nuxt.js", "Typescript", "GraphQL", "Apollo Server"],
    image: {
      src: "/images/comentarios-docentes.jpg",
      alt: "Plataforma de Comentarios sobre Docentes",
    },
    link: "URL_DE_TU_PROYECTO",
    categoryCode: "personal",
  },
  {
    status: "completed",
    title: "BusUni Tracker",
    shortDescription:
      "Proyecto de Investigación IOT de localización en tiempo real del bus de la Universidad Nacional de Ingeniería.",
      description: `Desde enero hasta diciembre de 2020, asumí la responsabilidad de establecer la arquitectura y desarrollar un sistema de localización en tiempo real del bus universitario utilizando tecnologías LoT LoRaWAN. Este proyecto de investigación fue crucial para mejorar la eficiencia del transporte dentro del campus universitario. Implementé Firebase y Vue.js para la aplicación web, mientras que Cloud Functions se utilizó para recibir datos en tiempo real de la red LoRaWAN. Además, utilicé Realtime Database y Firestore para mostrar y almacenar información relevante, como rutas, conductores y trayectos recorridos. La culminación de este proyecto se reflejó en la publicación de un artículo científico con DOI: 10.1109/ISC255366.2022.9922172.`,
    tags: ["LoT LoRaWAN", "Firebase", "Vue.js", "Cloud Functions"],
    image: {
      src: "/images/busuni-tracker.jpg",
      alt: "BusUni Tracker",
    },
    link: "https://gitlab.com/horext-app",
    categoryCode: "personal",
  },
  {
    status: "completed",
    title: "Horext",
    shortDescription: "Proyecto personal para generar horarios académicos.",
    description: `En julio de 2019, llevé a cabo un proyecto independiente denominado Horext, destinado a simplificar la creación de horarios académicos para los estudiantes. Para lograr este objetivo, desarrollé una aplicación utilizando Nuxt.js en el frontend y un API REST en Spring Boot, inicialmente con Java 8 y posteriormente con Kotlin, respaldado por una base de datos PostgreSQL. Además, implementé un robusto sistema de integración y entrega continua (CI/CD) mediante GitLab y gestioné contenedores con Docker para garantizar la escalabilidad y la eficiencia del proyecto. Esta aplicación no solo generaba horarios teniendo en cuenta la carga horaria y eventos paralelos de la universidad, sino que también estaba integrada con Google Calendar para una mejor gestión de los horarios académicos de los estudiantes. Además, este proyecto se encuentra disponible como código abierto `,
    tags: ["Nuxt.js", "Spring Boot", "Java", "Kotlin", "PostgreSQL"],
    image: {
      src: "/images/horext.jpg",
      alt: "Horext",
    },
    link: "https://gitlab.com/horext-app",
    categoryCode: "personal",
  },
  {
    status: "active",
    title: "Project 1",
    shortDescription: "This is a project description",
    tags: ["Vue 3", "CSS", "Typescript"],
    image: {
      src: "/images/project-1.jpg",
      alt: "Project 1",
    },
    link: "https://github.com/franz-bendezu/franz-bendezu.github.io",
    categoryCode: "freelance",
  },
  {
    status: "completed",
    title: "Project 2",
    shortDescription: "This is a project description",
    tags: ["React", "Tailwind CSS", "Javascript"],
    image: {
      src: "/images/project-2.jpg",
      alt: "Project 2",
    },
    link: "https://github.com/franz-bendezu/franz-bendezu.github.io",
    categoryCode: "personal",
  },
  {
    status: "completed",
    title: "Project 3",
    shortDescription: "This is a project description",
    tags: ["Next.js", "SASS", "Javascript"],
    image: {
      src: "/images/project-3.jpg",
      alt: "Project 3",
    },
    link: "https://github.com/franz-bendezu/franz-bendezu.github.io",
    categoryCode: "demo",
  },
];
