import type { IBaseProject } from "@/interfaces/project";

export const MY_PORTFOLIO: IBaseProject = {
  status: "active",
  lang: "es",
  title: "Mi Portafolio",
  shortDescription:
    "Portafolio personal que muestra mis proyectos y habilidades.",
  description:
    "Este es mi portafolio personal donde muestro mis proyectos, habilidades y experiencias. El portafolio está diseñado para ser accesible y mostrar mi trabajo de una manera profesional. Incluye una sección de proyectos con descripciones detalladas y enlaces al código fuente, así como una sección de habilidades que destaca mis conocimientos técnicos. El portafolio también es multilingüe, con soporte para inglés y español.",
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
    {
      title: "SEO Optimizado",
      description:
        "Optimización para motores de búsqueda para mejorar la visibilidad del portafolio.",
    },
    {
      title: "Modo Oscuro",
      description:
        "Soporte para modo oscuro para mejorar la experiencia de usuario en entornos con poca luz.",
    },
  ],
};

export const MY_PORTFOLIO_EN: IBaseProject = {
  status: "active",
  title: "My Portfolio",
  lang: "en",
  shortDescription: "Personal portfolio showcasing my projects and skills.",
  description: "This is my personal portfolio where I showcase my projects, skills, and experiences. The portfolio is designed to be accessible and to display my work in a professional manner. It includes a projects section with detailed descriptions and links to the source code, as well as a skills section that highlights my technical knowledge. The portfolio is also multilingual, with support for English and Spanish.",
  tags: ["React", "Node.js", "CSS", "HTML", "JavaScript"],
  banner: {
    src: "/images/portfolio.webp",
    alt: "My Portfolio",
  },
  links: [
    {
      title: "Repository",
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
  code: "my-portfolio",
  projectGoals: [
    {
      title: "Showcase Projects and Skills",
      description: "Showcase my personal projects and technical skills in a professional manner.",
    },
    {
      title: "Responsive Design",
      description: "Ensure the portfolio is accessible and looks good on all devices.",
    },
    {
      title: "Multilingual Content",
      description: "Ensure the portfolio content is available in both English and Spanish.",
    },
  ],
  keyFeatures: [
    {
      title: "Project Showcase",
      description: "Highlight my personal projects with detailed descriptions and links to the source code.",
    },
    {
      title: "Responsive Design",
      description: "Ensure the portfolio is accessible and looks good on all devices.",
    },
    {
      title: "Interactive Elements",
      description: "Include interactive elements to engage visitors and provide a better user experience.",
    },
    {
      title: "Multilingual Support",
      description: "Support for both English and Spanish languages.",
    },
    {
      title: "SEO Optimized",
      description: "Optimization for search engines to improve the portfolio's visibility.",
    },
    {
      title: "Dark Mode",
      description: "Support for dark mode to enhance user experience in low-light environments.",
    },
  ],
};
