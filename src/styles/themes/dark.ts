import general from './general';

const mode = 'dark';

const backoundColor = general.colors.blue.dark;
const textColor = general.colors.white;

// COMPONENTES
const card = general.colors.blue.light;
const scrollbar = {
  thumb: general.colors.blue.light,
  track: general.colors.blue.normal,
};
const dropdown = general.colors.blue.normal;
const aside = general.colors.blue.normal;
const header = general.colors.blue.normal;
const input = {
  borderColor: general.colors.blue.light,
  bg: general.colors.blue.dark,
  color: general.colors.white,
};

const dark = {
  general,
  mode,
  backoundColor,
  textColor,
  card,
  scrollbar,
  dropdown,
  aside,
  header,
  input,
};

export default dark;
