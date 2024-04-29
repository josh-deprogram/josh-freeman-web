import type { Metadata } from 'next';
import './assets/globals.css';

export const metadata: Metadata = {
  title: 'Josh Freeman',
  description: 'Senior Interface developer across Mobile and Web.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
