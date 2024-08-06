import { IBaseProject } from "@/interfaces/project";

export const AIVERSE:IBaseProject  = {
  status: "completed",
  title: "Aiverse",
  shortDescription: "Aplicación web para la generación de publicaciones en redes sociales y procesamiento de imágenes impulsada por IA.",
  description: "El 'Aiverse' tuvo el objetivo de utilizar IA para generar publicaciones en redes sociales y procesar imágenes. El proyecto utilizó Vue.js para el frontend, AWS Lambda para funciones backend sin servidor y Docker para la contenedorización. La aplicación también se integró con IPFS a través de Infura para el almacenamiento descentralizado de archivos. El pipeline de CI/CD se gestionó utilizando GitLab CI, asegurando despliegues automáticos y fluidos.",
  tags: ["Vue.js", "AWS Lambda", "Docker", "IPFS", "GitLab CI"],
  links: [
    {
      title: "Repositorio en GitHub",
      url: "https://github.com/franz-bendezu/aiverse",
      type: "github",
    },
  ],
  categoryCode: "demo",
  technologyCodes: ["vue3", "aws-lambda", "docker", "ipfs", "gitlab-ci"],
  start: "2023-01",
  end: "2023-10",
  code: "aiverse-app",
  projectGoals: [
    {
      title: "Generación de Publicaciones Impulsada por IA",
      description: "Desarrollar un sistema impulsado por IA para generar publicaciones en redes sociales y procesar imágenes.",
    },
    {
      title: "Arquitectura Sin Servidor",
      description: "Implementar una arquitectura sin servidor utilizando AWS Lambda para funciones backend escalables.",
    },
    {
      title: "Almacenamiento Descentralizado",
      description: "Integrar con IPFS a través de Infura para el almacenamiento descentralizado de archivos.",
    },
  ],
  keyFeatures: [
    {
      title: "Generación de Publicaciones Impulsada por IA",
      description: "Generar publicaciones en redes sociales y procesar imágenes utilizando IA.",
    },
    {
      title: "Backend Sin Servidor",
      description: "Funciones backend escalables desplegadas utilizando AWS Lambda.",
    },
    {
      title: "Almacenamiento Descentralizado",
      description: "Almacenar archivos de manera descentralizada utilizando IPFS a través de Infura.",
    },
  ],
};
