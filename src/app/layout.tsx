import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Teja Kandrekula | Pharma Forecasting & Analytics",
  description:
    "Pharmaceutical forecasting professional: oncology and vaccine forecasting, Monte Carlo simulation, and commercial analytics. NIPER Mohali alumnus.",
  openGraph: {
    title: "Sai Teja Kandrekula",
    description: "Pharma Forecasting | Commercial Analytics | NIPER Mohali",
    type: "website",
  },
};

// Applies the saved/OS theme before paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
