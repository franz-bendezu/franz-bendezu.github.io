import { DEFAULT_LOCALE, LOCALES } from '@/constants/locales';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: LOCALES.map((l) => l.locale),
  defaultLocale: DEFAULT_LOCALE,
});