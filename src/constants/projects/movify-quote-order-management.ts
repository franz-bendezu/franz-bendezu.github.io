import { IBaseProject } from "@/interfaces/project";

export const MOVIFY_QUOTE_ORDER_MANAGMENT:IBaseProject  = {
  status: "completed",
  title: "Movify.pe - Sistema de Gestión de Cotizaciones y Órdenes",
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
