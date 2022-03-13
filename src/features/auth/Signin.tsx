import { FunctionComponent, ChangeEvent, useState, KeyboardEvent } from 'react';
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
import { Divider } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { IoIosCloseCircle } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import {
  useSigninWithEmail,
  useSigninWithGoogle,
} from 'features/auth/useAuthQuery';

const Signin: FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailWarning, setEmailWarning] = useState<string>('');
  const [passwordWarning, setPasswordWarning] = useState<string>('');
  const [signinWarning, setSigninWarning] = useState<string>('');
  const [googleWarning, setGoogleWarning] = useState<string>('');

  const { mutate: signinWithEmail, isLoading: isLoadingSigninWithEmail } =
    useSigninWithEmail();
  const {
    mutate: signinWithGoogleMutate,
    isLoading: isLoadingSigninWithGoogle,
  } = useSigninWithGoogle();

  const handleClickClear = (type: 'email' | 'password') => {
    if (type === 'email') {
      setEmail('');
      if (emailWarning !== '') setEmailWarning('');
    }
    if (type === 'password') {
      setPassword('');
      if (passwordWarning !== '') setPasswordWarning('');
    }
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailWarning !== '') setEmailWarning('');
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordWarning !== '') setPasswordWarning('');
  };

  /**
   * 이메일 로그인을 실행하는 함수입니다.
   */
  const handleSigninWithEmail = () => {
    if (email !== '' && password !== '') {
      signinWithEmail({
        email,
        password,
        setEmailWarning,
        setPasswordWarning,
        setSigninWarning,
      });
    }
  };

  /**
   * 구글 로그인을 실행하는 함수입니다.
   */
  const handleSigninWithGoogle = () => {
    signinWithGoogleMutate({ setGoogleWarning });
  };

  /**
   * 비밀번호 input의 키 입력을 감지하여 Enter 입력 시 이메일 로그인을 실행하는 함수입니다.
   */
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSigninWithEmail();
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
      {/* 소셜 로그인 */}
      <Box display="flex" flexDirection="column" color="black">
        <Button
          className="googleSigninButton"
          onClick={handleSigninWithGoogle}
          isLoading={isLoadingSigninWithGoogle}
          isFullWidth
          variant="outline"
          size="lg"
          fontSize="md"
          border="none"
          bg="highlight_light"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          sx={{
            '&.googleSigninButton': {
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            },
          }}
          leftIcon={<FcGoogle fontSize="19px" />}
        >
          구글 계정으로 로그인하기
        </Button>
        <Text fontSize="xs" color="error" textAlign="center" marginTop="5px">
          {googleWarning}
        </Text>
      </Box>
      <Divider margin="30px 0" />
      {/* 로그인 정보 입력 폼 */}
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
              focusBorderColor={'highlight'}
              onChange={handleChangePassword}
              value={password}
              onKeyPress={handleKeyPress}
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
      {/* 로그인 버튼 */}
      <Box display="flex" flexDirection="column" color="black">
        <Button
          className="signinButton"
          type="submit"
          isFullWidth
          onClick={handleSigninWithEmail}
          isLoading={isLoadingSigninWithEmail}
          variant="outline"
          bg="highlight"
          size="lg"
          color="primary"
          fontSize="md"
          fontWeight="bold"
          border="none"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          _hover={{ bg: 'highlight_dark' }}
        >
          로그인
        </Button>
        <Text
          fontSize="xs"
          color="error"
          textAlign="center"
          marginTop="5px"
          whiteSpace="pre-wrap"
        >
          {signinWarning}
        </Text>
      </Box>
      <Divider margin="30px 0" />
      {/* 회원가입 안내 */}
      <Center display="flex" flexDirection="column">
        <Text color="light_black">My Mandal-Art 계정이 없으신가요?</Text>
        <Link color="secondary" href="/auth/signup" fontWeight="bold">
          회원가입
        </Link>
      </Center>
    </Container>
  );
};

export default Signin;
