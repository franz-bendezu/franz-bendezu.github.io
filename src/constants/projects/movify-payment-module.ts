import type { IBaseProject } from "@/interfaces/project";

export const MOVIFY_PAYMENT_MODULE: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Módulo de Pagos con Seguimiento de Ingresos y Gastos",
  lang: "es",
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

export const MOVIFY_PAYMENT_MODULE_EN: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Payment Module with Income and Expense Tracking",
  lang: "en",
  shortDescription: "Development of a payment module with income and expense tracking.",
  description: "From July to December 2023, I developed a payment module to facilitate the registration of payments and audits with receipts for moving orders within the company's existing infrastructure. I implemented functions to register payment transactions and associate them with the respective moving orders, ensuring accurate financial documentation and audit trails. I improved reporting capabilities to generate detailed reports of payment records and associated receipts, facilitating audit processes and financial analysis.",
  tags: ["AWS S3", "Java", "MariaDB", "Spring Boot", "Vue.js"],
  categoryCode: "freelance",
  technologyCodes: ["aws-s3", "java", "mariadb", "spring-boot", "vue2"],
  start: "2023-07",
  end: "2023-12",
  code: "movify-payment-module",
  projectGoals: [
    {
      title: "Automation of Financial Processes",
      description: "Facilitate the management of payments and audits with an integrated income and expense module.",
    },
    {
      title: "Integration with Accounting Systems",
      description: "Integrate APIs for PDF generation and synchronization with existing accounting systems.",
    },
    {
      title: "Improvement of Financial Transparency",
      description: "Implement a system to improve transparency in the management of financial resources.",
    },
  ],
  keyFeatures: [
    {
      title: "Payment and Audit Management",
      description: "Registration of payments and audits with electronic receipts in PDF format.",
    },
    {
      title: "Integration of Accounting Systems",
      description: "APIs for PDF generation and synchronization with existing accounting systems.",
    },
    {
      title: "Improvement of Transparency",
      description: "System that provides greater transparency in the management of financial resources.",
    },
  ],
};
