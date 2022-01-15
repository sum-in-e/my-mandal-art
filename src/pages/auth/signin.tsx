import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Signin } from 'components/Auth';

const SigninPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Mandal Art | Signin</title>
        <meta name="description" content="Signin" />
      </Head>

      <main>
        <Signin />
      </main>
    </div>
  );
};

export default SigninPage;
