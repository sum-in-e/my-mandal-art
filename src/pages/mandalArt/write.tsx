import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Write from 'components/MandalArt/Write';

const WriteMandalArt: NextPage = () => {
  const router = useRouter();

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

export default WriteMandalArt;
