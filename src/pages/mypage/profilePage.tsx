import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  NextPage,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Profile } from 'features/myPage';
import { getAuth } from 'firebase-admin/auth';
import nookies from 'nookies';
import { useEffect } from 'react';

const ProfilePage: NextPage = ({
  uid,
  message,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  console.log('uid', uid);

  useEffect(() => {
    if (!uid) {
      alert(message);
      router.push('/auth/signin');
    }
  }, []);

  // 로그인 되어있고 무결성 검사도 통과 했으면 profile 컴포넌트가 정상적으로 보여질 것
  return (
    <div>
      <Head>
        <title>My Mandal Art | Profile</title>
        <meta name="description" content="Mandal-Art" />
      </Head>

      <main>
        <Profile />
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
    // idToken이 없거나(=로그인X) 무결성 검사에 실패한 경우

    if (idToken) {
      //  idToken 있는데 오류 발생한 경우 -> 세션 만료
      // TODO: 쿠키 제거
      return {
        props: { message: '로그인 세션이 만료되었습니다.' },
      };
    } else {
      //idToken 없어서 오류 발생한 경우 -> 로그인 안 한 경우
      return {
        props: { message: '로그인이 필요한 서비스입니다.' },
      };
    }
  }
};

export default ProfilePage;
