'use client'
import { Inter } from "next/font/google";
require('dotenv').config();
import { ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/Navbar.js'
import Footer from '@/components/footer.js'


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>KU Blockchain Institute</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
      <ChakraProvider>
        <Header />
          {children} 
        <Footer />
      </ChakraProvider>
      </body>
    </html>
  );
}
