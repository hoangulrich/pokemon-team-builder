import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    custom: {
      100: "#3F4354",
      200: "#353849",
      300: "#f3f7fe",
      500: "#03CC90",
      700: "#8F9094",
      900: "#232734",
    },
  },
});

export default customTheme;
