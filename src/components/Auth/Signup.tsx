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
  InputLeftElement,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Divider } from '@chakra-ui/react';

import { useSignupWithEmail, useSigninWithGoogle } from 'lib/auth/useAuthQuery';
import {
  EMAIL_REQUIERED_TEXT,
  EMAIL_RULE_GUIDANCE_TEXT,
  PW_REQUIERED_TEXT,
  PW_RULE_GUIDANCE_TEXT,
} from 'constants/auth';
import { IoIosCloseCircle } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

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

  const { mutate: signupWithEmail, isLoading: isLoadingSignupWithEmail } =
    useSignupWithEmail();
  const {
    mutate: signinWithGoogleMutate,
    isLoading: isLoadingSigninWithGoogle,
  } = useSigninWithGoogle();

  const handleClickClear = (type: 'email' | 'password') => {
    if (type === 'email') {
      setEmail('');
      setEmailWarning(EMAIL_REQUIERED_TEXT);
    }
    if (type === 'password') {
      setPassword('');
      setPasswordWarning(PW_REQUIERED_TEXT);
    }
  };

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
    <Container padding="50px 0" maxWidth="40ch">
      <Heading
        as="h2"
        fontSize="xxx-large"
        fontWeight="bold"
        color="black"
        marginBottom="40px"
        textAlign="center"
      >
        My Mandal-Art
      </Heading>
      {/* 소셜 회원가입 */}
      <Box display="flex" flexDirection="column" color="black">
        <Button
          size="lg"
          fontSize="md"
          className="googleSigninButton"
          onClick={handleSigninWithGoogle}
          isLoading={isLoadingSigninWithGoogle}
          leftIcon={<FcGoogle />}
          border="none"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          variant="outline"
          isFullWidth
          bg="highlight_lighter"
          sx={{
            '&.googleSigninButton': {
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            },
          }}
        >
          구글 계정으로 가입하기
        </Button>
        <Text fontSize="xs" color="error" textAlign="center" marginTop="5px">
          {googleWarning}
        </Text>
      </Box>
      <Divider margin="30px 0" />
      {/* 가입 정보 입력 폼 */}
      <Box marginBottom="40px">
        {/* Email */}
        <FormControl isRequired marginBottom="15px">
          <FormLabel id="1" htmlFor="email" marginBottom="1">
            이메일
          </FormLabel>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              color="grey"
              fontSize="20px"
              children={<AiOutlineUser />}
            />
            <Input
              id="email"
              placeholder="이메일을 입력하세요."
              focusBorderColor={'highlight'}
              onChange={handleChangeEmail}
              onClick={(e) => handleClickInput('email', e)}
              value={email}
              size="lg"
            />
            <InputRightElement
              onClick={() => handleClickClear('email')}
              children={
                email.length > 0 ? <IoIosCloseCircle cursor="pointer" /> : ''
              }
            />
          </InputGroup>
          <Text fontSize="xs" color="error" marginTop="5px">
            {emailWarning}
          </Text>
        </FormControl>
        {/* Password */}
        <FormControl isRequired>
          <FormLabel id="2" htmlFor="password" marginBottom="1">
            비밀번호
          </FormLabel>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              color="grey"
              fontSize="20px"
              children={<RiLockPasswordLine />}
            />
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={handleChangePassword}
              onClick={(e) => handleClickInput('password', e)}
              focusBorderColor={'highlight'}
              size="lg"
            />
            <InputRightElement
              children={
                password.length > 0 ? (
                  <IoIosCloseCircle
                    cursor="pointer"
                    onClick={() => handleClickClear('password')}
                  />
                ) : (
                  ''
                )
              }
            />
          </InputGroup>
          <Text fontSize="xs" color="error" marginTop="5px">
            {passwordWarning}
          </Text>
        </FormControl>
      </Box>
      {/* 회원가입 버튼 */}
      <Box display="flex" flexDirection="column" color="black">
        <Button
          size="lg"
          className="signupButton"
          onClick={handleSignupWithEmail}
          type="submit"
          variant="outline"
          color="primary"
          isFullWidth
          isLoading={isLoadingSignupWithEmail}
          border="none"
          bg="highlight"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          fontWeight="bold"
          fontSize="md"
          _hover={{ bg: 'highlight_darker' }}
        >
          계정 생성하기
        </Button>
        <Text fontSize="xs" color="error" textAlign="center" marginTop="5px">
          {signupWarning}
        </Text>
      </Box>
      <Divider margin="30px 0" />
      {/* 로그인 안내 */}
      <Center display="flex" flexDirection="column">
        <Text color="light_black">이미 계정이 있으신가요?</Text>
        <Link color="secondary" href="/auth/signin" fontWeight="bold">
          로그인
        </Link>
      </Center>
    </Container>
  );
};

export default Signup;
