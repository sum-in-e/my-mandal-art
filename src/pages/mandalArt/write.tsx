import type {
  InferGetStaticPropsType,
  InferGetServerSidePropsType,
  GetServerSideProps,
  NextPage,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Write } from 'components/MandalArt';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { firebaseApp } from 'src/firebaseClient';
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';
import nookies from 'nookies';

const WriteMandalArtPage: NextPage = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  console.log('user:', user);

  return (
    <div>
      <Head>
        <title>My Mandal Art | Write</title>
        <meta name="description" content="Mandal-Art" />
      </Head>

      <main>
        <Write />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // 예시 api
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const user = await res.json();

  // 쿠키들이 담긴 object
  // const cookies = nookies.get(ctx);
  const cookies = ctx.req.cookies;

  // 무결성 검사는 미들웨어에서 하고 문제 없으면 여기로 넘어오니까 여기서는 유저 정보만 가져오면 됨
  const uid = cookies.uid;

  return {
    props: {},
  };

  // doc 가져오기 예시
  // const db = getFirestore(firebaseApp);

  // // 문서 가져오기 dox(db, collection이름, doc이름)
  // const docRef = doc(db, 'test', 'C6LflGK5nHlVY1eI1DpO');
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log('Document data:', docSnap.data());
  //   return {
  //     props: { testData: docSnap.data() },
  //   };
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log('No such document!');
  //   return {
  //     props: {},
  //   };
  // }
};

export default WriteMandalArtPage;
