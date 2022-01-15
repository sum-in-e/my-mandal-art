import { Dispatch, SetStateAction } from 'react';

export interface SignupWithEmailProps {
  email: string;
  password: string;
  setEmailWarning: Dispatch<SetStateAction<string>>;
  setPasswordWarning: Dispatch<SetStateAction<string>>;
  setSignupWarning: Dispatch<SetStateAction<string>>;
}

export interface SigninWithGoogleProps {
  setGoogleWarning: Dispatch<SetStateAction<string>>;
}
