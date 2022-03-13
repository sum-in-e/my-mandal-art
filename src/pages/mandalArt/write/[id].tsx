import type {
  InferGetStaticPropsType,
  InferGetServerSidePropsType,
  GetServerSideProps,
  NextPage,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';
import nookies from 'nookies';
import NewMandalArt from 'features/mandalArt/NewMandalArt';
import MandalArt from 'features/mandalArt/MandalArt';

const WriteMandalArtPage: NextPage = ({
  testData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <Head>
        <title>My Mandal Art | Write</title>
        <meta name="description" content="Mandal-Art" />
      </Head>

      <main>{id === 'new' ? <NewMandalArt /> : <MandalArt />}</main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // 쿠키들이 담긴 object
  const cookies = nookies.get(ctx);

  const mandalArtId = ctx.params?.id;

  // mandalArtId === new인 경우에 mandalArt 정보 가져올 필요 없음

  // mandalArtId !== new인 경우에 id와 일치하는 mandalArt 정보를 가져와서, 정보가 있으면 그거 덮어씌워서 보여주고 없으면 에러(id는 있는데 데이터 못 불러온 거니까)
  // db 구성부터 해야할듯

  const uid = cookies.uid;

  // doc 가져오기 예시
  const db = getFirestore();

  // // 문서 가져오기 dox(db, collection이름, doc이름)
  const docRef = doc(db, 'test', 'C6LflGK5nHlVY1eI1DpO');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    return {
      props: { testData: docSnap.data() },
    };
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
    return {
      props: {},
    };
  }
};

export default WriteMandalArtPage;
