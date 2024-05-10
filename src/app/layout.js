'use client'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
require('dotenv').config();
import { ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/Navbar.js'
import Footer from '@/components/Footer.js'


export default function RootLayout({ children }) {

  return (
    <html>
      <body>
      <ChakraProvider>
        {children} 
      </ChakraProvider>
      </body>
    </html>
  );
}
