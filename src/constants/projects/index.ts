import type { IBaseProject } from "../../interfaces/project";
import { AIVERSE, AIVERSE_EN } from "./aiverse-app";
import { BUS_UNI_TRACKER, BUS_UNI_TRACKER_EN } from "./bus-uni-tracker";
import { CON_QUE_PROFE, CON_QUE_PROFE_EN } from "./con-que-profe";
import { HOREXT, HOREXT_EN } from "./horext";
import { MOVIFY_PAYMENT_MODULE, MOVIFY_PAYMENT_MODULE_EN } from "./movify-payment-module";
import { MOVIFY_AWS_MIGRATION, MOVIFY_AWS_MIGRATION_EN } from "./movify-aws-migration";
import { MOVIFY_QUOTE_ORDER_MANAGMENT, MOVIFY_QUOTE_ORDER_MANAGEMENT_EN } from "./movify-quote-order-management";
import { MOVIFY_QUOTE_SYSTEM_IMPROVEMENT, MOVIFY_QUOTE_SYSTEM_IMPROVEMENT_EN } from "./movify-quote-system-improvement";
import { MOVIFY_QUOTE_SYSTEM_MIGRATION, MOVIFY_QUOTE_SYSTEM_MIGRATION_EN } from "./movify-quote-system-migration";
import { OXIMETRO_PERU, OXIMETRO_PERU_EN } from "./oximetro-peru";
import { AGENDALO_APP_ENHANCEMENT, AGENDALO_APP_ENHANCEMENT_EN } from "./agendalo-app-enhancement";
import { AGENDALO_MIGRATION_SSR, AGENDALO_MIGRATION_SSR_EN } from "./agendalo-ssr-migration";
import { MY_PORTFOLIO, MY_PORTFOLIO_EN } from "./portafolio";
import { MOVIFY_NOTIFICATION_MODULE, MOVIFY_NOTIFICATION_MODULE_EN } from "./movify-notification-module";
import { CCAT_ELECTORAL_PLATFORM, CCAT_ELECTORAL_PLATFORM_EN } from "./ccat-electoral-platform";
import { CCAT_ASSEMBLIES, CCAT_ASSEMBLIES_EN } from "./ccat-assemblies";
export { PROJECT_CATEGORIES } from "../project-categories";

export const PROJECTS = [
  {
    ...CCAT_ASSEMBLIES,
    position: 14,
  },
  {
    ...CCAT_ASSEMBLIES_EN,
    position: 14,
  },
  {
    ...CCAT_ELECTORAL_PLATFORM,
    position: 10,
  },
  {
    ...CCAT_ELECTORAL_PLATFORM_EN,
    position: 10,
  },
  {
    ...CON_QUE_PROFE,
    position: 6,
  },
  {
    ...CON_QUE_PROFE_EN,
    position: 6,
  },
  {
    ...BUS_UNI_TRACKER,
    position: 4,
  },
  {
    ...BUS_UNI_TRACKER_EN,
    position: 4,
  },
  {
    ...OXIMETRO_PERU,
    position: 5,
  },
  {
    ...OXIMETRO_PERU_EN,
    position: 5,
  },
  {
    ...HOREXT,
    position: 3,
  },
  {
    ...HOREXT_EN,
    position: 3,
  },
  {
    ...MOVIFY_PAYMENT_MODULE,
    position: 7,
  },
  {
    ...MOVIFY_PAYMENT_MODULE_EN,
    position: 7,
  },
  {
    ...MOVIFY_QUOTE_SYSTEM_MIGRATION,
    position: 8,
  },
  {
    ...MOVIFY_QUOTE_SYSTEM_MIGRATION_EN,
    position: 8,
  },
  {
    ...MOVIFY_AWS_MIGRATION,
    position: 9,
  },
  {
    ...MOVIFY_AWS_MIGRATION_EN,
    position: 9,
  },
  {
    ...MOVIFY_QUOTE_ORDER_MANAGMENT,
    position: 2,
  },
  {
    ...MOVIFY_QUOTE_ORDER_MANAGEMENT_EN,
    position: 2,
  },
  {
    ...MOVIFY_QUOTE_SYSTEM_IMPROVEMENT,
    position: 11,
  },
  {
    ...MOVIFY_QUOTE_SYSTEM_IMPROVEMENT_EN,
    position: 11,
  },
  {
    ...AIVERSE,
    position: 12,
  },
  {
    ...AIVERSE_EN,
    position: 12,
  },
  {
    ...AGENDALO_APP_ENHANCEMENT,
    position: 13,
  },
  {
    ...AGENDALO_APP_ENHANCEMENT_EN,
    position: 13,
  },
  {
    ...AGENDALO_MIGRATION_SSR,
    position: 1,
  },
  {
    ...AGENDALO_MIGRATION_SSR_EN,
    position: 1,
  },
  {
    ...MY_PORTFOLIO,
    position: 15,
  },
  {
    ...MY_PORTFOLIO_EN,
    position: 15,
  },
  {
    ...MOVIFY_NOTIFICATION_MODULE,
    position: 16,
  },
  {
    ...MOVIFY_NOTIFICATION_MODULE_EN,
    position: 16,
  },
] as const;
