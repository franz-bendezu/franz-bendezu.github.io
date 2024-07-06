import {
  IBaseProjectTechnology,
  IProjectTechonologyCategory,
} from "../../interfaces/project";

export const PROJECT_TECHNOLOGY_CATEGORY = [
  {
    name: "Cloud",
    value: "cloud",
  },
  {
    name: "Database",
    value: "database",
  },
  {
    name: "DevOps",
    value: "devops",
  },
  {
    name: "Testing",
    value: "testing",
  },
  {
    name: "Frontend Framework",
    value: "frontend-framework",
  },
  {
    name: "Backend Framework",
    value: "backend-framework",
  },
  {
    name: "Fullstack Framework",
    value: "fullstack-framework",
  },
  {
    name: "Web API",
    value: "web-api",
  },
  {
    name: "Programming Language",
    value: "programming-language",
  },
  {
    name: "IoT",
    value: "iot",
  },
] as const satisfies IProjectTechonologyCategory[];

export const PROJECT_TECHNOLOGIES: IBaseProjectTechnology[] = [
  {
    code: "nuxtjs",
    name: "Nuxt.js",
    color: "#00C58E",
    categoryCodes: ["frontend-framework"],
  },
  {
    code: "typescript",
    name: "Typescript",
    color: "#3178C6",
    categoryCodes: ["programming-language"],
  },
  {
    code: "graphql",
    name: "GraphQL",
    color: "#E535AB",
    categoryCodes: ["web-api"],
  },
  {
    code: "apollo-server",
    name: "Apollo Server",
    color: "#3B2E5A",
    categoryCodes: ["backend-framework"],
  },
  {
    code: "firebase",
    name: "Firebase",
    color: "#FFCA28",
    categoryCodes: ["cloud"],
  },
  {
    code: "vue2",
    name: "Vue 2",
    color: "#4FC08D",
    categoryCodes: ["frontend-framework"],
  },
  {
    code: "vue3",
    name: "Vue 2",
    color: "#4FC08D",
    categoryCodes: ["frontend-framework"],
  },
  {
    code: "cloud-functions",
    name: "Cloud Functions",
    color: "#FFD600",
    categoryCodes: ["devops"],
  },
  {
    code: "iot",
    name: "LoT",
    color: "#FFD600",
    categoryCodes: ["devops"],
  },
  {
    code: "lorawan",
    name: "LoRaWAN",
    color: "#FFD600",
    categoryCodes: ["devops"],
  },
  {
    code: "spring-boot",
    name: "Spring Boot",
    color: "#6DB33F",
    categoryCodes: ["backend-framework"],
  },
  {
    code: "java",
    name: "Java",
    color: "#007396",
    categoryCodes: ["programming-language"],
  },
  {
    code: "kotlin",
    name: "Kotlin",
    color: "#0095D5",
    categoryCodes: ["programming-language"],
  },
  {
    code: "postgresql",
    name: "PostgreSQL",
    color: "#336791",
    categoryCodes: ["database"],
  },
  {
    code: "react",
    name: "React",
    color: "#61DAFB",
    categoryCodes: ["frontend-framework"],
  },
  {
    code: "tailwindcss",
    name: "Tailwind CSS",
    color: "#38B2AC",
    categoryCodes: ["frontend-framework"],
  },
  {
    code: "javascript",
    name: "Javascript",
    color: "#F7DF1E",
    categoryCodes: ["programming-language"],
  },
  {
    code: "nextjs",
    name: "Next.js",
    color: "#000000",
    categoryCodes: ["frontend-framework"],
  },
  {
    code: "sass",
    name: "SASS",
    color: "#CC6699",
    categoryCodes: ["frontend-framework"],
  },
  {
    code: "prisma",
    name: "Prisma",
    color: "#CC6699",
    categoryCodes: ["backend-framework"],
  },
  {
    code: "aws-s3",
    name: "Amazon S3",
    color: "#FFD600",
    categoryCodes: ["cloud"],
  },
  {
    code: "aws-ec2",
    name: "Amazon EC2",
    color: "#FFD600",
    categoryCodes: ["cloud"],
  },
  {
    code: "amazon-rds",
    name: "Amazon RDS",
    color: "#FFD600",
    categoryCodes: ["cloud"],
  },
  {
    code: "aws-amplify",
    name: "Amazon Amplify",
    color: "#FFD600",
    categoryCodes: ["cloud"],
  }, 
  {
    code: "aws-lambda",
    name: "AWS Lambda",
    color: "#FFD600",
    categoryCodes: ["cloud"],
  },
];
