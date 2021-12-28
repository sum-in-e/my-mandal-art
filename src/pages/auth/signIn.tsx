import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const SignIn: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Mandal Art | SignIn</title>
        <meta name="description" content="SignIn" />
      </Head>

      <main>
        <Box>
          <Heading as="h1" size="4xl" color="highlight">
            로그인
          </Heading>
        </Box>
      </main>
    </div>
  );
};

export default SignIn;
