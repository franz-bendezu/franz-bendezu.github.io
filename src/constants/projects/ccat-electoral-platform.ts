import { IBaseProject } from "@/interfaces/project";

export const CCAT_ELECTORAL_PLATFORM: IBaseProject = {
  status: "completed",
  title:
    "Elecciones CCAT, Centro Cultural Avanzada Tecnológica - Universidad Nacional de Ingeniería",
  shortDescription:
    "Desarrollo e implementación de un sistema de votación en línea para asegurar procesos de votación seguros, anónimos y confiables.",
  description:
    "De septiembre a diciembre de 2020, colaboré con el equipo de elecciones del CCAT para desarrollar e implementar un sistema de votación en línea. Diseñé una interfaz receptiva y fácil de usar, gestioné servicios de backend para la autenticación de usuarios, conteo de votos, y generación de reportes. Aseguré la seguridad del sistema integrando protocolos de autenticación y login seguros. Además, optimicé el despliegue y la escalabilidad mediante la contenedorización, y gestioné el almacenamiento de datos con soluciones de respaldo efectivas.",
  tags: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "GitLab",
    "Google Blob Storage",
    "Firebase",
    "Keycloak",
    "Oauth2",
  ],
  categoryCode: "personal",
  technologyCodes: [
    "java",
    "spring-boot",
    "postgresql",
    "docker",
    "gitlab",
    "google-blob-storage",
    "firebase",
    "keycloak",
    "oauth2",
  ],
  start: "2020-09",
  end: "2020-12",
  code: "ccat-elections-project",
  projectGoals: [
    {
      title: "Sistema de Votación en Línea",
      description:
        "Desarrollar e implementar un sistema de votación en línea que garantice procesos seguros, anónimos y confiables.",
    },
    {
      title: "Interfaz de Usuario",
      description: "Diseñar una interfaz de usuario receptiva y fácil de usar.",
    },
    {
      title: "Gestión de Backend",
      description:
        "Administrar servicios de backend para la autenticación de usuarios, conteo de votos y generación de reportes.",
    },
    {
      title: "Seguridad del Sistema",
      description: "Integrar protocolos de autenticación y login seguros.",
    },
    {
      title: "Escalabilidad y Despliegue",
      description:
        "Optimizar la escalabilidad y el despliegue mediante la contenedorización.",
    },
    {
      title: "Gestión de Datos",
      description:
        "Administrar el almacenamiento de datos con soluciones de respaldo efectivas.",
    },
  ],
  keyFeatures: [
    {
      title: "Sistema de Votación Seguro",
      description:
        "Sistema de votación en línea que asegura procesos de votación anónimos y confiables.",
    },
    {
      title: "Interfaz de Usuario Receptiva",
      description:
        "Interfaz diseñada para ser accesible y fácil de usar desde cualquier dispositivo.",
    },
    {
      title: "Contenedorización con Docker",
      description:
        "Uso de Docker para optimizar el despliegue y la escalabilidad en diferentes entornos.",
    },
    {
      title: "Seguridad Integrada",
      description:
        "Integración de protocolos de autenticación y login seguros con Keycloak y Oauth2.",
    },
    {
      title: "Gestión Eficiente de Datos",
      description:
        "Manejo de datos utilizando Google Blob Storage y Firebase, con soluciones de respaldo efectivas.",
    },
  ],
};
