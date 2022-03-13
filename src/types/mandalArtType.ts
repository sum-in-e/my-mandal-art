export interface BoardTypes {
  id: string;
  blocks: BlockTypes[];
}

export interface BlockTypes {
  id: IdTypes;
  spaces: SpaceTypes[];
}

export interface SpaceTypes {
  id: IdTypes;
  title: string;
  description?: string;
}

export type IdTypes =
  | '-1'
  | 'core'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8';

export const initialCoreBlock = {
  id: 'core' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialFirstBlock = {
  id: '1' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialSecondBlock = {
  id: '2' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialThirdBlock = {
  id: '3' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialFourthBlock = {
  id: '4' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialFifthBlock = {
  id: '5' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialSixthBlock = {
  id: '6' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialSeventhBlock = {
  id: '7' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialEightBlock = {
  id: '8' as IdTypes,
  spaces: [
    { id: '1' as IdTypes, title: '', description: '' },
    { id: '2' as IdTypes, title: '', description: '' },
    { id: '3' as IdTypes, title: '', description: '' },
    { id: '4' as IdTypes, title: '', description: '' },
    { id: 'core' as IdTypes, title: '', description: '' },
    { id: '5' as IdTypes, title: '', description: '' },
    { id: '6' as IdTypes, title: '', description: '' },
    { id: '7' as IdTypes, title: '', description: '' },
    { id: '8' as IdTypes, title: '', description: '' },
  ],
};

export const initialBoard = {
  id: '-1',
  blocks: [
    initialFirstBlock,
    initialSecondBlock,
    initialThirdBlock,
    initialFourthBlock,
    initialCoreBlock,
    initialFifthBlock,
    initialSixthBlock,
    initialSeventhBlock,
    initialEightBlock,
  ],
};
