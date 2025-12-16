'use client'
import React from 'react'
import theme from '@/styles/theme.js'
require('dotenv').config();
import { ChakraProvider } from '@chakra-ui/react'
import { LayoutProvider } from '@/contexts/LayoutContext';
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>KU Blockchain Institute</title>
      </head>
      <body className={montserrat.className}>
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
