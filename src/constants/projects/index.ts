import type { IBaseProject } from "../../interfaces/project";
import { AIVERSE } from "./aiverse-app";
import { BUS_UNI_TRACKER } from "./bus-uni-tracker";
import { CON_QUE_PROFE } from "./con-que-profe";
import { HOREXT } from "./horext";
import { MOVIFY_PAYMENT_MODULE } from "./movify-payment-module";
import { MOVIFY_AWS_MIGRATION } from "./movify-aws-migration";
import { MOVIFY_QUOTE_ORDER_MANAGMENT } from "./movify-quote-order-management";
import { MOVIFY_QUOTE_SYSTEM_IMPROVEMENT } from "./movify-quote-system-improvement";
import { MOVIFY_QUOTE_SYSTEM_MIGRATION } from "./movify-quote-system-migration";
import { OXIMETRO_PERU } from "./oximetro-peru";
import { AGENDALO_APP_ENHANCEMENT } from "./agendalo-app-enhancement ";
import { AGENDALO_MIGRATION_SSR } from "./agendalo-ssr-migration";
import { MY_PORTFOLIO } from "./portafolio";
import { MOVIFY_NOTIFICATION_MODULE } from "./movify-notification-module";
import { CCAT_ELECTORAL_PLATFORM } from "./ccat-electoral-platform";
import { CCAT_ASSEMBLIES } from "./ccat-assemblies";
export { PROJECT_CATEGORIES } from "../project-categories";

export const PROJECTS: IBaseProject[] = [
  CCAT_ASSEMBLIES,
  CCAT_ELECTORAL_PLATFORM,
  CON_QUE_PROFE,
  BUS_UNI_TRACKER,
  OXIMETRO_PERU,
  HOREXT,
  MOVIFY_PAYMENT_MODULE,
  MOVIFY_QUOTE_SYSTEM_MIGRATION,
  MOVIFY_AWS_MIGRATION,
  MOVIFY_QUOTE_ORDER_MANAGMENT,
  MOVIFY_QUOTE_SYSTEM_IMPROVEMENT,
  AIVERSE,
  AGENDALO_APP_ENHANCEMENT,
  AGENDALO_MIGRATION_SSR,
  MY_PORTFOLIO,
  MOVIFY_NOTIFICATION_MODULE
];
