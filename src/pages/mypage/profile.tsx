import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  NextPage,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Profile } from 'components/MyPage';

const ProfilePage: NextPage = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

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
  // 쿠키들이 담긴 object
  // const cookies = nookies.get(ctx);
  const cookies = ctx.req.cookies;

  // 무결성 검사는 미들웨어에서 하고 문제 없으면 여기로 넘어오니까 여기서는 유저 정보만 가져오면 됨
  const uid = cookies.uid;
  return {
    props: {},
  };
};

export default ProfilePage;
