import type { IBaseProject } from "@/interfaces/project";

export const MOVIFY_PAYMENT_MODULE: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Módulo de Pagos con Seguimiento de Ingresos y Gastos",
  shortDescription: "Desarrollo de un módulo de pagos con seguimiento de ingresos y gastos.",
  description: "De julio a diciembre de 2023, desarrollé un módulo de pagos para facilitar el registro de pagos y auditorías con recibos para órdenes de mudanza dentro de la infraestructura existente de la empresa. Implementé funciones para registrar transacciones de pago y asociarlas con las órdenes de mudanza respectivas, asegurando una documentación financiera precisa y rastros de auditoría. Mejoré las capacidades de informes para generar reportes detallados de los registros de pago y recibos asociados, facilitando los procesos de auditoría y análisis financiero.",
  tags: ["AWS S3", "Java", "MariaDB", "Spring Boot", "Vue.js"],
  categoryCode: "freelance",
  technologyCodes: ["aws-s3", "java", "mariadb", "spring-boot", "vue2"],
  start: "2023-07",
  end: "2023-12",
  code: "movify-payment-module",
  projectGoals: [
    {
      title: "Automatización de Procesos Financieros",
      description: "Facilitar la gestión de pagos y auditorías con un módulo integrado de ingresos y gastos.",
    },
    {
      title: "Integración con Sistemas Contables",
      description: "Integrar APIs para la generación de PDF y sincronización con sistemas contables existentes.",
    },
    {
      title: "Mejora de la Transparencia Financiera",
      description: "Implementar un sistema para mejorar la transparencia en el manejo de recursos financieros.",
    },
  ],
  keyFeatures: [
    {
      title: "Gestión de Pagos y Auditorías",
      description: "Registro de pagos y auditorías con recibos electrónicos en formato PDF.",
    },
    {
      title: "Integración de Sistemas Contables",
      description: "APIs para la generación de PDF y sincronización con sistemas contables existentes.",
    },
    {
      title: "Mejora de Transparencia",
      description: "Sistema que proporciona mayor transparencia en el manejo de los recursos financieros.",
    },
  ],
};
