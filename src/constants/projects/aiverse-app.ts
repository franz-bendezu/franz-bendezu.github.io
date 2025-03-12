import { IBaseProject } from "@/interfaces/project";

export const AIVERSE:IBaseProject  = {
  status: "completed",
  title: {
    en: "Aiverse",
    es: "Aiverse"
  },
  shortDescription: {
    en: "Web application for generating social media posts and image processing powered by AI.",
    es: "Aplicación web para la generación de publicaciones en redes sociales y procesamiento de imágenes impulsada por IA."
  },
  description: {
    en: "The 'Aiverse' aimed to use AI to generate social media posts and process images. The project used Vue.js for the frontend, AWS Lambda for serverless backend functions, and Docker for containerization. The application also integrated with IPFS via Infura for decentralized file storage. The CI/CD pipeline was managed using GitLab CI, ensuring smooth and automatic deployments.",
    es: "El 'Aiverse' tuvo el objetivo de utilizar IA para generar publicaciones en redes sociales y procesar imágenes. El proyecto utilizó Vue.js para el frontend, AWS Lambda para funciones backend sin servidor y Docker para la contenedorización. La aplicación también se integró con IPFS a través de Infura para el almacenamiento descentralizado de archivos. El pipeline de CI/CD se gestionó utilizando GitLab CI, asegurando despliegues automáticos y fluidos."
  },
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
      title: {
        en: "AI-Powered Post Generation",
        es: "Generación de Publicaciones Impulsada por IA"
      },
      description: {
        en: "Develop an AI-powered system to generate social media posts and process images.",
        es: "Desarrollar un sistema impulsado por IA para generar publicaciones en redes sociales y procesar imágenes."
      }
    },
    {
      title: {
        en: "Serverless Architecture",
        es: "Arquitectura Sin Servidor"
      },
      description: {
        en: "Implement a serverless architecture using AWS Lambda for scalable backend functions.",
        es: "Implementar una arquitectura sin servidor utilizando AWS Lambda para funciones backend escalables."
      }
    },
    {
      title: {
        en: "Decentralized Storage",
        es: "Almacenamiento Descentralizado"
      },
      description: {
        en: "Integrate with IPFS via Infura for decentralized file storage.",
        es: "Integrar con IPFS a través de Infura para el almacenamiento descentralizado de archivos."
      }
    }
  ],
  keyFeatures: [
    {
      title: {
        en: "AI-Powered Post Generation",
        es: "Generación de Publicaciones Impulsada por IA"
      },
      description: {
        en: "Generate social media posts and process images using AI.",
        es: "Generar publicaciones en redes sociales y procesar imágenes utilizando IA."
      }
    },
    {
      title: {
        en: "Serverless Backend",
        es: "Backend Sin Servidor"
      },
      description: {
        en: "Scalable backend functions deployed using AWS Lambda.",
        es: "Funciones backend escalables desplegadas utilizando AWS Lambda."
      }
    },
    {
      title: {
        en: "Decentralized Storage",
        es: "Almacenamiento Descentralizado"
      },
      description: {
        en: "Store files in a decentralized manner using IPFS via Infura.",
        es: "Almacenar archivos de manera descentralizada utilizando IPFS a través de Infura."
      }
    }
  ],
};
