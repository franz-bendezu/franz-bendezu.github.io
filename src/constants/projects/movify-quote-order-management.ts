import { IBaseProject } from "@/interfaces/project";

export const MOVIFY_QUOTE_ORDER_MANAGMENT:IBaseProject  = {
  status: "completed",
  title: "Movify.pe - Sistema de Gestión de Cotizaciones y Órdenes",
  lang: "es",
  shortDescription: "Desarrollo de un sistema administrativo para cotizaciones y órdenes de mudanza.",
  description: "De diciembre de 2021 a julio de 2023, desarrollé un sistema administrativo para cotizaciones y órdenes para el equipo de ventas y mudanza. Diseñé e implementé la arquitectura cliente-servidor utilizando una API REST y una SPA. Automatizé la generación de PDF para cotizaciones y órdenes de venta. Desarrollé un módulo de informes para medir la eficiencia del equipo de ventas e interconecté con el sistema de cotizaciones web a través de API. Establecí flujos de integración y despliegue continuo mediante GitHub Actions.",
  tags: [
    "Spring Boot",
    "JPA Hibernate",
    "Java",
    "TypeScript",
    "Vue.js",
    "Vuetify",
    "Nginx",
    "Docker",
  ],
  categoryCode: "freelance",
  technologyCodes: [
    "spring-boot",
    "jpa-hibernate",
    "java",
    "typescript",
    "mariadb",
    "vue2",
    "vuetify",
    "nginx",
    "docker",
  ],
  start: "2021-12",
  end: "2023-07",
  code: "movify-quote-order-management",
  banner: {
    src: "/images/movify-quote-order-management/banner.webp",
    alt: "Movify Quote Order Management",
  },
  images: [
    {
      src: "/images/movify-quote-order-management/costs-dashboard.webp",
      alt: "Movify costs dashboard",
      description: "Dashboard view showing cost management interface with a table of different cost types including distance-based costs for owned and third-party vehicles, and personnel costs for different services."
    },
    {
      src: "/images/movify-quote-order-management/objects-dashboard.webp",
      alt: "Movify objects dashboard",
      description: "Objects management dashboard displaying a categorized list of movable items with their specifications including carriers required and space usage."
    },
    {
      src: "/images/movify-quote-order-management/quotations-dashboard.webp",
      alt: "Movify quotations dashboard",
      description: "Quotations management interface showing client information, contact details, channel information, creation date, and action buttons for each quotation."
    },
    {
      src: "/images/movify-quote-order-management/main-dashboard.webp",
      alt: "Movify main dashboard",
      description: "Main dashboard with graphical analytics showing daily and monthly metrics along with statistics about how far in advance customers book moving services."
    },
    {
      src: "/images/movify-quote-order-management/customer-info-quotation.webp",
      alt: "Customer information in quotation",
      description: "Quotation screen showing customer information fields including name, email, phone, and personal details for a moving service with 2 spaces and using a Taxi Cargo 1 vehicle."
    },
    {
      src: "/images/movify-quote-order-management/location-map-quotation.webp",
      alt: "Location map in quotation",
      description: "Map interface for selecting origin and destination locations for the moving service, displaying an interactive map with address fields for both locations."
    },
    {
      src: "/images/movify-quote-order-management/service-options-quotation.webp",
      alt: "Service options in quotation",
      description: "Service options selection screen showing different service packages including Easy service (150), Detailed service (190), and Total Protection (190) with additional fields for estimated moving dates."
    },
    {
      src: "/images/movify-quote-order-management/remove-product-quotation.webp",
      alt: "Remove product confirmation in quotation",
      description: "Dialog box asking for confirmation to remove a product from the quotation, with cancel and remove options."
    },
    {
      src: "/images/movify-quote-order-management/service-orders.webp",
      alt: "Service orders management",
      description: "Service orders management interface showing a list of orders with customer information, moving dates, prices, payment methods, and action buttons."
    },
    {
      src: "/images/movify-quote-order-management/analytics-dashboard.webp",
      alt: "Analytics dashboard",
      description: "Comprehensive analytics dashboard with multiple graphs showing orders, income, service types, and performance metrics over time with filtering options by date."
    },
    {
      src: "/images/movify-quote-order-management/user-management.webp",
      alt: "User management interface",
      description: "User management screen displaying a list of system users with their email addresses and assigned roles, with action buttons for each user."
    },
    {
      src: "/images/movify-quote-order-management/edit-service-order.webp",
      alt: "Edit service order screen",
      description: "Interface for editing an existing service order, showing available service options, pricing information, and customer details."
    },
    {
      src: "/images/movify-quote-order-management/goals-dashboard.webp",
      alt: "Goals dashboard",
      description: "Dashboard showing business objectives and performance metrics with comparative graphs for orders, quotations, income and achievement of targets."
    },
    {
      src: "/images/movify-quote-order-management/rates-management.webp",
      alt: "Rates management screen",
      description: "Rates management interface displaying a pricing table for different service types based on vehicle size, distance, and number of floors, with action buttons for each rate."
    }
  ],
  projectGoals: [
    {
      title: "Establecer un Sistema Administrativo para Cotizaciones y Órdenes",
      description: "Desarrollar un sistema administrativo para cotizaciones y órdenes de mudanza.",
    },
    {
      title: "Generar PDF's para las Cotizaciones y Órdenes",
      description: "Automatizar la generación de PDF para cotizaciones y órdenes de venta.",
    },
    {
      title: "Establecer un Módulo de reportes",
      description: "Desarrollar un módulo de reportes para medir la eficiencia del equipo de ventas.",
    },
    {
      title: "Integración con Sistema de Cotizaciones Web",
      description: "Interconectar el sistema de gestión de cotizaciones y órdenes con el sistema de cotizaciones web.",
    }
  ],
  keyFeatures: [
    {
      title: "Control de acceso",
      description: "Se estableció la autenticación y autorización de usuarios con roles y permisos personalizados.",
    },
    {
      title: "Generación de PDF",
      description: "Se estableció plantillas html y su conversor a PDF para cotizaciones y órdenes de venta.",
    },
    {
      title: "Weebhooks para integración con el sistema de cotizaciones web",
      description: "Interconexión con el sistema de cotizaciones web a través de API para un flujo de datos sin problemas.",
    },
    {
      title: "Flujos de integración y despliegue continuo",
      description: "Se establecieron flujos de integración y despliegue continuo mediante GitLab CI/CD.",
    }
  ],
};

export const MOVIFY_QUOTE_ORDER_MANAGEMENT_EN: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Quote and Order Management System",
  lang: "en",
  shortDescription: "Development of an administrative system for quotes and moving orders.",
  description: "From December 2021 to July 2023, I developed an administrative system for quotes and orders for the sales and moving team. I designed and implemented the client-server architecture using a REST API and a SPA. I automated the generation of PDFs for quotes and sales orders. I developed a reporting module to measure the efficiency of the sales team and interconnected with the web quoting system through an API. I established continuous integration and deployment flows using GitHub Actions.",
  tags: [
    "Spring Boot",
    "JPA Hibernate",
    "Java",
    "TypeScript",
    "Vue.js",
    "Vuetify",
    "Nginx",
    "Docker",
  ],
  categoryCode: "freelance",
  technologyCodes: [
    "spring-boot",
    "jpa-hibernate",
    "java",
    "typescript",
    "mariadb",
    "vue2",
    "vuetify",
    "nginx",
    "docker",
  ],
  start: "2021-12",
  end: "2023-07",
  code: "movify-quote-order-management",
  banner: {
    src: "/images/movify-quote-order-management/banner.webp",
    alt: "Movify Quote Order Management",
  },
  images: [
    {
      src: "/images/movify-quote-order-management/costs-dashboard.webp",
      alt: "Movify costs dashboard",
      description: "Dashboard view showing cost management interface with a table of different cost types including distance-based costs for owned and third-party vehicles, and personnel costs for different services."
    },
    {
      src: "/images/movify-quote-order-management/objects-dashboard.webp",
      alt: "Movify objects dashboard",
      description: "Objects management dashboard displaying a categorized list of movable items with their specifications including carriers required and space usage."
    },
    {
      src: "/images/movify-quote-order-management/quotations-dashboard.webp",
      alt: "Movify quotations dashboard",
      description: "Quotations management interface showing client information, contact details, channel information, creation date, and action buttons for each quotation."
    },
    {
      src: "/images/movify-quote-order-management/main-dashboard.webp",
      alt: "Movify main dashboard",
      description: "Main dashboard with graphical analytics showing daily and monthly metrics along with statistics about how far in advance customers book moving services."
    },
    {
      src: "/images/movify-quote-order-management/customer-info-quotation.webp",
      alt: "Customer information in quotation",
      description: "Quotation screen showing customer information fields including name, email, phone, and personal details for a moving service with 2 spaces and using a Taxi Cargo 1 vehicle."
    },
    {
      src: "/images/movify-quote-order-management/location-map-quotation.webp",
      alt: "Location map in quotation",
      description: "Map interface for selecting origin and destination locations for the moving service, displaying an interactive map with address fields for both locations."
    },
    {
      src: "/images/movify-quote-order-management/service-options-quotation.webp",
      alt: "Service options in quotation",
      description: "Service options selection screen showing different service packages including Easy service (150), Detailed service (190), and Total Protection (190) with additional fields for estimated moving dates."
    },
    {
      src: "/images/movify-quote-order-management/remove-product-quotation.webp",
      alt: "Remove product confirmation in quotation",
      description: "Dialog box asking for confirmation to remove a product from the quotation, with cancel and remove options."
    },
    {
      src: "/images/movify-quote-order-management/service-orders.webp",
      alt: "Service orders management",
      description: "Service orders management interface showing a list of orders with customer information, moving dates, prices, payment methods, and action buttons."
    },
    {
      src: "/images/movify-quote-order-management/analytics-dashboard.webp",
      alt: "Analytics dashboard",
      description: "Comprehensive analytics dashboard with multiple graphs showing orders, income, service types, and performance metrics over time with filtering options by date."
    },
    {
      src: "/images/movify-quote-order-management/user-management.webp",
      alt: "User management interface",
      description: "User management screen displaying a list of system users with their email addresses and assigned roles, with action buttons for each user."
    },
    {
      src: "/images/movify-quote-order-management/edit-service-order.webp",
      alt: "Edit service order screen",
      description: "Interface for editing an existing service order, showing available service options, pricing information, and customer details."
    },
    {
      src: "/images/movify-quote-order-management/goals-dashboard.webp",
      alt: "Goals dashboard",
      description: "Dashboard showing business objectives and performance metrics with comparative graphs for orders, quotations, income and achievement of targets."
    },
    {
      src: "/images/movify-quote-order-management/rates-management.webp",
      alt: "Rates management screen",
      description: "Rates management interface displaying a pricing table for different service types based on vehicle size, distance, and number of floors, with action buttons for each rate."
    }
  ],
  projectGoals: [
    {
      title: "Establish an Administrative System for Quotes and Orders",
      description: "Develop an administrative system for quotes and moving orders.",
    },
    {
      title: "Generate PDFs for Quotes and Orders",
      description: "Automate the generation of PDFs for quotes and sales orders.",
    },
    {
      title: "Establish a Reporting Module",
      description: "Develop a reporting module to measure the efficiency of the sales team.",
    },
    {
      title: "Integration with Web Quoting System",
      description: "Interconnect the quote and order management system with the web quoting system.",
    }
  ],
  keyFeatures: [
    {
      title: "Access Control",
      description: "User authentication and authorization with custom roles and permissions.",
    },
    {
      title: "PDF Generation",
      description: "HTML templates and their conversion to PDF for quotes and sales orders.",
    },
    {
      title: "Webhooks for Integration with Web Quoting System",
      description: "Interconnection with the web quoting system through an API for seamless data flow.",
    },
    {
      title: "Continuous Integration and Deployment Flows",
      description: "Continuous integration and deployment flows established using GitHub Actions.",
    }
  ],
};
