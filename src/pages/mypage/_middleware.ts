import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
/**
 * @remarks 요청이 들어오면 해당 함수를 거치게 된다.
 * @param req - Next.js 서버로 요청이 들어오는 객체
 * @param event - Fetch Event
 */
export function middleware(req: NextRequest, event: NextFetchEvent) {
  // Add the user token to the response

  // 로그인 여부 확인
  const uid = req.cookies.uid;
  const idToken = req.cookies.it;
  console.log(uid);
  // if (uid) {
  //   //id 무결성 검사
  //   // getAuth().verifyIdToken(idToken);
  //   console.log('있음');
  // } else {
  //   // 로그인 페이지로 이동 => 로그인이 필요한 서비스 입니다.
  //   return NextResponse.redirect('/auth/signin');
  // }

  // 쿠키들이 담긴 object
}
