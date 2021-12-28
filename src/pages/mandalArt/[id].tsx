import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SignUp: NextPage = () => {
  const router = useRouter();
  const { id: mandalArtId } = router.query;

  return (
    <div>
      <Head>
        <title>My Mandal Art | {mandalArtId}</title>
        <meta name="description" content="Mandal Art" />
      </Head>

      <main>
        <Box>
          <Heading as="h1" size="4xl" color="highlight">
            Mandal Art List
          </Heading>
          <Text>{`${mandalArtId}`}</Text>
        </Box>
      </main>
    </div>
  );
};

export default SignUp;
