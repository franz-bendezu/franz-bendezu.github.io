import type { IBaseProject } from "@/interfaces/project";

export const MOVIFY_PAYMENT_MODULE: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Módulo de Pagos con Seguimiento de Ingresos y Gastos",
  lang: "es",
  shortDescription: "Desarrollo de un módulo de pagos con seguimiento de ingresos y gastos.",
  description: "De julio a diciembre de 2024, desarrollé un módulo de pagos para facilitar el registro de pagos y auditorías con recibos para órdenes de mudanza dentro de la infraestructura existente de la empresa. Implementé funciones para registrar transacciones de pago y asociarlas con las órdenes de mudanza respectivas, asegurando una documentación financiera precisa y rastros de auditoría. Mejoré las capacidades de informes para generar reportes detallados de los registros de pago y recibos asociados, facilitando los procesos de auditoría y análisis financiero.",
  tags: ["AWS S3", "Java", "MariaDB", "Spring Boot", "Vue.js"],
  categoryCode: "freelance",
  technologyCodes: ["aws-s3", "java", "mariadb", "spring-boot", "vue2"],
  start: "2024-07",
  end: "2024-12",
  code: "movify-payment-module",
  projectGoals: [
    {
      title: "Automatización de Procesos Financieros",
      description: "Facilitar la gestión de pagos y auditorías con un módulo integrado de ingresos y gastos que reduce el tiempo de procesamiento administrativo.",
    },
    {
      title: "Integración con Sistemas Contables",
      description: "Desarrollar APIs para la generación de reportes PDF/Excel y sincronización con sistemas contables existentes para un flujo financiero coherente.",
    },
    {
      title: "Mejora de la Transparencia Financiera",
      description: "Implementar un sistema de registro detallado con adjuntos documentales para asegurar transparencia y trazabilidad en cada transacción.",
    },
    {
      title: "Optimización de Reportes Financieros",
      description: "Crear un sistema de filtrado dinámico para generar reportes personalizados que faciliten el análisis y la toma de decisiones.",
    }
  ],
  keyFeatures: [
    {
      title: "Sistema Integral de Gestión de Gastos",
      description: "Interfaz completa para crear, editar y eliminar registros de gastos con validación en tiempo real y categorización por tipo.",
    },
    {
      title: "Almacenamiento de Documentación Financiera",
      description: "Funcionalidad para subir y almacenar documentos de respaldo como recibos y facturas vinculados directamente a cada transacción.",
    },
    {
      title: "Exportación Avanzada de Datos",
      description: "Capacidad de exportar reportes financieros en formatos PDF y Excel con filtros por fecha, categoría y estado.",
    },
    {
      title: "Interfaz Intuitiva y Responsive",
      description: "Diseño moderno con modales interactivos que optimizan el flujo de trabajo y reducen la curva de aprendizaje para nuevos usuarios.",
    }
  ],
  banner: {
    src: "/images/movify-payment-module/expense-page.webp",
    alt: "Página de Gastos",
  },
  images: [
    {
      src: "/images/movify-payment-module/expense-page.webp",
      alt: "Página de Gastos",
      description: "Página para gestionar los gastos, donde se pueden crear, eliminar y actualizar registros. Incluye filtros dinámicos y opciones para descargar reportes en formatos PDF y Excel.",
    },
    {
      src: "/images/movify-payment-module/expenses-edit.webp",
      alt: "Edición de Gasto",
      description: "Modal para editar un gasto, permitiendo modificar todos los campos y adjuntar archivos de recibos como comprobantes.",
    },
    {
      src: "/images/movify-payment-module/expenses-edit-add-document.webp",
      alt: "Edición de Gasto con Documento",
      description: "Modal de edición de gastos mostrando la funcionalidad para subir documentos de respaldo como recibos o facturas.",
    },
    {
      src: "/images/movify-payment-module/expense-report.webp",
      alt: "Reporte de Gastos",
      description: "Visualización de reportes de gastos con filtros por fechas y funcionalidad para exportar la información a Excel.",
    },
  ]
};

export const MOVIFY_PAYMENT_MODULE_EN: IBaseProject = {
  status: "completed",
  title: "Movify.pe - Payment Module with Income and Expense Tracking",
  lang: "en",
  shortDescription: "Development of a payment module with income and expense tracking.",
  description: "From July to December 2024, I developed a comprehensive payment module to streamline the registration of payments and financial audits for moving orders within the company's existing infrastructure. I implemented functionality to record payment transactions and associate them with specific moving orders, ensuring accurate financial documentation and reliable audit trails. The system includes enhanced reporting capabilities to generate detailed financial reports with associated receipts, facilitating audit processes and financial analysis.",
  tags: ["AWS S3", "Java", "MariaDB", "Spring Boot", "Vue.js"],
  categoryCode: "freelance",
  technologyCodes: ["aws-s3", "java", "mariadb", "spring-boot", "vue2"],
  start: "2024-07",
  end: "2024-12",
  code: "movify-payment-module",
  projectGoals: [
    {
      title: "Automation of Financial Processes",
      description: "Streamline payment management and audits with an integrated income and expense module that reduces administrative processing time.",
    },
    {
      title: "Integration with Accounting Systems",
      description: "Develop APIs for PDF/Excel report generation and synchronization with existing accounting systems for a coherent financial workflow.",
    },
    {
      title: "Improvement of Financial Transparency",
      description: "Implement a detailed record-keeping system with document attachments to ensure transparency and traceability for each transaction.",
    },
    {
      title: "Optimization of Financial Reporting",
      description: "Create a dynamic filtering system to generate customized reports that facilitate analysis and decision-making.",
    }
  ],
  keyFeatures: [
    {
      title: "Comprehensive Expense Management System",
      description: "Complete interface for creating, editing, and deleting expense records with real-time validation and categorization by type.",
    },
    {
      title: "Financial Documentation Storage",
      description: "Functionality to upload and store supporting documents such as receipts and invoices directly linked to each transaction.",
    },
    {
      title: "Advanced Data Export",
      description: "Capability to export financial reports in PDF and Excel formats with filters by date, category, and status.",
    },
    {
      title: "Intuitive and Responsive Interface",
      description: "Modern design with interactive modals that optimize workflow and reduce the learning curve for new users.",
    }
  ],
  images: [
    {
      src: "/images/movify-payment-module/expense-page.webp",
      alt: "Expense Management Page",
      description: "Expense management interface where users can create, delete, and update expense records. Features dynamic filtering options and functionality to export reports in PDF and Excel formats.",
    },
    {
      src: "/images/movify-payment-module/expenses-edit.webp",
      alt: "Expense Editing Modal",
      description: "Modal for editing expense entries, allowing users to modify fields and upload receipt documents as supporting evidence.",
    },
    {
      src: "/images/movify-payment-module/expenses-edit-add-document.webp",
      alt: "Expense Editing with Document Upload",
      description: "Expense editing interface showcasing the functionality to attach supporting documents such as receipts or invoices.",
    },
    {
      src: "/images/movify-payment-module/expense-report.webp",
      alt: "Expense Report View",
      description: "Expense reporting interface with date filtering capabilities and Excel export functionality for financial analysis.",
    },
  ],
  banner: {
    src: "/images/movify-payment-module/expense-page.webp",
    alt: "Expense Management Page",
  }
};
