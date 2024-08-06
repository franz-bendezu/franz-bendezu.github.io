import { IBaseProject } from "@/interfaces/project";

export const MOVIFY_AWS_MIGRATION:IBaseProject = {
  status: "completed",
  title: "Movify.pe - Migración de Infraestructura a AWS",
  shortDescription: "Migración de infraestructura a AWS para mejorar el despliegue y la disponibilidad.",
  description: "De julio a noviembre de 2023, lideré la migración de la infraestructura a AWS para mejorar el despliegue, la disponibilidad y la confiabilidad de los servicios clave. Establecí flujos de trabajo de CI/CD para la implementación en servicios de AWS, automatizando las tuberías. Integré con Amazon S3 para el almacenamiento de fotos y videos relacionados con los servicios de mudanza.",
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
      description: "Migrar la infraestructura a AWS para mejorar el despliegue y la disponibilidad de los servicios.",
    },
    {
      title: "Flujos de CI/CD",
      description: "Establecer flujos de trabajo de CI/CD automatizados",
    },
    {
      title: "Solución de Almacenamiento",
      description: "Buscar soluciones de almacenamientopara fotos y videos",
    },
  ],
  keyFeatures: [
    {
      title: "Infraestructura en AWS",
      description: "Migración a AWS Amplify, Amazon RDS, EC2 y S3 para mejorar la disponibilidad y escalabilidad.",
    },
    {
      title: "Flujos de CI/CD Automatizados",
      description: "Automatización de flujos de CI/CD para implementación continua en servicios de AWS  a través de GitHub Actions.",
    },
    {
      title: "Almacenamiento en Amazon S3",
      description: "Integración con Amazon S3 para almacenar fotos y videos relacionados con los servicios de mudanza.",
    },
  ],
};
