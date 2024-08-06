import type { IBaseProject } from "@/interfaces/project";

export const MY_PORTFOLIO: IBaseProject = {
  status: "active",
  title: "Mi Portafolio",
  shortDescription:
    "Portafolio personal que muestra mis proyectos y habilidades.",
  description:
    "Este es mi portafolio personal donde muestro mis proyectos, habilidades y experiencias. El portafolio está construido utilizando tecnologías web modernas, incluyendo React para el frontend y Node.js para el backend. Cuenta con un diseño responsivo, elementos interactivos y está alojado en una plataforma en la nube para alta disponibilidad.",
  tags: ["React", "Node.js", "CSS", "HTML", "JavaScript"],
  banner: {
    src: "/images/portfolio.webp",
    alt: "Mi Portafolio",
  },
  links: [
    {
      title: "Repositorio ",
      url: "https://github.com/franz-bendezu/franz-bendezu.github.io",
      type: "github",
    },
    {
      title: "Demo",
      url: "https://franzbendezu.me",
      type: "website",
    },
  ],
  categoryCode: "personal",
  technologyCodes: ["react", "nodejs", "css", "html", "typescript", "nextjs"],
  start: "2023-01",
  code: "mi-portafolio",
  projectGoals: [
    {
      title: "Mostrar Proyectos y Habilidades",
      description:
        "Mostrar mis proyectos personales y habilidades técnicas de manera profesional.",
    },
    {
      title: "Diseño adaptable a diferentes dispositivos",
      description:
        "Asegurar que el portafolio sea accesible y se vea bien en todos los dispositivos.",
    },
    {
      title: "Mostrar contenido en varios idiomas",
      description:
        "Asegurar que el contenido del portafolio esté disponible en inglés y español.",
    },
  ],
  keyFeatures: [
    {
      title: "Muestra de Proyectos",
      description:
        "Destacar mis proyectos personales con descripciones detalladas y enlaces al código fuente.",
    },
    {
      title: "Diseño Responsivo",
      description:
        "Asegurar que el portafolio sea accesible y se vea bien en todos los dispositivos.",
    },
    {
      title: "Elementos Interactivos",
      description:
        "Incluir elementos interactivos para atraer a los visitantes y proporcionar una mejor experiencia de usuario.",
    },
    {
      title: "Soporte Multilingüe",
      description: "Soporte para los idiomas inglés y español.",
    },
  ],
};
