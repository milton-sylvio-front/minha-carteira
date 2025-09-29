import general from './general';

const mode = 'ligth';

const backoundColor = general.colors.gray.light;
const textColor = general.colors.black;
const borderColor = general.colors.gray.normal;

// COMPONENTES
const card = general.colors.white;
const scrollbar = {
  thumb: general.colors.white,
  track: general.colors.gray.normal,
};
const dropdown = general.colors.white;
const aside = general.colors.white;
const header = general.colors.white;
const input = {
  bg: general.colors.white,
  borderColor: general.colors.gray.normal,
  color: general.colors.black,
};

const light = {
  aside,
  backoundColor,
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

export default light;
