import { atom } from 'recoil';
import { BoardTypes, initialBoard } from 'src/types/mandalArtType';

const boardState = atom<BoardTypes>({
  key: 'boardState',
  default: initialBoard,
});

export { boardState };
