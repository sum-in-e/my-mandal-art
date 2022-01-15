import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
  colors: {
    primary: '#FFFFFF', // 70%
    secondary: '#7FD1AE', // 25%
    highlight: '#8083FF', // 5%
    error: '#f03e3e',
    black: '#3B3B3B',
    light_black: '#5E5E5E',
    grey: '#C6C6C6',
    light_grey_1: '#E0E0E0',
    light_grey_2: '#f0f0f0',
  },
  fonts: {
    heading: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
    body: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
  },
};

const theme = extendTheme(overrides);

export default theme;
