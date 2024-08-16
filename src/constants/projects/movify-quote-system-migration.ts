import { IBaseProject } from "@/interfaces/project";

export const MOVIFY_QUOTE_SYSTEM_MIGRATION:IBaseProject  = {
  status: "completed",
  title: "Movify.pe - Sistema de Cotizaciones Web (Migración)",
  shortDescription: "Migración del sistema de cotizaciones web a una API serverless.",
  description: "De julio a diciembre de 2023, migré el backend del sistema de cotizaciones web a una API serverless, mejorando la disponibilidad y reduciendo los costos de servidor. Mejoré la compatibilidad del diseño de correos electrónicos con varios proveedores, lo que resultó en un aumento de la generación de clientes potenciales. Integré análisis para rastrear las vistas de correos electrónicos, proporcionando información valiosa sobre las tasas de apertura y el compromiso.",
  tags: ["Node.js", "Prisma", "AWS Lambda", "GitHub Actions", "MJML"],
  categoryCode: "freelance",
  technologyCodes: [
    "nodejs",
    "prisma",
    "aws-lambda",
    "mariadb",
    "github-actions",
    "mjml",
  ],
  start: "2023-07",
  end: "2023-12",
  banner: {
    src: "/images/movify-quote-system-migration/banner.webp",
    alt: "Movify Quote System",
  },
  code: "movify-quote-system-migration",
  projectGoals: [
    {
      title: "Mejora de la Disponibilidad y Reducción de Costos de la Infraestructura",
      description: "Migrar el sistema de cotizaciones web a una API serverless para mejorar la disponibilidad y reducir costos.",
    },
    {
      title: "Mejora del Diseño de Correos Electrónicos",
      description: "Mejorar la compatibilidad y estética de las plantillas de correos electrónicos.",
    },
    {
      title: "Obtener metricas de los correos electrónicos",
      description: "Integración de herramientas de análisis para monitorear las métricas de compromiso de correo electrónico.",
    },
    {
      title: "Ofrecer flexbilidad para la edición de correos electrónicos",
      description: "Facilitar la edición de correos electrónicos para el equipo de marketing.",
    },
  ],
  keyFeatures: [
    {
      title: "Migración a una API Serverless",
      description: "Migración del backend a AWS Lambda para mejorar la disponibilidad y reducir costos.",
    },
    {
      title: "Diseño de Correos Electrónicos",
      description: "Compatibilidad mejorada con varios proveedores de correo electrónico para aumentar la generación de clientes potenciales.",
    },
    {
      title: "Seguimiento de Analíticas",
      description: "Integración de análisis para rastrear las vistas de correos electrónicos y mejorar las tasas de apertura.",
    },
  ],
  images: [
    {
      src: "/images/movify-quote-system-migration/architecture-overview.webp",
      alt: "Vista General de la Arquitectura",
      description: "Vista general de la arquitectura de la migración del sistema de cotizaciones web.",
    },
    {
      src: "/images/movify-quote-system-migration/architecture-system.webp",
      alt: "Arquitectura del Sistema",
      description: "Arquitectura del sistema de cotizaciones web migrado a una API serverless.",
    },
    {
      src: "/images/movify-quote-system-migration/quote-confirmation-email-template.webp",
      alt: "Plantilla de Correo Electrónico de Confirmación de Cotización",
      description: "Plantilla de correo electrónico de confirmación de cotización hacia el cliente.",
    },
    {
      src: "/images/movify-quote-system-migration/quote-notification-email-template.webp",
      alt: "Plantilla de Correo Electrónico de Notificación de Cotización",
      description: "Plantilla de correo electrónico de notificación de cotización hacia el equipo de ventas.",
    },
  ],
};
