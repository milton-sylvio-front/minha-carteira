import general from './general'

const mode = 'dark'

const backoundColor = general.colors.blue[2]
const textColor = general.colors.white

// COMPONENTES
const card = general.colors.blue[0]
const scrollbar = {
  thumb: general.colors.blue[0],
  track: general.colors.blue[1],
}
const dropdown = general.colors.blue[1]
const aside = general.colors.blue[1]
const header = general.colors.blue[1]
const input = {
  borderColor: general.colors.blue[0],
  bg: general.colors.blue[2],
  color: general.colors.white,
}

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
}

export default dark
