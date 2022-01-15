import { Box, Button, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
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
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => router.push('/auth/signup')}
          >
            회원가입
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => router.push('/auth/signin')}
          >
            로그인
          </Button>
        </Box>
      </main>
    </div>
  );
};

export default Home;
