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
  image: {
    src: "/images/movify-quote-order-management/banner.webp",
    alt: "Movify Quote Order Management",
  },
  projectGoals: [
    {
      title: "Sistema Administrativo",
      description: "Desarrollar un sistema administrativo para cotizaciones y órdenes de mudanza.",
    },
    {
      title: "Generación de PDF",
      description: "Automatizar la generación de PDF para cotizaciones y órdenes de venta.",
    },
    {
      title: "Módulo de Informes",
      description: "Desarrollar un módulo de informes para medir la eficiencia del equipo de ventas.",
    },
  ],
  keyFeatures: [
    {
      title: "Control de acceso",
      description: "Autenticación y autorización de usuarios con roles y permisos personalizados.",
    },
    {
      title: "Generación de PDF",
      description: "Generación automatizada de documentos PDF para cotizaciones y órdenes de venta.",
    },
    {
      title: "Integración con Sistema de Cotizaciones Web",
      description: "Interconexión con el sistema de cotizaciones web a través de API para un flujo de datos sin problemas.",
    },
  ],
};
