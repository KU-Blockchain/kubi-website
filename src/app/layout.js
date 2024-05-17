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
      </head>
      <body style={{ backgroundColor: "#F5F5F5", color: "#23406D" }}>
      {/* F5F5F5 */}
      <ChakraProvider>
        <Header />
          {children} 
        <Footer />
      </ChakraProvider>
      </body>
    </html>
  );
}
