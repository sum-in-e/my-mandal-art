import { FunctionComponent, ChangeEvent, useState, MouseEvent } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Center,
  Link,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { Divider } from '@chakra-ui/react';

import { useSignupWithEmail, useSigninWithGoogle } from 'lib/auth/useAuthQuery';
import {
  EMAIL_REQUIERED_TEXT,
  EMAIL_RULE_GUIDANCE_TEXT,
  PW_REQUIERED_TEXT,
  PW_RULE_GUIDANCE_TEXT,
} from 'constants/auth';

const Signup: FunctionComponent = () => {
  const REG_EMAIL =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const REG_PASSWORD = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailWarning, setEmailWarning] = useState<string>('');
  const [passwordWarning, setPasswordWarning] = useState<string>('');
  const [signupWarning, setSignupWarning] = useState<string>('');
  const [googleWarning, setGoogleWarning] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const { mutate: signupWithEmail, isLoading: isLoadingSignupWithEmail } =
    useSignupWithEmail();
  const {
    mutate: signinWithGoogleMutate,
    isLoading: isLoadingSigninWithGoogle,
  } = useSigninWithGoogle();

  const handleShowPassword = () => setIsShowPassword((prev) => !prev);

  const handleSetPasswordWarning = (value: string) => {
    if (value === '') setPasswordWarning(PW_REQUIERED_TEXT);
    if (value.length > 0 && !REG_PASSWORD.test(value))
      setPasswordWarning(PW_RULE_GUIDANCE_TEXT);
    if (value.length > 0 && REG_PASSWORD.test(value)) setPasswordWarning('');
  };

  const handleSetEmailWarning = (value: string) => {
    if (value === '') setEmailWarning(EMAIL_REQUIERED_TEXT);
    if (value.length > 0 && !REG_EMAIL.test(value))
      setEmailWarning(EMAIL_RULE_GUIDANCE_TEXT);
    if (value.length > 0 && REG_EMAIL.test(value)) setEmailWarning('');
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    handleSetEmailWarning(value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    handleSetPasswordWarning(value);
  };

  const handleClickInput = (
    type: 'email' | 'password',
    e: MouseEvent<HTMLInputElement>,
  ) => {
    const value = (e.target as HTMLInputElement).value;

    if (type === 'email') handleSetEmailWarning(value);
    if (type === 'password') handleSetPasswordWarning(value);
  };

  /**
   * 이메일 회원가입을 실행하는 함수입니다.
   */
  const handleSignupWithEmail = () => {
    if (emailWarning === '' && passwordWarning == '') {
      signupWithEmail({
        email,
        password,
        setEmailWarning,
        setPasswordWarning,
        setSignupWarning,
      });
    }
  };

  /**
   * 구글 로그인을 실행하는 함수입니다.
   */
  const handleSigninWithGoogle = () => {
    signinWithGoogleMutate({ setGoogleWarning });
  };

  return (
    <Container>
      <Heading
        as="h2"
        fontSize="x-large"
        fontWeight="bold"
        color="black"
        marginBottom="30px"
        textAlign="center"
      >
        Sign up
      </Heading>
      {/* 소셜 회원가입 */}
      <Box display="flex" flexDirection="column" color="black">
        <Button
          className="googleSigninButton"
          onClick={handleSigninWithGoogle}
          isLoading={isLoadingSigninWithGoogle}
          leftIcon={<BsGoogle />}
          border="none"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          variant="outline"
          isFullWidth
          bg="primary"
          _hover={{ bg: 'light_grey_2' }}
          sx={{
            '&.googleSigninButton': {
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            },
          }}
        >
          Sign up with Google
        </Button>
        <Text fontSize="xs" color="error" textAlign="center" marginTop="5px">
          {googleWarning}
        </Text>
      </Box>
      <Divider margin="30px 0" />
      {/* 가입 정보 입력 폼 */}
      <Box marginBottom="50px">
        {/* Email */}
        <FormControl isRequired marginBottom="15px">
          <FormLabel id="1" htmlFor="email">
            Email
          </FormLabel>
          <Input
            id="email"
            placeholder="Enter email"
            focusBorderColor={'secondary'}
            onChange={handleChangeEmail}
            onClick={(e) => handleClickInput('email', e)}
          />
          <Text fontSize="xs" color="error" marginTop="5px">
            {emailWarning}
          </Text>
        </FormControl>
        {/* Password */}
        <FormControl isRequired>
          <FormLabel id="2" htmlFor="password">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              id="password"
              pr="4.5rem"
              type={isShowPassword ? 'text' : 'password'}
              placeholder="Enter password"
              focusBorderColor={'secondary'}
              onChange={handleChangePassword}
              onClick={(e) => handleClickInput('password', e)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                {isShowPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text fontSize="xs" color="error" marginTop="5px">
            {passwordWarning}
          </Text>
        </FormControl>
      </Box>
      {/* 회원가입 버튼 */}
      <Box display="flex" flexDirection="column" color="black">
        <Button
          className="signupButton"
          onClick={handleSignupWithEmail}
          type="submit"
          variant="outline"
          color="primary"
          isFullWidth
          isLoading={isLoadingSignupWithEmail}
          border="none"
          bg="secondary"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          sx={{
            '&.signupButton:hover': {
              background: 'secondary',
            },
          }}
        >
          Sign up
        </Button>
        <Text fontSize="xs" color="error" textAlign="center" marginTop="5px">
          {signupWarning}
        </Text>
      </Box>
      <Divider margin="30px 0" />
      {/* Sign in 안내 */}
      <Center display="flex" flexDirection="column">
        <Text color="light_black">Already have an account?</Text>
        <Link color="highlight" href="/auth/signin" fontWeight="bold">
          Sign in
        </Link>
      </Center>
    </Container>
  );
};

export default Signup;
