import { extendTheme } from '@chakra-ui/react'
import React from 'react'
import CubeLoader from '@/components/ui/CubeLoader'

export const colors = {
  ink: "#0B0E14",
  navy: "#152238",
  royal: "#0047AB",
  blue: "#1B75D0",
  steel: "#8EACCD",
  ice: "#D7E5F0",
  frost: "#F4F8FC",
  red: "#6E2A32",
  cubeRed: "#6E2A32",
  cubeGold: "#9A7B2F",
  // legacy aliases used across pages
  blue5: "#0B0E14",
  blue4: "#152238",
  blue3: "#0047AB",
  blue2: "#1B75D0",
  blue1: "#8EACCD",
  accentYellow: "#9A7B2F",
  accentRed: "#6E2A32",
  primaryBlue: "#152238",
  headerBackground: "#0A0A0C",
  pageBackground: "#0A0A0C",
  glass: "rgba(24, 32, 60, 0.45)",
  glassBorder: "1px solid rgba(180, 206, 239, 0.22)",
};

export const centeredTitle = {
  textAlign: "center",
  marginBottom: "20px",
  marginTop: "20px",
};

export const roundImage = {
  borderRadius: "50%",
  width: "35%",
  height: "auto",
  objectFit: "contain",
};

const theme = extendTheme({
  colors: {
    brand: {
      50: "#D7E5F0",
      100: "#8EACCD",
      400: "#1B75D0",
      500: "#1B75D0",
      600: "#0047AB",
      700: "#152238",
      800: "#152238",
      900: "#0B0E14",
    },
    accent: {
      500: "#6E2A32",
      600: "#542028",
    },
  },
  fonts: {
    heading: `"Clash Display", var(--font-heading), sans-serif`,
    body: `"Satoshi", var(--font-heading), sans-serif`,
  },
  styles: {
    global: {
      body: {
        background: "#0A0A0C",
        color: colors.ice,
      },
      "::selection": {
        background: colors.blue,
        color: "white",
      },
    },
  },
  shadows: {
    card: "0 18px 40px rgba(11, 14, 20, 0.08)",
    lift: "0 24px 50px rgba(21, 34, 56, 0.16)",
  },
  radii: {
    xl: "18px",
    "2xl": "24px",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "2px",
        fontWeight: "500",
        letterSpacing: "0.04em",
        cursor: "pointer",
        _hover: {
          textDecoration: "none",
        },
      },
      variants: {
        solid: {
          bg: colors.blue,
          color: "white",
          _hover: {
            bg: colors.royal,
            transform: "translateY(-1px)",
          },
          _active: {
            bg: colors.navy,
          },
          _disabled: {
            opacity: 0.6,
            cursor: "not-allowed",
          },
        },
        outline: {
          borderColor: "whiteAlpha.600",
          color: "white",
          bg: "transparent",
          _hover: {
            bg: "whiteAlpha.200",
            borderColor: "white",
          },
        },
        ghost: {
          color: "white",
          _hover: {
            bg: "whiteAlpha.200",
          },
        },
        accent: {
          bg: colors.red,
          color: "white",
          _hover: {
            bg: "#542028",
            transform: "translateY(-1px)",
          },
        },
      },
      defaultProps: {
        variant: "solid",
        spinner: React.createElement(CubeLoader, { size: "sm" }),
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          fontWeight: "500",
          letterSpacing: "0.04em",
          borderRadius: "2px",
          color: colors.ice,
          _selected: {
            color: "white",
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
          },
        },
      },
      defaultProps: {
        colorScheme: "gray",
        variant: "unstyled",
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "8px",
          backgroundColor: "rgba(24, 32, 60, 0.45)",
          color: colors.ice,
          border: "1px solid rgba(180, 206, 239, 0.22)",
          boxShadow: "0 18px 40px rgba(0, 0, 0, 0.28)",
          backdropFilter: "blur(12px)",
          overflow: "hidden",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          _hover: {
            transform: "translateY(-4px)",
            boxShadow: "0 24px 50px rgba(0, 0, 0, 0.38)",
          },
        },
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: "brand.500",
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "-0.03em",
        color: "white",
        fontWeight: "500",
      },
    },
  },
});

export default theme;
