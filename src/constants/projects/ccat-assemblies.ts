import { IBaseProject } from "@/interfaces/project";

export const CCAT_ASSEMBLIES: IBaseProject = {
  status: "completed",
  title: "Sistema de Registro de Asambleas CCAT",
  shortDescription:
    "Desarrollo de un sistema para registrar asistencia y votos en asambleas del CCAT, con resultados públicos.",
  description:
    "Desarrollé un sistema para gestionar las asambleas del CCAT usando Spring Boot, Spring JPA, Spring Security y React. El sistema permite registrar la asistencia de los miembros y registrar los votos para decisiones importantes. Los resultados de las votaciones se registran de forma pública, asegurando transparencia en el proceso. Implementé seguridad robusta para proteger los datos y la integridad del sistema, y utilicé React para una interfaz de usuario interactiva y eficiente.",
  tags: [
    "Spring Boot",
    "Spring JPA",
    "Spring Security",
    "React",
  ],
  categoryCode: "personal",
  technologyCodes: [
    "spring-boot",
    "spring-jpa",
    "spring-security",
    "react",
  ],
  start: "2019-11",
  end: "2019-12",
  code: "ccat-assemblies",
  projectGoals: [
    {
      title: "Registro de Asistencia",
      description:
        "Implementar una funcionalidad para registrar la asistencia de los miembros en las asambleas del CCAT.",
    },
    {
      title: "Gestión de Votos",
      description:
        "Desarrollar un sistema para registrar los votos en las decisiones tomadas durante las asambleas.",
    },
    {
      title: "Transparencia de Resultados",
      description:
        "Asegurar que los resultados de las votaciones se registren y se muestren de forma pública para garantizar la transparencia.",
    },
    {
      title: "Seguridad del Sistema",
      description:
        "Integrar Spring Security para proteger los datos y asegurar la integridad del sistema.",
    },
    {
      title: "Interfaz de Usuario Interactiva",
      description:
        "Crear una interfaz de usuario intuitiva y eficiente usando React para facilitar la interacción con el sistema.",
    },
  ],
  keyFeatures: [
    {
      title: "Registro de Asistencia",
      description:
        "Funcionalidad para registrar y gestionar la asistencia de los miembros en las asambleas del CCAT.",
    },
    {
      title: "Gestión de Votos",
      description:
        "Sistema para registrar y gestionar los votos en decisiones de asambleas, con resultados públicos.",
    },
    {
      title: "Resultados Públicos",
      description:
        "Visualización pública de los resultados de las votaciones para asegurar la transparencia del proceso.",
    },
    {
      title: "Seguridad Robusta",
      description:
        "Implementación de Spring Security para proteger los datos y la integridad del sistema.",
    },
    {
      title: "Interfaz Reactiva",
      description:
        "Interfaz de usuario interactiva y eficiente desarrollada con React, mejorando la experiencia del usuario.",
    },
  ],
};
