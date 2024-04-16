'use client'
import { Inter } from "next/font/google";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
require('dotenv').config();


export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        <Providers>
              {children} 
        </Providers>
        </body>
    </html>
  );
}
