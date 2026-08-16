import type { Metadata } from 'next';
import { Caveat, Oswald, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-script', weight: ['700'] });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-condensed', weight: ['600', '700'] });

export const metadata: Metadata = {
  title: 'Ruta Uno | Café & Pizza Artesanal en Tijuana',
  description: 'Pizza de fermentación lenta, Chicago Deep Dish y café de especialidad en Tijuana.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${caveat.variable} ${oswald.variable}`}>
      <body className="bg-stone-950 text-stone-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}