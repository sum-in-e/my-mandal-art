import Document, { Html, Head, Main, NextScript } from 'next/document';

// index.html의 역할을 하는 _document.tsx
// 스타일시트, font 설정, 그 외 Link 등 초기 html에 작성하는 부분을 여기에 작성한다.
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/svg" href="/favicon.svg"></link>
          <meta property="custom" content="My Mandal Art" />
          {/* font: Pretendard 적용 */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
