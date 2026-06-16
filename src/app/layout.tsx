import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'VANTQ — Building Brands, Architecting Futures',
  description:
    'VANTQ is a strategic brand management firm helping emerging businesses evolve into structured, growth-ready brands. Aesthetic precision meets disciplined execution.',
  keywords: 'VANTQ, brand consulting, brand strategy, identity architecture, growth integration',
  authors: [{ name: 'VANTQ' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
