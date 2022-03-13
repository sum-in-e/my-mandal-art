import { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';

import { Board } from 'components/index';
import { boardState } from 'src/atoms/mandalArtAtom';
import { BoardTypes } from 'src/types/mandalArtType';

const NewMandalArt: FunctionComponent = () => {
  // 새 게시글의 경우 client 상태 관리 -> 저장 시 서버에 데이터 저장

  const boardValue = useRecoilValue<BoardTypes>(boardState);

  return <Board id={boardValue.id} blocks={boardValue.blocks} />;
};

export default NewMandalArt;
