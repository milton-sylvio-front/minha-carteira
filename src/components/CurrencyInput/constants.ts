export const DEFAULT_MASK_OPTIONS = {
  prefix: 'R$ ',
  suffix: '00',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  requireDecimal: true,
  allowLeadingZeroes: true,
};
