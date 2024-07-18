import type { IBaseProject } from "../../interfaces/project";
export { PROJECT_CATEGORIES } from "./categories";

export const PROJECTS: IBaseProject[] = [
  {
    status: "completed",
    title: "Con qué profe",
    shortDescription:
      "Design and Frontend development for a platform for commenting on teachers at the Faculty of Industrial and Systems Engineering of the UNI.",
    description:
      "From January to March 2021, I led the design and development of an innovative platform that allowed students to share their opinions and comments about teachers. I used modern technologies like Nuxt.js with Typescript on the frontend and GraphQL with Apollo Server for data querying. Additionally, I integrated the faculty's authentication system (UNI-PASSPORT) to ensure the security and legitimacy of the comments. One of the standout features of this platform was the implementation of threaded conversations, which significantly improved transparency and facilitated feedback on teachers in each of their courses.",
    tags: ["Nuxt.js", "Typescript", "GraphQL", "Apollo Server"],
    image: {
      src: "/images/comentarios-docentes.png",
      alt: "Teacher Comments Platform",
    },
    links: [
      {
        title: "Demo",
        url: "https://conqueprofe.orcebot.com/",
        type: "website",
      },
    ],
    categoryCode: "personal",
    technologyCodes: ["nuxt", "typescript", "graphql", "apollo-server"],
    start: "2021-01",
    end: "2021-03",
    code: "con-que-profe",
    projectGoals: [
      {
        title: "Enhance Student Feedback",
        description:
          "Create a platform for students to provide structured feedback on faculty members.",
      },
      {
        title: "Integrate Authentication",
        description:
          "Implement UNI-PASSPORT authentication to ensure secure and legitimate feedback.",
      },
      {
        title: "Improve Transparency",
        description:
          "Implement threaded conversations to enhance transparency in feedback discussions.",
      },
    ],
    keyFeatures: [
      {
        title: "Interactive Feedback",
        description:
          "Threaded conversations for detailed and transparent discussions.",
      },
      {
        title: "Secure Authentication",
        description:
          "Integration with UNI-PASSPORT for secure user authentication.",
      },
      {
        title: "Personalized User Experience",
        description:
          "Customizable user profiles and preferences for enhanced usability.",
      },
    ],
  },
  {
    status: "completed",
    title: "BusUni Tracker",
    shortDescription:
      "Proyecto de Investigación IOT de localización en tiempo real del bus de la Universidad Nacional de Ingeniería.",
    description:
      "Desde enero hasta diciembre de 2020, asumí la responsabilidad de establecer la arquitectura y desarrollar un sistema de localización en tiempo real del bus universitario utilizando tecnologías LoT LoRaWAN. Este proyecto de investigación fue crucial para mejorar la eficiencia del transporte dentro del campus universitario. Implementé Firebase y Vue.js para la aplicación web, mientras que Cloud Functions se utilizó para recibir datos en tiempo real de la red LoRaWAN. Además, utilicé Realtime Database y Firestore para mostrar y almacenar información relevante, como rutas, conductores y trayectos recorridos. La culminación de este proyecto se reflejó en la publicación de un artículo científico con DOI: 10.1109/ISC255366.2022.9922172.",
    tags: ["LoT LoRaWAN", "Firebase", "Vue.js", "Cloud Functions"],
    image: {
      src: "/images/busuni-tracker.png",
      alt: "BusUni Tracker",
    },
    links: [
      {
        title: "Artículo",
        url: "https://ieeexplore.ieee.org/document/9922172",
        type: "website",
      },
    ],
    categoryCode: "personal",
    technologyCodes: ["iot", "lorawan", "firebase", "vue2", "cloud-functions"],
    start: "2020-01",
    end: "2020-12",
    code: "busuni-tracker",
    projectGoals: [
      {
        title: "Real-Time Tracking",
        description:
          "Develop a system for real-time tracking of university buses to enhance campus transportation efficiency.",
      },
      {
        title: "Integration with Campus Services",
        description:
          "Integrate with campus services for accurate scheduling and route planning.",
      },
      {
        title: "Research Publication",
        description:
          "Contribute to academic research with a published article on LoT LoRaWAN technology.",
      },
    ],
    keyFeatures: [
      {
        title: "Live Bus Tracking",
        description: "Real-time location updates and route visualization.",
      },
      {
        title: "Campus Integration",
        description:
          "Integration with university services for comprehensive transportation management.",
      },
      {
        title: "Academic Contribution",
        description: "Published research paper on LoT LoRaWAN technology.",
      },
    ],
  },
  {
    status: "completed",
    title: "Horext",
    shortDescription: "Proyecto personal para generar horarios académicos.",
    description:
      "En julio de 2019, llevé a cabo un proyecto independiente denominado Horext, destinado a simplificar la creación de horarios académicos para los estudiantes. Para lograr este objetivo, desarrollé una aplicación utilizando Nuxt.js en el frontend y un API REST en Spring Boot, inicialmente con Java 8 y posteriormente con Kotlin, respaldado por una base de datos PostgreSQL. Además, implementé un robusto sistema de integración y entrega continua (CI/CD) mediante GitLab y gestioné contenedores con Docker para garantizar la escalabilidad y la eficiencia del proyecto. Esta aplicación no solo generaba horarios teniendo en cuenta la carga horaria y eventos paralelos de la universidad, sino que también estaba integrada con Google Calendar para una mejor gestión de los horarios académicos de los estudiantes. Además, este proyecto se encuentra disponible como código abierto.",
    tags: ["Nuxt.js", "Spring Boot", "Java", "Kotlin", "PostgreSQL"],
    image: {
      src: "/images/horext.png",
      alt: "Horext",
    },
    links: [
      {
        title: "Código fuente",
        url: "https://gitlab.com/horext-app",
        type: "gitlab",
      },
      {
        title: "Demo",
        url: "https://horext.octatec.io",
        type: "website",
      },
    ],
    categoryCode: "personal",
    technologyCodes: ["nuxt", "spring-boot", "java", "kotlin", "postgresql"],
    start: "2019-07",
    code: "horext",
    projectGoals: [
      {
        title: "Efficient Schedule Management",
        description:
          "Simplify the creation and management of academic schedules for students.",
      },
      {
        title: "Integration with Calendar Tools",
        description:
          "Integrate with Google Calendar for seamless schedule synchronization.",
      },
      {
        title: "Scalability and Open Source",
        description:
          "Ensure scalability using Docker and contribute to the community as an open-source project.",
      },
    ],
    keyFeatures: [
      {
        title: "Calendar Integration",
        description:
          "Sync schedules with Google Calendar for easy access and management.",
      },
      {
        title: "Automated Schedule Generation",
        description:
          "AI-driven schedule generation based on course requirements.",
      },
      {
        title: "Open Source Community",
        description:
          "Contributions to open-source community with Docker support and continuous integration.",
      },
    ],
  },
  {
    status: "completed",
    title: "Movify.pe - Módulo de Pagos con Seguimiento de Ingresos y Gastos",
    shortDescription:
      "Desarrollo de un módulo de pagos con seguimiento de ingresos y gastos.",
    description:
      "De julio a diciembre de 2023, desarrollé un módulo de pagos para facilitar el registro de pagos y auditorías con recibos para órdenes de mudanza dentro de la infraestructura existente de la empresa. Implementé funciones para registrar transacciones de pago y asociarlas con las órdenes de mudanza respectivas, asegurando una documentación financiera precisa y rastros de auditoría. Mejoré las capacidades de informes para generar reportes detallados de los registros de pago y recibos asociados, facilitando los procesos de auditoría y análisis financiero.",
    tags: ["AWS S3", "Java", "MariaDB", "Spring Boot", "Vue.js"],
    categoryCode: "freelance",
    technologyCodes: ["aws-s3", "java", "mariadb", "spring-boot", "vue2"],
    start: "2023-07",
    end: "2023-12",
    code: "movify-pe-payment-module",
    projectGoals: [
      {
        title: "Financial Efficiency",
        description:
          "Develop modules to streamline financial processes like payments and invoicing.",
      },
      {
        title: "Operational Scalability",
        description:
          "Implement AWS migration and serverless solutions for improved service reliability.",
      },
      {
        title: "Client-Centric Solutions",
        description:
          "Enhance client-facing applications for better customer engagement and satisfaction.",
      },
    ],
    keyFeatures: [
      {
        title: "Financial Module",
        description:
          "Payment tracking and invoicing with detailed financial reporting.",
      },
      {
        title: "AWS Migration",
        description:
          "Migration to AWS for enhanced scalability and reliability.",
      },
      {
        title: "Client Management",
        description:
          "Improved client interface with personalized dashboards and customer analytics.",
      },
    ],
  },
  {
    status: "completed",
    title: "Movify.pe - Sistema de Cotizaciones Web (Migración)",
    shortDescription:
      "Migración del sistema de cotizaciones web a una API serverless.",
    description:
      "De julio a diciembre de 2023, migré el backend del sistema de cotizaciones web a una API serverless, mejorando la disponibilidad y reduciendo los costos de servidor. Mejoré la compatibilidad del diseño de correos electrónicos con varios proveedores, lo que resultó en un aumento de la generación de clientes potenciales. Integré análisis para rastrear las vistas de correos electrónicos, proporcionando información valiosa sobre las tasas de apertura y el compromiso.",
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
    code: "movify-pe-quote-system",
    projectGoals: [
      {
        title: "Migration to Serverless Architecture",
        description:
          "Migrate the web quoting system backend to a serverless API.",
      },
      {
        title: "Email Design Compatibility",
        description:
          "Enhance email design compatibility across multiple providers.",
      },
      {
        title: "Analytics Integration",
        description:
          "Integrate analytics to track email views and engagement rates.",
      },
    ],
    keyFeatures: [
      {
        title: "Serverless API",
        description:
          "Backend migration to AWS Lambda for improved scalability and cost efficiency.",
      },
      {
        title: "Email Design Enhancement",
        description:
          "Improved compatibility and aesthetics of email templates.",
      },
      {
        title: "Analytics Tracking",
        description:
          "Integration of analytics tools to monitor email engagement metrics.",
      },
    ],
  },
  {
    status: "completed",
    title: "Movify.pe - Migración de Infraestructura a AWS",
    shortDescription:
      "Migración de infraestructura a AWS para mejorar el despliegue y la disponibilidad.",
    description:
      "De julio a noviembre de 2023, lideré la migración de la infraestructura a AWS para mejorar el despliegue, la disponibilidad y la confiabilidad de los servicios clave. Establecí flujos de trabajo de CI/CD para la implementación en servicios de AWS, automatizando las tuberías. Integré con Amazon S3 para el almacenamiento de fotos y videos relacionados con los servicios de mudanza.",
    tags: [
      "Amplify",
      "Amazon RDS",
      "EC2",
      "S3",
      "Spring Framework",
      "Java",
      "Vue.js",
    ],
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
    start: "2023-07",
    end: "2023-11",
    code: "movify-pe-aws-migration",
    projectGoals: [
      {
        title: "Infrastructure Migration",
        description:
          "Migrate infrastructure to AWS for improved deployment and availability.",
      },
      {
        title: "CI/CD Automation",
        description:
          "Establish CI/CD workflows for automated deployment on AWS services.",
      },
      {
        title: "Storage Integration",
        description:
          "Integrate with Amazon S3 for storage of photos and videos related to moving services.",
      },
    ],
    keyFeatures: [
      {
        title: "AWS Infrastructure",
        description:
          "Migration to AWS Amplify, Amazon RDS, and EC2 for enhanced deployment and scalability.",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated deployment workflows using AWS services for improved efficiency.",
      },
      {
        title: "Storage Solution",
        description:
          "Integration with Amazon S3 for secure and scalable storage of multimedia assets.",
      },
    ],
  },
  {
    status: "completed",
    title: "Movify.pe - Sistema de Gestión de Cotizaciones y Órdenes",
    shortDescription:
      "Desarrollo de un sistema administrativo para cotizaciones y órdenes de mudanza.",
    description:
      "De diciembre de 2021 a julio de 2023, desarrollé un sistema administrativo para cotizaciones y órdenes para el equipo de ventas y mudanza. Diseñé e implementé la arquitectura cliente-servidor utilizando una API REST y una SPA. Automatizé la generación de PDF para cotizaciones y órdenes de venta. Desarrollé un módulo de informes para medir la eficiencia del equipo de ventas e interconecté con el sistema de cotizaciones web a través de API. Establecí flujos de integración y despliegue continuo mediante GitHub Actions.",
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
    code: "movify-pe-quote-order-management",
    projectGoals: [
      {
        title: "Administrative System Development",
        description:
          "Develop an administrative system for quotes and moving orders.",
      },
      {
        title: "PDF Automation",
        description: "Automate PDF generation for quotes and sales orders.",
      },
      {
        title: "Sales Efficiency",
        description:
          "Develop reporting module to measure sales team efficiency.",
      },
    ],
    keyFeatures: [
      {
        title: "Client-Server Architecture",
        description:
          "Design and implement REST API and SPA for seamless administrative operations.",
      },
      {
        title: "PDF Generation",
        description:
          "Automated generation of PDF documents for quotes and sales orders.",
      },
      {
        title: "Integration with Web Quoting System",
        description:
          "Interconnect with web quoting system via API for seamless data flow.",
      },
    ],
  },
  {
    status: "completed",
    title: "Movify.pe - Mejora del Sistema de Cotizaciones Web",
    shortDescription: "Mejora del sistema de cotizaciones web.",
    description:
      "De octubre a diciembre de 2021, mejoré la interfaz del sistema de cotizaciones web integrando un estilo personalizado para Google Maps y estableciendo una nueva UI/UX para cada paso de la cotización y la plantilla de correo electrónico. Migré un iframe a un plugin de WordPress para un mejor manejo de actualizaciones. Desarrollé funciones para la captura de clientes potenciales y datos de auditoría.",
    tags: ["React", "JavaScript", "HTML", "CSS", "WordPress"],
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
    start: "2021-10",
    end: "2021-12",
    code: "movify-pe-quote-system-improvement",
    projectGoals: [
      {
        title: "UI/UX Enhancement",
        description:
          "Improve user interface and experience for web quoting system.",
      },
      {
        title: "WordPress Integration",
        description:
          "Migrate iframe to WordPress plugin for easier updates and maintenance.",
      },
      {
        title: "Lead Capture and Analytics",
        description: "Develop features for lead capture and analytics data.",
      },
    ],
    keyFeatures: [
      {
        title: "Custom UI/UX",
        description:
          "Integration of custom Google Maps styling and improved UI/UX for quoting process.",
      },
      {
        title: "WordPress Plugin Migration",
        description:
          "Migration of iframe functionality to a WordPress plugin for streamlined management.",
      },
      {
        title: "Lead Capture",
        description:
          "Development of features to capture leads and audit data for analysis.",
      },
    ],
  },
];
