const colors = {
  black: '#343A40',
  blue: ['#313862', '#252A48', '#1B1F38'],
  danger: '#DD427C',
  gray: ['#F5F6F8', '#E1E4E8', '#BFBFBF'],
  info: '#3867D6',
  primary: '#F64E60',
  secondary: '#8950FC',
  success: '#1BC5BD',
  warning: '#FFA800',
  white: '#FFF',
};

const bordersRadius = {
  small: '2px',
  normal: '4px',
  large: '8px',
  rounded: '50%',
};

const fontSizes = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '40px',
  '48px',
];

const fontWeights = {
  normal: 400,
  bold: 700,
};

const lineHeights = {
  condensedUltra: 1,
  condensed: 1.25,
  default: 1.5,
};

const space = [
  '0',
  '4px',
  '8px',
  '12px',
  '16px',
  '20px',
  '24px',
  '28px',
  '32px',
  '40px',
  '48px',
  '64px',
  '80px',
  '96px',
  '112px',
  '128px',
];

const animations = {
  spin: 'spin 1s linear infinite',
  ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  bounce: 'bounce 1s infinite',
};

const sizes = {
  large: '1012px',
  medium: '768px',
  small: '544px',
};

const general = {
  animations,
  colors,
  bordersRadius,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  sizes,
};

export default general;
export { colors };
