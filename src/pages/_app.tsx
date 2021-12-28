import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from 'src/styles/theme';
import { Layout } from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
