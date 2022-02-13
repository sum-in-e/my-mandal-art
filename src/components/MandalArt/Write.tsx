import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { FunctionComponent } from 'react';
import { Container } from '@chakra-ui/react';
import { auth } from 'src/firebaseClient';

const Write: FunctionComponent = () => {
  // 유저 로그인한거 접근해야함.
  // onAuthStateChanged를 이용해서 인증 상태 관찰자 설정 및 사용자 데이터 가져오는데
  // 리액트의 경우 이걸 useEffect에 하겠지만
  // next 프로젝트니까 get

  // console.log('currentUser', auth.currentUser);
  return <Container>write 페이지</Container>;
};

export default Write;
