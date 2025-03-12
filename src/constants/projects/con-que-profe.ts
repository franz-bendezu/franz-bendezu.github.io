import type { IBaseProject } from "@/interfaces/project";

export const CON_QUE_PROFE: IBaseProject = {
  status: "completed",
  title: {
    en: "Which Professor",
    es: "Con qué profe"
  },
  shortDescription: {
    en: "Frontend design and development for a platform to review professors at the Faculty of Industrial and Systems Engineering at UNI.",
    es: "Diseño y desarrollo frontend para una plataforma de comentarios sobre profesores en la Facultad de Ingeniería Industrial y de Sistemas de la UNI."
  },
  description: {
    en: "From January to March 2021, I led the design and development of an innovative platform that allowed students to share their opinions and comments about professors. I used modern technologies such as Nuxt.js with Typescript on the frontend and GraphQL with Apollo Server for data queries. Additionally, I integrated the faculty's authentication system (UNI-PASSPORT) to ensure the security and legitimacy of the comments. One of the standout features of this platform was the implementation of threaded conversations, which significantly improved transparency and facilitated comments on professors in each of their courses.",
    es: "De enero a marzo de 2021, lideré el diseño y desarrollo de una plataforma innovadora que permitía a los estudiantes compartir sus opiniones y comentarios sobre los profesores. Utilicé tecnologías modernas como Nuxt.js con Typescript en el frontend y GraphQL con Apollo Server para consultas de datos. Además, integré el sistema de autenticación de la facultad (UNI-PASSPORT) para asegurar la seguridad y legitimidad de los comentarios. Una de las características destacadas de esta plataforma fue la implementación de conversaciones en hilo, que mejoró significativamente la transparencia y facilitó los comentarios sobre los profesores en cada uno de sus cursos."
  },
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
  categoryCode: "freelance",
  technologyCodes: [
    "nuxt",
    "typescript",
    "graphql",
    "apollo-server",
    "nodejs",
    "vuetify",
    "vue2",
  ],
  start: "2021-01",
  end: "2021-03",
  code: "con-que-profe",
  projectGoals: [
    {
      title: {
        en: "Improve Student Feedback",
        es: "Mejorar el Feedback Estudiantil"
      },
      description: {
        en: "Create a platform for students to provide structured feedback on faculty members.",
        es: "Crear una plataforma para que los estudiantes proporcionen feedback estructurado sobre los miembros del cuerpo docente."
      }
    },
    {
      title: {
        en: "Authentication Integration",
        es: "Integración de Autenticación"
      },
      description: {
        en: "Implement UNI-PASSPORT authentication to ensure secure and legitimate feedback.",
        es: "Implementar autenticación UNI-PASSPORT para asegurar feedback seguro y legítimo."
      }
    },
    {
      title: {
        en: "Enhance Transparency",
        es: "Mejorar la Transparencia"
      },
      description: {
        en: "Implement threaded conversations to enhance transparency in feedback discussions.",
        es: "Implementar conversaciones en hilo para mejorar la transparencia en las discusiones de feedback."
      }
    }
  ],
  keyFeatures: [
    {
      title: {
        en: "Interactive Feedback",
        es: "Feedback Interactivo"
      },
      description: {
        en: "Threaded conversations for detailed and transparent discussions.",
        es: "Conversaciones en hilo para discusiones detalladas y transparentes."
      }
    },
    {
      title: {
        en: "Secure Authentication",
        es: "Autenticación Segura"
      },
      description: {
        en: "Integration with UNI-PASSPORT for secure user authentication.",
        es: "Integración con UNI-PASSPORT para autenticación segura de usuarios."
      }
    },
    {
      title: {
        en: "Personalized User Experience",
        es: "Experiencia de Usuario Personalizada"
      },
      description: {
        en: "Customizable user profiles and preferences for enhanced usability.",
        es: "Perfiles de usuario personalizables y preferencias para una usabilidad mejorada."
      }
    }
  ],
  images: [
    {
      src: "/images/con-que-profe/home.webp",
      alt: "Con qué profe - Home",
      description: {
        en: "Home page of Which Professor",
        es: "Página de inicio de Con qué profe"
      }
    },
    {
      src: "/images/con-que-profe/landing.webp",
      alt: "Con qué profe - Landing",
      description: {
        en: "Landing page of Which Professor",
        es: "Página de aterrizaje de Con qué profe"
      }
    },
    {
      src: "/images/con-que-profe/send-thread.webp",
      alt: "Con qué profe - Send Thread",
      description: {
        en: "Sending a new comment thread",
        es: "Envío de un nuevo hilo de comentarios"
      }
    },
    {
      src: "/images/con-que-profe/teacher-course-review.webp",
      alt: "Con qué profe - Comment Thread",
      description: {
        en: "Rating professors in a course",
        es: "Calificación de profesores en un curso"
      }
    },
    {
      src: "/images/con-que-profe/thread.webp",
      alt: "Con qué profe - Thread",
      description: {
        en: "Comment thread of a professor",
        es: "Hilo de comentarios de un profesor"
      }
    },
    {
      src: "/images/con-que-profe/threads.webp",
      alt: "Con qué profe - Threads",
      description: {
        en: "Comment threads of professors",
        es: "Hilos de comentarios de profesores"
      }
    },
    {
      src: "/images/con-que-profe/user-profile.webp",
      alt: "Con qué profe - User Profile",
      description: {
        en: "Customizable user profile",
        es: "Perfil de usuario personalizado"
      }
    },
    {
      src: "/images/con-que-profe/teacher-course-profile.webp",
      alt: "Con qué profe - Teacher Course Profile",
      description: {
        en: "Profile of a professor in a course",
        es: "Perfil de un profesor en un curso"
      }
    }
  ],
};
