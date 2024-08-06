import type { IBaseProject } from "@/interfaces/project";

export const BUS_UNI_TRACKER: IBaseProject = {
  status: "completed",
  title: "BusUni Tracker",
  shortDescription: "Proyecto de Investigación IOT de localización en tiempo real del bus de la Universidad Nacional de Ingeniería.",
  description: "Desde enero hasta diciembre de 2020, asumí la responsabilidad de establecer la arquitectura y desarrollar un sistema de localización en tiempo real del bus universitario utilizando tecnologías LoT LoRaWAN. Este proyecto de investigación fue crucial para mejorar la eficiencia del transporte dentro del campus universitario. Implementé Firebase y Vue.js para la aplicación web, mientras que Cloud Functions se utilizó para recibir datos en tiempo real de la red LoRaWAN. Además, utilicé Realtime Database y Firestore para mostrar y almacenar información relevante, como rutas, conductores y trayectos recorridos. La culminación de este proyecto se reflejó en la publicación de un artículo científico con DOI: 10.1109/ISC255366.2022.9922172.",
  tags: ["LoT LoRaWAN", "Firebase", "Vue.js", "Cloud Functions"],
  image: {
    src: "/images/busuni-tracker.webp",
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
      description: "Desarrollar un sistema para el seguimiento en tiempo real de los buses universitarios para mejorar la eficiencia del transporte en el campus.",
    },
    {
      title: "Integración con Servicios del Campus",
      description: "Integrar con los servicios del campus para una programación precisa y planificación de rutas.",
    },
    {
      title: "Publicación de Investigación",
      description: "Contribuir a la investigación académica con un artículo publicado sobre la tecnología LoT LoRaWAN.",
    },
  ],
  keyFeatures: [
    {
      title: "Seguimiento en Tiempo Real",
      description: "Actualizaciones de ubicación en tiempo real y visualización de rutas.",
    },
    {
      title: "Integración con el Campus",
      description: "Integración con servicios universitarios para una gestión integral del transporte.",
    },
    {
      title: "Contribución Académica",
      description: "Artículo de investigación publicado sobre la tecnología LoT LoRaWAN.",
    },
  ],
};
