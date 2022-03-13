import { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';

import { boardState } from 'src/atoms/mandalArtAtom';
import { BoardTypes } from 'src/types/mandalArtType';
import { NotFoundMandalArt } from 'features/mandalArt';
import { Board } from 'components/index';

const MandalArt: FunctionComponent = () => {
  // 새 게시글이 아닌 경우 id에 해당하는 board 데이터 있는지 판별 -> 있으면 server 상태 관리
  //TODO: 여기 아직 서버에 데이터 없어서 클라이언트 사이드로 임시 입력함. 추후 데이터 저장 되면 수정
  const boardValue = useRecoilValue<BoardTypes>(boardState);

  // TODO: id에 해당하는 데이터 서버에 없으면 BOARD 없음 컴포넌트 보여주게 분기처리
  const data = undefined;
  return data ? (
    <Board id={boardValue.id} blocks={boardValue.blocks} />
  ) : (
    <NotFoundMandalArt />
  );
};

export default MandalArt;
