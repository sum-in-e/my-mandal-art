import { Box, Container, Heading } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';
import { Header, Footer } from './index';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container
      maxW="1280px"
      minH="100vh"
      position="relative"
      padding="0"
      paddingBottom="150" // Footer 높이만큼 padding을 줘야 content가 Footer 영역을 침범하지 않습니다.
    >
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
