import styles from './globals.css';
import { extendTheme } from '@chakra-ui/react'

export const colors = {
  blue5: "#1A202C",
  blue4: "#003357",
  blue3: "#005285",
  blue2: "#336285",
  blue1: "#576E7E",
  red: "#A21521",
  accentYellow: "#EAB611",
  primaryBlue: "#23406D",
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
      colorScheme: "blue",
      baseStyle: {
        borderRadius: "0px",
        backgroundColor: colors.primaryBlue,
        colorScheme: "blue",
        variant: "outline",
        cursor: "pointer",
        "&:hover": {
          // backgroundColor: "black",
          // color: "white",
          textDecoration: "underline",
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