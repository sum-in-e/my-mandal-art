import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
  colors: {
    primary: '#ffffff', // 70%
    primary_darker: '#EBEBEB', // 70%
    secondary: '#554516', // 25%
    secondary_darker: '#554516',
    highlight: '#0064FF', // 5%
    highlight_darker: '#0032ff', // 5%
    error: '#f03e3e',
    success: '#008A61',
    black: '#333333',
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
