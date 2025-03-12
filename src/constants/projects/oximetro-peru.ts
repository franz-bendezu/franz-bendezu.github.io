import type { IBaseProject } from "@/interfaces/project";

export const OXIMETRO_PERU: IBaseProject = {
  status: "completed",
  title: {
    en: "Oximeter Peru",
    es: "Oximetro Perú"
  },
  shortDescription: {
    en: "Development of the MVP of a web application to find places where you can find oximeters near you.",
    es: "Desarrollo del MVP de una aplicación web para ver lugares donde encontrar oxímetros cerca de ti."
  },
  description: {
    en: "In August 2020, I developed an MVP of a web application called Oximeter Peru, which allowed users to find nearby places to buy oximeters. I used Vue.js for the frontend and Firebase for the backend, which allowed for quick and efficient implementation. Additionally, I integrated Leaflet.js for map visualization and geolocation, making it easier for users to find nearby stores. This project was developed in response to the growing demand for oximeters during the COVID-19 pandemic in Peru.",
    es: "En agosto de 2020, desarrollé un MVP de una aplicación web denominada Oximetro Perú, que permitía a los usuarios encontrar lugares cercanos donde comprar oxímetros. Utilicé Vue.js para el frontend y Firebase para el backend, lo que permitió una implementación rápida y eficiente. Además, integré Leaflet.js para la visualización de mapas y geolocalización, lo que facilitó a los usuarios encontrar tiendas cercanas. Este proyecto se desarrolló en respuesta a la creciente demanda de oxímetros durante la pandemia de COVID-19 en Perú."
  },
  tags: ["Vue.js", "Firebase", "Leaflet.js"],
  banner: {
    src: "/images/oximetro-peru/banner.webp",
    alt: "Oximetro Perú",
  },
  links: [
    {
      title: "Demo",
      url: "https://oximetro-peru.web.app/",
      type: "website",
    },
  ],
  categoryCode: "freelance",
  technologyCodes: ["vue2", "firebase", "leaflet"],
  start: "2020-05",
  code: "oximetro-peru",
  end: "2020-06",
  projectGoals: [
    {
      title: {
        en: "Oximeter Location",
        es: "Localización de Oxímetros"
      },
      description: {
        en: "Develop an application to find nearby places to rent oximeters for COVID-19 detection.",
        es: "Desarrollar una aplicación para encontrar lugares cercanos donde alquilar oxímetros para la detección de COVID-19."
      }
    },
    {
      title: {
        en: "Pandemic Response",
        es: "Respuesta a la Pandemia"
      },
      description: {
        en: "Respond to the growing demand for oximeters during the COVID-19 pandemic in Peru.",
        es: "Responder a la creciente demanda de oxímetros durante la pandemia de COVID-19 en Perú."
      }
    },
    {
      title: {
        en: "Quick and Efficient Development",
        es: "Desarrollo Rápido y Eficiente"
      },
      description: {
        en: "Use modern technologies for quick and efficient MVP development.",
        es: "Utilizar tecnologías modernas para un desarrollo rápido y eficiente del MVP."
      }
    },
  ],
  keyFeatures: [
    {
      title: {
        en: "Store Location",
        es: "Localización de Tiendas"
      },
      description: {
        en: "Visualization of nearby stores where you can rent oximeters for COVID-19 detection.",
        es: "Visualización de tiendas cercanas donde alquilar oxímetros para la detección de COVID-19."
      }
    },
    {
      title: {
        en: "Geolocation",
        es: "Geolocalización"
      },
      description: {
        en: "Integration of Leaflet.js for map visualization and geolocation.",
        es: "Integración de Leaflet.js para la visualización de mapas y geolocalización."
      }
    },
    {
      title: {
        en: "Agile Development",
        es: "Desarrollo Ágil"
      },
      description: {
        en: "Quick and efficient development using Vue.js and Firebase.",
        es: "Desarrollo rápido y eficiente utilizando Vue.js y Firebase."
      }
    },
  ],
  images: [
    {
      src: "/images/oximetro-peru/about.webp",
      alt: "Oximetro Perú",
      description: {
        en: "Oximeter Peru - About the project.",
        es: "Oximetro Perú - Acerca del proyecto."
      }
    },
    {
      src: "/images/oximetro-peru/home.webp",
      alt: "Oximetro Perú",
      description: {
        en: "Oximeter Peru - Home page.",
        es: "Oximetro Perú - Página de inicio."
      }
    },
    {
      src: "/images/oximetro-peru/home-details.webp",
      alt: "Oximetro Perú",
      description: {
        en: "Oximeter Peru - Map page.",
        es: "Oximetro Perú - Página del mapa."
      }
    },
    {
      src: "/images/oximetro-peru/contact.webp",
      alt: "Oximetro Perú",
      description: {
        en: "Oximeter Peru - Contact page.",
        es: "Oximetro Perú - Página de contacto."
      }
    },
    {
      src: "/images/oximetro-peru/team.webp",
      alt: "Oximetro Perú",
      description: {
        en: "Oximeter Peru - Team",
        es: "Oximetro Perú - Equipo "
      }
    }
  ],
};
