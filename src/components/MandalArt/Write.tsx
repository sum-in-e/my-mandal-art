import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { FunctionComponent } from 'react';
import { Container } from '@chakra-ui/react';
import { auth } from 'src/firebaseClient';

const Write: FunctionComponent = () => {
  // 분기처리
  // 저장 했을 때 로그인 안한 경우에는 클라이언트에서 물고 있다가 회원가입 후 저장되게 해야하고
  // 저장 했을 때 로그인 되어있는 경우에는 저장 하면 됨
  return <Container>write 페이지</Container>;
};

export default Write;
