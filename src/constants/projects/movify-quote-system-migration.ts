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
      title: "Migración a API Serverless",
      description: "Migrar el sistema de cotizaciones web a una API serverless para mejorar la disponibilidad y reducir costos.",
    },
    {
      title: "Mejora del Diseño de Correos Electrónicos",
      description: "Mejorar la compatibilidad y estética de las plantillas de correos electrónicos.",
    },
    {
      title: "Seguimiento de Analíticas",
      description: "Integración de herramientas de análisis para monitorear las métricas de compromiso de correo electrónico.",
    },
  ],
  keyFeatures: [
    {
      title: "Migración a AWS Lambda",
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
      src: "/images/movify-quote-system-migration/step-1.webp",
      alt: "Step 1",
      description: "Nuevo paso para llenar datos del cliente.",
    },
    {
      src: "/images/movify-quote-system-migration/step-2.webp",
      alt: "Step 2",
      description: "Nuevo paso para llenar datos de la mudanza.",
    },
    {
      src: "/images/movify-quote-system-migration/step-3.webp",
      alt: "Step 3",
      description: "Nuevo paso para llenar los objetos a mudar.",
    },
    {
      src: "/images/movify-quote-system-migration/step-4.webp",
      alt: "Step 4",
      description: "Nuevo paso para mostrar el precio de las opciones de mudanza.",
    },
    {
      src: "/images/movify-quote-system-migration/step-5.webp",
      alt: "Step 5",
      description: "Nuevo paso para mostrar los servicios adicionales.",
    },
  ]
};
