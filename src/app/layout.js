'use client'
import React from 'react'
import theme from '@/styles/theme.js'
require('dotenv').config();
import { ChakraProvider } from '@chakra-ui/react'
import { LayoutProvider } from '@/contexts/LayoutContext';


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>KU Blockchain Institute</title>
      </head>
      <body>
      <ChakraProvider theme={theme}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </ChakraProvider>
      </body>
    </html>
  );
}
