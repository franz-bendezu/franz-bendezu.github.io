// global.d.ts
import type { routing } from "./i18n/routing";
import type messagesEn from "@/messages/en.json";
import type messagesEs from "@/messages/es.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messagesEn | typeof messagesEs;
  }
}
