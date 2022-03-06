import { extendTheme } from '@chakra-ui/react';
import { colors } from './style';

const overrides = {
  colors: {
    primary: colors.primary,
    primary_darker: colors.primary_darker,
    secondary: colors.secondary,
    secondary_darker: colors.secondary_darker,
    highlight: colors.highlight,
    highlight_darker: colors.highlight_darker,
    highlight_lighter: '#E9FEF4',
    error: colors.error,
    success: colors.success,
    black: colors.black,
    light_black: colors.light_black,
    grey: colors.grey,
    light_grey_1: colors.light_grey_1,
    light_grey_2: colors.light_grey_2,
  },
  fonts: {
    heading: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
    body: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`,
  },
};

const theme = extendTheme(overrides);

export default theme;
