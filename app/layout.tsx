import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Amit Dham | Web Developer Portfolio',
  description: 'Explore the portfolio of Amit Dham, a web developer specializing in Next.js, React, and UI/UX design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Amit Dham's personal portfolio website." />
        <meta name="keywords" content="Amit Dham, Web Developer, Next.js, React, UI/UX" />
        <meta name="author" content="Amit Dham" />
      </Head>
      <Analytics/>
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}
