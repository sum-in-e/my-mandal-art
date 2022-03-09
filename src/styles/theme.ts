import { extendTheme } from '@chakra-ui/react';
import { colors } from './style';

const overrides = {
  colors: {
    primary: colors.primary,
    primary_dark: colors.primary_dark,
    secondary: colors.secondary,
    secondary_dark: colors.secondary_dark,
    highlight: colors.highlight,
    highlight_dark: colors.highlight_dark,
    highlight_light: colors.highlight_light,
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
