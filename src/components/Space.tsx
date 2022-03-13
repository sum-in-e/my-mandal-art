import { FunctionComponent, useMemo } from 'react';
import { Box, CSSObject } from '@chakra-ui/react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import {
  BlockTypes,
  BoardTypes,
  IdTypes,
  SpaceTypes,
} from 'src/types/mandalArtType';
import { boardState } from 'src/atoms/mandalArtAtom';
import { ContentEditable } from 'components/index';

interface SpacePropTypes {
  className?: string;
  placeHolderText?: string;
  sx?: CSSObject;
  blockId: IdTypes;
  spaceId: IdTypes;
  space: SpaceTypes;
}

const Space: FunctionComponent<SpacePropTypes> = (props) => {
  const {
    blockId,
    spaceId,
    space,
    className,
    placeHolderText,
    sx,
    ...restProps
  } = props;

  const [board, setBoard] = useRecoilState<BoardTypes>(boardState);

  const handelChangeSpace = (newValue: string) => {
    const newBoard: BoardTypes = JSON.parse(JSON.stringify(board));

    const currentBlockIndex = newBoard.blocks.findIndex(
      (block) => block.id === blockId,
    );
    const currentSpaceIndex = newBoard.blocks[
      currentBlockIndex
    ].spaces.findIndex((space) => space.id === spaceId);

    // 1. core block의 normal space가 바뀌는 경우 -> normal block의 핵심 목표(core space)도 함께 업데이트
    if (blockId === 'core' && spaceId !== 'core') {
      const connectedBlockIndex = newBoard.blocks.findIndex(
        (block: BlockTypes) => block.id === spaceId,
      );
      const connectedCoreSpaceIndex = newBoard.blocks[
        connectedBlockIndex
      ].spaces.findIndex((space: SpaceTypes) => space.id === 'core');

      // core block의 normal space 값 업데이트
      newBoard.blocks[currentBlockIndex].spaces[currentSpaceIndex].title =
        newValue;

      // core block의 normal space와 같은 id를 가진 normal block의 core space 값 업데이트
      newBoard.blocks[connectedBlockIndex].spaces[
        connectedCoreSpaceIndex
      ].title = newValue;

      setBoard(newBoard);
    } else {
      // 2. core block의 core space가 바뀌거나 normal block의 normal space가 바뀌는 경우 -> 해당 space만 업데이트
      newBoard.blocks[currentBlockIndex].spaces[currentSpaceIndex].title =
        newValue;

      setBoard(newBoard);
    }
  };

  /**
   * @remarks block과 space별로 다른 배경색을 반환합니다.
   */
  const setBackgroungColor = useMemo(() => {
    let bgColor = 'primary';

    if (blockId === 'core') {
      // 핵심 block이면서 해당 block의 핵심 space인 경우 highlight
      if (spaceId === 'core') {
        bgColor = 'highlight';
      } else {
        // 핵심 block이지만 해당 block의 일반 space인 경우 highlight_light
        bgColor = 'highlight_light';
      }
    } else {
      if (spaceId === 'core') {
        // 일반 block이고 해당 block의 핵심 space인 경우 highlight_light
        bgColor = 'highlight_light';
      }
    }

    // 핵심 block도, 핵심 space도 아닌 경우에는 primary를 반환
    return bgColor;
  }, []);

  /**
   * @remarks 각 space의 값을 반환합니다. normal block의 core space의 경우 core block의 normal space의 값을 사용하기 때문에 이에 대한 분기 처리를 위해 사용합니다.
   */
  const setSpaceValue = useMemo(() => {
    let value = space.title;

    if (blockId !== 'core' && spaceId === 'core') {
      // core block에서 현재 blockId와 일치하는 spaceId를 가진 space의 값을 가져와야 함
      const coreBlockIndex = board.blocks.findIndex(
        (block) => block.id === 'core',
      );

      const currentBlockIndex = board.blocks.findIndex(
        (block) => block.id === blockId,
      );

      const newValue =
        board.blocks[coreBlockIndex].spaces[currentBlockIndex].title;

      value = newValue;
    }

    return value;
  }, [space]);

  return (
    <Box
      className={className}
      width="100px"
      height="100px"
      display="flex"
      alignItems="center"
      borderRadius="md"
      border="1px grey solid"
      backgroundColor={setBackgroungColor}
      color={blockId === 'core' && spaceId === 'core' ? 'primary' : 'black'}
      sx={sx}
    >
      <ContentEditable
        isEditable={blockId !== 'core' && spaceId === 'core' ? false : true} // ✅ normal block의 핵심 목표(core space)에서는 text 수정 되면 안 됨. core block의 normal space 값을 상속 받아야만 한다. (단방향으로만 업데이트.)
        value={setSpaceValue}
        onChange={handelChangeSpace}
        placeHolderText={placeHolderText}
        {...restProps}
      />
    </Box>
  );
};

export default Space;
