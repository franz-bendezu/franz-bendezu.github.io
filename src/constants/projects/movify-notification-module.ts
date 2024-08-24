import type { IBaseProject } from "@/interfaces/project";

export const MOVIFY_NOTIFICATION_MODULE: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Módulo de Notificaciones",
  shortDescription: "Desarrollo de un módulo de notificaciones para órdenes de mudanza.",
  description: "De enero a julio de 2024, desarrollé un módulo de notificaciones para órdenes de mudanza, incluyendo recordatorios, confirmaciones y encuestas, adaptadas al tipo de producto (detallado, fácil, embalaje) y canal de comunicación. Creé un módulo serverless con AWS Lambda para renderizar plantillas HTML para notificaciones por correo electrónico y documentos PDF, mejorando la personalización y presentación para los clientes. Migré el módulo de generación de PDF a AWS Lambda para procesamiento paralelo, resolviendo problemas de memoria del servidor e integrándolo con el sistema actual para agilizar el envío de confirmaciones. Integré servicios de mensajería de terceros para notificaciones por correo electrónico con plantillas personalizadas basadas en el servicio de mudanza, asegurando una comunicación efectiva con los clientes.",
  tags: ["AWS Lambda", "AWS S3", "Java", "MariaDB", "Spring Boot", "Spring Data", "Spring Cloud", "Cloudformation"],
  categoryCode: "freelance",
  technologyCodes: ["aws-lambda", "aws-s3", "java", "mariadb", "spring-boot", "spring-data", "spring-cloud", "cloudformation"],
  start: "2024-01",
  end: "2024-07",
  code: "notification-module",
  projectGoals: [
    {
      title: "Automatización de Notificaciones",
      description: "Desarrollar un módulo de notificaciones para órdenes de mudanza, incluyendo recordatorios, confirmaciones y encuestas.",
    },
    {
      title: "Personalización y Presentación",
      description: "Crear un módulo serverless para renderizar plantillas HTML para notificaciones por correo electrónico y documentos PDF.",
    },
    {
      title: "Procesamiento Paralelo",
      description: "Migrar el módulo de generación de PDF a AWS Lambda para procesamiento paralelo y resolver problemas de memoria del servidor.",
    },
    {
      title: "Integración de Servicios de Mensajería",
      description: "Integrar servicios de mensajería de terceros para notificaciones por correo electrónico con plantillas personalizadas.",
    },
  ],
  keyFeatures: [
    {
      title: "Módulo de Notificaciones",
      description: "Recordatorios, confirmaciones y encuestas adaptadas al tipo de producto y canal de comunicación.",
    },
    {
      title: "Módulo para generar plantillas HTML",
      description: "Módulo estatico para renderizar plantillas HTML para notificaciones por correo electrónico y documentos PDF.",
    },
    { 
      title: "Módulo para renderizar plantillas HTML",
      description: "Módulo serverless para renderizar plantillas HTML para notificaciones por correo electrónico y documentos PDF.",
    },
    {
      title: "Procesamiento Paralelo con AWS Lambda",
      description: "Migración del módulo de generación de PDF a AWS Lambda para procesamiento paralelo.",
    },
    {
      title: "Integración de Servicios de Mensajería",
      description: "Servicios de mensajería de terceros para notificaciones por correo electrónico con plantillas personalizadas.",
    },
  ],
};