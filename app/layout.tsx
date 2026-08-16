import type { Metadata, Viewport } from 'next';
import { Caveat, Oswald, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-script',
  weight: ['700']
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-condensed',
  weight: ['600', '700']
});

export const metadata: Metadata = {
  title: 'Ruta Uno Café & Pizza | Deep Dish y Masa Rústica en Tijuana',
  description:
    'Pizzas artesanales de fermentación lenta, auténtico estilo Chicago Deep Dish y barra de café de especialidad en Tijuana, B.C. Conoce nuestro menú y visítanos.',
  keywords: [
    'Ruta Uno',
    'Pizza Tijuana',
    'Deep Dish Tijuana',
    'Pizza Artesanal',
    'Café de Especialidad Tijuana',
    'Jardines de Agua Caliente'
  ],
  openGraph: {
    title: 'Ruta Uno Café & Pizza | Tijuana',
    description:
      'Auténtica pizza estilo Chicago Deep Dish, masa madre rústica y café de especialidad.',
    url: 'https://rutauno.com',
    siteName: 'Ruta Uno Café & Pizza',
    locale: 'es_MX',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#6d122c',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${inter.variable} ${caveat.variable} ${oswald.variable}`}
    >
      <body className="bg-stone-950 text-stone-100 antialiased font-sans selection:bg-[#6d122c] selection:text-white">
        {children}
      </body>
    </html>
  );
}