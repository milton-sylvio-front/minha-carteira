export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0;

export const formatNumberPage = (page: number) => page + 1;

export const clearFormatValue = (value: number) => {
  return Number(
    value.toString().replace('R$ ', '').replace('.', '').replace(',', '.')
  );
};
