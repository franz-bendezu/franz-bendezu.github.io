import type { IBaseProject } from "@/interfaces/project";

export const OXIMETRO_PERU: IBaseProject = {
  status: "completed",
  title: "Oximetro Perú",
  shortDescription: "Desarrollo del MVP de una aplicación web para ver lugares donde encontrar oxímetros cerca de ti.",
  description: "En agosto de 2020, desarrollé un MVP de una aplicación web denominada Oximetro Perú, que permitía a los usuarios encontrar lugares cercanos donde comprar oxímetros. Utilicé Vue.js para el frontend y Firebase para el backend, lo que permitió una implementación rápida y eficiente. Además, integré Leaflet.js para la visualización de mapas y geolocalización, lo que facilitó a los usuarios encontrar tiendas cercanas. Este proyecto se desarrolló en respuesta a la creciente demanda de oxímetros durante la pandemia de COVID-19 en Perú.",
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
      title: "Localización de Oxímetros",
      description: "Desarrollar una aplicación para encontrar lugares cercanos donde alquilar oxímetros para la detección de COVID-19.",
    },
    {
      title: "Respuesta a la Pandemia",
      description: "Responder a la creciente demanda de oxímetros durante la pandemia de COVID-19 en Perú.",
    },
    {
      title: "Desarrollo Rápido y Eficiente",
      description: "Utilizar tecnologías modernas para un desarrollo rápido y eficiente del MVP.",
    },
  ],
  keyFeatures: [
    {
      title: "Localización de Tiendas",
      description: "Visualización de tiendas cercanas donde alquilar oxímetros para la detección de COVID-19.",
    },
    {
      title: "Geolocalización",
      description: "Integración de Leaflet.js para la visualización de mapas y geolocalización.",
    },
    {
      title: "Desarrollo Ágil",
      description: "Desarrollo rápido y eficiente utilizando Vue.js y Firebase.",
    },
  ],
  images: [
    {
      src: "/images/oximetro-peru/about.webp",
      alt: "Oximetro Perú",
      description: "Oximetro Perú - Acerca del proyecto.",
    },
    {
      src: "/images/oximetro-peru/home.webp",
      alt: "Oximetro Perú",
      description: "Oximetro Perú - Página de inicio.",
    },
    {
      src: "/images/oximetro-peru/home-details.webp",
      alt: "Oximetro Perú",
      description: "Oximetro Perú - Página del mapa.",
    },
    {
      src: "/images/oximetro-peru/contact.webp",
      alt: "Oximetro Perú",
      description: "Oximetro Perú - Página de contacto.",
    },
    {
      src: "/images/oximetro-peru/team.webp",
      alt: "Oximetro Perú",
      description: "Oximetro Perú - Equipo ",
    }
  ],
};
