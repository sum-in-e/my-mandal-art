import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const SignUp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Mandal Art | SignUp</title>
        <meta name="description" content="SignUp" />
      </Head>

      <main>
        <Box>
          <Heading as="h1" size="4xl" color="highlight">
            회원가입
          </Heading>
        </Box>
      </main>
    </div>
  );
};

export default SignUp;
