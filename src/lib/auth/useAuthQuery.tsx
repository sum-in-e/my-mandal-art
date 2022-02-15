import { useMutation, UseMutationResult } from 'react-query';
import { useRouter } from 'next/router';
import { FirebaseError } from 'firebase/app';
import { UserCredential } from 'firebase/auth';
import { setCookie } from 'nookies';

import {
  signupWithEmailApi,
  signinWithEmailApi,
  signinWithGoogleApi,
} from 'lib/auth/authApi';
import {
  SignupWithEmailProps,
  SigninWithEmailProps,
  SigninWithGoogleProps,
} from 'lib/auth/authType';
import {
  EMAIL_RULE_GUIDANCE_TEXT,
  EMAIL_EXIST_TEXT,
  PW_RULE_GUIDANCE_TEXT,
  SIGNUP_FAILED_TEXT,
  POPUP_CLOSED_BY_USER_TEXT,
  EMAIL_NOT_EXIST_TEXT,
  WRONG_PASSWORD_TEXT,
  AUTH_TOO_MANY_REQUEST_TEXT,
  SIGNIN_FAILED_TEXT,
  INVALIED_EMAIL_TEXT,
} from 'constants/auth';
import { auth } from 'src/firebaseClient';

/**
 * 이메일 회원가입을 하는 mutation입니다.
 * @param email
 * @param password
 * @param setEmailWarning - 이메일 에러 문구 setState
 * @param setPasswordWarning - 비밀번호 에러 문구 setState
 * @param setSignupWarning - 이메일 회원가입 에러 문구 setState
 *
 */
const useSignupWithEmail = (): UseMutationResult<
  UserCredential,
  FirebaseError,
  SignupWithEmailProps
> => {
  const router = useRouter();

  return useMutation(signupWithEmailApi, {
    onSuccess: async (result: UserCredential) => {
      const { refreshToken, uid } = result.user;
      const idToken = await result.user.getIdToken();

      // 가입 성공한 유저의 ID 토큰을 쿠키에 저장 -> setCookie(ctx, name, value, options)
      // path 미 지정 시 가입 페이지 path로 저장되어서 만다라트 페이지 등에서는 쿠키가 없는 상태가 되버림.
      setCookie(null, 'it', idToken, {
        path: '/',
      });
      setCookie(null, 'rt', refreshToken, {
        path: '/',
      });
      setCookie(null, 'uid', uid, {
        path: '/',
      });

      //TODO: 유저 생성과 동시에 db(firestore)에 유저uid로 collection 생성(그래야 추후 만다라트 생성 시 콜렉션 하위에 mandalArtId로 데이터 추가함)
      router.push('/mandalArt/write');
    },
    onError: (error, variables) => {
      if (error.code === 'auth/invalid-email') {
        variables.setEmailWarning(EMAIL_RULE_GUIDANCE_TEXT);
      } else if (error.code === 'auth/email-already-in-use') {
        variables.setEmailWarning(EMAIL_EXIST_TEXT);
      } else if (error.code === 'auth/weak-password') {
        variables.setPasswordWarning(PW_RULE_GUIDANCE_TEXT);
      } else {
        // TODO: 개발자 컨텍 수단 안내
        variables.setSignupWarning(SIGNUP_FAILED_TEXT);
      }
    },
  });
};

/**
 * 이메일 로그인을 하는 mutation입니다.
 * @param email
 * @param password
 * @param setEmailWarning - 이메일 에러 문구 setState
 * @param setPasswordWarning - 비밀번호 에러 문구 setState
 * @param setSigninWarning - 이메일 로그인 에러 문구 setState
 *
 */
const useSigninWithEmail = (): UseMutationResult<
  UserCredential,
  FirebaseError,
  SigninWithEmailProps
> => {
  const router = useRouter();

  return useMutation(signinWithEmailApi, {
    onSuccess: async (result) => {
      const { refreshToken, uid } = result.user;
      const idToken = await result.user.getIdToken();

      // 가입 성공한 유저의 ID 토큰을 쿠키에 저장 -> setCookie(ctx, name, value, options)
      setCookie(null, 'it', idToken, {
        path: '/',
      });
      setCookie(null, 'rt', refreshToken, {
        path: '/',
      });
      setCookie(null, 'uid', uid, {
        path: '/',
      });
      router.push('/mandalArt/write');
    },
    onError: (error, variables) => {
      if (error.code === 'auth/user-not-found') {
        variables.setEmailWarning(EMAIL_NOT_EXIST_TEXT);
      } else if (error.code === 'auth/invalid-email') {
        variables.setEmailWarning(INVALIED_EMAIL_TEXT);
      } else if (error.code === 'auth/wrong-password') {
        variables.setPasswordWarning(WRONG_PASSWORD_TEXT);
      } else if (error.code === 'auth/too-many-requests') {
        variables.setSigninWarning(AUTH_TOO_MANY_REQUEST_TEXT);
      } else {
        // TODO: 개발자 컨텍 수단 안내
        variables.setSigninWarning(SIGNIN_FAILED_TEXT);
      }
    },
  });
};

/**
 * 구글 로그인을 하는 mutation입니다.
 *
 * @param setGoogleWarning - 구글 로그인 에러 문구 setState
 */
const useSigninWithGoogle = (): UseMutationResult<
  UserCredential,
  FirebaseError,
  SigninWithGoogleProps
> => {
  const router = useRouter();

  return useMutation(signinWithGoogleApi, {
    onSuccess: async (result) => {
      const { refreshToken, uid } = result.user;
      const idToken = await result.user.getIdToken();

      // 가입 성공한 유저의 ID 토큰을 쿠키에 저장 -> setCookie(ctx, name, value, options)
      setCookie(null, 'it', idToken, {
        path: '/',
      });
      setCookie(null, 'rt', refreshToken, {
        path: '/',
      });
      setCookie(null, 'uid', uid, {
        path: '/',
      });
      router.push('/mandalArt/write');
    },
    onError: (error, variables) => {
      if (error.code === 'auth/popup-closed-by-user') {
        variables.setGoogleWarning(POPUP_CLOSED_BY_USER_TEXT);
      } else {
        variables.setGoogleWarning(error.message);
      }
    },
  });
};

export { useSignupWithEmail, useSigninWithEmail, useSigninWithGoogle };
