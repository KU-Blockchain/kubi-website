import { color } from 'framer-motion';
import styles from './globals.css';
import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const colors = {
  blue5: "#1A202C",
  blue4: "#003357",
  blue3: "#005285",
  blue2: "#336285",
  blue1: "#576E7E",
  red: "#A21521",
  accentYellow: "#f2a900",
  accentRed: "#971b2f",
  primaryBlue: "#23406D",
  headerBackground: "#23406D",
  pageBackground: "#DCDCDC",
  // pageBackground: "#F5F5F5",
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
  styles: {
    global: {
      body: {
        background: colors.pageBackground,
        color: colors.primaryBlue,
      }
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "0px",
        //borderColor: colors.accentRed,
        //borderWidth: "2px",
        //color: "black",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
      defaultProps: {
        variant: "solid",
        colorScheme: "gray",
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            color: "white",
            backgroundColor: colors.primaryBlue,
          },
        },
      },
      defaultProps: {
        colorScheme: "gray",
        variant: 'soft-rounded',
      },
    },
    Card: {
      baseStyle: {
        container: {
          "&:hover": {
            transform: "translateY(-10px)",
            transition: "all 0.3s ease",
          },
        },
      },
    },
    // Link: {
    //   baseStyle: {
    //     display: "inline-block",
    //     borderRadius: "8px",
    //     padding: "8px 16px",
    //     color: "white",
    //     cursor: "pointer",
    //     textDecoration: "none",
    //     "&:hover": {
    //       color: "white",
    //     },
    //   },
    // },
  },
});

export default theme;