import general from './general';

const mode = 'dark';

const backoundColor = general.colors.blue.normal;
const backoundColorLight = general.colors.blue.light;
const backoundColorDark = general.colors.blue.dark;
const textColor = general.colors.white;
const borderColor = backoundColorLight;

// COMPONENTES
const card = backoundColorLight;
const scrollbar = {
  thumb: backoundColorLight,
  track: backoundColor,
};
const dropdown = backoundColor;
const aside = backoundColorLight;
const header = backoundColor;
const input = {
  borderColor: backoundColorLight,
  bg: backoundColorDark,
  color: general.colors.white,
};

const dark = {
  aside,
  backoundColor,
  backoundColorLight,
  backoundColorDark,
  borderColor,
  card,
  dropdown,
  general,
  header,
  input,
  mode,
  scrollbar,
  textColor,
};

export default dark;
