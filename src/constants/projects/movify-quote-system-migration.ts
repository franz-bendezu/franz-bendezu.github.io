import { IBaseProject } from "@/interfaces/project";

export const MOVIFY_QUOTE_SYSTEM_MIGRATION:IBaseProject  = {
  status: "completed",
  title: "Movify.pe - Sistema de Cotizaciones Web (Migración)",
  lang: "es",
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

export const MOVIFY_QUOTE_SYSTEM_MIGRATION_EN: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Web Quoting System (Migration)",
  lang: "en",
  shortDescription: "Migration of the web quoting system to a serverless API.",
  description: "From July to December 2023, I migrated the backend of the web quoting system to a serverless API, improving availability and reducing server costs. I improved the compatibility of email designs with various providers, resulting in an increase in lead generation. I integrated analytics to track email views, providing valuable insights into open rates and engagement.",
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
      title: "Improve Availability and Reduce Infrastructure Costs",
      description: "Migrate the web quoting system to a serverless API to improve availability and reduce costs.",
    },
    {
      title: "Improve Email Design",
      description: "Enhance the compatibility and aesthetics of email templates.",
    },
    {
      title: "Obtain Email Metrics",
      description: "Integrate analytics tools to monitor email engagement metrics.",
    },
    {
      title: "Provide Flexibility for Email Editing",
      description: "Facilitate email editing for the marketing team.",
    },
  ],
  keyFeatures: [
    {
      title: "Migration to a Serverless API",
      description: "Backend migration to AWS Lambda to improve availability and reduce costs.",
    },
    {
      title: "Email Design",
      description: "Improved compatibility with various email providers to increase lead generation.",
    },
    {
      title: "Analytics Tracking",
      description: "Integration of analytics to track email views and improve open rates.",
    },
  ],
  images: [
    {
      src: "/images/movify-quote-system-migration/architecture-overview.webp",
      alt: "Architecture Overview",
      description: "Overview of the architecture of the web quoting system migration.",
    },
    {
      src: "/images/movify-quote-system-migration/architecture-system.webp",
      alt: "System Architecture",
      description: "Architecture of the web quoting system migrated to a serverless API.",
    },
    {
      src: "/images/movify-quote-system-migration/quote-confirmation-email-template.webp",
      alt: "Quote Confirmation Email Template",
      description: "Quote confirmation email template for the customer.",
    },
    {
      src: "/images/movify-quote-system-migration/quote-notification-email-template.webp",
      alt: "Quote Notification Email Template",
      description: "Quote notification email template for the sales team.",
    },
  ],
};
