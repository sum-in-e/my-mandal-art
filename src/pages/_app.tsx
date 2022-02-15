import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from 'src/styles/theme';
import { Layout } from 'components/Layout';
import { initializeApp } from 'firebase/app';
import { firebaseCient } from 'src/firebaseClient';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  // firebase client 초기화 - 이렇게 해줘도 되는지 확인 필요
  firebaseCient;

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
