import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | AutoEvolution',
    default: 'AutoEvolution - Modern Web Architecture',
  },
  description: 'A high-performance, SEO-optimized web architecture demonstration using Next.js App Router.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://autoevolution.com/',
    siteName: 'AutoEvolution',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} AutoEvolution. Built with Next.js App Router & Tailwind CSS.</p>
        </footer>
      </body>
    </html>
  );
}