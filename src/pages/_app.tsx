import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { theme } from '~/styles/theme';


// const theme = extendTheme({
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       // ...
//       900: "#1a202c",
//     },
//   },
// });

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default App