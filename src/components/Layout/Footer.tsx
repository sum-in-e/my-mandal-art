import { Box, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="absolute"
      bottom="0"
      left="0"
      width="100%"
      height="150"
      paddingTop="4"
      paddingBottom="4"
      bg="black"
    >
      <Heading as="h2" size="xl" color="primary">
        Contact
      </Heading>
      <Text color="primary">E-mail: suminkim.me@gmail.com</Text>
      <Text color="primary">&copy; 2021 My Mandal Art</Text>
    </Box>
  );
};

export default Footer;
