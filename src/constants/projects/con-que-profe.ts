import type { IBaseProject } from "@/interfaces/project";

export const CON_QUE_PROFE: IBaseProject = {
  status: "completed",
  title: "Con qué profe",
  shortDescription:
    "Diseño y desarrollo frontend para una plataforma de comentarios sobre profesores en la Facultad de Ingeniería Industrial y de Sistemas de la UNI.",
  description:
    "De enero a marzo de 2021, lideré el diseño y desarrollo de una plataforma innovadora que permitía a los estudiantes compartir sus opiniones y comentarios sobre los profesores. Utilicé tecnologías modernas como Nuxt.js con Typescript en el frontend y GraphQL con Apollo Server para consultas de datos. Además, integré el sistema de autenticación de la facultad (UNI-PASSPORT) para asegurar la seguridad y legitimidad de los comentarios. Una de las características destacadas de esta plataforma fue la implementación de conversaciones en hilo, que mejoró significativamente la transparencia y facilitó los comentarios sobre los profesores en cada uno de sus cursos.",
  tags: ["Nuxt.js", "Typescript", "GraphQL", "Apollo Server"],
  banner: {
    src: "/images/con-que-profe/banner.webp",
    alt: "Teacher Comments Platform",
  },
  links: [
    {
      title: "Demo",
      url: "https://conqueprofe.orcebot.com/",
      type: "website",
    },
  ],
  categoryCode: "personal",
  technologyCodes: ["nuxt", "typescript", "graphql", "apollo-server"],
  start: "2021-01",
  end: "2021-03",
  code: "con-que-profe",
  projectGoals: [
    {
      title: "Mejorar el Feedback Estudiantil",
      description:
        "Crear una plataforma para que los estudiantes proporcionen feedback estructurado sobre los miembros del cuerpo docente.",
    },
    {
      title: "Integración de Autenticación",
      description:
        "Implementar autenticación UNI-PASSPORT para asegurar feedback seguro y legítimo.",
    },
    {
      title: "Mejorar la Transparencia",
      description:
        "Implementar conversaciones en hilo para mejorar la transparencia en las discusiones de feedback.",
    },
  ],
  keyFeatures: [
    {
      title: "Feedback Interactivo",
      description:
        "Conversaciones en hilo para discusiones detalladas y transparentes.",
    },
    {
      title: "Autenticación Segura",
      description:
        "Integración con UNI-PASSPORT para autenticación segura de usuarios.",
    },
    {
      title: "Experiencia de Usuario Personalizada",
      description:
        "Perfiles de usuario personalizables y preferencias para una usabilidad mejorada.",
    },
  ],
  images: [
    {
      src: "/images/con-que-profe/home.webp",
      alt: "Con qué profe - Home",
      description: "Página de inicio de Con qué profe",
    },
    {
      src: "/images/con-que-profe/landing.webp",
      alt: "Con qué profe - Landing",
      description: "Página de aterrizaje de Con qué profe",
    },
    {
      src: "/images/con-que-profe/send-thread.webp",
      alt: "Con qué profe - Send Thread",
      description: "Envío de un nuevo hilo de comentarios",
    },
    {
      src: "/images/con-que-profe/teacher-course-reviews.webp",
      alt: "Con qué profe - Comment Thread",
      description: "Calificación de profesores en un curso",
    },
    {
      src: "/images/con-que-profe/thread.webp",
      alt: "Con qué profe - Thread",
      description: "Hilo de comentarios de un profesor",
    },

    {
      src: "/images/con-que-profe/threads.webp",
      alt: "Con qué profe - Threads",
      description: "Hilos de comentarios de profesores",
    },
    {
      src: "/images/con-que-profe/user-profile.webp",
      alt: "Con qué profe - User Profile",
      description: "Perfil de usuario personalizado",
    },
    {
      src: "/images/con-que-profe/teacher-course-profile.webp",
      alt: "Con qué profe - Teacher Course Profile",
      description: "Perfil de un profesor en un curso",
    },
  ],
};
