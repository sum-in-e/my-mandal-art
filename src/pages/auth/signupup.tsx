import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Signup } from 'components/Auth';

const SignupPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Mandal Art | SignUp</title>
        <meta name="description" content="Signup" />
      </Head>

      <main>
        <Signup />
      </main>
    </div>
  );
};

export default SignupPage;
