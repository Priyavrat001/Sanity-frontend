// RootLayout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: 'PriyavratPortfolio',
  description: 'This is my personal portfolio app where I showcase my skill and projects.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
