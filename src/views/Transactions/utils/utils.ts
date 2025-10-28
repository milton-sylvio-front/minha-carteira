export const clearFormatValue = (value: number) => {
  return Number(
    value.toString().replace('R$ ', '').replace('.', '').replace(',', '.')
  );
};
