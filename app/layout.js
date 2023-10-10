// RootLayout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'PriyavratPortfolio',
  description: 'This is my personal portfolio app where I showcase my skill and projects.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Head>
        {/* Add the link to the favicon in the head section */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
