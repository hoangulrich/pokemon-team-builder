import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/customTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider them={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
