import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "Cursos de Enfermagem | Formação Prática Profissional",
  description:
    "Cursos práticos de enfermagem em Salvador-BA: Punção Venosa, Curativos, Administração de Medicamentos e Cuidados Básicos. Turmas mensais com instrutora experiente.",
  keywords:
    "cursos enfermagem, punção venosa, curativos, salvador bahia, técnicas enfermagem",

  // Para aparecer bonito no Google
  authors: [{ name: "Cursos de Enfermagem" }],
  creator: "Cursos de Enfermagem",

  // Ícone
  icons: {
    icon: "/favicon.svg",
  },

  // Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Cursos de Enfermagem | Formação Prática Profissional",
    description:
      "Aprimore suas técnicas de enfermagem com cursos práticos e presenciais. Turmas mensais em Salvador-BA.",
    url: "https://seusite.com.br", // ← MUDAR DEPOIS
    siteName: "Cursos de Enfermagem",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // ← Vamos criar depois
        width: 1200,
        height: 630,
        alt: "Cursos de Enfermagem",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Enfermagem",
    description: "Cursos práticos de enfermagem em Salvador-BA",
    images: ["/og-image.jpg"],
  },

  // Indexação no Google
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <AOSInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
