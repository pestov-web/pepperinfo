import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pepper Info',
  description: 'Pepper Database',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.className} antialiased`}>
        {' '}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
