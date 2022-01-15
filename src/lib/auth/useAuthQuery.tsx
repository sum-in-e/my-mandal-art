import { useMutation, UseMutationResult } from 'react-query';
import { useRouter } from 'next/router';
import { FirebaseError } from 'firebase/app';
import { UserCredential } from 'firebase/auth';

import { signupWithEmailApi, signinWithGoogleApi } from 'lib/auth/authApi';
import { SignupWithEmailProps, SigninWithGoogleProps } from 'lib/auth/authType';
import {
  EMAIL_RULE_GUIDANCE_TEXT,
  EMAIL_EXIST_TEXT,
  PW_RULE_GUIDANCE_TEXT,
  POPUP_CLOSED_BY_USER,
} from 'constants/auth';

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
    onSuccess: (result) => {
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
        variables.setSignupWarning(
          '계정 생성 도중 오류가 발생했습니다. 개발자에게 문의해주세요. (여기에 개발자 컨텍수단 적기)',
        );
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
    onSuccess: (result) => {
      router.push('/mandalArt/write');
    },
    onError: (error, variables) => {
      if (error.code === 'auth/popup-closed-by-user') {
        variables.setGoogleWarning(POPUP_CLOSED_BY_USER);
      } else {
        variables.setGoogleWarning(error.message);
      }
    },
  });
};

export { useSignupWithEmail, useSigninWithGoogle };
