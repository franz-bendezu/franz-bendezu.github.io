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
  code: "agendalo-migration-ssr",
  projectGoals: [
    {
      title: "Migración a SSR",
      description:
        "Migrar la aplicación de una sola página (SPA) a una aplicación con renderizado del lado del servidor (SSR) para mejorar el SEO y la posición de la plataforma.",
    },
    {
      title: "Pruebas Unitarias y E2E",
      description:
        "Implementar pruebas unitarias para los nuevos componentes de la interfaz y pruebas de extremo a extremo (E2E) para los flujos actuales.",
    },
  ],
  keyFeatures: [
    {
      title: "Transformación a SSR",
      description:
        "Transformación de una SPA en una aplicación SSR usando Node, mejorando el SEO y la posición de la plataforma.",
    },
    {
      title: "Pruebas Automatizadas",
      description:
        "Implementación de pruebas unitarias y de extremo a extremo (E2E) para reducir la tasa de errores.",
    },
  ],
  images: [
    {
      src: "/images/agendalo-migration-ssr/architecture-overview.webp",
      alt: "Vista General de la Arquitectura",
      description: "Vista general de la arquitectura de la migración a SSR.",
    },
    {
      src: "/images/agendalo-migration-ssr/architecture-system.webp",
      alt: "Arquitectura del Sistema",
      description:
        "Arquitectura del sistema migrado a renderizado del lado del servidor ( SSR).",
    },
  ],
};
