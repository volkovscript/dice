// components
import CssBaseline from '@mui/material/CssBaseline';
// types
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
// assets
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dice',
  description: 'Try to win',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={roboto.variable}>
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
