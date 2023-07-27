export const COLORS = {
  primary: "#35BB88",
  black: "#000000",
  darkGrey: "#262C39",
  grey: "#55586F",
  lightGrey: "#9094A3",
  white: "#F9FAFD",
  lightGray: "#F2F4FA",
  brightGray: "#EAECF2",
};

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const THEME = {
  light: {
    text: COLORS.darkGrey,
    background: COLORS.white,
    tint: COLORS.primary,
    tabIconDefault: COLORS.lightGrey,
    tabIconSelected: COLORS.primary,
  },
  dark: {
    text: COLORS.white,
    background: COLORS.darkGrey,
    tint: COLORS.primary,
    tabIconDefault: "#ccc",
    tabIconSelected: COLORS.primary,
  },
};

export default THEME;
