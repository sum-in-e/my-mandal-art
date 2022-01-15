import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const WriteMandalArt: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>My Mandal Art | Write</title>
        <meta name="description" content="Mandal Art" />
      </Head>

      <main>
        <Box>
          <Heading as="h1" size="4xl" color="highlight">
            Mandal Art를 만들어보세요!
          </Heading>
        </Box>
      </main>
    </div>
  );
};

export default WriteMandalArt;
