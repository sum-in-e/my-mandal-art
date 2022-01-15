import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { auth, googleAuthProvider } from 'src/firebase';
import { SigninWithEmailProps, SignupWithEmailProps } from 'lib/auth/authType';

/**
 * 이메일 회원가입 api입니다.
 *
 * @param email
 * @param password
 * @returns 회원 정보를 담은 데이터
 */
const signupWithEmailApi = async ({
  email,
  password,
}: SignupWithEmailProps): Promise<UserCredential> => {
  const data = await createUserWithEmailAndPassword(auth, email, password);
  return data;
};

/**
 * 이메일 로그인 api입니다.
 *
 * @param email
 * @param password
 * @returns 회원 정보를 담은 데이터
 */
const signinWithEmailApi = async ({
  email,
  password,
}: SigninWithEmailProps): Promise<UserCredential> => {
  const data = await signInWithEmailAndPassword(auth, email, password);
  return data;
};

/**
 * 구글 로그인,회원가입 api입니다.
 *
 * @returns 회원 정보를 담은 데이터
 */
const signinWithGoogleApi = async (): Promise<UserCredential> => {
  const data = await signInWithPopup(auth, googleAuthProvider);
  return data;
};

export { signupWithEmailApi, signinWithEmailApi, signinWithGoogleApi };
