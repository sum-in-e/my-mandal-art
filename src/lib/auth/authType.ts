import { Dispatch, SetStateAction } from 'react';

interface SignEmailProps {
  email: string;
  password: string;
  setEmailWarning: Dispatch<SetStateAction<string>>;
  setPasswordWarning: Dispatch<SetStateAction<string>>;
}

export interface SignupWithEmailProps extends SignEmailProps {
  setSignupWarning: Dispatch<SetStateAction<string>>;
}

export interface SigninWithEmailProps extends SignEmailProps {
  setSigninWarning: Dispatch<SetStateAction<string>>;
}

export interface SigninWithGoogleProps {
  setGoogleWarning: Dispatch<SetStateAction<string>>;
}
