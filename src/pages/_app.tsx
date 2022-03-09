import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import theme from 'src/styles/theme';
import { Layout } from 'components/Layout';
import { firebaseCient } from 'src/firebaseClient';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  useEffect(() => {
    // firebase client 초기화
    firebaseCient;
  }, []);

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
