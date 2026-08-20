'use client'
import React from 'react'
import theme from '@/styles/theme.js'
require('dotenv').config();
import { ChakraProvider } from '@chakra-ui/react'
import { LayoutProvider } from '@/contexts/LayoutContext';
import { Analytics } from "@vercel/analytics/react";
import { Sora } from 'next/font/google';
import '@/styles/globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-heading' });

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>KU Blockchain Institute</title>
        <meta name="theme-color" content="#0A0A0C" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${sora.variable} ${sora.className}`}>
      <ChakraProvider theme={theme}>
        <LayoutProvider>
          {children}
          <Analytics />
        </LayoutProvider>
      </ChakraProvider>
      </body>
    </html>
  );
}
