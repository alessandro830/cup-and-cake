import './globals.css';
import { Roboto, Bahiana } from 'next/font/google'
import { Footer } from '@/components/footer/Footer';
import { Sevillana } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto'
})

const bahiana = Bahiana({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bahiana'
})

const sevillana = Sevillana({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sevillana'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${roboto.variable} ${bahiana.variable} ${sevillana.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
