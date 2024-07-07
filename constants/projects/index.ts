import type { IBaseProject, IProjectCategory } from "../../interfaces/project";

export const PROJECT_CATEGORIES: IProjectCategory[] = [
  {
    name: "Freelance",
    value: "freelance",
  },
  {
    name: "Personal",
    value: "personal",
  },
  {
    name: "Demo",
    value: "demo",
  },
];

export const PROJECTS: IBaseProject[] = [
  {
    status: "completed",
    title: "Con qué profe",
    shortDescription:
      "Diseño y desarrollo Frontend para una plataforma de comentarios acerca de docentes de la Facultad de Ingeniería Industrial y de Sistemas de la UNI.",
    description: `Durante el período de enero a marzo de 2021, lideré el diseño y desarrollo de una plataforma innovadora que permitió a los estudiantes de la facultad compartir sus opiniones y comentarios sobre los docentes. Utilicé tecnologías modernas como Nuxt.js con Typescript en el frontend y GraphQL con Apollo Server para la consulta de datos. Además, integré el sistema de autenticación de la facultad (UNI-PASSPORT) para garantizar la seguridad y la legitimidad de los comentarios. Una de las características destacadas de esta plataforma fue la implementación de un sistema de conversaciones en hilos, que mejoró significativamente la transparencia y facilitó la retroalimentación sobre los docentes en cada uno de sus cursos.`,
    tags: ["Nuxt.js", "Typescript", "GraphQL", "Apollo Server"],
    image: {
      src: "/images/comentarios-docentes.png",
      alt: "Plataforma de Comentarios sobre Docentes",
    },
    link: "URL_DE_TU_PROYECTO",
    categoryCode: "personal",
    technologyCodes: ["nuxt", "typescript", "graphql", "apollo-server"],
  },
  {
    status: "completed",
    title: "BusUni Tracker",
    shortDescription:
      "Proyecto de Investigación IOT de localización en tiempo real del bus de la Universidad Nacional de Ingeniería.",
    description: `Desde enero hasta diciembre de 2020, asumí la responsabilidad de establecer la arquitectura y desarrollar un sistema de localización en tiempo real del bus universitario utilizando tecnologías LoT LoRaWAN. Este proyecto de investigación fue crucial para mejorar la eficiencia del transporte dentro del campus universitario. Implementé Firebase y Vue.js para la aplicación web, mientras que Cloud Functions se utilizó para recibir datos en tiempo real de la red LoRaWAN. Además, utilicé Realtime Database y Firestore para mostrar y almacenar información relevante, como rutas, conductores y trayectos recorridos. La culminación de este proyecto se reflejó en la publicación de un artículo científico con DOI: 10.1109/ISC255366.2022.9922172.`,
    tags: ["LoT LoRaWAN", "Firebase", "Vue.js", "Cloud Functions"],
    image: {
      src: "/images/busuni-tracker.png",
      alt: "BusUni Tracker",
    },
    link: "https://gitlab.com/horext-app",
    categoryCode: "personal",
    technologyCodes: ["iot", "lorawan", "firebase", "vue2", "cloud-functions"],
  },
  {
    status: "completed",
    title: "Horext",
    shortDescription: "Proyecto personal para generar horarios académicos.",
    description: `En julio de 2019, llevé a cabo un proyecto independiente denominado Horext, destinado a simplificar la creación de horarios académicos para los estudiantes. Para lograr este objetivo, desarrollé una aplicación utilizando Nuxt.js en el frontend y un API REST en Spring Boot, inicialmente con Java 8 y posteriormente con Kotlin, respaldado por una base de datos PostgreSQL. Además, implementé un robusto sistema de integración y entrega continua (CI/CD) mediante GitLab y gestioné contenedores con Docker para garantizar la escalabilidad y la eficiencia del proyecto. Esta aplicación no solo generaba horarios teniendo en cuenta la carga horaria y eventos paralelos de la universidad, sino que también estaba integrada con Google Calendar para una mejor gestión de los horarios académicos de los estudiantes. Además, este proyecto se encuentra disponible como código abierto.`,
    tags: ["Nuxt.js", "Spring Boot", "Java", "Kotlin", "PostgreSQL"],
    image: {
      src: "/images/horext.png",
      alt: "Horext",
    },
    link: "https://gitlab.com/horext-app",
    categoryCode: "personal",
    technologyCodes: ["nuxt", "spring-boot", "java", "kotlin", "postgresql"],
  },
  {
    status: "completed",
    title: "Movify.pe - Módulo de Pagos con Seguimiento de Ingresos y Gastos",
    shortDescription:
      "Desarrollo de un módulo de pagos con seguimiento de ingresos y gastos.",
    description: `De julio a diciembre de 2023, desarrollé un módulo de pagos para facilitar el registro de pagos y auditorías con recibos para órdenes de mudanza dentro de la infraestructura existente de la empresa. Implementé funciones para registrar transacciones de pago y asociarlas con las órdenes de mudanza respectivas, asegurando una documentación financiera precisa y rastros de auditoría. Mejoré las capacidades de informes para generar reportes detallados de los registros de pago y recibos asociados, facilitando los procesos de auditoría y análisis financiero.`,
    tags: ["AWS S3", "Java", "MariaDB", "Spring Boot", "Vue.js"],
    image: {
      src: "/images/payment-module.png",
      alt: "Módulo de Pagos",
    },
    categoryCode: "freelance",
    technologyCodes: ["aws-s3", "java", "mariadb", "spring-boot", "vue2"],
  },
  {
    status: "completed",
    title: "Movify.pe - Sistema de Cotizaciones Web (Migración)",
    shortDescription:
      "Migración del sistema de cotizaciones web a una API serverless.",
    description: `De julio a diciembre de 2023, migré el backend del sistema de cotizaciones web a una API serverless, mejorando la disponibilidad y reduciendo los costos de servidor. Mejoré la compatibilidad del diseño de correos electrónicos con varios proveedores, lo que resultó en un aumento de la generación de clientes potenciales. Integré análisis para rastrear las vistas de correos electrónicos, proporcionando información valiosa sobre las tasas de apertura y el compromiso.`,
    tags: ["Node.js", "Prisma", "AWS Lambda", "GitHub Actions", "MJML"],
    image: {
      src: "/images/quotation-system.png",
      alt: "Sistema de Cotizaciones",
    },
    categoryCode: "freelance",
    technologyCodes: [
      "nodejs",
      "prisma",
      "aws-lambda",
      "mariadb",
      "github-actions",
      "mjml",
    ],
  },
  {
    status: "completed",
    title: "Movify.pe - Migración de Infraestructura a AWS",
    shortDescription:
      "Migración de infraestructura a AWS para mejorar el despliegue y la disponibilidad.",
    description: `De julio a noviembre de 2023, lideré la migración de la infraestructura a AWS para mejorar el despliegue, la disponibilidad y la confiabilidad de los servicios clave. Establecí flujos de trabajo de CI/CD para la implementación en servicios de AWS, automatizando las tuberías. Integré con Amazon S3 para el almacenamiento de fotos y videos relacionados con los servicios de mudanza.`,
    tags: [
      "Amplify",
      "Amazon RDS",
      "EC2",
      "S3",
      "Spring Framework",
      "Java",
      "Vue.js",
    ],
    image: {
      src: "/images/aws-migration.png",
      alt: "Migración a AWS",
    },
    categoryCode: "freelance",
    technologyCodes: [
      "aws-amplify",
      "amazon-rds",
      "mariadb",
      "aws-ec2",
      "aws-s3",
      "spring-framework",
      "java",
      "vue2",
    ],
  },
  {
    status: "completed",
    title: "Movify.pe - Sistema de Gestión de Cotizaciones y Órdenes",
    shortDescription:
      "Desarrollo de un sistema administrativo para cotizaciones y órdenes de mudanza.",
    description: `De diciembre de 2021 a julio de 2023, desarrollé un sistema administrativo para cotizaciones y órdenes para el equipo de ventas y mudanza. Diseñé e implementé la arquitectura cliente-servidor utilizando una API REST y una SPA. Automatizé la generación de PDF para cotizaciones y órdenes de venta. Desarrollé un módulo de informes para medir la eficiencia del equipo de ventas e interconecté con el sistema de cotizaciones web a través de API. Establecí flujos de integración y despliegue continuo mediante GitHub Actions.`,
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
    image: {
      src: "/images/order-management.png",
      alt: "Sistema de Gestión de Cotizaciones y Órdenes",
    },
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
  },
  {
    status: "completed",
    title: "Movify.pe - Mejora del Sistema de Cotizaciones Web",
    shortDescription: "Mejora del sistema de cotizaciones web.",
    description: `De octubre a diciembre de 2021, mejoré la interfaz del sistema de cotizaciones web integrando un estilo personalizado para Google Maps y estableciendo una nueva UI/UX para cada paso de la cotización y la plantilla de correo electrónico. Migré un iframe a un plugin de WordPress para un mejor manejo de actualizaciones. Desarrollé funciones para la captura de clientes potenciales y datos de auditoría.`,
    tags: ["React", "JavaScript", "HTML", "CSS", "WordPress"],
    image: {
      src: "/images/quotation-enhancement.jpg",
      alt: "Mejora del Sistema de Cotizaciones Web",
    },
    categoryCode: "freelance",
    technologyCodes: [
      "react",
      "javascript",
      "mariadb",
      "html",
      "css",
      "wordpress",
      "bootstrap",
    ],
  },
];
