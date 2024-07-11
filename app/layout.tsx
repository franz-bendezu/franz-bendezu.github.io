import "tailwindcss/tailwind.css";
import { ReactNode } from "react";
const isProd = process.env.NODE_ENV === 'production'

type Props = {
  children: ReactNode[];
};
export const metadata = {
  metadataBase: isProd ? 'https://franzbendezu.me' : undefined,
}
export default function RootLayout({ children}: Props) {
  return  children 
}
