
import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ClientLayout } from '../components/ClientLayout';

// Configure Montserrat (Secondary Font)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Auto Evolution Workshop',
    default: 'Auto Evolution Workshop',
  },
  description: 'Precision. Performance. Perfection. The future of automotive engineering.',
  applicationName: 'Auto Evolution Workshop',
  icons: {
    icon: [
      { url: '/resources/favicon.png', sizes: 'any' },
      { url: '/resources/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/resources/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    // Updated to fallback to main favicon if specific apple-touch-icon folder is missing
    apple: [
      { url: '/resources/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/resources/favicon.png',
        color: '#5bbad5',
      },
    ],
  },
  // manifest: '/resources/favicon/site.webmanifest', // Commented out to prevent 404 if file is missing
  other: {
    'msapplication-TileColor': '#ffc40d',
    'apple-mobile-web-app-title': 'Auto Evolution',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Remix Icons - Keeping CDN for icons as requested */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
        />
      </head>
      {/* 
          Akira Expanded is loaded via @font-face in globals.css 
          Montserrat is loaded via next/font class/variable here
      */}
      <body className={`${montserrat.variable} font-sans`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
