import { IBaseProject } from "@/interfaces/project";

export const MOVIFY_QUOTE_SYSTEM_IMPROVEMENT:IBaseProject  = {
  status: "completed",
  title: "Movify.pe - Mejora del Sistema de Cotizaciones Web",
  shortDescription: "Mejora del sistema de cotizaciones web.",
  description: "De octubre a diciembre de 2021, mejoré la interfaz del sistema de cotizaciones web integrando un estilo personalizado para Google Maps y estableciendo una nueva UI/UX para cada paso de la cotización y la plantilla de correo electrónico. Migré un iframe a un plugin de WordPress para un mejor manejo de actualizaciones. Desarrollé funciones para la captura de clientes potenciales y datos de auditoría.",
  tags: ["React", "JavaScript", "HTML", "CSS", "WordPress"],
  categoryCode: "freelance",
  technologyCodes: [
    "react",
    "javascript",
    "mariadb",
    "html",
    "css",
    "wordpress",
    "bootstrap",
  ],
  start: "2021-10",
  end: "2021-12",
  image: {
    src: "/images/movify-quote-system-improvement/banner.webp",
    alt: "Movify Quote System",
  },
  code: "movify-quote-system-improvement",
  projectGoals: [
    {
      title: "Mejora de la Interfaz de Usuario",
      description: "Integrar un estilo personalizado de Google Maps y mejorar la UI/UX para el proceso de cotización.",
    },
    {
      title: "Mejorar el proceso de actualización",
      description: "Migrar un iframe a un plugin de WordPress para un mejor manejo de actualizaciones.",
    },
    {
      title: "Captura de Clientes Potenciales",
      description: "Desarrollar funciones para capturar clientes potenciales y datos de auditoría.",
    },
  ],
  keyFeatures: [
    {
      title: "Estilo Personalizado de Google Maps",
      description: "Integración de un estilo personalizado de Google Maps para una mejor experiencia de usuario.",
    },
    {
      title: "Migración a WordPress",
      description: "Migración de un iframe a un plugin de WordPress para una mejor gestión de actualizaciones.",
    },
    {
      title: "Captura de Clientes Potenciales",
      description: "Desarrollo de funciones para capturar clientes potenciales y datos de auditoría.",
    },
  ],
};
