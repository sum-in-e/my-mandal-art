import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { FunctionComponent } from 'react';
import { Container } from '@chakra-ui/react';
import { auth } from 'src/firebaseClient';

const Profile: FunctionComponent = () => {
  return <Container>Profile 페이지</Container>;
};

export default Profile;
