import { FunctionComponent } from 'react';
import { Container, Grid } from '@chakra-ui/react';

import { Block } from 'components/index';
import { BoardTypes } from 'src/types/mandalArtType';

const MA: FunctionComponent<BoardTypes> = ({ id, blocks }) => {
  return (
    <Container display="flex" justifyContent="center" maxWidth="100%">
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        width={900}
        height={900}
        gap="2"
      >
        {blocks.map((block) => (
          <Block
            key={block.id}
            blockId={block.id}
            spaces={block.spaces}
            className={block.id === 'core' ? 'coreBlock' : 'block'}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default MA;
