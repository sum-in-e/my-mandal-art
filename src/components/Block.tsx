import { FunctionComponent } from 'react';
import { Grid } from '@chakra-ui/react';

import { SpaceTypes, IdTypes } from 'src/types/mandalArtType';
import { Space } from 'components/index';

interface PropTypes {
  className?: string;
  spaces: SpaceTypes[];
  blockId: IdTypes;
}

const Block: FunctionComponent<PropTypes> = ({
  className,
  spaces,
  blockId,
}) => {
  return (
    <Grid
      className={className}
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap="0.5"
    >
      {spaces.map((space) => (
        <Space
          key={space.id}
          blockId={blockId}
          spaceId={space.id}
          space={space}
          // 핵심 목표인 경우에만 className 추가
          className={space.id === 'core' ? 'coreSpace' : 'space'}
          // 핵심 목표인 경우에만 배경색과 글자색 다르게 적용
          placeHolderText={space.id}
        />
      ))}
    </Grid>
  );
};

export default Block;
