import { ChangeEvent, FunctionComponent, useState } from 'react';
import { css } from '@emotion/react';
import _ from 'lodash';

import { colors } from 'src/styles/style';

const spanStyle = css`
  overflow: hidden;
  width: 100%;
  max-height: 100%;
  font-weight: 700;
  font-size: medium;
  text-align: center;
  outline: none;

  /* placeholder */
  &:empty:before {
    content: attr(placeholder);
    color: ${colors.grey};
    display: inline-block;
    text-align: center;
  }
`;

interface ContentEditableProps {
  value: string;
  onChange: (newValue: string) => void;
  isEditable: boolean;
  placeHolderText?: string;
}

const ContentEditable: FunctionComponent<ContentEditableProps> = ({
  value,
  onChange,
  placeHolderText,
  isEditable,
  ...restProps
}) => {
  const [initialValue] = useState(value);

  const handleChangeText = _.debounce((e: ChangeEvent<HTMLSpanElement>) => {
    const newValue = e.target.innerText;
    onChange(newValue);
  }, 100);

  return (
    <span
      css={spanStyle}
      contentEditable={isEditable}
      onInput={handleChangeText} // contenteditable이 설정된 요소의 입력에 의해 발생하는 이벤트
      dangerouslySetInnerHTML={{ __html: isEditable ? initialValue : value }} // isEditable에 따라 분기처리한 이유는 하단에
      placeholder={placeHolderText ?? ''}
      spellCheck={false} // 오타가 있을 경우 붉은색 언더라인 표시 여부
      {...restProps}
    ></span>
  );
};

export default ContentEditable;

// ❓ isEditable에 따라 분기처리한 이유
// 1. space의 value릂 useState에 넣어 initialValue로 사용하는데 (그렇게 안 하면 span에 text 입력 시 앞에서부터 입력되는 현상 발생해서) space의 상태 업데이트에 따라
// props로 전달 받는 value가 변함에도 불구하고 initialValue는 변하지 않아서 core block의 각 목표값이 normal block의 핵심 목표에 할당되지 않는 이슈가 있음
// 2. 편집 불가능하다 = normal block의 핵심 목표(core space)라는 의미이기 때문에 직접적으로 해당 칸의 상태를 업데이트할 일이 없어서 굳이 useState에 넣지 않아도 되었음.
// 3. 상태를 직접적으로 업데이트 하지 않으니 space에 text 입력 시 앞에서부터 입력되는 이슈는 발생하지 않을 거고, 굳이 useState에 넣을 필요도 없어서 props로 받은 value를 직접적으로 사용하기로 함.
