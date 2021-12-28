import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#7FD1AE',
    highlight: '#8083FF',
    dark: '#3B3B3B',
  },
  fonts: {
    heading: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
    body: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
  },
};

const theme = extendTheme(overrides);

export default theme;
