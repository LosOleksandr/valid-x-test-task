import type { Metadata } from 'next';
import { Lexend, Roboto_Mono } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '800'],
});

const robotoMono = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: 'TechThreads',
  description:
    'TechThreads is a modern blog sharing insights, how-tos, and tutorials on web development, design trends, and tech culture.',
  keywords:
    'Tech blog, Web development, JavaScript, Next.js, CSS, Programming tutorials, Frontend tips',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${robotoMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
