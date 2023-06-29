import React from "react";
import "./App.css";
import Container from "./components/Container";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function App(): JSX.Element {
  const theme = extendTheme({
    useSystemColorMode: false,
    styles: {
      global: {
        // styles for the `body`
        body: {
          bgGradient: "linear(red.50 0%, orange.100 25%, yellow.100 50%)",
          color: "white",
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Container />
    </ChakraProvider>
  );
}

export default App;
