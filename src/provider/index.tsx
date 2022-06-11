import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";

const ChakraThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default ChakraThemeProvider;
