import type { IBaseProject } from "@/interfaces/project";

export const BUS_UNI_TRACKER: IBaseProject = {
  status: "completed",
  title: {
    en: "Bus UNI Tracker",
    es: "Bus UNI Tracker"
  },
  shortDescription: {
    en: "IoT research project for real-time tracking of the National University of Engineering bus.",
    es: "Proyecto de Investigación IOT de localización en tiempo real del bus de la Universidad Nacional de Ingeniería."
  },
  description: {
    en: "From January to December 2020, I was responsible for establishing the architecture and developing a real-time tracking system for the university bus using LoT LoRaWAN technologies. This research project was crucial to improving transportation efficiency within the university campus. I implemented Firebase and Vue.js for the web application, while Cloud Functions were used to receive real-time data from the LoRaWAN network. Additionally, I used Realtime Database and Firestore to display and store relevant information, such as routes, drivers, and traveled paths. The culmination of this project was reflected in the publication of a scientific article with DOI: 10.1109/ISC255366.2022.9922172.",
    es: "Desde enero hasta diciembre de 2020, asumí la responsabilidad de establecer la arquitectura y desarrollar un sistema de localización en tiempo real del bus universitario utilizando tecnologías LoT LoRaWAN. Este proyecto de investigación fue crucial para mejorar la eficiencia del transporte dentro del campus universitario. Implementé Firebase y Vue.js para la aplicación web, mientras que Cloud Functions se utilizó para recibir datos en tiempo real de la red LoRaWAN. Además, utilicé Realtime Database y Firestore para mostrar y almacenar información relevante, como rutas, conductores y trayectos recorridos. La culminación de este proyecto se reflejó en la publicación de un artículo científico con DOI: 10.1109/ISC255366.2022.9922172."
  },
  tags: ["LoT LoRaWAN", "Firebase", "Vue.js", "Cloud Functions"],
  banner: {
    src: "/images/bus-uni-tracker/banner.webp",
    alt: "bus-uni Tracker",
  },
  links: [
    {
      title: "Artículo",
      url: "https://ieeexplore.ieee.org/document/9922172",
      type: "website",
    },
  ],
  categoryCode: "freelance",
  technologyCodes: ["iot", "lorawan", "firebase", "vue2", "cloud-functions"],
  start: "2020-01",
  end: "2020-12",
  code: "bus-uni-tracker",
  projectGoals: [
    {
      title: {
        en: "Real-Time Tracking",
        es: "Seguimiento en Tiempo Real"
      },
      description: {
        en: "Develop a system for real-time tracking of university buses to improve transportation efficiency on campus.",
        es: "Desarrollar un sistema para el seguimiento en tiempo real de los buses universitarios para mejorar la eficiencia del transporte en el campus."
      }
    },
    {
      title: {
        en: "Integration with Campus Services",
        es: "Integración con Servicios del Campus"
      },
      description: {
        en: "Integrate with campus services for precise scheduling and route planning.",
        es: "Integrar con los servicios del campus para una programación precisa y planificación de rutas."
      }
    },
    {
      title: {
        en: "Research Publication",
        es: "Publicación de Investigación"
      },
      description: {
        en: "Contribute to academic research with a published article on LoT LoRaWAN technology.",
        es: "Contribuir a la investigación académica con un artículo publicado sobre la tecnología LoT LoRaWAN."
      }
    }
  ],
  keyFeatures:  [
    {
      title: {
        en: "Real-Time Tracking",
        es: "Seguimiento en Tiempo Real"
      },
      description: {
        en: "Map visualization of the current location of the bus and its routes in real-time.",
        es: "Visualización en mapa de la ubicación actual del bus y sus rutas en tiempo real."
      }
    },
    {
      title: {
        en: "Route Management",
        es: "Gestión de Rutas"
      },
      description: {
        en: "Administrative panel to create and modify bus routes, defining specific stops and paths.",
        es: "Panel administrativo para crear y modificar rutas del bus, definiendo paradas y trayectos específicos."
      }
    },
    {
      title: {
        en: "Fleet Management",
        es: "Administración de Flota"
      },
      description: {
        en: "Management system for bus registration and IoT device assignment.",
        es: "Sistema de gestión para registro de buses y asignación de dispositivos IoT."
      }
    },
    {
      title: {
        en: "Personnel Management",
        es: "Gestión de Personal"
      },
      description: {
        en: "Driver control with route assignment and schedule planning.",
        es: "Control de conductores con asignación de rutas y programación de horarios."
      }
    },
    {
      title: {
        en: "IoT Integration",
        es: "Integración IoT"
      },
      description: {
        en: "Implementation of LoT LoRaWAN technology for real-time data transmission.",
        es: "Implementación de tecnología LoT LoRaWAN para transmisión de datos en tiempo real."
      }
    }
  ],
  images: [{
    src: "/images/bus-uni-tracker/app-home.webp",
    alt: "Pantalla Principal",
    description: {
      en: "Main view of the application showing the map and the real-time location of the university bus.",
      es: "Vista principal de la aplicación mostrando el mapa y la ubicación en tiempo real del bus universitario."
    }
  },
  {
    src: "/images/bus-uni-tracker/app-view-buss-route.webp",
    alt: "Vista de Ruta del Bus",
    description: {
      en: "Detailed interface showing the current route of the bus, including stops and path on the campus map.",
      es: "Interfaz detallada que muestra la ruta actual del bus, incluyendo paradas y trayecto en el mapa del campus."
    }
  },
  {
    src: "/images/bus-uni-tracker/app-edit-route.webp",
    alt: "Edición de Ruta",
    description: {
      en: "Administration panel to create and modify bus routes, allowing the definition of stops and paths.",
      es: "Panel de administración para crear y modificar las rutas del bus, permitiendo definir paradas y trayectos."
    }
  },
  {
    src: "/images/bus-uni-tracker/app-edit-busses.webp",
    alt: "Gestión de Buses",
    description: {
      en: "Interface for managing the bus fleet, including registration and assignment of IoT devices.",
      es: "Interfaz para la gestión de la flota de buses, incluyendo registro y asignación de dispositivos IoT."
    }
  },
  {
    src: "/images/bus-uni-tracker/app-edit-drivers.webp",
    alt: "Gestión de Conductores",
    description: {
      en: "Panel for driver registration and management, including route assignment and schedules.",
      es: "Panel para el registro y gestión de conductores, incluyendo asignación de rutas y horarios."
    }
  }]
};
