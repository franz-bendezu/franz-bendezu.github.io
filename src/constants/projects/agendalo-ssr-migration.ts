import { IBaseProject } from "@/interfaces/project";

export const AGENDALO_MIGRATION_SSR: IBaseProject = {
  status: "completed",
  title: "Agendalo.io - Migración a SSR",
  shortDescription:
    "Migración de la plataforma frontend a renderizado del lado del servidor (SSR) para mejorar el SEO y la posición de la plataforma.",
  description:
    "De julio a mayo de 2021, fui responsable de la migración del frontend de la plataforma. Transformé una aplicación de una sola página (SPA) en una aplicación con renderizado del lado del servidor (SSR) usando Node, mejorando el SEO para los usuarios y la posición de la plataforma en un 100%. Implementé pruebas unitarias para los nuevos componentes de la interfaz y pruebas de extremo a extremo (E2E) para los flujos actuales, reduciendo la tasa de errores.",
  tags: [
    "Vue",
    "Webpack",
    "Typescript",
    "Nuxt",
    "Node",
    "Javascript",
    "Cypress",
    "Jest",
  ],
  categoryCode: "freelance",
  technologyCodes: [
    "vue",
    "webpack",
    "typescript",
    "nuxt",
    "node",
    "javascript",
    "cypress",
    "jest",
  ],
  start: "2021-07",
  end: "2021-05",
  code: "agendalo-ssr-migration",
  projectGoals: [
    {
      title: "Migración de la arquitectura",
      description:
        "Migrar la aplicación de una sola página (SPA) a una aplicación con renderizado del lado del servidor (SSR) para mejorar el SEO y la posición de la plataforma.",
    },
    {
      title: "Optimización del Rendimiento",
      description:
        "Mejorar la eficiencia y el tiempo de carga de la aplicación para proporcionar una experiencia de usuario más fluida y rápida.",
    },
    {
      title: "Prevención de Errores en Migraciones",
      description:
        "Asegurar una transición sin problemas a la nueva arquitectura mediante pruebas exhaustivas y controles de calidad.",
    },
  ],
  keyFeatures: [
    {
      title: "Server-Side Rendering (SSR)",
      description:
        "Migración de la plataforma a una aplicación con renderizado del lado del servidor (SSR) utilizando Nuxt.js. Esto mejora la visibilidad en los motores de búsqueda y la experiencia del usuario final.",
    },
    {
      title: "Optimización de SEO",
      description:
        "Mejora de la indexación y el ranking en los motores de búsqueda mediante la implementación de SSR, asegurando que las páginas web sean correctamente indexadas y presentadas a los usuarios en los resultados de búsqueda.",
    },
    {
      title: "Implementación de Pruebas Automatizadas",
      description:
        "Desarrollo e integración de un marco de pruebas automatizadas que incluye pruebas unitarias y de extremo a extremo (E2E). Esto garantiza la estabilidad del sistema y permite una detección temprana de errores en los componentes y flujos de la aplicación.",
    },
    {
      title: "Optimización del Rendimiento",
      description:
        "Optimización del rendimiento general de la aplicación a través de SSR, asegurando tiempos de carga rápidos y una experiencia de usuario fluida. Esto incluye el ajuste de la infraestructura y la implementación de mejores prácticas para la eficiencia del sistema.",
    },
  ],
  banner: {
    src: "/images/agendalo-ssr-migration/architecture-overview.webp",
    alt: "Agendalo.io - Migración a SSR",
  },
  images: [
    {
      src: "/images/agendalo-ssr-migration/architecture-overview.webp",
      alt: "Vista General de la Arquitectura",
      description: "Vista general de la arquitectura de la migración a SSR.",
    },
    {
      src: "/images/agendalo-ssr-migration/architecture-system.webp",
      alt: "Arquitectura del Sistema",
      description:
        "Arquitectura del sistema migrado a renderizado del lado del servidor ( SSR).",
    },
  ],
};
