import { IBaseProject } from "@/interfaces/project";

export const MOVIFY_QUOTE_ORDER_MANAGMENT:IBaseProject  = {
  status: "completed",
  title: "Movify.pe - Sistema de Gestión de Cotizaciones y Órdenes",
  lang: "es",
  shortDescription: "Desarrollo de un sistema administrativo para cotizaciones y órdenes de mudanza.",
  description: "De diciembre de 2021 a julio de 2023, desarrollé un sistema administrativo para cotizaciones y órdenes para el equipo de ventas y mudanza. Diseñé e implementé la arquitectura cliente-servidor utilizando una API REST y una SPA. Automatizé la generación de PDF para cotizaciones y órdenes de venta. Desarrollé un módulo de informes para medir la eficiencia del equipo de ventas e interconecté con el sistema de cotizaciones web a través de API. Establecí flujos de integración y despliegue continuo mediante GitHub Actions.",
  tags: [
    "Spring Boot",
    "JPA Hibernate",
    "Java",
    "TypeScript",
    "Vue.js",
    "Vuetify",
    "Nginx",
    "Docker",
  ],
  categoryCode: "freelance",
  technologyCodes: [
    "spring-boot",
    "jpa-hibernate",
    "java",
    "typescript",
    "mariadb",
    "vue2",
    "vuetify",
    "nginx",
    "docker",
  ],
  start: "2021-12",
  end: "2023-07",
  code: "movify-quote-order-management",
  banner: {
    src: "/images/movify-quote-order-management/banner.webp",
    alt: "Movify Quote Order Management",
  },
  projectGoals: [
    {
      title: "Establecer un Sistema Administrativo para Cotizaciones y Órdenes",
      description: "Desarrollar un sistema administrativo para cotizaciones y órdenes de mudanza.",
    },
    {
      title: "Generar PDF's para las Cotizaciones y Órdenes",
      description: "Automatizar la generación de PDF para cotizaciones y órdenes de venta.",
    },
    {
      title: "Establecer un Módulo de reportes",
      description: "Desarrollar un módulo de reportes para medir la eficiencia del equipo de ventas.",
    },
    {
      title: "Integración con Sistema de Cotizaciones Web",
      description: "Interconectar el sistema de gestión de cotizaciones y órdenes con el sistema de cotizaciones web.",
    }
  ],
  keyFeatures: [
    {
      title: "Control de acceso",
      description: "Se estableció la autenticación y autorización de usuarios con roles y permisos personalizados.",
    },
    {
      title: "Generación de PDF",
      description: "Se estableció plantillas html y su conversor a PDF para cotizaciones y órdenes de venta.",
    },
    {
      title: "Weebhooks para integración con el sistema de cotizaciones web",
      description: "Interconexión con el sistema de cotizaciones web a través de API para un flujo de datos sin problemas.",
    },
    {
      title: "Flujos de integración y despliegue continuo",
      description: "Se establecieron flujos de integración y despliegue continuo mediante GitLab CI/CD.",
    }
  ],
};

export const MOVIFY_QUOTE_ORDER_MANAGEMENT_EN: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Quote and Order Management System",
  lang: "en",
  shortDescription: "Development of an administrative system for quotes and moving orders.",
  description: "From December 2021 to July 2023, I developed an administrative system for quotes and orders for the sales and moving team. I designed and implemented the client-server architecture using a REST API and a SPA. I automated the generation of PDFs for quotes and sales orders. I developed a reporting module to measure the efficiency of the sales team and interconnected with the web quoting system through an API. I established continuous integration and deployment flows using GitHub Actions.",
  tags: [
    "Spring Boot",
    "JPA Hibernate",
    "Java",
    "TypeScript",
    "Vue.js",
    "Vuetify",
    "Nginx",
    "Docker",
  ],
  categoryCode: "freelance",
  technologyCodes: [
    "spring-boot",
    "jpa-hibernate",
    "java",
    "typescript",
    "mariadb",
    "vue2",
    "vuetify",
    "nginx",
    "docker",
  ],
  start: "2021-12",
  end: "2023-07",
  code: "movify-quote-order-management",
  banner: {
    src: "/images/movify-quote-order-management/banner.webp",
    alt: "Movify Quote Order Management",
  },
  projectGoals: [
    {
      title: "Establish an Administrative System for Quotes and Orders",
      description: "Develop an administrative system for quotes and moving orders.",
    },
    {
      title: "Generate PDFs for Quotes and Orders",
      description: "Automate the generation of PDFs for quotes and sales orders.",
    },
    {
      title: "Establish a Reporting Module",
      description: "Develop a reporting module to measure the efficiency of the sales team.",
    },
    {
      title: "Integration with Web Quoting System",
      description: "Interconnect the quote and order management system with the web quoting system.",
    }
  ],
  keyFeatures: [
    {
      title: "Access Control",
      description: "User authentication and authorization with custom roles and permissions.",
    },
    {
      title: "PDF Generation",
      description: "HTML templates and their conversion to PDF for quotes and sales orders.",
    },
    {
      title: "Webhooks for Integration with Web Quoting System",
      description: "Interconnection with the web quoting system through an API for seamless data flow.",
    },
    {
      title: "Continuous Integration and Deployment Flows",
      description: "Continuous integration and deployment flows established using GitHub Actions.",
    }
  ],
};
