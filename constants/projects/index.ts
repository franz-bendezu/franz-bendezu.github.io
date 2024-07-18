import type { IBaseProject, IProjectCategory } from "../../interfaces/project";
export { PROJECT_CATEGORIES } from "./categories";

export const PROJECTS: IBaseProject[] = [
  {
    status: "completed",
    title: "Con qué profe",
    shortDescription:
      "Diseño y desarrollo frontend para una plataforma de comentarios sobre profesores en la Facultad de Ingeniería Industrial y de Sistemas de la UNI.",
    description:
      "De enero a marzo de 2021, lideré el diseño y desarrollo de una plataforma innovadora que permitía a los estudiantes compartir sus opiniones y comentarios sobre los profesores. Utilicé tecnologías modernas como Nuxt.js con Typescript en el frontend y GraphQL con Apollo Server para consultas de datos. Además, integré el sistema de autenticación de la facultad (UNI-PASSPORT) para asegurar la seguridad y legitimidad de los comentarios. Una de las características destacadas de esta plataforma fue la implementación de conversaciones en hilo, que mejoró significativamente la transparencia y facilitó los comentarios sobre los profesores en cada uno de sus cursos.",
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
        title: "Mejorar el Feedback Estudiantil",
        description:
          "Crear una plataforma para que los estudiantes proporcionen feedback estructurado sobre los miembros del cuerpo docente.",
      },
      {
        title: "Integración de Autenticación",
        description:
          "Implementar autenticación UNI-PASSPORT para asegurar feedback seguro y legítimo.",
      },
      {
        title: "Mejorar la Transparencia",
        description:
          "Implementar conversaciones en hilo para mejorar la transparencia en las discusiones de feedback.",
      },
    ],
    keyFeatures: [
      {
        title: "Feedback Interactivo",
        description:
          "Conversaciones en hilo para discusiones detalladas y transparentes.",
      },
      {
        title: "Autenticación Segura",
        description:
          "Integración con UNI-PASSPORT para autenticación segura de usuarios.",
      },
      {
        title: "Experiencia de Usuario Personalizada",
        description:
          "Perfiles de usuario personalizables y preferencias para una usabilidad mejorada.",
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
        title: "Seguimiento en Tiempo Real",
        description:
          "Desarrollar un sistema para el seguimiento en tiempo real de los buses universitarios para mejorar la eficiencia del transporte en el campus.",
      },
      {
        title: "Integración con Servicios del Campus",
        description:
          "Integrar con los servicios del campus para una programación precisa y planificación de rutas.",
      },
      {
        title: "Publicación de Investigación",
        description:
          "Contribuir a la investigación académica con un artículo publicado sobre la tecnología LoT LoRaWAN.",
      },
    ],
    keyFeatures: [
      {
        title: "Seguimiento en Tiempo Real",
        description: "Actualizaciones de ubicación en tiempo real y visualización de rutas.",
      },
      {
        title: "Integración con el Campus",
        description:
          "Integración con servicios universitarios para una gestión integral del transporte.",
      },
      {
        title: "Contribución Académica",
        description: "Artículo de investigación publicado sobre la tecnología LoT LoRaWAN.",
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
        title: "Gestión Eficiente de Horarios",
        description:
          "Simplificar la creación y gestión de horarios académicos para estudiantes.",
      },
      {
        title: "Integración con Herramientas de Calendario",
        description:
          "Integrar con Google Calendar para sincronización de horarios sin problemas.",
      },
      {
        title: "Escalabilidad y Código Abierto",
        description:
          "Garantizar la escalabilidad mediante Docker y contribuir a la comunidad como un proyecto de código abierto.",
      },
    ],
    keyFeatures: [
      {
        title: "Integración con Calendario",
        description:
          "Sincronización de horarios con Google Calendar para una gestión eficiente.",
      },
      {
        title: "Generación Automatizada de Horarios",
        description:
          "Generación de horarios basada en la carga horaria y eventos paralelos de la universidad.",
      },
      {
        title: "Comunidad de Código Abierto",
        description:
          "Disponibilidad del proyecto como código abierto para contribuciones y mejoras continuas.",
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
    code: "movify-payment-module",
    projectGoals: [
      {
        title: "Automatización de Procesos Financieros",
        description:
          "Facilitar la gestión de pagos y auditorías con un módulo integrado de ingresos y gastos.",
      },
      {
        title: "Integración con Sistemas Contables",
        description:
          "Integrar APIs para la generación de PDF y sincronización con sistemas contables existentes.",
      },
      {
        title: "Mejora de la Transparencia Financiera",
        description:
          "Implementar un sistema para mejorar la transparencia en el manejo de recursos financieros.",
      },
    ],
    keyFeatures: [
      {
        title: "Gestión de Pagos y Auditorías",
        description:
          "Registro de pagos y auditorías con recibos electrónicos en formato PDF.",
      },
      {
        title: "Integración de Sistemas Contables",
        description:
          "APIs para la generación de PDF y sincronización con sistemas contables existentes.",
      },
      {
        title: "Mejora de Transparencia",
        description:
          "Sistema que proporciona mayor transparencia en el manejo de los recursos financieros.",
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
    image: {
      src: "/images/movify-quote-system-migration/banner.png",
      alt: "Movify Quote System",
    },
    code: "movify-quote-system-migration",
    projectGoals: [
      {
        title: "Migración a API Serverless",
        description:
          "Migrar el sistema de cotizaciones web a una API serverless para mejorar la disponibilidad y reducir costos.",
      },
      {
        title: "Mejora del Diseño de Correos Electrónicos",
        description:
          "Mejorar la compatibilidad y estética de las plantillas de correos electrónicos.",
      },
      {
        title: "Seguimiento de Analíticas",
        description:
          "Integración de herramientas de análisis para monitorear las métricas de compromiso de correo electrónico.",
      },
    ],
    keyFeatures: [
      {
        title: "Migración a AWS Lambda",
        description:
          "Migración del backend a AWS Lambda para mejorar la disponibilidad y reducir costos.",
      },
      {
        title: "Diseño de Correos Electrónicos",
        description:
          "Compatibilidad mejorada con varios proveedores de correo electrónico para aumentar la generación de clientes potenciales.",
      },
      {
        title: "Seguimiento de Analíticas",
        description:
          "Integración de análisis para rastrear las vistas de correos electrónicos y mejorar las tasas de apertura.",
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
    code: "movify-aws-migration",
    projectGoals: [
      {
        title: "Migración a AWS",
        description:
          "Migrar la infraestructura a AWS para mejorar el despliegue y la disponibilidad de los servicios.",
      },
      {
        title: "Flujos de CI/CD",
        description:
          "Establecer flujos de trabajo de CI/CD automatizados", 
      },
      {
        title: "Solución de Almacenamiento",
        description:
          "Buscar soluciones de almacenamientopara fotos y videos",
      },
    ],
    keyFeatures: [
      {
        title: "Infraestructura en AWS",
        description:
          "Migración a AWS Amplify, Amazon RDS, EC2 y S3 para mejorar la disponibilidad y escalabilidad.",
      },
      {
        title: "Flujos de CI/CD Automatizados",
        description:
          "Automatización de flujos de CI/CD para implementación continua en servicios de AWS  a través de GitHub Actions.",
      },
      {
        title: "Almacenamiento en Amazon S3",
        description:
          "Integración con Amazon S3 para almacenar fotos y videos relacionados con los servicios de mudanza.",
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
    code: "movify-quote-order-management",
    image: {
      src: "/images/movify-quote-order-management/banner.png",
      alt: "Movify Quote Order Management",
    },
    projectGoals: [
      {
        title: "Sistema Administrativo",
        description:
          "Desarrollar un sistema administrativo para cotizaciones y órdenes de mudanza.",
      },
      {
        title: "Generación de PDF",
        description: "Automatizar la generación de PDF para cotizaciones y órdenes de venta.",
      },
      {
        title: "Módulo de Informes",
        description:
          "Desarrollar un módulo de informes para medir la eficiencia del equipo de ventas.",
      },
    ],
    keyFeatures: [
      {
        title: "Control de acceso",
        description:
          "Autenticación y autorización de usuarios con roles y permisos personalizados.",
      },
      {
        title: "Generación de PDF",
        description:
          "Generación automatizada de documentos PDF para cotizaciones y órdenes de venta.",
      },
      {
        title: "Integración con Sistema de Cotizaciones Web",
        description:
          "Interconexión con el sistema de cotizaciones web a través de API para un flujo de datos sin problemas.",
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
    image: {
      src: "/images/movify-quote-system-improvement/banner.png",
      alt: "Movify Quote System",
    },
    code: "movify-quote-system-improvement",
    projectGoals: [
      {
        title: "Mejora de la Interfaz de Usuario",
        description:
          "Integrar un estilo personalizado de Google Maps y mejorar la UI/UX para el proceso de cotización.",
      },
      {
        title: "Mejorar el proceso de actualización",
        description:
          "Migrar un iframe a un plugin de WordPress para un mejor manejo de actualizaciones.",
      },
      {
        title: "Captura de Clientes Potenciales",
        description:
          "Desarrollar funciones para capturar clientes potenciales y datos de auditoría.",
      },
    ],
    keyFeatures: [
      {
        title: "Estilo Personalizado de Google Maps",
        description:
          "Integración de un estilo personalizado de Google Maps para una mejor experiencia de usuario.",
      },
      {
        title: "Migración a WordPress",
        description:
          "Migración de un iframe a un plugin de WordPress para una mejor gestión de actualizaciones.",
      },
      {
        title: "Captura de Clientes Potenciales",
        description:
          "Desarrollo de funciones para capturar clientes potenciales y datos de auditoría.",
      },
    ],
  },
];
