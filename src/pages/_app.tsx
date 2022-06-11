import "../../styles/globals.css";
import type { AppProps } from "next/app";
import ChakraThemeProvider from "../provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraThemeProvider>
      <Component {...pageProps} />
    </ChakraThemeProvider>
  );
}

export default MyApp;
