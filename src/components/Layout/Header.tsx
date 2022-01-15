import { Avatar, Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      paddingTop="4"
      paddingBottom="4"
    >
      <Heading as="h1" size="xl" fontWeight="extrabold">
        MY MANDAL-ART
      </Heading>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </Box>
  );
};

export default Header;
