import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Mandal Art | Home</title>
        <meta name="description" content="My Mandal Art" />
      </Head>

      <main>
        <Box>
          <Heading as="h1" size="4xl" color="highlight">
            Home
          </Heading>
        </Box>
      </main>
    </div>
  );
};

export default Home;
