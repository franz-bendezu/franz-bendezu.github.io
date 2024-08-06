import type { IBaseProject } from "@/interfaces/project";


export const CON_QUE_PROFE: IBaseProject = {
  status: "completed",
  title: "Con qué profe",
  shortDescription: "Diseño y desarrollo frontend para una plataforma de comentarios sobre profesores en la Facultad de Ingeniería Industrial y de Sistemas de la UNI.",
  description: "De enero a marzo de 2021, lideré el diseño y desarrollo de una plataforma innovadora que permitía a los estudiantes compartir sus opiniones y comentarios sobre los profesores. Utilicé tecnologías modernas como Nuxt.js con Typescript en el frontend y GraphQL con Apollo Server para consultas de datos. Además, integré el sistema de autenticación de la facultad (UNI-PASSPORT) para asegurar la seguridad y legitimidad de los comentarios. Una de las características destacadas de esta plataforma fue la implementación de conversaciones en hilo, que mejoró significativamente la transparencia y facilitó los comentarios sobre los profesores en cada uno de sus cursos.",
  tags: ["Nuxt.js", "Typescript", "GraphQL", "Apollo Server"],
  image: {
    src: "/images/comentarios-docentes.webp",
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
      description: "Crear una plataforma para que los estudiantes proporcionen feedback estructurado sobre los miembros del cuerpo docente.",
    },
    {
      title: "Integración de Autenticación",
      description: "Implementar autenticación UNI-PASSPORT para asegurar feedback seguro y legítimo.",
    },
    {
      title: "Mejorar la Transparencia",
      description: "Implementar conversaciones en hilo para mejorar la transparencia en las discusiones de feedback.",
    },
  ],
  keyFeatures: [
    {
      title: "Feedback Interactivo",
      description: "Conversaciones en hilo para discusiones detalladas y transparentes.",
    },
    {
      title: "Autenticación Segura",
      description: "Integración con UNI-PASSPORT para autenticación segura de usuarios.",
    },
    {
      title: "Experiencia de Usuario Personalizada",
      description: "Perfiles de usuario personalizables y preferencias para una usabilidad mejorada.",
    },
  ],
};
