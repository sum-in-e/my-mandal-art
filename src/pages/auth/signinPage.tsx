import { Box, Heading, Text } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import { Signin } from 'features/auth';
import nookies from 'nookies';
import { getAuth } from 'firebase-admin/auth';
import { useRouter } from 'next/router';

const SigninPage: NextPage = ({
  uid,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  // 로그인 된 유저가 로그인 페이지에 접근한 경우 home으로 보냄
  if (uid) {
    router.push('/');
  }

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const idToken = cookies.it;

  try {
    // idToken이 있다 = 로그인된 상태(로그인 한적이 없거나 로그아웃한 경우에는 쿠키에서 지울거기 때문에)
    const decodedToken = await getAuth().verifyIdToken(idToken);

    // 무결성 검사 성공한 경우 uid를 client로 전달
    return {
      props: { uid: decodedToken.uid },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default SigninPage;
