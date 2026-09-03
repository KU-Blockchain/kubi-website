"use client";

import { useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@/styles/theme.js";
import ErrorScreen, { ErrorRetryButton } from "@/components/ErrorScreen";
import "@/styles/globals.css";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: "#0A0A0C", margin: 0 }}>
        <ChakraProvider theme={theme}>
          <Box minH="100vh" bg="#0A0A0C">
            <ErrorScreen
              code="500"
              title="App error"
              message="A critical error stopped the page from loading. Try again, or refresh and return home."
              primaryHref="/"
              primaryLabel="Back to home"
              secondaryAction={<ErrorRetryButton onClick={reset} />}
            />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
